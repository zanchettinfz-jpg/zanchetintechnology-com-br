import { ArrowRight, FileSpreadsheet, Repeat, ScatterChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";

const pains = [
  { icon: FileSpreadsheet, text: "Planilhas e anotações espalhadas" },
  { icon: ScatterChart, text: "Informações difíceis de encontrar" },
  { icon: Repeat, text: "Tarefas repetitivas feitas à mão" },
];

export function Companies() {
  return (
    <section className="relative overflow-hidden border-y border-border px-4 py-20 sm:px-6 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_20%_50%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_70%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">
            Sua empresa ainda depende de <span className="text-gradient">processos manuais</span>?
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Planilhas soltas, anotações em papel, informações espalhadas entre setores e tarefas
            repetitivas consomem tempo e abrem espaço para erros que custam caro no dia a dia.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Um sistema personalizado centraliza os processos, automatiza tarefas e aumenta o
            controle sobre a operação — com informações confiáveis e acessíveis em um só lugar.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-gradient-to-r from-primary to-primary-glow shadow-[var(--shadow-elegant)]"
          >
            <a
              href={whatsappLink(
                "Olá Nicolas! Quero digitalizar os processos da minha empresa. Podemos conversar?",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero digitalizar meu negócio <ArrowRight className="size-4" />
            </a>
          </Button>
        </Reveal>

        <div className="grid gap-4">
          {pains.map((p, i) => (
            <Reveal key={p.text} delay={i * 90} className="min-w-0">
              <div className="surface-card flex items-center gap-4 rounded-2xl p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                  <p.icon className="size-5" />
                </span>
                <p className="min-w-0 text-sm font-medium">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}