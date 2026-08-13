import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Companies } from "@/components/site/Companies";
import { Contact } from "@/components/site/Contact";
import { CTA } from "@/components/site/CTA";
import { Differentials } from "@/components/site/Differentials";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Pricing } from "@/components/site/Pricing";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Technologies } from "@/components/site/Technologies";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { site } from "@/config/site";

const title = "Zanchetin Technology | Desenvolvimento de Sites e Sistemas";
const description =
  "Desenvolvimento de sites profissionais, sistemas web e soluções digitais personalizadas para empresas. Zanchetin Technology — Dourados, MS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "criação de sites Dourados, desenvolvedor de sites Dourados, criação de sites Mato Grosso do Sul, desenvolvimento de sistemas, sistema personalizado para empresas, desenvolvimento de software, criação de landing pages, sistema de estoque, sistemas empresariais",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.brand,
          description,
          founder: { "@type": "Person", name: site.owner, jobTitle: site.role },
          areaServed: "Brasil",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dourados",
            addressRegion: "MS",
            addressCountry: "BR",
          },
          sameAs: [site.linkedin, site.github, site.instagram],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Portfolio />
        <Process />
        <About />
        <Technologies />
        <Companies />
        {site.showPricing && <Pricing />}
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
