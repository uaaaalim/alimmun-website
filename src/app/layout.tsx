import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Alim Mun website",
  description: "Website with portfolio and just about me",
};

export default function RootLayout({children}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("min-h-full", manrope.variable, "font-sans")}
    >
    <body className="min-h-screen text-base overflow-x-hidden bg-stone-100">{children}</body>
    </html>
  );
}
