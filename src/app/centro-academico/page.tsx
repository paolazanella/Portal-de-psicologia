import React from "react";
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
  Sparkles,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export default function AcademicCenterPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHero
        badge="Representação Discente"
        title="Centro Acadêmico de Psicologia"
        description="A voz dos acadêmicos perante a coordenação, o corpo docente e a reitoria. Atuando pela qualidade do ensino, acolhimento dos estudantes e vivência universitária plural."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Centro Acadêmico" },
        ]}
      />

      {/* Função do Centro Acadêmico */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10">
            <div className="lg:col-span-2">
              <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider block mb-2">
                O que fazemos
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                A função do Centro Acadêmico na UNIVALI
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                O Centro Acadêmico (CA) é a entidade representativa máxima dos acadêmicos do curso de Psicologia no Campus Itajaí. Nosso papel é defender os direitos estudantis, representar as turmas nas reuniões do Colegiado e Núcleo Docente Estruturante (NDE), fiscalizar a infraestrutura de salas e da clínica-escola (SPA), além de organizar semanas científicas, debates éticos e eventos culturais.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <Compass className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Mediação Pedagógica</strong>
                    Apoio na resolução de impasses de notas, faltas e diálogo com docentes.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <FileCheck2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Atividades de Extensão</strong>
                    Organização de eventos com certificação de horas complementares.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Box for CA */}
            <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200/80">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-700" />
                <span>Atendimento na Sala do CA</span>
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Bloco F1, Campus Itajaí (próximo à cantina)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>Intervalos matutinos (9h45) e noturnos (20h30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <a href="mailto:ca.psicologia@univali.br" className="hover:underline font-medium">
                    ca.psicologia@univali.br
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
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

      {/* Propostas e Projetos da Gestão */}
      <section>
        <Container>
          <SectionTitle
            tag="Plano de Gestão"
            title="Propostas e Projetos em Andamento"
            subtitle="Acompanhe o status das melhorias propostas para a graduação em Psicologia."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CA_PROPOSALS.map((prop) => (
              <ProposalCard key={prop.id} proposal={prop} />
            ))}
          </div>
        </Container>
      </section>

      {/* Comunicados do CA */}
      <section>
        <Container>
          <SectionTitle
            tag="Transparência"
            title="Comunicados e Avisos do CA"
            subtitle="Notas oficiais, assembleias estudantis e chamadas públicas."
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
