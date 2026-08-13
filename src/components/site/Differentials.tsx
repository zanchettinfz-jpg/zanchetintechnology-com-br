import { differentials } from "@/config/site";
import { Reveal } from "./Reveal";

export function Differentials() {
  return (
    <section className="relative overflow-hidden border-y border-border px-4 py-20 sm:px-6 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-balance sm:text-4xl">
            Não é apenas um site. É uma <span className="text-gradient">ferramenta</span> para o seu
            negócio.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Cada solução é desenvolvida conforme os objetivos e as necessidades da empresa. Em vez
            de templates genéricos, o projeto nasce a partir do seu processo real: o que precisa ser
            comunicado, o que precisa ser controlado e o que pode ser automatizado.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            O resultado é uma ferramenta que trabalha a favor da operação e acompanha o crescimento
            do negócio.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentials.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="min-w-0">
              <div className="surface-card h-full rounded-2xl p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary-glow">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}