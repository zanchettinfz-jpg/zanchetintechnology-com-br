import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-24">
      <Reveal className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-[var(--gradient-surface)] px-6 py-14 text-center shadow-[var(--shadow-elegant)] sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,color-mix(in_oklab,var(--primary)_25%,transparent),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-balance sm:text-4xl">
              Tem uma ideia? Vamos transformar em um{" "}
              <span className="text-gradient">projeto</span>.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Conte um pouco sobre o que sua empresa precisa e receba uma proposta para desenvolver
              sua solução.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-13 bg-gradient-to-r from-primary to-primary-glow px-8 text-base shadow-[var(--shadow-elegant)]"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" /> Solicitar orçamento pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}