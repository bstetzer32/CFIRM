import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getAllArticles, getRelatedArticles } from "@/lib/articles";
import { getSiteConfig, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { ArticleCard } from "@/components/article-card";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const siteConfig = getSiteConfig();

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
      url: `${siteConfig.url}/articles/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const siteConfig = getSiteConfig();
  const articleSchema = generateArticleSchema(article);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Articles", url: `${siteConfig.url}/articles` },
    { name: article.title, url: `${siteConfig.url}/articles/${article.slug}` },
  ]);
  
  const relatedArticles = getRelatedArticles(slug, 6);

  // Simple markdown-like rendering (convert headers and paragraphs)
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ").trim();
        if (text) {
          elements.push(
            <p key={elements.length} className="mb-4 text-muted-foreground leading-relaxed">
              {text}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="mb-4 ml-6 list-disc space-y-2">
            {listItems.map((item, i) => (
              <li key={i} className="text-muted-foreground">{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith("# ")) {
        flushParagraph();
        flushList();
        // Skip h1 as we show the title separately
      } else if (trimmedLine.startsWith("## ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h2 key={elements.length} className="text-2xl font-bold mt-8 mb-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      } else if (trimmedLine.startsWith("### ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={elements.length} className="text-xl font-semibold mt-6 mb-3">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      } else if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
        flushParagraph();
        inList = true;
        listItems.push(trimmedLine.replace(/^[-*] /, ""));
      } else if (/^\d+\. /.test(trimmedLine)) {
        flushParagraph();
        inList = true;
        listItems.push(trimmedLine.replace(/^\d+\. /, ""));
      } else if (trimmedLine === "") {
        flushParagraph();
        if (inList) flushList();
      } else {
        if (inList) flushList();
        currentParagraph.push(trimmedLine);
      }
    });

    flushParagraph();
    flushList();

    return elements;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <article className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link href="/articles" className="text-muted-foreground hover:text-primary">
                Articles
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground truncate max-w-[200px]">{article.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href={`/articles?category=${encodeURIComponent(article.category)}`}
              className="rounded-full bg-primary/10 px-3 py-1 text-primary hover:bg-primary/20"
            >
              {article.category}
            </Link>
            <span>•</span>
            <time dateTime={article.datePublished}>
              {new Date(article.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{article.author}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {article.description}
          </p>
        </header>

        {/* Article Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="prose prose-lg max-w-none">
            {renderContent(article.content)}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="text-sm font-semibold mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Ready to Start Flying?</CardTitle>
                <CardDescription>
                  Contact me to schedule your{" "}
                  <Link href="/articles/discovery-flight-guide" className="text-foreground hover:text-primary">discovery flight</Link> or discuss your{" "}
                  <Link href="/articles/private-pilot-license-requirements" className="text-foreground hover:text-primary">flight training goals</Link>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LeadCaptureForm />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/articles/how-to-get-a-pilots-license" className="text-muted-foreground hover:text-primary transition-colors">How to Get a Pilot&apos;s License</Link></li>
                  <li><Link href="/articles/flight-training-cost-breakdown" className="text-muted-foreground hover:text-primary transition-colors">Flight Training Costs</Link></li>
                  <li><Link href="/articles/private-pilot-license-requirements" className="text-muted-foreground hover:text-primary transition-colors">Private Pilot Requirements</Link></li>
                  <li><Link href="/articles/instrument-rating-guide" className="text-muted-foreground hover:text-primary transition-colors">Instrument Rating Guide</Link></li>
                  <li><Link href="/articles/commercial-pilot-license-guide" className="text-muted-foreground hover:text-primary transition-colors">Commercial Pilot Guide</Link></li>
                  <li><Link href="/articles/checkride-preparation-guide" className="text-muted-foreground hover:text-primary transition-colors">Checkride Preparation</Link></li>
                  <li><Link href="/articles/choosing-a-flight-instructor" className="text-muted-foreground hover:text-primary transition-colors">Choosing a CFI</Link></li>
                  <li><Link href="/articles/medical-certificate-requirements" className="text-muted-foreground hover:text-primary transition-colors">Medical Requirements</Link></li>
                </ul>
              </CardContent>
            </Card>

            <div>
              <Button variant="outline" asChild className="w-full">
                <Link href="/articles">← Back to Articles</Link>
              </Button>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t">
            <h2 className="text-2xl font-bold mb-8">Continue Reading</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <ArticleCard key={related.slug} article={related} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="/articles">View All Articles</Link>
              </Button>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
