import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MemberCard } from "@/features/academic-center/components/MemberCard";
import { ProposalCard } from "@/features/academic-center/components/ProposalCard";
import { AnnouncementCard } from "@/features/academic-center/components/AnnouncementCard";
import {
  CA_MEMBERS,
  CA_PROPOSALS,
  CA_ANNOUNCEMENTS,
} from "@/features/academic-center/mock-data";
import {
  Users,
  Compass,
  FileCheck2,
  Mail,
  Instagram,
  MapPin,
  Clock,
  HeartHandshake,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

export default function AcademicCenterPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHero
        badge="Representação Discente Oficial"
        title="Centro Acadêmico de Psicologia"
        description="A voz acolhedora e combativa dos estudantes perante a coordenação e a reitoria. Atuando pela qualidade pedagógica, defesa de direitos discentes e acolhimento contínuo no Campus Itajaí."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Centro Acadêmico" },
        ]}
        imageSrc="/images/hero-campus.jpg"
        imageAlt="Campus UNIVALI - Espaço acadêmico do Centro Acadêmico"
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#quem-somos"
              className="px-5 py-2.5 text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-xl transition-all shadow-sm"
            >
              Conhecer a Gestão
            </a>
            <a
              href="#comunicados"
              className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
            >
              Últimos Comunicados
            </a>
          </div>
        }
      />

      {/* Função do Centro Acadêmico: Visual acolhedor e institucional */}
      <section id="quem-somos">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block mb-2">
                Nossa Missão Coletiva
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Espaço de acolhimento, escuta e representação discente
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                O Centro Acadêmico (CA) é a entidade representativa máxima dos acadêmicos do curso de Psicologia no Campus Itajaí. Nosso papel primordial é assegurar que cada estudante se sinta ouvido e amparado ao longo de sua jornada universitária.
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Atuamos na interlocução direta com a Coordenação e com o Núcleo Docente Estruturante (NDE), fiscalizamos a infraestrutura das clínicas-escola (SPA) e salas de aula, além de promover semanas acadêmicas, cine-debates e eventos integradores.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                  <Compass className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Mediação Discente</strong>
                    Diálogo transparente e apoio em requerimentos acadêmicos.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                  <HeartHandshake className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Acolhimento aos Calouros</strong>
                    Recepção humanizada, trote solidário e integração entre turmas.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card for CA */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-slate-50 border border-blue-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-700 text-white flex items-center justify-center font-bold">
                  Ψ
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Atendimento na Sala do CA
                  </h3>
                  <p className="text-[11px] text-slate-500">Portas abertas para todos os semestres</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Campus Itajaí, Bloco F1 (térreo, ao lado da área de convivência)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Intervalos matutinos (9h45 às 10h15) e noturnos (20h30 às 21h00)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                  <a href="mailto:ca.psicologia@univali.br" className="hover:underline font-semibold text-brand-700">
                    ca.psicologia@univali.br
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-brand-600 shrink-0" />
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-700">
                    @capsicologia.univali
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Integrantes da Gestão */}
      <section>
        <Container>
          <SectionTitle
            tag="Diretoria Eleita"
            title="Integrantes da Gestão Atual"
            subtitle="Conheça os acadêmicos responsáveis por cada diretoria temática da gestão discente."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CA_MEMBERS.map((member) => (
              <MemberCard key={member.id} member={member} accent="brand" />
            ))}
          </div>
        </Container>
      </section>

      {/* Propostas da Gestão */}
      <section>
        <Container>
          <SectionTitle
            tag="Plano de Gestão"
            title="Propostas e Projetos em Andamento"
            subtitle="Acompanhe com transparência o status das melhorias propostas para o curso."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CA_PROPOSALS.map((prop) => (
              <ProposalCard key={prop.id} proposal={prop} />
            ))}
          </div>
        </Container>
      </section>

      {/* Comunicados do CA */}
      <section id="comunicados">
        <Container>
          <SectionTitle
            tag="Transparência & Notas"
            title="Comunicados e Avisos do CA"
            subtitle="Notas oficiais, assembleias estudantis e chamadas públicas para as turmas."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CA_ANNOUNCEMENTS.map((ann) => (
              <AnnouncementCard key={ann.id} announcement={ann} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
