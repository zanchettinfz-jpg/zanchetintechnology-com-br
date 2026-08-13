import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="min-w-0">
          {/* Substitua o bloco abaixo por uma foto profissional quando disponível. */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-[var(--gradient-surface)] shadow-[var(--shadow-elegant)]">
            <div aria-hidden className="grid-bg absolute inset-0" />
            <div className="relative grid h-full place-items-center">
              <span className="font-display text-6xl font-bold text-gradient">NZ</span>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-border bg-background/70 p-3 backdrop-blur">
              <p className="truncate text-sm font-semibold">{site.owner}</p>
              <p className="truncate text-xs text-muted-foreground">{site.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs tracking-wide text-primary-glow uppercase">
            Sobre
          </span>
          <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">
            Quem está por trás da <span className="text-gradient">Zanchetin Technology</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Sou desenvolvedor de software e estudante de Análise e Desenvolvimento de Sistemas,
            focado na criação de soluções digitais que resolvam problemas reais de empresas. Tenho
            interesse principalmente no desenvolvimento de sistemas empresariais, aplicações web e
            automação de processos, utilizando tecnologias modernas no desenvolvimento backend e
            frontend.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A Zanchetin Technology nasceu com o objetivo de transformar conhecimento em tecnologia
            útil para empresas, oferecendo soluções digitais modernas, profissionais e
            personalizadas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-gradient-to-r from-primary to-primary-glow">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4" /> Conhecer meu LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" /> Ver GitHub
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}