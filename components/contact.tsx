"use client";

import React from "react";
import SectionHeading from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Entre em contato</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Entre em contato diretamente{" "}
        <a className="underline" href="mailto:brunoogbritto@gmail.com">
          brunoogbritto@gmail.com
        </a>{" "}
        ou através do formulário abaixo:
      </p>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Seu e-mail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Digite sua mensagem para mim."
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Enviar{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1
          group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
