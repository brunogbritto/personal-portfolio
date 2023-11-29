import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bruno Britto | Personal Porfolio",
  description:
    "Bruno is a full stack developer & p  ost graduated in digital law and compliance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28  sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Primeira div original */}
        <div
          className="bg-[#c0d8ff] absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full blur-[10rem] opacity-70 
          sm:w-[68.75rem]
          dark:bg-[#233884]"
        ></div>

        {/* Segunda div original */}
        <div
          className="bg-[#afccfd] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] opacity-70 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
          dark:bg-[#727faf]"
        ></div>

        {/* Terceira div adicionada */}
        <div
          className="bg-[#afccfd] absolute bottom-[160rem] right-[-30rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] opacity-70 
          sm:w-[68.75rem] md:right-[-28rem] lg:right-[-22rem] xl:right-[-10rem] 2xl:right-[0rem]
          dark:bg-[#727faf]"
        ></div>
        {/* Quarta div adicionada */}
        <div
          className="bg-[#afccfd] absolute bottom-[140rem] left-[-1rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] opacity-70 
          sm:w-[68.75rem] md:right-[-28rem] lg:right-[-22rem] xl:right-[-10rem] 2xl:right-[0rem]
          dark:bg-[#233884]"
        ></div>
        {/* Quinta div adicionada */}
        <div
          className="bg-[#afccfd] absolute bottom-[1rem] left-[-1rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] opacity-70 
          sm:w-[68.75rem] md:right-[-28rem] lg:right-[-22rem] xl:right-[-10rem] 2xl:right-[0rem]
          dark:bg-[#727faf]"
        ></div>
        {/* Sexta div adicionada */}
        <div
          className="bg-[#afccfd] absolute bottom-[1rem] right-[-30rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] opacity-70 
          sm:w-[68.75rem] md:right-[-28rem] lg:right-[-22rem] xl:right-[-10rem] 2xl:right-[0rem]
           dark:bg-[#233884]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-center" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
