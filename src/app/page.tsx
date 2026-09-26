import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  Shield,
} from "lucide-react";

export default function HomePage() {
  const upcomingEvents = MOCK_EVENTS.slice(0, 3);
  const featuredAnnouncements = CA_ANNOUNCEMENTS.slice(0, 2);

  const navigationShortcuts = [
    {
      title: "Centro Acadêmico",
      description: "Representação discente oficial, propostas, comunicados da gestão e atendimento no bloco F1.",
      href: "/centro-academico",
      icon: Users,
      accent: "text-brand-700 bg-blue-50/80 border-blue-200/80",
      tag: "Representação",
    },
    {
      title: "Atlética Guaxas",
      description: "Modalidades esportivas, treinos, campeonatos universitários e mantos oficiais da A.A.A.P.U.",
      href: "/atletica",
      icon: Trophy,
      accent: "text-cyan-800 bg-cyan-50/80 border-cyan-300/80",
      tag: "A.A.A.P.U.",
    },
    {
      title: "Calendário de Eventos",
      description: "Semanas acadêmicas, cine-debates, jogos universitários e prazos com horas complementares.",
      href: "/eventos",
      icon: Calendar,
      accent: "text-purple-700 bg-purple-50/80 border-purple-200/80",
      tag: "Agenda & Horas",
    },
    {
      title: "Informações Acadêmicas",
      description: "Guia de validação de horas no Elis, links oficiais para sistemas da UNIVALI e perguntas frequentes.",
      href: "/informacoes-academicas",
      icon: BookOpen,
      accent: "text-emerald-700 bg-emerald-50/80 border-emerald-200/80",
      tag: "Guia & Elis",
    },
    {
      title: "Projetos & Acolher",
      description: "Programa Acolher da UNIVALI, trote solidário e iniciativas discentes de extensão.",
      href: "/projetos",
      icon: FolderGit2,
      accent: "text-indigo-700 bg-indigo-50/80 border-indigo-200/80",
      tag: "Acolhimento",
    },
    {
      title: "Canais de Contato",
      description: "Fale com o CA, com a Atlética ou envie sua sugestão de pauta para o curso de Psicologia.",
      href: "/contato",
      icon: Mail,
      accent: "text-slate-700 bg-slate-100 border-slate-200",
      tag: "Atendimento",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Modern University Hero with Photography */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-blue-50/80 via-slate-50/60 to-slate-50 border-b border-slate-200/90 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Headline and Value Proposition */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 text-brand-800 text-xs font-bold mb-5 shadow-xs">
                <GraduationCap className="w-3.5 h-3.5 text-brand-700" />
                <span>UNIVALI · Curso de Psicologia · Campus Itajaí</span>
              </div>

              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]"
                style={{ textWrap: "balance" }}
              >
                O ponto de encontro da Psicologia UNIVALI.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Central unificada para acadêmicos: acompanhe as decisões do <strong>Centro Acadêmico</strong>, as modalidades da <strong>Atlética Guaxas</strong>, os eventos científicos e tudo sobre a sua vida acadêmica.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/eventos"
                  className="px-5 py-3 text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-xl transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Ver Próximos Eventos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/atletica"
                  className="px-5 py-3 text-xs font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-sm flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Conhecer os Guaxas</span>
                </Link>
                <a
                  href="https://elis.univali.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
                >
                  <span>Portal Elis Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* University Campus Hero Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white group">
                <Image
                  src="/images/hero-campus.jpg"
                  alt="Campus da UNIVALI - Espaço acadêmico do Curso de Psicologia"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold drop-shadow-sm flex items-center justify-between">
                  <span>Campus Itajaí · Setor de Saúde</span>
                  <span className="text-cyan-300 font-bold">Psicologia</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Navigation Shortcuts Grid */}
      <section>
        <Container>
          <SectionTitle
            tag="Acesso Direto"
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
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105 ${shortcut.accent}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand-600 transition-colors">
                        {shortcut.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                      {shortcut.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {shortcut.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-700 group-hover:translate-x-0.5 transition-transform">
                    <span>Acessar área</span>
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

      {/* Upcoming Events Section (with visual cards) */}
      <section>
        <Container>
          <SectionTitle
            tag="Agenda & Vivência"
            title="Próximos Eventos"
            subtitle="Semanas acadêmicas, jogos universitários dos Guaxas, palestras e momentos de integração."
            action={
              <Link
                href="/eventos"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors"
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
            title="Avisos do Centro Acadêmico"
            subtitle="Comunicados oficiais para a comunidade discente de Psicologia."
            action={
              <Link
                href="/centro-academico"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 transition-colors"
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
          <div className="bg-slate-100/90 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-700" />
                <span>Sobre o Portal</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Iniciativa estudantil unificada para o curso de Psicologia da UNIVALI
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Este portal centraliza a comunicação discente (CA e Atlética Guaxas) para manter os estudantes informados. Procedimentos oficiais como matrícula, trancamento e emissão de notas continuam sendo realizados diretamente no Sistema Elis.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contato"
                className="px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors"
              >
                Fale Conosco
              </Link>
              <Link
                href="/admin"
                className="px-4 py-2 text-xs font-bold text-brand-800 bg-blue-100/80 hover:bg-blue-200/80 rounded-xl transition-colors"
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
