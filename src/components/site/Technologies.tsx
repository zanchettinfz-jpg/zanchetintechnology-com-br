import { technologies } from "@/config/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Technologies() {
  return (
    <Section id="tecnologias" className="bg-card/30">
      <SectionHeading
        eyebrow="Tecnologias"
        title="Ferramentas usadas nos projetos"
        description="Tecnologias modernas e consolidadas no mercado, escolhidas conforme a necessidade de cada solução."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((group, i) => (
          <Reveal key={group.group} delay={i * 80} className="min-w-0">
            <div className="surface-card h-full rounded-2xl p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary-glow">
                <group.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}