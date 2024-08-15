import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Deep Skill Training",
  description: "Developing your deep skill, the tailored way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${inter.className}`, "overflow-x-hidden")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
