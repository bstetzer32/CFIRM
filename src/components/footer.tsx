import Link from "next/link";
import { getSiteConfig } from "@/lib/schema";

export function Footer() {
  const config = getSiteConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
              <span className="text-xl font-bold">{config.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional flight training in Cincinnati, Ohio from an experienced Certified Flight Instructor.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Flight Training</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles/how-to-get-a-pilots-license" className="text-muted-foreground hover:text-primary">
                  How to Get a Pilot&apos;s License
                </Link>
              </li>
              <li>
                <Link href="/articles/flight-training-cost-breakdown" className="text-muted-foreground hover:text-primary">
                  Flight Training Costs
                </Link>
              </li>
              <li>
                <Link href="/articles/cincinnati-flight-training-guide" className="text-muted-foreground hover:text-primary">
                  Cincinnati Flight Training
                </Link>
              </li>
              <li>
                <Link href="/articles/what-to-expect-first-flying-lesson" className="text-muted-foreground hover:text-primary">
                  Your First Flying Lesson
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Training Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary">
                  Private Pilot License
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary">
                  Instrument Rating
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary">
                  Commercial Pilot License
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary">
                  Discovery Flights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Location</h3>
            <p className="text-sm text-muted-foreground">{config.region}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Contact me to discuss training locations and scheduling.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {config.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
