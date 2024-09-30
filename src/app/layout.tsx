import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import Home from '@/components/Home';


export const metadata: Metadata = {
  title: "Mão na roda",
  description: "Plataforma que conecta profissionais e clientes",
  keywords: ['']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <Home />
        {children}
      </body>
    </html>
  );
}
