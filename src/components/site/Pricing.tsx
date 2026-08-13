import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricing, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Pricing() {
  return (
    <Section id="planos">
      <SectionHeading
        eyebrow="Planos"
        title="Investimento transparente"
        description="Valores de referência para começar a conversa. O orçamento final depende do escopo e das funcionalidades do projeto."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {pricing.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 90} className="min-w-0">
            <article
              className={cn(
                "surface-card relative flex h-full flex-col rounded-2xl p-7",
                plan.highlight && "border-primary/50 shadow-[var(--shadow-elegant)]",
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-primary to-primary-glow px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                  Mais escolhido
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 font-display text-2xl font-bold text-gradient">{plan.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary-glow" />
                    <span className="min-w-0">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={cn(
                  "mt-7 w-full",
                  plan.highlight
                    ? "bg-gradient-to-r from-primary to-primary-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-accent",
                )}
              >
                <a
                  href={whatsappLink(
                    `Olá Nicolas! Tenho interesse no plano ${plan.name} da Zanchetin Technology.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar orçamento
                </a>
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}