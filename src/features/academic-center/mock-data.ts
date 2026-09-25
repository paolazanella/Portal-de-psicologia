import { BoardMember, Announcement } from "@/types";

export interface Proposal {
  id: string;
  category: "Acadêmico" | "Infraestrutura" | "Integração" | "Transparência";
  title: string;
  description: string;
  status: "Em andamento" | "Concluída" | "Planejada";
}

export const CA_MEMBERS: BoardMember[] = [
  {
    id: "ca_1",
    name: "Mariana Silveira",
    role: "Presidente",
    semester: "7º Período",
    bio: "Focada em representação discente junto ao NDE e melhorias nas salas de estágio e clínica-escola.",
    email: "mariana.silveira@edu.univali.br",
    instagram: "@mari.psico",
  },
  {
    id: "ca_2",
    name: "Lucas Mendes",
    role: "Vice-Presidente",
    semester: "6º Período",
    bio: "Articulação de projetos de extensão comunitária e interlocução com os representantes de turma.",
    email: "lucas.mendes@edu.univali.br",
  },
  {
    id: "ca_3",
    name: "Beatriz Ramos",
    role: "Diretora Financeira",
    semester: "5º Período",
    bio: "Gestão dos recursos do CA, prestação pública de contas semestral e apoio aos eventos acadêmicos.",
    email: "beatriz.ramos@edu.univali.br",
  },
  {
    id: "ca_4",
    name: "Guilherme Furtado",
    role: "Diretor de Comunicação",
    semester: "4º Período",
    bio: "Responsável pela divulgação nos canais digitais, comunicação visual e apoio à transparência das reuniões.",
    email: "comunicacao.ca@edu.univali.br",
    instagram: "@gui.furtado",
  },
  {
    id: "ca_5",
    name: "Camila Dornelles",
    role: "Diretora de Assuntos Acadêmicos",
    semester: "8º Período",
    bio: "Acompanhamento do processo de horas complementares, monitorias e diálogo pedagógico com a coordenação.",
    email: "academicos.ca@edu.univali.br",
  },
  {
    id: "ca_6",
    name: "Rafael Nogueira",
    role: "Diretor de Eventos e Cultura",
    semester: "5º Período",
    bio: "Organização da Semana Acadêmica de Psicologia, mesas redondas, cine-debates e eventos culturais.",
    email: "eventos.ca@edu.univali.br",
  },
];

export const CA_PROPOSALS: Proposal[] = [
  {
    id: "prop_1",
    category: "Acadêmico",
    title: "Ciclo Contínuo de Minicursos Práticos",
    description: "Realização mensal de oficinas práticas sobre elaboração de documentos psicológicos e testes autorizados pelo SATEPSI.",
    status: "Em andamento",
  },
  {
    id: "prop_2",
    category: "Infraestrutura",
    title: "Revitalização da Sala de Convivência Discente",
    description: "Melhoria do espaço físico para descanso e estudos entre os turnos no bloco de Psicologia.",
    status: "Concluída",
  },
  {
    id: "prop_3",
    category: "Transparência",
    title: "Prestação de Contas Aberta e Digital",
    description: "Publicação semestral detalhada de entradas e saídas financeiras do CA no portal.",
    status: "Em andamento",
  },
  {
    id: "prop_4",
    category: "Integração",
    title: "Trote Solidário e Acolhimento aos Calouros",
    description: "Recepção humanizada dos novos alunos com arrecadação de alimentos e kit boas-vindas da Psicologia.",
    status: "Concluída",
  },
];

export const CA_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann_1",
    title: "Abertura de Inscrições para a XVIII Semana Acadêmica de Psicologia",
    summary: "Confira a programação completa de palestras, minicursos e submissão de trabalhos científicos.",
    content: "A Semana Acadêmica deste ano terá como temática central as 'Práticas Emergentes e Ética no Cuidado Psicológico'. O evento gerará 30 horas complementares para acadêmicos inscritos.",
    publishDate: "2026-09-20",
    author: "Gestão do CA",
    entityOwner: "centro_academico",
    isImportant: true,
  },
  {
    id: "ann_2",
    title: "Edital para Representantes de Turma 2026/2",
    summary: "Participe das reuniões colegiadas e ajude a construir as melhorias do curso.",
    content: "Estão abertas as inscrições para representantes e suplentes de todos os períodos. O formulário ficará disponível até a próxima sexta-feira.",
    publishDate: "2026-09-12",
    author: "Diretoria de Assuntos Acadêmicos",
    entityOwner: "centro_academico",
  },
  {
    id: "ann_3",
    title: "Horários de Atendimento Presencial na Sala do CA",
    summary: "Venha tirar dúvidas, retirar carteirinhas ou sugerir propostas.",
    content: "A sala do CA estará aberta nos intervalos dos turnos matutino e noturno (das 9h45 às 10h15 e das 20h30 às 21h00) para atender os acadêmicos.",
    publishDate: "2026-09-05",
    author: "Secretaria do CA",
    entityOwner: "centro_academico",
  },
];
