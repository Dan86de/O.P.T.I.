import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { RiEqualizerLine } from "react-icons/ri";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O.P.T.O",
  description: "AI Assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col ", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="p-4 flex items-center justify-between border-b-[1px] border-border">
            <Button asChild variant="outline" size="icon" className="rounded-full p-5">
              <Link href={"/"}>
                <Avatar>
                  <AvatarImage src={"http://localhost:3000/avatar.png"} />
                  <AvatarFallback>OP</AvatarFallback>
                </Avatar>
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="icon">
                <Link href={"/settings"}>
                  <RiEqualizerLine />
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
