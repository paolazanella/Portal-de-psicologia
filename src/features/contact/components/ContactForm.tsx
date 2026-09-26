"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [recipient, setRecipient] = useState<"ca" | "atletica" | "geral">("ca");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Em ambiente mock, simula sucesso
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center text-emerald-950">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <h3 className="text-lg font-bold">Mensagem enviada com sucesso!</h3>
        <p className="text-xs sm:text-sm text-emerald-800 mt-2 max-w-md mx-auto leading-relaxed">
          Obrigado pelo contato, {name}. Sua mensagem foi direcionada para a diretoria responsável e responderemos no e-mail informado ({email}) em breve.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
          }}
          className="mt-5 px-4 py-2 text-xs font-semibold text-emerald-900 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">
          Envie sua mensagem ou sugestão
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Coletamos apenas as informações essenciais para responder à sua solicitação.
        </p>
      </div>

      {/* Recipient Selector */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
          Para quem você deseja enviar?
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setRecipient("ca")}
            className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-colors ${
              recipient === "ca"
                ? "bg-brand-50 border-brand-500 text-brand-800 font-semibold"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            Centro Acadêmico
          </button>
          <button
            type="button"
            onClick={() => setRecipient("atletica")}
            className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-colors ${
              recipient === "atletica"
                ? "bg-cyan-50 border-cyan-500 text-cyan-950 font-semibold"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            Atlética Guaxas
          </button>
          <button
            type="button"
            onClick={() => setRecipient("geral")}
            className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-colors ${
              recipient === "geral"
                ? "bg-purple-50 border-purple-500 text-purple-900 font-semibold"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            Dúvida Geral
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Seu Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Ana Silva"
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Seu E-mail para Resposta <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@exemplo.com ou @edu.univali.br"
            className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Assunto
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Ex: Dúvida sobre carteirinha, sugestão para evento..."
          className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
        />
      </div>

      <div className="mb-5">
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem aqui..."
          className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all resize-y"
        />
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <span className="text-[11px] text-slate-400">
          Dados processados de acordo com a LGPD e enviados diretamente à gestão discente.
        </span>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 rounded-xl transition-colors shadow-sm shrink-0"
        >
          <span>Enviar Mensagem</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
}
