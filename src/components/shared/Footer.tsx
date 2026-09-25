import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { HeartHandshake, ExternalLink, ShieldCheck, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <Container size="wide">
        {/* Urgent Mental Health / Support Banner */}
        <div className="mb-12 p-6 rounded-xl bg-slate-800/90 border border-slate-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Precisa de acolhimento psicológico imediato?
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Este portal é um espaço informativo estudantil e <strong className="text-slate-200">não realiza atendimentos ou diagnósticos</strong>.
                Para apoio psicológico na UNIVALI, procure o <strong className="text-purple-300">Programa Acolher</strong> (47) 3341-5503 ou o <strong className="text-purple-300">CVV (Centro de Valorização da Vida) pelo telefone 188</strong> (gratuito, 24 horas).
              </p>
            </div>
          </div>
          <Link
            href="/projetos#programa-acolher"
            className="shrink-0 px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors whitespace-nowrap"
          >
            Ver Programa Acolher
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800 text-sm">
          {/* Col 1: Identity */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded bg-brand-600 text-white flex items-center justify-center font-serif font-bold text-sm">
                Ψ
              </span>
              <span className="font-bold text-white text-base">
                Portal de Psicologia
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Iniciativa unificada do Centro Acadêmico e da Atlética de Psicologia da UNIVALI (Campus Itajaí). Centralizando comunicação, eventos e vivência acadêmica.
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <span>Campus Itajaí · Santa Catarina</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Navegação Rápida
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início do Portal
                </Link>
              </li>
              <li>
                <Link href="/centro-academico" className="hover:text-white transition-colors">
                  Centro Acadêmico (CA)
                </Link>
              </li>
              <li>
                <Link href="/atletica" className="hover:text-white transition-colors">
                  Atlética de Psicologia
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-white transition-colors">
                  Calendário de Eventos
                </Link>
              </li>
              <li>
                <Link href="/informacoes-academicas" className="hover:text-white transition-colors">
                  Informações Acadêmicas & Elis
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="hover:text-white transition-colors">
                  Projetos & Acolher
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sistemas Oficiais */}
          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Sistemas Oficiais UNIVALI
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://elis.univali.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Portal Elis do Aluno</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.univali.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Site Oficial da UNIVALI</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.univali.br/graduacao/psicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Página do Curso de Psicologia</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.univali.br/vida-no-campus/acolher/Paginas/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Programa Acolher (Oficial)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Transparência */}
          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Gestão & Contato
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Dúvidas, sugestões ou envio de matérias para divulgação no portal:
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:ca.psicologia@univali.br" className="hover:text-white">
                  ca.psicologia@univali.br
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200"
                >
                  <ShieldCheck className="w-3 h-3" />
                  <span>Área Administrativa (RBAC)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Portal de Psicologia UNIVALI. Projeto independente de comunicação estudantil.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/contato" className="hover:text-white">
              Canais de Contato
            </Link>
            <span>·</span>
            <Link href="/admin" className="hover:text-white">
              Acesso da Gestão
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
