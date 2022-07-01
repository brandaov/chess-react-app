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

export const dica = [
  'Movimente o peão na diagonal, capturando a peça inimiga',
  'Primeiro movimente um dos peões, depois o peão ou bispo, e finalmente o peão ou bispo',
  'Utilize somente a rainha para o checkmate'
]
export const desafio = [
  'Movimento e captura de peão',
  'Consuma as todas as peças pretas',
  'Checkmate em 3 jogadas'
]

const peaoPreto = {
  imagem: `assets/images/peao_preto.png`,
  tipo: TipoPeca.PEAO,
  time: TipoTime.OPONENTE,
}

const torrePreto = {
  imagem: `assets/images/torre_preto.png`,
  tipo: TipoPeca.TORRE,
  time: TipoTime.OPONENTE,
};

const cavaloPreto = {
  imagem: `assets/images/cavalo_preto.png`,
  tipo: TipoPeca.CAVALO,
  time: TipoTime.OPONENTE,
};

const bispoPreto = {
  imagem: `assets/images/bispo_preto.png`,
  tipo: TipoPeca.BISPO,
  time: TipoTime.OPONENTE,
};

const peaoBranco = {
  imagem: `assets/images/peao_branco.png`,
  tipo: TipoPeca.PEAO,
  time: TipoTime.JOGADOR,
}

const rainhaPreto = {
  imagem: `assets/images/rainha_preto.png`,
  tipo: TipoPeca.RAINHA,
  time: TipoTime.OPONENTE,
}

const reiPreto = {
  imagem: `assets/images/rei_preto.png`,
  tipo: TipoPeca.REI,
  time: TipoTime.OPONENTE,
};

const torreBranco = {
  imagem: `assets/images/torre_branco.png`,
  tipo: TipoPeca.TORRE,
  time: TipoTime.JOGADOR,
};

const bispoBranco = {
  imagem: `assets/images/bispo_branco.png`,
  tipo: TipoPeca.BISPO,
  time: TipoTime.JOGADOR,
};

const reiBranco = {
  imagem: `assets/images/rei_branco.png`,
  tipo: TipoPeca.REI,
  time: TipoTime.JOGADOR,
};

const cavaloBranco = {
  imagem: `assets/images/cavalo_branco.png`,
  tipo: TipoPeca.CAVALO,
  time: TipoTime.JOGADOR,
};

const rainhaBranco = {
  imagem: `assets/images/rainha_branco.png`,
  tipo: TipoPeca.RAINHA,
  time: TipoTime.JOGADOR,
};

export const tabuleiroInicialState: Peca[] = [
  {
    ...torrePreto,
    posicao: {
      x: 0,
      y: 7,
    },
  },
  {
    ...cavaloPreto,
    posicao: {
      x: 1,
      y: 7,
    },
  },
  {
    ...bispoPreto,
    posicao: {
      x: 2,
      y: 7,
    },
  },
  {
    ...rainhaPreto,
    posicao: {
      x: 3,
      y: 7,
    },
  },
  {
    ...reiPreto,
    posicao: {
      x: 4,
      y: 7,
    },
  },
  {
    ...bispoPreto,
    posicao: {
      x: 5,
      y: 7,
    },
  },
  {
    ...cavaloPreto,
    posicao: {
      x: 6,
      y: 7,
    },
  },
  {
    ...torrePreto,
    posicao: {
      x: 7,
      y: 7,
    },
  },
  {
    ...peaoPreto,
    posicao: {
      x: 0,
      y: 6,
    },
  },
  {
    ...peaoPreto,
    posicao: {
      x: 1,
      y: 6,
    },
  },
  {
    ...peaoPreto,
    posicao: {
      x: 2,
      y: 6,
    },
  },
  {
    ...peaoPreto,
    posicao: {
      x: 3,
      y: 6,
    },
  },
  {
    ...peaoPreto,
    posicao: {
      x: 4,
      y: 6,
    },
  },
  {
    ...peaoPreto,
    posicao: {
      x: 5,
      y: 6,
    },
  },
  {
    ...peaoPreto,
    posicao: {
      x: 6,
      y: 6,
    },
  },
  {
    ...peaoPreto,
    posicao: {
      x: 7,
      y: 6,
    },
  },

  {
    ...torreBranco,
    posicao: {
      x: 0,
      y: 0,
    },
  },
  {
    ...cavaloBranco,
    posicao: {
      x: 1,
      y: 0,
    },
  },
  {
    ...bispoBranco,
    posicao: {
      x: 2,
      y: 0,
    },
  },
  {
    ...rainhaBranco,
    posicao: {
      x: 3,
      y: 0,
    },
  },
  {
    ...reiBranco,
    posicao: {
      x: 4,
      y: 0,
    },
  },
  {
    ...bispoBranco,
    posicao: {
      x: 5,
      y: 0,
    },
  },
  {
    ...cavaloBranco,
    posicao: {
      x: 6,
      y: 0,
    },
  },
  {
    ...torreBranco,
    posicao: {
      x: 7,
      y: 0,
    },
  },
  {
    ...peaoBranco,
    posicao: {
      x: 0,
      y: 1,
    },
  },
  {
    ...peaoBranco,
    posicao: {
      x: 1,
      y: 1,
    },
  },
  {
    ...peaoBranco,
    posicao: {
      x: 2,
      y: 1,
    },
  },
  {
    ...peaoBranco,
    posicao: {
      x: 3,
      y: 1,
    },
  },
  {
    ...peaoBranco,
    posicao: {
      x: 4,
      y: 1,
    },
  },
  {
    ...peaoBranco,
    posicao: {
      x: 5,
      y: 1,
    },
  },
  {
    ...peaoBranco,
    posicao: {
      x: 6,
      y: 1,
    },
  },
  {
    ...peaoBranco,
    posicao: {
      x: 7,
      y: 1,
    },
  },
];

