import { BoardMember, SportModality, AthleticProduct } from "@/types";

export interface Tournament {
  id: string;
  name: string;
  season: string;
  status: "Em disputa" | "Próxima edição" | "Campeão Recente";
  description: string;
  location: string;
}

export const GUAXAS_MASCOT_INFO = {
  name: "Guaxas",
  subtitle: "O Mascote Oficial da A.A.A.P.U.",
  fullName: "Associação Atlética Acadêmica de Psicologia UNIVALI",
  tagline: "Agilidade, foco, resiliência e garra coletiva nas quadras e na torcida.",
  description:
    "Inspirado no guaxinim — animal símbolo de astúcia, agilidade e inteligência adaptativa —, o Guaxas personifica o espírito guerreiro da Psicologia UNIVALI. Presente em cada treino, clássico universitário e campeonato interestadual, o mascote representa a união inabalável de todos os semestres do curso.",
  colors: [
    { name: "Azul Escuro", hex: "#0B1C2E", role: "Base institucional" },
    { name: "Azul Petróleo", hex: "#0E7490", role: "Força e profundidade" },
    { name: "Ciano Elétrico", hex: "#06B6D4", role: "Energia esportiva" },
    { name: "Cinza & Branco", hex: "#E2E8F0", role: "Pelagem e destaque" },
    { name: "Preto", hex: "#09121D", role: "Definição e contraste" },
  ],
  motto: "A.A.A.P.U. · Raça, Mente & Coração",
};

export const ATLETICA_MEMBERS: BoardMember[] = [
  {
    id: "atl_1",
    name: "Leonardo Vasconcelos",
    role: "Presidente Geral (Guaxas)",
    semester: "6º Período",
    bio: "Coordenação geral das modalidades, parcerias esportivas e representação da Psicologia na Liga das Atléticas.",
    email: "leonardo.vasc@edu.univali.br",
    instagram: "@leo.guaxas",
  },
  {
    id: "atl_2",
    name: "Julia Becker",
    role: "Diretora de Esportes",
    semester: "5º Período",
    bio: "Supervisão técnica dos times masculinos e femininos, reservas de quadras no Bloco 21 e cronograma de treinos.",
    email: "esportes.atletica@edu.univali.br",
  },
  {
    id: "atl_3",
    name: "Thiago Prado",
    role: "Diretor de Produtos & Identidade",
    semester: "4º Período",
    bio: "Gestão dos mantos oficiais Guaxas, tirantes sublimados, canecas e moletons da Atlética.",
    email: "produtos.atletica@edu.univali.br",
  },
  {
    id: "atl_4",
    name: "Larissa Fontoura",
    role: "Diretora de Eventos & Bateria Guaxas",
    semester: "7º Período",
    bio: "Organização dos encontros de integração, ensaios da torcida e viagens para os jogos universitários.",
    email: "eventos.atletica@edu.univali.br",
  },
];

export const SPORT_MODALITIES: SportModality[] = [
  {
    id: "mod_1",
    name: "Futsal Masculino & Feminino (Guaxas)",
    category: "coletivo",
    schedule: "Terças e Quintas, 21h30 às 23h00",
    location: "Ginásio de Esportes UNIVALI - Bloco 21",
    coachOrLeader: "Capitão Gabriel / Capitã Julia",
    status: "treinos_abertos",
  },
  {
    id: "mod_2",
    name: "Voleibol Misto",
    category: "coletivo",
    schedule: "Segundas e Quartas, 18h30 às 20h00",
    location: "Quadra Poliesportiva Coberta",
    coachOrLeader: "Coordenador Matheus",
    status: "treinos_abertos",
  },
  {
    id: "mod_3",
    name: "Handebol Feminino",
    category: "coletivo",
    schedule: "Sábados, 10h00 às 12h00",
    location: "Ginásio de Esportes UNIVALI",
    coachOrLeader: "Capitã Letícia",
    status: "em_competicao",
  },
  {
    id: "mod_4",
    name: "Basquetebol 3x3",
    category: "coletivo",
    schedule: "Sextas-feiras, 17h30 às 19h00",
    location: "Quadra Externa de Basquete",
    coachOrLeader: "Arthur Vilela",
    status: "treinos_abertos",
  },
  {
    id: "mod_5",
    name: "E-Sports Guaxas (LoL & Valorant)",
    category: "e-sports",
    schedule: "Treinos semanais online no Discord",
    location: "Canal Oficial Discord da Atlética",
    coachOrLeader: "Capitão Felipe (Nick: PsiGod)",
    status: "treinos_abertos",
  },
  {
    id: "mod_6",
    name: "Atletismo & Corrida de Rua",
    category: "individual",
    schedule: "Sábados, 08h00 às 09h30",
    location: "Pista de Atletismo - Setor Esportivo",
    coachOrLeader: "Treinadora Bianca",
    status: "treinos_abertos",
  },
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: "tour_1",
    name: "JAU - Jogos Acadêmicos UNIVALI",
    season: "Edição 2026/2",
    status: "Em disputa",
    description: "A maior competição universitária intercursos da região com a torcida Guaxas em peso disputando o troféu geral.",
    location: "Complexo Esportivo Campus Itajaí",
  },
  {
    id: "tour_2",
    name: "INTERPSICO Sul",
    season: "Novembro de 2026",
    status: "Próxima edição",
    description: "Encontro esportivo e de integração reunindo atléticas de Psicologia dos estados de SC, PR e RS.",
    location: "Balneário Camboriú / Itajaí",
  },
  {
    id: "tour_3",
    name: "Copa das Atléticas do Vale",
    season: "2026/1",
    status: "Campeão Recente",
    description: "Vice-campeão no futsal feminino e ouro invicto no voleibol misto Guaxas!",
    location: "Ginásio Multiuso",
  },
];

export const ATHLETIC_PRODUCTS: AthleticProduct[] = [
  {
    id: "prod_1",
    name: "Manto Oficial Guaxas 2026 (Azul Petróleo, Preto & Ciano)",
    description: "Camisa dry-fit de alto rendimento com brasão A.A.A.P.U. e textura geométrica em degradê petróleo/ciano.",
    price: 69.90,
    status: "disponivel",
    sizes: ["PP", "P", "M", "G", "GG", "XG"],
  },
  {
    id: "prod_2",
    name: "Moletom Canguru Guaxas Heavyweight",
    description: "Moletom flanelado premium grafite/preto com capuz, estampa bordada do Guaxas e forro interno ciano.",
    price: 139.90,
    status: "sob_encomenda",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "prod_3",
    name: "Caneca de Alumínio 850ml com Tirante Oficial Guaxas",
    description: "Caneca térmica preta fosca com tirante largo exclusivo de 1,40m com o mascote e logo A.A.A.P.U.",
    price: 45.00,
    status: "disponivel",
  },
  {
    id: "prod_4",
    name: "Shorts Oficial de Treino e Jogo Guaxas",
    description: "Tecido respirável e flexível em preto e recortes em azul petróleo, perfeito para treinos e arquibancada.",
    price: 49.90,
    status: "disponivel",
    sizes: ["P", "M", "G"],
  },
];
