import { type LucideIcon, Video, Navigation, Radio, Camera } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Camera,
    title: "Diretor de Fotografia",
    description: "Criação da identidade visual e supervisão da equipe de câmera.",
  },
  {
    icon: Video,
    title: "Operador de Câmera",
    description: "Foquista e 1º Assistente de Câmera.",
  },
  {
    icon: Navigation,
    title: "Imagens Aéreas",
    description: "Drones FPV e DJI 4K para imagens aéreas dinâmicas.",
  },
  {
    icon: Radio,
    title: "Transmissão ao Vivo",
    description: "Soluções completas para eventos e transmissões online.",
  },
];

export type PortfolioVideo = {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
};

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: "polico-alimentos",
    title: "Polico Alimentos",
    youtubeId: "C0yLg3p2d24",
    description: "Fui responsável pela produção e direção deste vídeo institucional para a Polico Alimentos. Desenvolvemos o roteiro, organizei a pré-produção, equipe, cronograma e locações. A gravação aconteceu ao longo de cinco dias, passando pelas três fábricas da empresa, captando cenas dos processos e dos funcionários, além de imagens aéreas com drone. A direção de fotografia e operação de câmera ficaram por conta de Isaias Pereira, trazendo um olhar técnico e estético para o projeto. Também realizamos filmagens em estúdio para detalhes dos produtos. A edição ficou por conta de Bruno Carvalho, com locução de Jorge Neri, resultando em um vídeo que apresenta a essência e a qualidade da marca.",
  },
  {
    id: "luisah-um-poquito",
    title: "Luisah - Um Poquito (Videoclipe)",
    youtubeId: "tlcCxU0jp-0",
    description: "Codirigi este videoclipe com Priscyla Farina, assumindo também a direção de fotografia. A ideia veio da cantora Luisah, nossa amiga da faculdade, com quem já trabalhamos em curtas, TCC e um outro videoclipe no início da faculdade. Passamos por todas as etapas, da pré-produção à pós, com dias e noites seguidos de planejamento e execução. Além da fotografia, fui responsável por montar a equipe de câmera, parte da produção e a direção da edição, chegando a editar algumas partes do vídeo. Priscyla cuidou da cenografia, figurino e coreografia, enquanto juntos garantimos que a essência da música fosse traduzida visualmente.",
  },
  {
    id: "da-um-nip-ai",
    title: "Dá um Nip Ai (Comercial)",
    youtubeId: "66IARSV2xfs",
    description: "Este comercial foi gravado em dois dias em uma casa locada em São José dos Campos. Fui chamado como operador de câmera pela produtora GPM, trabalhando com uma equipe incrível para dar vida ao projeto. A direção foi de Lincoln, e juntos garantimos uma produção bem alinhada, com um set dinâmico com um ótimo resultado.",
  },
  {
    id: "drone-flyby-ilhabela",
    title: "Drone Flyby Ilhabela",
    youtubeId: "RL8OuAF78Xk",
    description: "Este vídeo é um compilado de imagens aéreas captadas em Ilhabela, SP, combinando takes feitos com um drone estabilizado (DJI 4K) e um drone FPV em 4K. O resultado é uma sequência dinâmica que destaca as paisagens incríveis da região sob diferentes perspectivas.",
  },
];
