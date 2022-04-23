export const EIXO_VERTICAL = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const EIXO_HORIZONTAL = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const TAMANHO_GRID = 100;

export function mesmaPosicao(p1: Posicao, p2: Posicao) {
  return p1.x === p2.x && p1.y === p2.y;
}

export interface Posicao {
  x: number;
  y: number;
}

export enum TipoTime {
  OPONENTE,
  JOGADOR,
}

export enum TipoPeca {
  PEAO,
  BISPO,
  CAVALO,
  TORRE,
  RAINHA,
  REI,
}

export interface Peca {
  imagem: string;
  posicao: Posicao;
  tipo: TipoPeca;
  time: TipoTime;
  enPassant?: boolean;
}

export const tabuleiroInicialState: Peca[] = [
  {
    imagem: `assets/images/torre_preto.png`,
    posicao: {
      x: 0,
      y: 7,
    },
    tipo: TipoPeca.TORRE,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/cavalo_preto.png`,
    posicao: {
      x: 1,
      y: 7,
    },
    tipo: TipoPeca.CAVALO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/bispo_preto.png`,
    posicao: {
      x: 2,
      y: 7,
    },
    tipo: TipoPeca.BISPO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/rainha_preto.png`,
    posicao: {
      x: 3,
      y: 7,
    },
    tipo: TipoPeca.RAINHA,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/rei_preto.png`,
    posicao: {
      x: 4,
      y: 7,
    },
    tipo: TipoPeca.REI,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/bispo_preto.png`,
    posicao: {
      x: 5,
      y: 7,
    },
    tipo: TipoPeca.BISPO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/cavalo_preto.png`,
    posicao: {
      x: 6,
      y: 7,
    },
    tipo: TipoPeca.CAVALO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/torre_preto.png`,
    posicao: {
      x: 7,
      y: 7,
    },
    tipo: TipoPeca.TORRE,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/peao_preto.png`,
    posicao: {
      x: 0,
      y: 6,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/peao_preto.png`,
    posicao: {
      x: 1,
      y: 6,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/peao_preto.png`,
    posicao: {
      x: 2,
      y: 6,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/peao_preto.png`,
    posicao: {
      x: 3,
      y: 6,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/peao_preto.png`,
    posicao: {
      x: 4,
      y: 6,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/peao_preto.png`,
    posicao: {
      x: 5,
      y: 6,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/peao_preto.png`,
    posicao: {
      x: 6,
      y: 6,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.OPONENTE,
  },
  {
    imagem: `assets/images/peao_preto.png`,
    posicao: {
      x: 7,
      y: 6,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.OPONENTE,
  },

  {
    imagem: `assets/images/torre_branco.png`,
    posicao: {
      x: 0,
      y: 0,
    },
    tipo: TipoPeca.TORRE,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/cavalo_branco.png`,
    posicao: {
      x: 1,
      y: 0,
    },
    tipo: TipoPeca.CAVALO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/bispo_branco.png`,
    posicao: {
      x: 2,
      y: 0,
    },
    tipo: TipoPeca.BISPO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/rainha_branco.png`,
    posicao: {
      x: 3,
      y: 0,
    },
    tipo: TipoPeca.RAINHA,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/rei_branco.png`,
    posicao: {
      x: 4,
      y: 0,
    },
    tipo: TipoPeca.REI,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/bispo_branco.png`,
    posicao: {
      x: 5,
      y: 0,
    },
    tipo: TipoPeca.BISPO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/cavalo_branco.png`,
    posicao: {
      x: 6,
      y: 0,
    },
    tipo: TipoPeca.CAVALO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/torre_branco.png`,
    posicao: {
      x: 7,
      y: 0,
    },
    tipo: TipoPeca.TORRE,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/peao_branco.png`,
    posicao: {
      x: 0,
      y: 1,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/peao_branco.png`,
    posicao: {
      x: 1,
      y: 1,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/peao_branco.png`,
    posicao: {
      x: 2,
      y: 1,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/peao_branco.png`,
    posicao: {
      x: 3,
      y: 1,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/peao_branco.png`,
    posicao: {
      x: 4,
      y: 1,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/peao_branco.png`,
    posicao: {
      x: 5,
      y: 1,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/peao_branco.png`,
    posicao: {
      x: 6,
      y: 1,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.JOGADOR,
  },
  {
    imagem: `assets/images/peao_branco.png`,
    posicao: {
      x: 7,
      y: 1,
    },
    tipo: TipoPeca.PEAO,
    time: TipoTime.JOGADOR,
  },
];
