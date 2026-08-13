import { ArrowUpRight, Check, Github } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/config/projects";
import type { Project } from "@/config/site";
import { whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

function statusClasses(status: Project["status"]) {
  if (status === "Em desenvolvimento") return "bg-primary/15 text-primary-glow border-primary/30";
  if (status === "Projeto conceitual") return "bg-secondary text-muted-foreground border-border";
  return "bg-accent text-accent-foreground border-border";
}

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos desenvolvidos e conceituais"
        description="Uma amostra do tipo de solução que desenvolvo: sistemas empresariais, aplicações web e sites institucionais."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90} className="min-w-0">
            <article className="surface-card flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
                <img
                  src={project.image}
                  alt={`Interface do projeto ${project.name}`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="size-full object-cover object-top transition-transform duration-500 hover:scale-[1.04]"
                />
                <Badge
                  variant="outline"
                  className={`absolute top-3 left-3 backdrop-blur ${statusClasses(project.status)}`}
                >
                  {project.status}
                </Badge>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs tracking-wide text-primary-glow uppercase">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-balance">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" onClick={() => setActive(project)}>
                    Detalhes
                  </Button>
                  {project.url && (
                    <Button asChild size="sm" className="bg-gradient-to-r from-primary to-primary-glow">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Ver projeto <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild size="sm" variant="ghost">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="size-4" /> GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
          {active && (
            <>
              <DialogHeader>
                <p className="text-xs tracking-wide text-primary-glow uppercase">
                  {active.category}
                </p>
                <DialogTitle className="text-2xl text-balance">{active.name}</DialogTitle>
                <DialogDescription>{active.summary}</DialogDescription>
              </DialogHeader>

              <img
                src={active.image}
                alt={`Tela do projeto ${active.name}`}
                loading="lazy"
                width={1280}
                height={800}
                className="w-full rounded-xl border border-border object-cover"
              />

              <div className="space-y-5 text-sm">
                <div>
                  <h4 className="font-semibold">Problema</h4>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{active.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Solução</h4>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{active.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Funcionalidades</h4>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {active.features.map((f) => (
                      <li key={f} className="flex gap-2 text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                        <span className="min-w-0">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Tecnologias</h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={statusClasses(active.status)}>
                    {active.status}
                  </Badge>
                  <Button asChild size="sm" className="bg-gradient-to-r from-primary to-primary-glow">
                    <a
                      href={whatsappLink(
                        `Olá Nicolas! Vi o projeto "${active.name}" no site da Zanchetin Technology e gostaria de conversar sobre algo parecido.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero algo parecido
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}