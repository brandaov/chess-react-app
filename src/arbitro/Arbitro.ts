import {
  TipoPeca,
  TipoTime,
  Peca,
  Posicao,
} from "../Constants";

import {
  movimentoPeao,
  movimentoCavalo,
  movimentoBispo,
  movimentoTorre,
  movimentoRainha,
  movimentoRei,
} from "./regras";

export default class Arbitro {
  enPassant(
    posicaoInicial: Posicao,
    posicaoDesejada: Posicao,
    tipo: TipoPeca,
    time: TipoTime,
    tabuleiroState: Peca[]
  ) {
    const direcaoPeao = time === TipoTime.JOGADOR ? 1 : -1;

    if (tipo === TipoPeca.PEAO) {
      if (
        (posicaoDesejada.x - posicaoInicial.x === -1 ||
          posicaoDesejada.x - posicaoInicial.x === 1) &&
        posicaoDesejada.y - posicaoInicial.y === direcaoPeao
      ) {
        const peca = tabuleiroState.find(
          (p) =>
            p.posicao.x === posicaoDesejada.x &&
            p.posicao.y === posicaoDesejada.y - direcaoPeao &&
            p.enPassant
        );
        if (peca) {
          return true;
        }
      }
    }

    return false;
  }

  isReiEmPerigo(
    posicaoDesejada: Posicao,
    time: TipoTime,
    tabuleiroState: Peca[]
  ) {
    let isEmPerigo: boolean = false;
    const pecasOponente = tabuleiroState.filter(
      (p) =>
        p.time !== time
    );
    pecasOponente.forEach((p) => {
      if (!(p.tipo === TipoPeca.REI)) {
        if (
          this.isMovimentoValido(p.posicao, posicaoDesejada, p.tipo, p.time, tabuleiroState, this.retornaTimeOponente(p.time))
        ) {
          isEmPerigo = true;
        }
      }
    });
    return isEmPerigo;
  }

  // TODO:
  // Castling
  // Check
  // Checkmate
  // Stalemate
  isMovimentoValido(posicaoInicial: Posicao, posicaoDesejada: Posicao, tipo: TipoPeca, time: TipoTime, tabuleiroState: Peca[], vezJogador: TipoTime) {
    let movimentoValido = false;
    if (vezJogador === time) {
      switch (tipo) {
        case TipoPeca.PEAO:
          movimentoValido = movimentoPeao(posicaoInicial, posicaoDesejada, time, tabuleiroState);
          break;
        case TipoPeca.TORRE:
          movimentoValido = movimentoTorre(posicaoInicial, posicaoDesejada, time, tabuleiroState);
          break;
        case TipoPeca.BISPO:
          movimentoValido = movimentoBispo(posicaoInicial, posicaoDesejada, time, tabuleiroState);
          break;
        case TipoPeca.CAVALO:
          movimentoValido = movimentoCavalo(posicaoInicial, posicaoDesejada, time, tabuleiroState);
          break;
        case TipoPeca.RAINHA:
          movimentoValido = movimentoRainha(posicaoInicial, posicaoDesejada, time, tabuleiroState);
          break;
        case TipoPeca.REI:
          movimentoValido = (movimentoRei(posicaoInicial, posicaoDesejada, time, tabuleiroState) && !(this.isReiEmPerigo(posicaoDesejada, time, tabuleiroState)));
      }
    }
    return movimentoValido;
  }

  private retornaTimeOponente(time: TipoTime): TipoTime {
    return time === 1 ? 0 : 1;
  }
}