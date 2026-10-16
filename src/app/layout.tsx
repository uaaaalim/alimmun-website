import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Alim Mun website",
  description: "Website with portfolio and just about me",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-screen`}
    >
      <body className="min-h-screen text-base overflow-x-hidden bg-stone-100">{children}</body>
    </html>
  );
}
