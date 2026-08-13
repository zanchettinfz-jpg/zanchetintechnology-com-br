import advocaciaImg from "@/assets/project-advocacia.jpg";
import erpImg from "@/assets/project-erp.jpg";
import estoqueImg from "@/assets/project-estoque.jpg";
import type { Project } from "./site";

/**
 * Para adicionar um novo projeto, basta incluir um objeto abaixo com
 * screenshot, nome, descrição, tecnologias, categoria, status e (opcional)
 * url e github.
 */
export const projects: Project[] = [
  {
    slug: "erp-esquadrias-aluminio",
    name: "ERP para Esquadrias de Alumínio",
    category: "Sistema Empresarial / SaaS",
    status: "Em desenvolvimento",
    summary:
      "Sistema para centralizar os processos de empresas de esquadrias de alumínio, conectando gestão, usuários, estoque, projetos e operações em uma única plataforma.",
    problem:
      "Empresas de esquadrias costumam operar com planilhas separadas, anotações e informações espalhadas entre setores, o que dificulta o controle de estoque, projetos e produção.",
    solution:
      "Uma plataforma web multiempresa que centraliza cadastros, projetos, estoque e produção, com controle de acesso por perfil, dashboards de acompanhamento e registro de auditoria das operações.",
    features: [
      "Gestão de usuários e controle de acesso",
      "Dashboard de indicadores",
      "Estrutura multiempresa",
      "Gestão de projetos",
      "Controle de estoque",
      "Acompanhamento de produção",
      "Auditoria de operações",
      "Práticas de segurança da aplicação",
    ],
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    image: erpImg,
  },
  {
    slug: "controle-estoque-aluminio",
    name: "Sistema de Controle de Estoque de Alumínio",
    category: "Sistema Empresarial",
    status: "Concluído",
    summary:
      "Aplicação para controle de perfis de alumínio, movimentações, sobras, endereçamento e histórico de operações.",
    problem:
      "O controle manual de perfis e sobras gera divergências de estoque, perda de material e dificuldade em localizar itens no depósito.",
    solution:
      "Um sistema desktop que registra entradas e saídas, controla sobras reaproveitáveis e organiza o endereçamento físico dos materiais, mantendo histórico completo das movimentações.",
    features: [
      "Cadastro de materiais",
      "Entrada e saída de estoque",
      "Controle de sobras",
      "Endereçamento de materiais",
      "Histórico de movimentações",
      "Gestão de usuários",
    ],
    tech: ["Java", "JavaFX", "SQL"],
    image: estoqueImg,
  },
  {
    slug: "site-advocacia",
    name: "Website para Escritório de Advocacia",
    category: "Website Institucional",
    status: "Projeto conceitual",
    summary:
      "Site profissional focado em credibilidade, elegância, apresentação dos serviços e geração de contatos.",
    problem:
      "Escritórios de advocacia precisam transmitir seriedade e confiança já no primeiro contato digital, algo que templates genéricos não entregam.",
    solution:
      "Um site institucional com identidade sóbria e elegante, hierarquia de conteúdo clara, apresentação das áreas de atuação e caminhos diretos para contato.",
    features: [
      "Layout institucional elegante",
      "Apresentação das áreas de atuação",
      "Seções de credibilidade",
      "Formulário e contato direto",
      "Totalmente responsivo",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: advocaciaImg,
  },
];