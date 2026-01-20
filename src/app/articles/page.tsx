import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { getAllArticles, getCategories } from "@/lib/articles";
import { getSiteConfig, generateBreadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Flight School Resources - Learn to Fly with a Certified Flight Instructor",
  description: "Complete flight school guide to learning to fly. Your CFI provides information about pilot training costs, flight school requirements, flight lessons, and how to get your pilot's license in Cincinnati.",
  keywords: ["flight school", "certified flight instructor", "CFI", "learn to fly", "flight training guide", "pilot training", "how to become a pilot", "pilot license requirements", "flight lessons", "Cincinnati flight school"],
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = getCategories();
  const siteConfig = getSiteConfig();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Articles", url: `${siteConfig.url}/articles` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Flight School Training Articles
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive flight school resource for{" "}
            <Link href="/articles/how-to-get-a-pilots-license" className="text-foreground hover:text-primary transition-colors">learning to fly</Link> with a certified flight instructor. Whether you&apos;re 
            researching <Link href="/articles/private-pilot-license-requirements" className="text-foreground hover:text-primary transition-colors">private pilot requirements</Link>,{" "}
            <Link href="/articles/flight-training-cost-breakdown" className="text-foreground hover:text-primary transition-colors">flight training school costs</Link>, or preparing for your{" "}
            <Link href="/articles/checkride-preparation-guide" className="text-foreground hover:text-primary transition-colors">checkride</Link>, you&apos;ll find expert CFI guidance here.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From your <Link href="/articles/discovery-flight-guide" className="text-foreground hover:text-primary transition-colors">first discovery flight</Link> to{" "}
            <Link href="/articles/instrument-rating-guide" className="text-foreground hover:text-primary transition-colors">instrument rating training</Link> and{" "}
            <Link href="/articles/commercial-pilot-license-guide" className="text-foreground hover:text-primary transition-colors">commercial pilot certification</Link>, these flight school articles cover 
            every step of your <Link href="/articles/aviation-career-paths" className="text-foreground hover:text-primary transition-colors">aviation journey</Link>. Learn from your certified flight instructor about{" "}
            <Link href="/articles/medical-certificate-requirements" className="text-foreground hover:text-primary transition-colors">medical certificates</Link>,{" "}
            <Link href="/articles/student-pilot-certificate" className="text-foreground hover:text-primary transition-colors">student pilot certificates</Link>,{" "}
            <Link href="/articles/solo-flight-guide" className="text-foreground hover:text-primary transition-colors">solo flight requirements</Link>, and{" "}
            <Link href="/articles/ground-school-guide" className="text-foreground hover:text-primary transition-colors">ground school essentials</Link>.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button variant="outline" asChild>
            <Link href="/articles">All</Link>
          </Button>
          {categories.map((category) => (
            <Button key={category} variant="outline" asChild>
              <Link href={`/articles?category=${encodeURIComponent(category)}`}>
                {category}
              </Link>
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found.</p>
          </div>
        )}

        {/* SEO Content Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Start Your Flight Training Journey in Cincinnati</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
            <p className="mb-4">
              Learning to fly is one of the most rewarding experiences you can pursue. Our{" "}
              <Link href="/articles/cincinnati-flight-training-guide" className="text-foreground hover:text-primary transition-colors">Cincinnati flight training</Link> program offers 
              personalized instruction from an experienced{" "}
              <Link href="/articles/choosing-a-flight-instructor" className="text-foreground hover:text-primary transition-colors">certified flight instructor</Link>. Whether you&apos;re 
              interested in flying for fun, travel, or pursuing an{" "}
              <Link href="/articles/aviation-career-paths" className="text-foreground hover:text-primary transition-colors">aviation career</Link>, we have the training program for you in the Greater Cincinnati area.
            </p>
            <p className="mb-4">
              New to aviation? Start with a{" "}
              <Link href="/articles/discovery-flight-guide" className="text-foreground hover:text-primary transition-colors">discovery flight</Link> to experience the joy of flying firsthand over Cincinnati. 
              Then work toward your <Link href="/articles/private-pilot-license-requirements" className="text-foreground hover:text-primary transition-colors">private pilot license</Link> through our 
              structured training program. Along the way, you&apos;ll learn about{" "}
              <Link href="/articles/aviation-weather-basics" className="text-foreground hover:text-primary transition-colors">aviation weather</Link>,{" "}
              <Link href="/articles/cross-country-flight-training" className="text-foreground hover:text-primary transition-colors">cross-country navigation</Link>, and{" "}
              <Link href="/articles/night-flying-training" className="text-foreground hover:text-primary transition-colors">night flying</Link>.
            </p>
            <p className="mb-4">
              Already a pilot? Keep your skills sharp with a{" "}
              <Link href="/articles/biennial-flight-review-guide" className="text-foreground hover:text-primary transition-colors">biennial flight review</Link>, or advance your 
              certificates with <Link href="/articles/instrument-rating-guide" className="text-foreground hover:text-primary transition-colors">instrument rating training</Link>. 
              Our <Link href="/articles/commercial-pilot-license-guide" className="text-foreground hover:text-primary transition-colors">commercial pilot program</Link> prepares you 
              for a <Link href="/articles/aviation-career-paths" className="text-foreground hover:text-primary transition-colors">career in aviation</Link>.
            </p>
            <p>
              Ready to get started? <Link href="/#contact" className="text-foreground hover:text-primary transition-colors font-semibold">Contact us</Link> to schedule your{" "}
              <Link href="/articles/what-to-expect-first-flying-lesson" className="text-foreground hover:text-primary transition-colors">first flying lesson</Link> in Cincinnati or ask questions about{" "}
              <Link href="/articles/flight-training-cost-breakdown" className="text-foreground hover:text-primary transition-colors">training costs</Link> and{" "}
              <Link href="/articles/flying-club-benefits" className="text-foreground hover:text-primary transition-colors">flying club options</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
