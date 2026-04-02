import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/home/SectionHeader";
import { projects } from "@/data/siteContent";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects framed like premium case studies instead of a generic slider"
          description="Every project from your current website remains here, but the new layout prioritizes hierarchy, readability, and conversion-focused presentation."
        />

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <article className="glass-panel overflow-hidden rounded-[2.25rem]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] overflow-hidden border-b border-white/10 lg:min-h-full lg:border-b-0 lg:border-r">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <Badge className="rounded-full bg-primary/12 px-3 py-1 text-primary">{projects[0].category}</Badge>
                <h3 className="mt-4 text-3xl font-semibold text-foreground">{projects[0].title}</h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">{projects[0].description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full border-primary/20 bg-white/5 px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {projects[0].link && (
                  <Button
                    asChild
                    size="lg"
                    className="mt-8 rounded-full bg-gradient-to-r from-primary via-primary to-primary-glow text-primary-foreground"
                  >
                    <a href={projects[0].link} target="_blank" rel="noreferrer">
                      Explore Project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
            {projects.slice(1, 3).map((project) => (
              <article key={project.title} className="depth-card rounded-[2rem] p-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/8">
                      {project.category}
                    </Badge>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{project.title}</h3>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition hover:border-primary/40 hover:bg-primary/15"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(3).map((project) => (
            <article key={project.title} className="depth-card rounded-[2rem] p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/8">
                    {project.category}
                  </Badge>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">{project.title}</h3>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition hover:border-primary/40 hover:bg-primary/15"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full bg-white/5 text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
