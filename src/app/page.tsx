import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { ArticleCard } from "@/components/article-card";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const recentArticles = getAllArticles().slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-32">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80"
            alt="Single engine Cessna propeller airplane in flight"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Cincinnati
                <span className="text-primary"> Flight School</span>
                <br />& CFI Training
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
                Looking for a <Link href="/articles/choosing-a-flight-instructor" className="text-foreground hover:text-primary transition-colors">certified flight instructor</Link> in Cincinnati? I&apos;m Connor McNulty, an FAA-certified CFI offering personalized flight school instruction. Whether you want to <Link href="/articles/how-to-get-a-pilots-license" className="text-foreground hover:text-primary transition-colors">earn your pilot&apos;s license</Link>, complete <Link href="/articles/cincinnati-flight-training-guide" className="text-foreground hover:text-primary transition-colors">flight training in Cincinnati</Link>, or book a{" "}
                <Link href="/articles/discovery-flight-guide" className="text-foreground hover:text-primary transition-colors">discovery flight</Link>, my flight school program will help you reach your <Link href="/articles/instrument-rating-guide" className="text-foreground hover:text-primary transition-colors">aviation goals</Link>.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-2">
                <Button size="lg" asChild className="w-full sm:w-auto text-base py-6 sm:py-4">
                  <Link href="#contact">Book Flight Lesson</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-base py-6 sm:py-4">
                  <Link href="/articles">Flight School Guide</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/30 to-accent/20 blur-3xl animate-pulse" />
              <Card className="border-primary/20 shadow-xl shadow-primary/10 backdrop-blur-sm bg-card/95">
                <CardHeader className="text-center px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl">Contact Your CFI</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Connect with a certified flight instructor to discuss your flight school goals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <LeadCaptureForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training Offerings Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              Flight School Programs
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Comprehensive flight training programs from your certified flight instructor, tailored to your aviation goals.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.98] md:hover:-translate-y-1 border-border/50 hover:border-primary/30">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80"
                  alt="White single engine propeller aircraft on runway"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300"><Link href="/articles/private-pilot-license-requirements">Private Pilot License</Link></CardTitle>
                <CardDescription>
                  Begin your <Link href="/articles/what-to-expect-first-flying-lesson" className="hover:text-primary transition-colors">aviation journey</Link> with comprehensive <Link href="/articles/how-to-get-a-pilots-license" className="hover:text-primary transition-colors">Private Pilot training</Link>. 
                  Learn to fly single-engine aircraft safely and confidently.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/30">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80"
                  alt="Small aircraft cockpit with flight instruments and yoke"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300"><Link href="/articles/instrument-rating-guide">Instrument Rating</Link></CardTitle>
                <CardDescription>
                  Your certified flight instructor will expand your capabilities with <Link href="/articles/instrument-rating-guide" className="hover:text-primary transition-colors">instrument flight training</Link>. Learn to fly safely in clouds and low visibility conditions at our flight school.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/30">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559628233-100c798642d4?w=600&q=80"
                  alt="Small propeller airplane flying in clear blue sky"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300"><Link href="/articles/commercial-pilot-license-guide">Commercial Pilot License</Link></CardTitle>
                <CardDescription>
                  Turn your passion into a <Link href="/articles/commercial-pilot-license-guide" className="hover:text-primary transition-colors">career in aviation</Link>. Our flight school&apos;s commercial pilot training prepares you to fly professionally with CFI guidance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300"><Link href="/articles/discovery-flight-guide">Discovery Flights</Link></CardTitle>
                <CardDescription>
                  Not sure if flight school is for you? Experience the thrill of flight with your certified flight instructor in an{" "}
                  <Link href="/articles/what-to-expect-first-flying-lesson" className="hover:text-primary transition-colors">introductory flight lesson</Link>. You&apos;ll fly the aircraft yourself!
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300"><Link href="/articles/biennial-flight-review-guide">Flight Reviews (BFR)</Link></CardTitle>
                <CardDescription>
                  Stay current with your CFI through <Link href="/articles/biennial-flight-review-guide" className="hover:text-primary transition-colors">biennial flight reviews</Link> and <Link href="/articles/instrument-rating-guide" className="hover:text-primary transition-colors">instrument proficiency checks</Link>. Our flight school keeps you flying safely.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">Custom Flight Training</CardTitle>
                <CardDescription>
                  Need specialized flight school instruction? Your CFI offers <Link href="/articles/night-flying-training" className="hover:text-primary transition-colors">night flying</Link>, complex/high-performance endorsements, or <Link href="/articles/cross-country-flight-training" className="hover:text-primary transition-colors">cross-country flight training</Link>.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Train With Me Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why Choose This Flight School?
              </h2>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="font-semibold">FAA Certified Flight Instructor</strong>
                    <p className="text-muted-foreground">Your CFI is FAA-certified with a proven track record helping flight school students <Link href="/articles/checkride-preparation-guide" className="hover:text-primary transition-colors">pass their checkrides</Link>.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="font-semibold">Personalized Flight School Instruction</strong>
                    <p className="text-muted-foreground">One-on-one CFI training tailored to your learning style—whether you prefer <Link href="/articles/ground-school-guide" className="hover:text-primary transition-colors">ground school</Link> focus or hands-on flight lessons.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="font-semibold">Flexible Flight Lesson Scheduling</strong>
                    <p className="text-muted-foreground">Morning, evening, and weekend flight training availability including <Link href="/articles/night-flying-training" className="hover:text-primary transition-colors">night flying instruction</Link> to fit your busy life.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong className="font-semibold">Safety-Focused Flight Training</strong>
                    <p className="text-muted-foreground">Our flight school emphasizes <Link href="/articles/aviation-weather-basics" className="hover:text-primary transition-colors">weather awareness</Link> and sound aeronautical decision-making from your first lesson.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                  alt="View from inside small aircraft cockpit with instruments"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-primary/5">
                  <div className="text-4xl font-bold text-primary">40-60</div>
                  <div className="text-sm text-muted-foreground mt-1">Flight Hours to PPL</div>
                </Card>
                <Card className="text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-primary/5">
                  <div className="text-4xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground mt-1">Checkride Pass Rate</div>
                </Card>
                <Card className="text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-primary/5">
                  <div className="text-4xl font-bold text-primary">7 Days</div>
                  <div className="text-sm text-muted-foreground mt-1">CFI Availability</div>
                </Card>
                <Card className="text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-primary/5">
                  <div className="text-4xl font-bold text-primary">5★</div>
                  <div className="text-sm text-muted-foreground mt-1">Student Reviews</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Flight School Resources
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Helpful CFI guides covering <Link href="/articles/how-to-get-a-pilots-license" className="hover:text-primary transition-colors">how to get your pilot license</Link>, <Link href="/articles/flight-training-cost-breakdown" className="hover:text-primary transition-colors">flight school costs</Link>, <Link href="/articles/checkride-preparation-guide" className="hover:text-primary transition-colors">checkride preparation</Link>, and more.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/articles">View All Articles</Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center mb-12">
              Flight School FAQs
            </h2>
            <div className="space-y-4">
              <Card className="transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/30 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">?</span>
                    <Link href="/articles/flight-training-cost-breakdown">How much does flight school cost?</Link>
                  </CardTitle>
                  <CardDescription className="text-base pl-11">
                    The <Link href="/articles/flight-training-cost-breakdown" className="hover:text-primary transition-colors">total flight school cost for a Private Pilot License</Link> typically ranges from $10,000 to $15,000, 
                    depending on how quickly you progress. This includes <Link href="/articles/flying-club-benefits" className="hover:text-primary transition-colors">aircraft rental</Link>, certified flight instructor fees, 
                    <Link href="/articles/ground-school-guide" className="hover:text-primary transition-colors">ground school</Link>, and <Link href="/articles/checkride-preparation-guide" className="hover:text-primary transition-colors">checkride fees</Link>. Your CFI will provide a detailed cost estimate during 
                    our initial consultation.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/30 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">?</span>
                    <Link href="/articles/how-to-get-a-pilots-license">How long does flight school take?</Link>
                  </CardTitle>
                  <CardDescription className="text-base pl-11">
                    Most flight school students complete their <Link href="/articles/private-pilot-license-requirements" className="hover:text-primary transition-colors">Private Pilot License</Link> in 3-6 months with a certified flight instructor, flying 2-3 times 
                    per week. The <Link href="/articles/private-pilot-license-requirements" className="hover:text-primary transition-colors">FAA requires a minimum of 40 flight hours</Link>, but the national average is 
                    60-70 hours. Flying more frequently with your CFI helps you progress faster toward your <Link href="/articles/solo-flight-guide" className="hover:text-primary transition-colors">first solo flight</Link>.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/30 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">?</span>
                    What do I need to start flight school?
                  </CardTitle>
                  <CardDescription className="text-base pl-11">
                    To begin flight training, you just need to be motivated to learn! You&apos;ll need to obtain a{" "}
                    <Link href="/articles/student-pilot-certificate" className="text-foreground hover:text-primary transition-colors">Student Pilot Certificate</Link> and{" "}
                    <Link href="/articles/medical-certificate-requirements" className="text-foreground hover:text-primary transition-colors">FAA medical certificate</Link>, which your certified flight instructor will help you with. 
                    There are no prerequisites—we&apos;ll start from the very beginning with{" "}
                    <Link href="/articles/ground-school-guide" className="text-foreground hover:text-primary transition-colors">ground school fundamentals</Link>.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/30 group">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">?</span>
                    Can I try a flight lesson before committing to flight school?
                  </CardTitle>
                  <CardDescription className="text-base pl-11">
                    Absolutely! Our flight school offers{" "}
                    <Link href="/articles/discovery-flight-experience" className="text-foreground hover:text-primary transition-colors">discovery flights</Link> that let you experience flying firsthand with a certified flight instructor. 
                    You&apos;ll actually fly the aircraft with CFI guidance. It&apos;s a great way to see 
                    if <Link href="/articles/flight-training-costs" className="text-foreground hover:text-primary transition-colors">flight training</Link> is right for you before committing to full flight school.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Start Flight School?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact your certified flight instructor today to schedule a{" "}
              <Link href="/articles/discovery-flight-experience" className="text-foreground hover:text-primary transition-colors">discovery flight</Link> or discuss your{" "}
              <Link href="/articles/aviation-career-paths" className="text-foreground hover:text-primary transition-colors">aviation career goals</Link>. 
              Whether you&apos;re pursuing a{" "}
              <Link href="/articles/private-pilot-license-requirements" className="text-foreground hover:text-primary transition-colors">private pilot license</Link>,{" "}
              <Link href="/articles/instrument-rating-guide" className="text-foreground hover:text-primary transition-colors">instrument rating</Link>, or{" "}
              <Link href="/articles/commercial-pilot-license-guide" className="text-foreground hover:text-primary transition-colors">commercial pilot certificate</Link>, 
              this flight school will help you achieve your dream of becoming a pilot.
            </p>
            <div className="mt-8 mx-auto max-w-md relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/10 blur-2xl" />
              <Card className="border-primary/20 shadow-xl shadow-primary/10">
                <CardContent className="pt-6">
                  <LeadCaptureForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
