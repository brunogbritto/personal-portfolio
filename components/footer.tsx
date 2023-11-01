import React from "react";

export default function footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-gray-300">
      <small className="mb-2 block text-xs">
        &copy; 2023 Bruno Grave de Britto. Todos os direitos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este site:</span> criado com React
        & Next.js (App Router & Server Actions), Typescript, Tailwind CSS,
        Framer Motion e React Resend.
      </p>
    </footer>
  );
}
