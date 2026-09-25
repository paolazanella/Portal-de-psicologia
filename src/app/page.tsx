import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EventCard } from "@/features/events/components/EventCard";
import { MOCK_EVENTS } from "@/features/events/mock-data";
import { CA_ANNOUNCEMENTS } from "@/features/academic-center/mock-data";
import { AnnouncementCard } from "@/features/academic-center/components/AnnouncementCard";
import { PROGRAMA_ACOLHER_DATA } from "@/features/projects/mock-data";
import { ProgramaAcolherSection } from "@/features/projects/components/ProgramaAcolherModal";
import {
  Users,
  Trophy,
  Calendar,
  BookOpen,
  FolderGit2,
  Mail,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const upcomingEvents = MOCK_EVENTS.slice(0, 3);
  const featuredAnnouncements = CA_ANNOUNCEMENTS.slice(0, 2);

  const navigationShortcuts = [
    {
      title: "Centro Acadêmico",
      description: "Representação discente, propostas, comunicados e contato da gestão.",
      href: "/centro-academico",
      icon: Users,
      accent: "text-blue-700 bg-blue-50 border-blue-100",
    },
    {
      title: "Atlética de Psicologia",
      description: "Modalidades esportivas, treinos, competições e produtos oficiais.",
      href: "/atletica",
      icon: Trophy,
      accent: "text-amber-800 bg-amber-50 border-amber-100",
    },
    {
      title: "Calendário de Eventos",
      description: "Semanas acadêmicas, cine-debates, jogos e prazos do semestre.",
      href: "/eventos",
      icon: Calendar,
      accent: "text-purple-700 bg-purple-50 border-purple-100",
    },
    {
      title: "Informações Acadêmicas",
      description: "Guia de horas complementares, links do Elis, FAQ e matriz curricular.",
      href: "/informacoes-academicas",
      icon: BookOpen,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Projetos & Acolher",
      description: "Programa Acolher da UNIVALI, trote solidário e iniciativas discentes.",
      href: "/projetos",
      icon: FolderGit2,
      accent: "text-indigo-700 bg-indigo-50 border-indigo-100",
    },
    {
      title: "Canais de Contato",
      description: "Fale com o CA, com a Atlética ou envie sua dúvida sobre o curso.",
      href: "/contato",
      icon: Mail,
      accent: "text-slate-700 bg-slate-100 border-slate-200",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-slate-50 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-brand-800 text-xs font-semibold mb-6">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>UNIVALI · Curso de Psicologia · Campus Itajaí</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]"
              style={{ textWrap: "balance" }}
            >
              O ponto de encontro da Psicologia UNIVALI.
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Central unificada para acadêmicos: acompanhe as decisões do <strong>Centro Acadêmico</strong>, as modalidades da <strong>Atlética</strong>, os eventos do curso e informações essenciais para a sua trajetória acadêmica.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/eventos"
                className="px-5 py-3 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>Ver Próximos Eventos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/informacoes-academicas"
                className="px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all flex items-center gap-2"
              >
                <span>Horas Complementares & Elis</span>
              </Link>
              <a
                href="https://elis.univali.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors"
              >
                <span>Portal Elis Oficial</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Navigation Shortcuts Grid */}
      <section>
        <Container>
          <SectionTitle
            tag="Acesso Rápido"
            title="Explore o Portal"
            subtitle="Tudo o que você precisa saber sobre a vida universitária em Psicologia em um só lugar."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {navigationShortcuts.map((shortcut) => {
              const Icon = shortcut.icon;
              return (
                <Link
                  key={shortcut.title}
                  href={shortcut.href}
                  className="group bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-brand-500 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-transform group-hover:scale-105 ${shortcut.accent}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                      {shortcut.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {shortcut.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-700 group-hover:translate-x-0.5 transition-transform">
                    <span>Acessar seção</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Programa Acolher Special Highlight */}
      <section>
        <Container>
          <ProgramaAcolherSection data={PROGRAMA_ACOLHER_DATA} />
        </Container>
      </section>

      {/* Upcoming Events Section */}
      <section>
        <Container>
          <SectionTitle
            tag="Agenda & Vivência"
            title="Próximos Eventos"
            subtitle="Semanas acadêmicas, jogos universitários, palestras e momentos de integração."
            action={
              <Link
                href="/eventos"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors"
              >
                <span>Ver calendário completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </Container>
      </section>

      {/* Important Announcements Section */}
      <section>
        <Container>
          <SectionTitle
            tag="Transparência & Gestão"
            title="Avisos Importantes do Centro Acadêmico"
            subtitle="Comunicados oficiais para a comunidade acadêmica discente de Psicologia."
            action={
              <Link
                href="/centro-academico"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900 transition-colors"
              >
                <span>Ver todos os comunicados</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredAnnouncements.map((ann) => (
              <AnnouncementCard key={ann.id} announcement={ann} />
            ))}
          </div>
        </Container>
      </section>

      {/* Institutional Clarity Footer Banner */}
      <section>
        <Container>
          <div className="bg-slate-100/80 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-700" />
                <span>Sobre o Portal</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Iniciativa estudantil complementar aos canais oficiais da UNIVALI
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Este portal foi concebido para centralizar a comunicação das entidades discentes (CA e Atlética) que antes ficava dispersa no WhatsApp e Instagram. Procedimentos oficiais de matrícula e notas continuam sendo realizados no Sistema Elis.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contato"
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors"
              >
                Fale Conosco
              </Link>
              <Link
                href="/admin"
                className="px-4 py-2 text-xs font-semibold text-brand-800 bg-blue-100/70 hover:bg-blue-100 rounded-lg transition-colors"
              >
                Área de Gestão
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
