import { BoardMember, SportModality, AthleticProduct } from "@/types";

export interface Tournament {
  id: string;
  name: string;
  season: string;
  status: "Em disputa" | "Próxima edição" | "Campeão Recente";
  description: string;
  location: string;
}

export const ATLETICA_MEMBERS: BoardMember[] = [
  {
    id: "atl_1",
    name: "Leonardo Vasconcelos",
    role: "Presidente Geral",
    semester: "6º Período",
    bio: "Coordenação geral das modalidades, patrocínios esportivos e representação na Liga das Atléticas.",
    email: "leonardo.vasc@edu.univali.br",
    instagram: "@leo.atletica",
  },
  {
    id: "atl_2",
    name: "Julia Becker",
    role: "Diretora de Esportes",
    semester: "5º Período",
    bio: "Supervisão técnica dos times masculinos e femininos, reservas de quadras e cronograma de treinos.",
    email: "esportes.atletica@edu.univali.br",
  },
  {
    id: "atl_3",
    name: "Thiago Prado",
    role: "Diretor de Produtos & Vendas",
    semester: "4º Período",
    bio: "Gestão dos mantos oficiais da Psicologia, canecas, moletons e tirantes da Atlética.",
    email: "produtos.atletica@edu.univali.br",
  },
  {
    id: "atl_4",
    name: "Larissa Fontoura",
    role: "Diretora de Eventos & Bateria",
    semester: "7º Período",
    bio: "Organização dos churrascos de integração, jogos universitários e ensaios da torcida.",
    email: "eventos.atletica@edu.univali.br",
  },
];

export const SPORT_MODALITIES: SportModality[] = [
  {
    id: "mod_1",
    name: "Futsal Masculino & Feminino",
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
    name: "E-Sports (League of Legends & Valorant)",
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
    description: "A maior competição universitária intercursos da região com mais de 20 cursos disputando o troféu geral.",
    location: "Complexo Esportivo Campus Itajaí",
  },
  {
    id: "tour_2",
    name: "INTERPSICO Sul",
    season: "Novembro de 2026",
    status: "Próxima edição",
    description: "Encontro esportivo e festivo reunindo atléticas de Psicologia dos estados de SC, PR e RS.",
    location: "Balneário Camboriú / Itajaí",
  },
  {
    id: "tour_3",
    name: "Copa das Atléticas do Vale",
    season: "2026/1",
    status: "Campeão Recente",
    description: "Vice-campeão no futsal feminino e ouro no vôlei misto!",
    location: "Ginásio Multiuso",
  },
];

export const ATHLETIC_PRODUCTS: AthleticProduct[] = [
  {
    id: "prod_1",
    name: "Manto Oficial Psicologia 2026 (Preto e Dourado)",
    description: "Camisa dry-fit de alto rendimento com brasão da Atlética de Psicologia bordado no peito.",
    price: 69.90,
    status: "disponivel",
    sizes: ["PP", "P", "M", "G", "GG", "XG"],
  },
  {
    id: "prod_2",
    name: "Moletom Canguru Psicologia Univale",
    description: "Moletom flanelado premium com capuz e bolso canguru, estampa em relevo clássico universitário.",
    price: 139.90,
    status: "sob_encomenda",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "prod_3",
    name: "Caneca de Alumínio 850ml com Tirante Oficial",
    description: "Caneca térmica personalizada com tirante largo sublimado de 1,40m com o símbolo Psi da Atlética.",
    price: 45.00,
    status: "disponivel",
  },
  {
    id: "prod_4",
    name: "Samba-canção / Shorts Oficial de Jogo",
    description: "Tecido respirável e flexível, perfeito para treinos, jogos e torcida nos finais de semana.",
    price: 49.90,
    status: "disponivel",
    sizes: ["P", "M", "G"],
  },
];
