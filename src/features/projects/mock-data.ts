import { Project } from "@/types";

export const PROGRAMA_ACOLHER_DATA: Project = {
  id: "proj_acolher",
  title: "Programa Acolher",
  description: "Programa institucional da UNIVALI voltado ao acolhimento psicológico de acadêmicos, docentes e colaboradores.",
  category: "Acolhimento & Saúde Mental",
  entityOwner: "univali",
  isInstitutional: true,
  contactEmail: "acolher@univali.br",
  contactPhone: "(47) 3341-5503",
  officialUrl: "https://www.univali.br/vida-no-campus/acolher/Paginas/default.aspx",
  accessInfo: "Atendimento gratuito para acadêmicos regularmente matriculados, professores e corpo técnico-administrativo da UNIVALI.",
  details: {
    location: "Campus Itajaí, bloco F1, sala 304",
    hours: "Segunda a sexta-feira, das 8h às 21h",
    targetAudience: "Acadêmicos, docentes e colaboradores da UNIVALI",
    features: [
      "Atendimento 100% gratuito",
      "Modalidade presencial ou online",
      "Acolhimento psicológico breve e pontual",
      "Encaminhamentos qualificados para outros serviços de saúde mental da rede",
      "Não realiza psicoterapia clínica de longa duração",
    ],
  },
};

export const MOCK_PROJECTS: Project[] = [
  PROGRAMA_ACOLHER_DATA,
  {
    id: "proj_trote",
    title: "Trote Solidário & Sustentável da Psicologia",
    description: "Iniciativa do Centro Acadêmico que substitui práticas humilhantes por arrecadação de alimentos, produtos de higiene e livros destinados a instituições parceiras de Itajaí.",
    category: "Ação Social",
    entityOwner: "centro_academico",
    contactEmail: "ca.psicologia@univali.br",
    accessInfo: "Realizado todo início de semestre no pátio do Bloco F1. Pontuação para as turmas de calouros e veteranos.",
    details: {
      location: "Campus Itajaí - Tenda Central & Bloco F1",
      hours: "Primeiras 3 semanas de cada semestre letivo",
      features: [
        "Mais de 1.2 toneladas de alimentos arrecadados em 2026/1",
        "Parceria com asilos e abrigos municipais de Itajaí",
        "Entrega de certificados de ação cidadã para os voluntários",
      ],
    },
  },
  {
    id: "proj_cine",
    title: "Cine-Psi: Cinema, Subjetividade & Sociedade",
    description: "Projeto de extensão discente com sessões mensais de filmes e documentários seguidos de debates com psicólogos clínicos, sociais e docentes.",
    category: "Extensão Universitária",
    entityOwner: "centro_academico",
    contactEmail: "cultura.ca@edu.univali.br",
    accessInfo: "Aberto a estudantes de qualquer curso da UNIVALI e comunidade externa.",
    details: {
      location: "Auditório Bloco B2 / Sala Multimídia",
      hours: "Última quinta-feira do mês, às 18h30",
      features: [
        "Debates com convidados especialistas",
        "Emissão de certificado de horas complementares",
        "Temas alinhados à luta antimanicomial e direitos humanos",
      ],
    },
  },
  {
    id: "proj_psi_esportiva",
    title: "PsicoEmMovimento: Esporte & Bem-Estar Universitário",
    description: "Projeto capitaneado pela Atlética promovendo atividade física regular, torneios recreativos e integração como fator de proteção à saúde mental.",
    category: "Esporte & Integração",
    entityOwner: "atletica",
    contactEmail: "atletica.psico@univali.br",
    accessInfo: "Treinos semanais gratuitos abertos para todos os períodos do curso.",
    details: {
      location: "Complexo Esportivo UNIVALI",
      hours: "Terças, quintas e sábados",
      features: [
        "6 modalidades ativas",
        "Apoio de monitores dos períodos avançados",
        "Equipes mistas e de incentivo à prática inicial",
      ],
    },
  },
  {
    id: "proj_plantao",
    title: "Serviço de Psicologia Aplicada (SPA UNIVALI)",
    description: "Clínica-escola de Psicologia onde os acadêmicos dos períodos finais realizam seus estágios curriculares supervisionados por professores mestres e doutores.",
    category: "Extensão Universitária",
    entityOwner: "univali",
    isInstitutional: true,
    officialUrl: "https://www.univali.br",
    accessInfo: "Atendimento psicoterápico à comunidade externa e triagem por ordem de inscrição semestral.",
    details: {
      location: "Campus Itajaí - Bloco F1 - Clínica Integrada de Saúde",
      hours: "Segunda a sexta, das 8h às 21h30",
      features: [
        "Supervisão direta por docentes do corpo permanente",
        "Abordagens Fenomenológica, Psicanalítica e TCC",
        "Atendimento infantil, adolescente, adulto e idoso",
      ],
    },
  },
];
