import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { QuickLinkCard } from "@/features/academic-info/components/QuickLinkCard";
import { HoursGuide } from "@/features/academic-info/components/HoursGuide";
import { FaqAccordion } from "@/features/academic-info/components/FaqAccordion";
import { QUICK_LINKS } from "@/features/academic-info/mock-data";
import { ExternalLink, AlertCircle, Calendar, GraduationCap, FileText } from "lucide-react";

export default function AcademicInfoPage() {
  return (
    <div className="space-y-16 pb-20">
      <PageHero
        badge="Guia do Estudante"
        title="Informações Acadêmicas"
        description="Acesso direto aos sistemas oficiais da UNIVALI, diretrizes para horas complementares, calendário do semestre e esclarecimento de dúvidas frequentes."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Informações Acadêmicas" },
        ]}
      />

      {/* Institutional Disclaimer Banner */}
      <section>
        <Container>
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong>Aviso aos acadêmicos:</strong> Este portal complementa a comunicação discente e não substitui os sistemas institucionais da UNIVALI. Matrículas, lançamento de notas, faltas e protocolos oficiais devem sempre ser realizados via <strong>Sistema Elis</strong>.
            </div>
          </div>
        </Container>
      </section>

      {/* Links Rápidos / Sistemas Oficiais */}
      <section>
        <Container>
          <SectionTitle
            tag="Acesso Rápido"
            title="Sistemas e Portais Oficiais"
            subtitle="Atalhos verificados para as plataformas acadêmicas da UNIVALI e órgãos da profissão."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUICK_LINKS.map((link) => (
              <QuickLinkCard key={link.id} link={link} />
            ))}
          </div>
        </Container>
      </section>

      {/* Guia de Horas Complementares */}
      <section>
        <Container>
          <HoursGuide />
        </Container>
      </section>

      {/* Grade Curricular & Estrutura do Curso */}
      <section>
        <Container>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
                  Matriz Curricular
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Estrutura do Curso de Psicologia
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-6">
              O curso de Psicologia da UNIVALI possui duração padrão de 10 semestres (5 anos), ofertado nos períodos matutino e noturno no Campus Itajaí. A formação abrange eixos estruturantes em processos psicológicos básicos, psicopatologia, teorias clínicas, psicologia social e da saúde, estágios curriculares supervisionados e Trabalho de Conclusão de Curso (TCC).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700 border-t border-slate-100 pt-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="block text-slate-900 text-sm mb-1">Períodos Iniciais (1º ao 4º)</strong>
                Fundamentos filosóficos, biológicos, epistemologia, psicologia do desenvolvimento e teorias da personalidade.
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="block text-slate-900 text-sm mb-1">Períodos Intermediários (5º ao 8º)</strong>
                Avaliação psicológica, psicodiagnóstico, psicopatologia, técnicas de intervenção e estágios básicos.
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="block text-slate-900 text-sm mb-1">Períodos Finais (9º e 10º)</strong>
                Estágios específicos de ênfase (Clínica no SPA, Social, Organizacional ou Escolar) e defesa de TCC.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Para consultar seu histórico ou equivalência de disciplinas, acesse o Elis.</span>
              <a
                href="https://www.univali.br/graduacao/psicologia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-700 hover:underline font-semibold flex items-center gap-1"
              >
                <span>Página do Curso na UNIVALI</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Perguntas Frequentes (FAQ) */}
      <section>
        <Container>
          <SectionTitle
            tag="Tire Suas Dúvidas"
            title="Perguntas Frequentes (FAQ)"
            subtitle="Respostas diretas para as dúvidas mais comuns sobre vida acadêmica, estágios e validações."
          />

          <FaqAccordion />
        </Container>
      </section>
    </div>
  );
}
