import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Gauge,
  LayoutTemplate,
  MonitorSmartphone,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

/** Configurações centrais da marca. Altere aqui telefone, e-mail e redes. */
export const site = {
  brand: "Zanchetin Technology",
  owner: "Nicolas Zanchetin",
  role: "Desenvolvedor de Software",
  tagline: "Software • Web • Tecnologia",
  city: "Dourados - Mato Grosso do Sul",
  coverage: "Atendimento remoto para todo o Brasil",
  /** Telefone em formato internacional, somente números. */
  whatsappNumber: "5567991273202",
  whatsappDisplay: "(67) 99127-3202",
  whatsappMessage:
    "Olá Nicolas! Encontrei a Zanchetin Technology pelo site e gostaria de conversar sobre um projeto.",
  email: "zanchetin.technology@gmail.com",
  linkedin: "https://www.linkedin.com/in/nicolas-zanchetin/",
  github: "https://github.com/zanchettinfz-jpg",
  instagram: "https://www.instagram.com/nicolaszchtt/",
  /** Ative/desative a seção de planos. */
  showPricing: true,
} as const;

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Contato", href: "/#contato" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  cta: string;
};

export const services: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Sites Institucionais",
    description:
      "Presença digital profissional para apresentar sua empresa, serviços e gerar contato qualificado.",
    features: [
      "Design profissional e exclusivo",
      "Totalmente responsivo",
      "Botão de WhatsApp e formulários",
      "SEO básico e Google Maps",
      "Domínio, publicação e performance",
    ],
    cta: "Quero um site profissional",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Páginas estratégicas construídas para comunicar uma oferta e converter visitantes em contatos.",
    features: [
      "Layout estratégico e objetivo",
      "CTAs bem posicionados",
      "Formulários e WhatsApp",
      "Alta performance",
      "Mobile-first",
    ],
    cta: "Quero uma landing page",
  },
  {
    icon: MonitorSmartphone,
    title: "Sistemas Web",
    description:
      "Aplicações sob medida para digitalizar rotinas internas e dar controle real sobre a operação.",
    features: [
      "Estoque, pedidos e clientes",
      "Produção e logística",
      "Orçamentos e controle administrativo",
      "Dashboards e relatórios",
      "Acesso por perfil de usuário",
    ],
    cta: "Quero um sistema web",
  },
  {
    icon: Server,
    title: "Sistemas Empresariais",
    description:
      "Soluções mais completas para centralizar processos e integrar áreas da empresa em um só lugar.",
    features: [
      "ERP e CRM sob medida",
      "Gestão de estoque e produção",
      "Controle de usuários e permissões",
      "Relatórios e dashboards",
      "Arquitetura preparada para crescer",
    ],
    cta: "Quero um sistema empresarial",
  },
  {
    icon: Wrench,
    title: "Manutenção e Evolução",
    description:
      "Seu projeto continua vivo: correções, melhorias e novas funcionalidades conforme a empresa evolui.",
    features: [
      "Correções e ajustes",
      "Atualização de conteúdo",
      "Novas funcionalidades",
      "Melhorias de interface",
      "Otimização de performance",
    ],
    cta: "Quero manutenção do meu projeto",
  },
];

export const differentials = [
  {
    icon: Sparkles,
    title: "Design personalizado",
    text: "Interface criada para a sua marca, sem templates genéricos.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsivo",
    text: "Experiência impecável em celular, tablet e desktop.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Carregamento rápido, código limpo e boas práticas.",
  },
  {
    icon: Settings2,
    title: "Evolução",
    text: "Estrutura preparada para receber novas funcionalidades.",
  },
];

export type ProjectStatus = "Em desenvolvimento" | "Concluído" | "Projeto conceitual";

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image: string;
  url?: string;
  github?: string;
};

export const technologies: { group: string; icon: LucideIcon; items: string[] }[] = [
  { group: "Backend", icon: Server, items: ["Java", "Spring Boot"] },
  {
    group: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  { group: "Banco de Dados", icon: Database, items: ["PostgreSQL", "MySQL", "SQLite"] },
  { group: "Infra e Ferramentas", icon: ShieldCheck, items: ["Git", "GitHub", "Docker", "REST APIs"] },
];

export const process = [
  { step: "01", title: "Conversa", text: "Entendimento do negócio, dos objetivos e das necessidades reais." },
  { step: "02", title: "Planejamento", text: "Definição de estrutura, funcionalidades e identidade visual." },
  { step: "03", title: "Desenvolvimento", text: "Construção da solução com tecnologias modernas e código organizado." },
  { step: "04", title: "Revisão", text: "Apresentação do resultado e ajustes conforme o seu feedback." },
  { step: "05", title: "Publicação", text: "Configuração de domínio e disponibilização do projeto no ar." },
  { step: "06", title: "Suporte", text: "Manutenção, acompanhamento e evolução contínua." },
];

export const pricing = [
  {
    name: "Essencial",
    price: "A partir de R$ 900",
    description: "Para quem precisa marcar presença digital de forma rápida e profissional.",
    highlight: false,
    features: [
      "Landing page ou site simples",
      "Layout responsivo",
      "Botão de WhatsApp",
      "Formulário de contato",
      "SEO básico",
    ],
  },
  {
    name: "Profissional",
    price: "A partir de R$ 1.500",
    description: "Site institucional completo para empresas que querem transmitir credibilidade.",
    highlight: true,
    features: [
      "Site institucional profissional",
      "Design personalizado",
      "Múltiplas seções",
      "Responsividade completa",
      "WhatsApp e formulário",
      "SEO, Google Maps e publicação",
    ],
  },
  {
    name: "Personalizado",
    price: "Sob orçamento",
    description: "Projetos sob medida com regras de negócio específicas.",
    highlight: false,
    features: [
      "Sistemas e aplicações web",
      "Dashboards e relatórios",
      "Automação de processos",
      "ERP, CRM e módulos internos",
      "Escopo definido em conjunto",
    ],
  },
];