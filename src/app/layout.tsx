import type {Metadata} from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alimmun.com"),
  title: {
    default: "Alim Mun | Developer",
    template: "%s | Alim Mun",
  },
  description: "Personal website of Alim Mun. Explore my projects, technologies, portfolio and creative work.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Alim Mun | Developer",
    description: "Projects, technology and personal portfolio.",
    url: "https://alimmun.com",
    siteName: "Alim Mun",
  },
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
