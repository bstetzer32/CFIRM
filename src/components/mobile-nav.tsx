"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-16 z-50 bg-background backdrop-blur-none animate-in fade-in slide-in-from-top-2 duration-200"
          onClick={() => setIsOpen(false)}
        >
          <nav className="container mx-auto px-4 py-6 bg-background">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-4 text-lg font-medium rounded-xl transition-colors hover:bg-primary/10 hover:text-primary active:bg-primary/20"
              >
                Flight School Home
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
              <Link
                href="/articles"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-4 text-lg font-medium rounded-xl transition-colors hover:bg-primary/10 hover:text-primary active:bg-primary/20"
              >
                Flight Training Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
              <div className="pt-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 text-lg font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 transition-colors shadow-lg"
                >
                  Contact Your CFI
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
