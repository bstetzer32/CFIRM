import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Article } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/30 group">
        <CardHeader>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span className="rounded-full bg-primary/10 px-2 py-1 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {article.category}
            </span>
            <span>•</span>
            <time dateTime={article.datePublished}>
              {new Date(article.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors duration-300">{article.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {article.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground group-hover:bg-primary/10 transition-colors duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
