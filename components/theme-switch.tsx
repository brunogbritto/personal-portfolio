import React from "react";
import { BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  return (
    <button
      className="fixed bottom-10 right-10 bg-white h-[3rem] w-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/20 border-opacity-40 shadow-2xl
    rounded-full flex items-center justify-center"
    >
      <BsSun />
    </button>
  );
}
