import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/config/site";
import { DashboardMockup } from "./DashboardMockup";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 md:pt-40 md:pb-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary-glow" />
            {site.tagline}
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-6xl">
            Transformando <span className="text-gradient">ideias</span> em{" "}
            <span className="text-gradient">soluções digitais</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvimento de sites, sistemas web e soluções personalizadas para empresas que
            querem modernizar seus processos e fortalecer sua presença digital.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow shadow-[var(--shadow-elegant)]"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-secondary/40">
              <a href="#projetos">Ver projetos</a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Desenvolvimento Web • Sistemas Empresariais • Soluções Sob Medida
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-primary-glow" />
            <span className="min-w-0">Dourados - MS • {site.coverage}</span>
          </p>
        </Reveal>

        <Reveal delay={140} className="min-w-0">
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}