import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Portal de Psicologia - UNIVALI",
  description:
    "Portal unificado para acadêmicos do curso de Psicologia da UNIVALI, centralizando informações do Centro Acadêmico, Atlética, eventos, projetos e vida acadêmica.",
  openGraph: {
    title: "Portal de Psicologia - UNIVALI",
    description:
      "Portal unificado para acadêmicos do curso de Psicologia da UNIVALI, centralizando informações do Centro Acadêmico, Atlética, eventos, projetos e vida acadêmica.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal de Psicologia - UNIVALI",
    description:
      "Portal unificado para acadêmicos do curso de Psicologia da UNIVALI, centralizando informações do Centro Acadêmico, Atlética, eventos, projetos e vida acadêmica.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-100 selection:text-brand-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
