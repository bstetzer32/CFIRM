import Link from "next/link";
import { getSiteConfig } from "@/lib/schema";

export function Header() {
  const config = getSiteConfig();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="rounded-lg bg-primary/10 p-1.5 group-hover:bg-primary transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          </div>
          <span className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{config.name}</span>
        </Link>
        <nav className="flex items-center space-x-1">
          <Link
            href="/"
            className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-primary hover:bg-primary/10"
          >
            Home
          </Link>
          <Link
            href="/articles"
            className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-primary hover:bg-primary/10"
          >
            Resources
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
