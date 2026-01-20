import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  getSiteConfig, 
  generateOrganizationSchema, 
  generateWebsiteSchema, 
  generateServiceSchema, 
  generateFAQSchema,
  generatePersonSchema,
  generateEducationalOrganizationSchema,
  generateCourseSchemas
} from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = getSiteConfig();

// Viewport configuration for iPhone 12+ optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0284c7" },
    { media: "(prefers-color-scheme: dark)", color: "#0ea5e9" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `Cincinnati Flight School | Certified Flight Instructor | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Cincinnati flight school with FAA certified flight instructor (CFI). Professional flight training, private pilot license, instrument rating, commercial pilot training, discovery flights, and flight lessons in Greater Cincinnati, Ohio.",
  keywords: [
    "flight school Cincinnati",
    "flight school Cincinnati OH",
    "Cincinnati flight school",
    "flight school near me",
    "certified flight instructor Cincinnati",
    "CFI Cincinnati",
    "certified flight instructor near me",
    "CFI near me",
    "flight training Cincinnati",
    "flight lessons Cincinnati",
    "learn to fly Cincinnati",
    "pilot training Cincinnati Ohio",
    "private pilot license Cincinnati",
    "discovery flight Cincinnati",
    "instrument rating Cincinnati",
    "commercial pilot license Ohio",
    "flight school",
    "flight training",
    "flight lessons",
    "certified flight instructor",
    "CFI",
    "flight instructor",
    "learn to fly",
    "pilot training",
    "private pilot license",
    "how to become a pilot",
    "aviation training",
    "pilot license cost",
    "flight school cost",
    "discovery flight",
    "introductory flight lesson",
    "instrument rating",
    "commercial pilot license",
    "ground school",
    "checkride preparation",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `Flight Training Cincinnati OH | ${siteConfig.name}`,
    description: "Professional flight training in Cincinnati, Ohio from an experienced Certified Flight Instructor. Start your pilot journey today.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Professional Flight Training | ${siteConfig.name}`,
    description: "Professional flight training from an experienced Certified Flight Instructor.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const serviceSchema = generateServiceSchema();
  const faqSchema = generateFAQSchema();
  const personSchema = generatePersonSchema();
  const educationalOrgSchema = generateEducationalOrganizationSchema();
  const courseSchemas = generateCourseSchemas();

  return (
    <html lang="en">
      <head>
        {/* Organization/Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Person Schema for CFI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        {/* Educational Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(educationalOrgSchema),
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        {/* Course Schemas for each training program */}
        {courseSchemas.map((schema, index) => (
          <script
            key={`course-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
