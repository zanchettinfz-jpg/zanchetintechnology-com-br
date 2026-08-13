import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Services() {
  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow="Serviços"
        title="Soluções digitais para o seu negócio"
        description="Do site institucional ao sistema empresarial, cada projeto é desenvolvido de acordo com a realidade e os objetivos da sua empresa."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 80} className="min-w-0">
            <article className="surface-card flex h-full flex-col rounded-2xl p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                <service.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                    <span className="min-w-0">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="ghost"
                className="mt-6 justify-start px-0 text-primary-glow hover:bg-transparent hover:text-primary"
              >
                <a
                  href={whatsappLink(
                    `Olá Nicolas! Encontrei a Zanchetin Technology pelo site e tenho interesse em: ${service.title}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.cta} <ArrowRight className="size-4" />
                </a>
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}