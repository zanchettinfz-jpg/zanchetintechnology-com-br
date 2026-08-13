import { process } from "@/config/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function Process() {
  return (
    <Section id="processo" className="bg-card/30">
      <SectionHeading
        eyebrow="Como funciona"
        title="Do primeiro contato à publicação"
        description="Um processo claro, com etapas bem definidas e comunicação direta do início ao fim."
      />

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((item, i) => (
          <Reveal as="li" key={item.step} delay={i * 70} className="min-w-0">
            <div className="surface-card relative h-full rounded-2xl p-6">
              <span className="font-display text-3xl font-bold text-primary/40">{item.step}</span>
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}