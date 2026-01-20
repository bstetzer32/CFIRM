import { Resend } from "resend";
import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, trainingGoal, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Save lead to Firebase Firestore
    const leadData = {
      name,
      email,
      phone: phone || "",
      trainingGoal: trainingGoal || "",
      message: message || "",
      createdAt: serverTimestamp(),
      source: "website",
      status: "new",
    };

    await addDoc(collection(db, "leads"), leadData);

    // Send confirmation email via Resend (only if API key is configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      
      const trainingGoalText = trainingGoal ? getTrainingGoalLabel(trainingGoal) : "flight training";
      
      const welcomeHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af;">Thank You for Your Interest in Flight Training, ${name}!</h1>
          <p>We've received your inquiry about ${trainingGoalText} and are excited to help you start your aviation journey.</p>
          <p>Here's what happens next:</p>
          <ul>
            <li>We'll review your request and match you with qualified flight instructors in your area</li>
            <li>An instructor will reach out to you within 24-48 hours</li>
            <li>You can discuss your goals, schedule, and any questions you have</li>
          </ul>
          <p>In the meantime, check out our <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://cfirm.com'}/articles">flight training articles</a> to learn more about what to expect.</p>
          <p>Blue skies ahead,<br>The CFIRM Team</p>
        </div>
      `;
      
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Your Flight Training Journey Starts Here - CFIRM",
        html: welcomeHtml,
      });

      // Send notification to admin (optional)
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail) {
        const adminHtml = `
          <div style="font-family: Arial, sans-serif;">
            <h2>New Student Lead from CFIRM Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Training Goal:</strong> ${trainingGoal ? getTrainingGoalLabel(trainingGoal) : "Not specified"}</p>
            <p><strong>Message:</strong> ${message || "No message provided"}</p>
          </div>
        `;
        
        await resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: "New Student Lead - CFIRM Website",
          html: adminHtml,
        });
      }
    }

    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error capturing lead:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

function getTrainingGoalLabel(goal: string): string {
  const labels: Record<string, string> = {
    discovery: "Discovery Flight",
    private: "Private Pilot License",
    instrument: "Instrument Rating",
    commercial: "Commercial Pilot License",
    multi: "Multi-Engine Rating",
    cfi: "Flight Instructor (CFI) Training",
    bfr: "Flight Review / BFR",
    other: "Flight Training",
  };
  return labels[goal] || "Flight Training";
}
