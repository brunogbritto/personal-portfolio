"use client";

import React from "react";
import SectionHeading from "./section-header";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Olá! Sou desenvolvedor full stack com formação jurídica e especialização
        em Direito Digital. Tenho conhecimento em linguagens de programação
        utilizadas no desenvolvimento web, além de familiaridade com bancos de
        dados e ferramentas de versionamento de código. Minha experiência
        abrange tanto o desenvolvimento de interfaces front-end responsivas e
        amigáveis, como também a criação de APIs e integração de sistemas no
        back-end. Busco por uma oportunidade desafiadora onde posso aplicar
        minha paixão pela tecnologia e conhecimentos jurídicos para criar
        soluções inovadoras e de alta qualidade.
      </p>
    </motion.section>
  );
}