interface Testes {
  teste: Array<Peca[]>;
  jogada: any;
  jogadaOponente: any;
}

export const testeTabuleiroState: Testes = {
  teste: [
    [
      {
        ...peaoBranco,
        posicao: {
          x: 4,
          y: 3,
        }
      },
      {
        ...peaoBranco,
        posicao: {
          x: 3,
          y: 3,
        }
      },
      {
        ...cavaloPreto,
        posicao: {
          x: 4,
          y: 4,
        }
      },
    ],
    [
      {
        ...peaoBranco,
        posicao: {
          x: 2,
          y: 3,
        }
      },
      {
        ...peaoBranco,
        posicao: {
          x: 4,
          y: 3,
        }
      },
      {
        ...peaoPreto,
        posicao: {
          x: 3,
          y: 4,
        }
      },
      {
        ...torrePreto,
        posicao: {
          x: 7,
          y: 4,
        }
      },
      {
        ...bispoBranco,
        posicao: {
          x: 6,
          y: 1,
        }
      },
      {
        ...cavaloPreto,
        posicao: {
          x: 2,
          y: 2,
        }
      },
    ],
    [
      {
        ...rainhaPreto,
        posicao: {
          x: 1,
          y: 0,
        },
      },
      {
        ...reiPreto,
        posicao: {
          x: 3,
          y: 7,
        },
      },
      {
        ...torrePreto,
        posicao: {
          x: 4,
          y: 4,
        },
      },
      {
        ...peaoPreto,
        posicao: {
          x: 5,
          y: 5,
        }
      },
      {
        ...peaoPreto,
        posicao: {
          x: 6,
          y: 6,
        }
      },
      {
        ...peaoPreto,
        posicao: {
          x: 7,
          y: 5,
        }
      },
      {
        ...peaoPreto,
        posicao: {
          x: 0,
          y: 3,
        }
      },
      {
        ...peaoBranco,
        posicao: {
          x: 0,
          y: 2
        }
      },
      {
        ...peaoBranco,
        posicao: {
          x: 3,
          y: 4
        }
      },
      {
        ...peaoBranco,
        posicao: {
          x: 5,
          y: 4
        }
      },
      {
        ...peaoBranco,
        posicao: {
          x: 6,
          y: 5
        }
      },
      {
        ...peaoBranco,
        posicao: {
          x: 7,
          y: 1
        }
      },
      {
        ...reiBranco,
        posicao: {
          x: 3,
          y: 5
        }
      },
      {
        ...rainhaBranco,
        posicao: {
          x: 3,
          y: 1
        }
      },
    ],
  ],
  jogada: [
    [
      {
        ...peaoBranco,
        posicao: {
          x: 4,
          y: 4,
        }
      },
    ],
    [
      {
        ...peaoBranco,
        posicao: {
          x: 3,
          y: 4,
        }
      },
      [{
        ...peaoBranco,
        posicao: {
          x: 3,
          y: 4,
        }
      }, {
        ...bispoBranco,
        posicao: {
          x: 3,
          y: 4,
        }
      }],
      [{
        ...bispoBranco,
        posicao: {
          x: 3,
          y: 4,
        }
      }, {
        ...peaoBranco,
        posicao: {
          x: 3,
          y: 4,
        }
      }],
    ],
    [
      {
        ...rainhaBranco,
        posicao: {
          x: 0,
          y: 4
        }
      },
      {
        ...rainhaBranco,
        posicao: {
          x: 0,
          y: 7
        }
      },
      {
        ...rainhaBranco,
        posicao: {
          x: 1,
          y: 7
        }
      },
    ]
  ],
  jogadaOponente: [
    [],
    [
      {
        ...cavaloPreto,
        posicao: {
          x: 3,
          y: 4,
        }
      },
      {
        ...torrePreto,
        posicao: {
          x: 3,
          y: 4,
        }
      },
    ],
    [
      {
        ...reiPreto,
        posicao: {
          x: 4,
          y: 7,
        },
      },
      {
        ...rainhaPreto,
        posicao: {
          x: 1,
          y: 7,
        },
      }
    ]
  ]
};
