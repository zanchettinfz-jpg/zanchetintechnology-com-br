import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";

const links = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 px-4 py-14 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tecnologia transformando ideias em soluções.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {site.city} • {site.coverage}
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
                { icon: Github, href: site.github, label: "GitHub" },
                { icon: Instagram, href: site.instagram, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav className="min-w-0" aria-label="Navegação do rodapé">
            <h3 className="text-sm font-semibold">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/termos-de-uso"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.brand}. Todos os direitos reservados.</p>
          <p>Desenvolvido por {site.owner}</p>
        </div>
      </div>
    </footer>
  );
}