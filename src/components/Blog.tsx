import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/home/SectionHeader";
import { blogPosts } from "@/data/siteContent";

const Blog = () => {
  const navigate = useNavigate();
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <section id="blog" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeader
          eyebrow="Insights"
          title="Content designed as a modern editorial layer for trust, SEO, and authority"
          description="The articles stay the same, but the layout is rebuilt to feel more premium, more readable, and easier for visitors to scan across devices."
        />

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="glass-panel overflow-hidden rounded-[2.25rem]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full min-h-[320px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 sm:p-8">
                <Badge className="rounded-full bg-primary/12 px-3 py-1 text-primary">{featuredPost.category}</Badge>
                <h3 className="mt-4 text-3xl font-semibold text-foreground">{featuredPost.title}</h3>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <p className="mt-5 text-base leading-8 text-muted-foreground">{featuredPost.excerpt}</p>
                <Button
                  size="lg"
                  className="mt-8 rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow text-primary-foreground"
                  onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                >
                  Read Featured Story
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            {otherPosts.slice(0, 4).map((post) => (
              <article key={post.slug} className="depth-card rounded-[2rem] p-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <Badge className="mt-5 rounded-full bg-primary/12 px-3 py-1 text-primary">{post.category}</Badge>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
                <button
                  type="button"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-glow"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {otherPosts.slice(4).map((post) => (
            <article key={post.slug} className="rounded-[2rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4">
                <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/8">
                  {post.category}
                </Badge>
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <button
                  type="button"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-glow"
                >
                  Open
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
