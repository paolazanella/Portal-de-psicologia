import React from "react";
import { Mail, Instagram, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";

export function ContactChannels() {
  return (
    <div className="space-y-6">
      {/* Centro Academico Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-700 flex items-center justify-center font-serif font-bold text-base">
            CA
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Centro Acadêmico de Psicologia
            </h4>
            <p className="text-xs text-slate-500">Gestão Estudantil & Representação</p>
          </div>
        </div>

        <div className="space-y-2.5 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-brand-600 shrink-0" />
            <a href="mailto:ca.psicologia@univali.br" className="hover:text-brand-700 font-medium">
              ca.psicologia@univali.br
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Instagram className="w-4 h-4 text-brand-600 shrink-0" />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-700"
            >
              @capsicologia.univali
            </a>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>Campus Itajaí, Bloco F1 - Sala do Centro Acadêmico</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>Intervalos: 9h45 às 10h15 e 20h30 às 21h00</span>
          </div>
        </div>
      </div>

      {/* Atletica Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-base border border-amber-200/60">
            Ψ
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Atlética de Psicologia UNIVALI
            </h4>
            <p className="text-xs text-slate-500">Esportes, Torcida & Integração</p>
          </div>
        </div>

        <div className="space-y-2.5 text-xs text-slate-600">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-amber-600 shrink-0" />
            <a href="mailto:atletica.psico@univali.br" className="hover:text-amber-700 font-medium">
              atletica.psico@univali.br
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Instagram className="w-4 h-4 text-amber-600 shrink-0" />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700"
            >
              @atleticapsicounivali
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-4 h-4 text-amber-600 shrink-0" />
            <a
              href="https://chat.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-700"
            >
              Grupo de Avisos no WhatsApp (Comunidade)
            </a>
          </div>
        </div>
      </div>

      {/* Coordenacao & Secretaria Institucional */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-xs text-slate-600">
        <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
          Coordenação do Curso (Oficial UNIVALI)
        </h5>
        <p className="mb-2 text-slate-500">
          Para assuntos de matrícula, trancamento, transferência e validação oficial:
        </p>
        <div className="space-y-1.5">
          <p><strong>Local:</strong> Bloco F1 - Secretaria de Saúde</p>
          <p><strong>Telefone:</strong> (47) 3341-7500</p>
          <p><strong>Atendimento:</strong> Seg. a Sex. das 8h às 22h</p>
        </div>
      </div>
    </div>
  );
}
