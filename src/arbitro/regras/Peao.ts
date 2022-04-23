import { Peca, Posicao, TipoTime } from "../../Constants";
import { casaOcupada, casaOcupadaPeloOponente } from "./RegrasGerais";

export const movimentoPeao = (posicaoInicial: Posicao, posicaoDesejada: Posicao, time: TipoTime, tabuleiroState: Peca[]): boolean => {
    const specialRow = time === TipoTime.JOGADOR ? 1 : 6;
    const direcaoPeao = time === TipoTime.JOGADOR ? 1 : -1;

    //MOVEMENT LOGIC
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
    //ATTACK LOGIC
    else if (
      posicaoDesejada.x - posicaoInicial.x === -1 &&
      posicaoDesejada.y - posicaoInicial.y === direcaoPeao
    ) {
      //ATTACK IN UPPER OR BOTTOM LEFT CORNER
      if (casaOcupadaPeloOponente(posicaoDesejada, tabuleiroState, time)) {
        return true;
      }
    } else if (
      posicaoDesejada.x - posicaoInicial.x === 1 &&
      posicaoDesejada.y - posicaoInicial.y === direcaoPeao
    ) {
      //ATTACK IN THE UPPER OR BOTTOM RIGHT CORNER
      if (casaOcupadaPeloOponente(posicaoDesejada, tabuleiroState, time)) {
        return true;
      }
    }

    return false;
  }