import { Peca, Posicao, TipoTime } from "../../Constants";
import { casaOcupada, casaOcupadaPeloOponente } from "./RegrasGerais";

export const movimentoPeao = (posicaoInicial: Posicao, posicaoDesejada: Posicao, time: TipoTime, tabuleiroState: Peca[]): boolean => {
    const specialRow = time === TipoTime.JOGADOR ? 1 : 6;
    const direcaoPeao = time === TipoTime.JOGADOR ? 1 : -1;

    // LÓGICA DE MOVIMENTOS
    if (
      posicaoInicial.x === posicaoDesejada.x &&
      posicaoInicial.y === specialRow &&
      posicaoDesejada.y - posicaoInicial.y === 2 * direcaoPeao
    ) {
      if (
        !casaOcupada(posicaoDesejada, tabuleiroState) &&
        !casaOcupada(
          { x: posicaoDesejada.x, y: posicaoDesejada.y - direcaoPeao },
          tabuleiroState
        )
      ) {
        return true;
      }
    } else if (
      posicaoInicial.x === posicaoDesejada.x &&
      posicaoDesejada.y - posicaoInicial.y === direcaoPeao
    ) {
      if (!casaOcupada(posicaoDesejada, tabuleiroState)) {
        return true;
      }
    }
    // LÓGICA DE ATAQUE
    else if (
      posicaoDesejada.x - posicaoInicial.x === -1 &&
      posicaoDesejada.y - posicaoInicial.y === direcaoPeao
    ) {
      // ATAQUE NOS CANTOS SUPERIOR E INFERIOR DA ESQUERDA
      if (casaOcupadaPeloOponente(posicaoDesejada, tabuleiroState, time)) {
        return true;
      }
    } else if (
      posicaoDesejada.x - posicaoInicial.x === 1 &&
      posicaoDesejada.y - posicaoInicial.y === direcaoPeao
    ) {
      // ATAQUE NOS CANTOS SUPERIOR E INFERIOR DA DIREITA
      if (casaOcupadaPeloOponente(posicaoDesejada, tabuleiroState, time)) {
        return true;
      }
    }

    return false;
  }