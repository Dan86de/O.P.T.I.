import "./globals.css";
import avatar from "../public/avatar.png";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { RiDivideLine, RiEqualizerLine, RiSunFoggyLine, RiSunLine } from "react-icons/ri";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O.P.T.O",
  description: "AI Assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-hidden z-0 flex flex-col w-full h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50`}
      >
        <header className="p-4 flex items-center justify-between border-b-[1px] border-zinc-700">
          <Image src={avatar} className="w-12 h-12 rounded-full" alt="OPTI Avatar" />
          <div className="flex items-center gap-4">
            <RiEqualizerLine size={20} />
            <RiSunLine size={20} />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
