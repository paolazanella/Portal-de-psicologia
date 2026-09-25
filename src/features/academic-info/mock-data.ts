import { QuickLink, FaqItem } from "@/types";

export const QUICK_LINKS: QuickLink[] = [
  {
    id: "link_elis",
    title: "Sistema Elis (Portal do Aluno)",
    description: "Matrículas, notas semestrais, histórico escolar, atestados de frequência e boletos financeiros.",
    url: "https://elis.univali.br",
    category: "sistemas",
    badgeText: "Principal",
    isExternal: true,
  },
  {
    id: "link_moodle",
    title: "Ambiente Virtual Moodle UNIVALI",
    description: "Acesso a materiais de aula das disciplinas, entregas de trabalhos e fóruns de turmas.",
    url: "https://moodle.univali.br",
    category: "sistemas",
    badgeText: "Aulas",
    isExternal: true,
  },
  {
    id: "link_biblioteca",
    title: "Biblioteca Universitária & Periódicos Capes",
    description: "Consulta de acervo físico, renovação de livros, acervo digital e base de dados SIBI.",
    url: "https://www.univali.br/biblioteca",
    category: "servicos",
    isExternal: true,
  },
  {
    id: "link_calendario",
    title: "Calendário Acadêmico Oficial 2026",
    description: "Prazos de trancamento, período de provas finais, recessos e início de semestres letivos.",
    url: "https://www.univali.br",
    category: "academico",
    badgeText: "Oficial",
    isExternal: true,
  },
  {
    id: "link_cfp",
    title: "Conselho Federal de Psicologia (CFP)",
    description: "Código de Ética do Psicólogo, resoluções normativas e sistema de testes SATEPSI.",
    url: "https://site.cfp.org.br",
    category: "documentos",
    isExternal: true,
  },
  {
    id: "link_crp12",
    title: "CRP-12 (Conselho Regional de Psicologia SC)",
    description: "Orientações para formandos, registro profissional provisório e comissões temáticas.",
    url: "https://crpsc.org.br",
    category: "documentos",
    isExternal: true,
  },
];

export const ACADEMIC_HOURS_GUIDE = {
  totalRequired: 200,
  rulesSummary: [
    "Atividades de Ensino: Monitorias voluntárias ou remuneradas, disciplinas isoladas afins.",
    "Atividades de Pesquisa: Iniciação Científica (PIBIC/PROBIC), publicação de resumos e artigos em periódicos.",
    "Atividades de Extensão: Semanas acadêmicas, congressos, simpósios, cursos livres, projetos comunitários.",
    "Atividades Socioculturais e Esportivas: Gestão no CA, representação na Atlética, ações voluntárias.",
  ],
  stepByStep: [
    {
      step: 1,
      title: "Coleta do Certificado",
      desc: "Guarde sempre o comprovante digital ou físico com CNPJ, carga horária e assinatura do responsável.",
    },
    {
      step: 2,
      title: "Submissão no Elis",
      desc: "Acesse o Portal Elis > Requerimentos > Solicitação de Validação de Atividades Complementares.",
    },
    {
      step: 3,
      title: "Análise da Coordenação",
      desc: "A coordenação de curso avalia a adequação ao PPC da Psicologia e defere as horas no histórico.",
    },
  ],
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq_1",
    category: "Horas Complementares",
    question: "Quantas horas complementares preciso cumprir para me formar?",
    answer: "A matriz curricular do curso de Psicologia da UNIVALI exige o cumprimento de 200 horas de Atividades Complementares ao longo da graduação, distribuídas entre ensino, pesquisa e extensão.",
  },
  {
    id: "faq_2",
    category: "Horas Complementares",
    question: "Como envio meus certificados para validação?",
    answer: "A submissão é feita diretamente pelo Sistema Elis, no menu de protocolos e requerimentos. Anexe o PDF do certificado legível com a carga horária especificada. Fique atento aos prazos semestrais definidos no calendário acadêmico.",
  },
  {
    id: "faq_3",
    category: "Estágios & Clínica",
    question: "A partir de qual período começam os estágios supervisionados?",
    answer: "Os estágios básicos têm início a partir do 6º período (observação e intervenção básica institucional). Os estágios específicos (clínico, social, organizacional e escolar) ocorrem nos períodos finais (9º e 10º períodos), realizados no SPA (Serviço de Psicologia Aplicada) e em redes parceiras.",
  },
  {
    id: "faq_4",
    category: "Sistemas & Matrícula",
    question: "Onde consulto minha grade de horários e salas de aula?",
    answer: "A grade horária e as salas de cada disciplina são disponibilizadas no Sistema Elis no início de cada semestre. Caso haja alteração temporária de ensalamento, os avisos são fixados nos murais do Bloco F1 e comunicados via representantes de turma.",
  },
  {
    id: "faq_5",
    category: "Apoio ao Estudante",
    question: "Estou passando por dificuldades emocionais durante o semestre. Onde posso buscar ajuda?",
    answer: "A UNIVALI oferece o Programa Acolher (bloco F1, sala 304, telefone 47 3341-5503), com acolhimento psicológico gratuito e breve para todos os estudantes. Também há o canal gratuito do CVV (Centro de Valorização da Vida) discando 188.",
  },
  {
    id: "faq_6",
    category: "Entidades Estudantis",
    question: "Qual a diferença entre o Centro Acadêmico e a Atlética?",
    answer: "O Centro Acadêmico (CA) é o órgão oficial de representação política e acadêmica dos estudantes (luta por melhorias no curso, diálogo com a coordenação, eventos científicos e transparência). A Atlética é a entidade responsável pela promoção esportiva, modalidades, produtos, treinos e integração social universitária.",
  },
];
