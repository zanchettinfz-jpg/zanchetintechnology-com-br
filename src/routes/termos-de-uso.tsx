import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { site } from "@/config/site";

const title = "Termos de Uso | Zanchetin Technology";
const description =
  "Condições de uso do site da Zanchetin Technology, incluindo conteúdo, propriedade intelectual e limitações.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto w-full max-w-3xl px-4 pt-32 pb-20 sm:px-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Termos de Uso</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Sobre este site</h2>
            <p className="mt-2">
              Este site apresenta os serviços da {site.brand}, marca de desenvolvimento de software
              conduzida por {site.owner}, com sede de atuação em {site.city}.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Conteúdo e projetos</h2>
            <p className="mt-2">
              As telas exibidas na seção de projetos são representações visuais de sistemas em
              desenvolvimento, concluídos ou conceituais, apresentadas apenas para fins
              demonstrativos.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Orçamentos</h2>
            <p className="mt-2">
              Os valores apresentados são referências iniciais. O orçamento final depende do escopo,
              das funcionalidades e do prazo definidos em conjunto, e será formalizado antes do
              início do projeto.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Propriedade intelectual</h2>
            <p className="mt-2">
              Textos, layout, marca e materiais deste site pertencem à {site.brand}, sendo vedada a
              reprodução sem autorização prévia.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre estes termos podem ser enviadas para{" "}
              <a href={`mailto:${site.email}`} className="text-primary-glow underline">
                {site.email}
              </a>
              .
            </p>
          </section>
          <p>Última atualização: 2026.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}