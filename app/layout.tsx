import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header"
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Descubra Campinas",
  description: "Explore os principais pontos turísticos da cidade e planeje sua visita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
