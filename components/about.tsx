"use client";

import React from "react";
import SectionHeading from "./section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaSearch, FaLaptopCode, FaBook, FaStar } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 flex justify-center items-center">
            <FaSearch className="mr-2" /> Formação Multidisciplinar:
          </h3>
          <p>
            Com uma sólida formação em Direito, especializei-me em Direito
            Digital, unindo meus interesses jurídicos à paixão pela tecnologia.
            Essa combinação única me proporciona uma perspectiva diferenciada e
            abrangente no mundo digital.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 flex justify-center items-center">
            <FaLaptopCode className="mr-2" /> Desenvolvedor Web Versátil:
          </h3>
          <p>
            Possuo habilidades aprofundadas em diversas linguagens de
            programação essenciais ao desenvolvimento web. Sou proficiente tanto
            em front-end quanto em back-end, entregando interfaces responsivas e
            amigáveis, além de desenvolver APIs robustas e integrar sistemas
            complexos.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 flex justify-center items-center">
            <FaBook className="mr-2" /> Conhecimento Técnico:
          </h3>
          <p>
            Estou sempre em busca de aprimorar minhas habilidades técnicas,
            mantendo-me atualizado nas linguagens de programação mais recentes,
            bem como nas práticas de gerenciamento de bancos de dados e
            ferramentas de versionamento de código.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 flex justify-center items-center">
            <FaStar className="mr-2" /> Paixão e Dedicação:
          </h3>
          <p>
            Minha trajetória é marcada por um amor duradouro pela tecnologia e
            programação. Agora, estou totalmente dedicado a realizar meu sonho
            de carreira, combinando meu conhecimento jurídico com minha
            expertise em desenvolvimento web para criar soluções inovadoras.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
