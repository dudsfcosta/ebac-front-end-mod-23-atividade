import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/Header"
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Blog.",
  description: "Você melhor informado.",
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
