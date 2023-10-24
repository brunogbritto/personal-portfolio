import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

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
        className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28  sm:pt-36`}
      >
        <div className="bg-[#c0d8ff] absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full blur-[10rem] opacity-70 sm:w-[68.75rem]"></div>
        <div className="bg-[#afccfd] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] opacity-70 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
