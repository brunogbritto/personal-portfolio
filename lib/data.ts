import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import brecholaImg from "@/public/brechola.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre mim",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Banco Cruzeiro do Sul, estagiário",
    location: "Rio de Janeiro, RJ",
    description:
      "Auxílio na revisão e gestão de contratos em operações financeiras, com foco particular na cessão de crédito. Desenvolvi competências de análise contratuais, assegurando alinhamento com os objetivos estratégicos do banco e conformidade com o quadro regulatório. Bem como, suporte em questões societárias, cíveis e trabalhistas referentes ao interesse da empresa.",
    icon: React.createElement(CgWorkAlt),
    date: "Out. 2010 - Set. 2012",
  },
  {
    title: "Bradesco Seguros, estagiário",
    location: "Rio de Janeiro, RJ",
    description:
      "Colaborei na elaboração e revisão de atos societários, acompanhamento em diligências administrativas, além de apoiar a equipe na conformidade regulatória de planos de saúde.",
    icon: React.createElement(CgWorkAlt),
    date: "Abr. 2013 - Nov. 2014",
  },
  {
    title: "Graduação em Direito",
    location: "Rio de Janeiro, RJ",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2016",
  },
  {
    title: "Pontes Advogados, Advogado",
    location: "Rio de Janeiro, RJ",
    description:
      "Como advogado atuante na área Trabalhista, conduzia a elaboração e revisão de peças processuais, atuando com rigor técnico e estratégico para a defesa dos direitos dos clientes. Assim como, realizava a preparação e condução de audiências trabalhistas; acompanhamento e controle de prazos processuais para assegurar o cumprimento efetivo de todas as etapas processuais.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov. 2016 - Abr. 2020",
  },
  {
    title: "Graduação em Direito Digital",
    location: "Rio de Janeiro, RJ",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Pontes & Britto, Advogado",
    location: "Rio de Janeiro, RJ",
    description:
      "Advogado atuante na área trabalhista, administrativa, cível e digital. Acompanhamento de processos, elaboração de pareceres, peças processuais e audiências. Prática em assuntos de cybersecurity e proteção de dados pessoais, auxiliando clientes com demandas que incluem, entre outas atividades, mapeamento de fluxo de dados, a elaboração, análise e revisão de termos de uso e políticas de privacidade.",
    icon: React.createElement(CgWorkAlt),
    date: "Abr. 2020 – Julho 2023",
  },
  {
    title: "Bootcamp Desenvolvedor Full Stack - Infnet",
    location: "Rio de Janeiro, RJ",
    description:
      "Como parte da minha transição de carreira do Direito para o Desenvolvimento de Software, participei de um bootcamp intensivo de programação, onde adquiri habilidades práticas e teóricas em desenvolvimento web. Meu principal projeto foi a criação deste site pessoal de portfólio, desenvolvido com a intenção de demonstrar minhas competências técnicas e projetos realizados.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan. 2023 - Set. 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Brechola",
    description:
      "E-commerce full stack que combina React e Tailwind CSS, com um backend robusto em Express e Mongoose.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "MongoDB", "Express"],
    imageUrl: brecholaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
