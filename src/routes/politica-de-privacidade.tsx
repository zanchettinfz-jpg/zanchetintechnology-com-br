import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { site } from "@/config/site";

const title = "Política de Privacidade | Zanchetin Technology";
const description =
  "Como a Zanchetin Technology coleta, usa e protege os dados enviados pelo formulário de orçamento, conforme a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto w-full max-w-3xl px-4 pt-32 pb-20 sm:px-6">
        <h1 className="text-3xl font-bold sm:text-4xl">Política de Privacidade</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Esta política descreve como a {site.brand}, marca de desenvolvimento de software
            conduzida por {site.owner}, trata os dados pessoais informados neste site.
          </p>
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Dados coletados</h2>
            <p className="mt-2">
              Coletamos apenas os dados que você envia voluntariamente pelo formulário de orçamento:
              nome, empresa (opcional), WhatsApp, e-mail, tipo de necessidade, descrição do projeto e
              faixa de orçamento.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Finalidade</h2>
            <p className="mt-2">
              Os dados são usados exclusivamente para responder à sua solicitação, elaborar propostas
              e manter o contato comercial relacionado ao projeto.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Compartilhamento</h2>
            <p className="mt-2">
              Não vendemos nem compartilhamos seus dados com terceiros para fins publicitários. O
              envio do formulário abre uma conversa no WhatsApp, serviço operado pela Meta, com as
              informações que você preencheu.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Cookies</h2>
            <p className="mt-2">
              Este site não utiliza cookies de rastreamento ou publicidade. Apenas recursos
              essenciais de funcionamento são utilizados.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Seus direitos (LGPD)</h2>
            <p className="mt-2">
              Você pode solicitar a confirmação, o acesso, a correção ou a exclusão dos seus dados a
              qualquer momento pelo e-mail{" "}
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