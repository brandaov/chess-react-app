import { Peca, Posicao, mesmaPosicao, TipoTime } from "../../Constants";
import { casaVaziaOuOcupadaPeloOponente, casaOcupada } from "./RegrasGerais";

export const movimentoRei = (posicaoInicial: Posicao, posicaoDesejada: Posicao, time: TipoTime, tabuleiroState: Peca[]): boolean => {
  
    for(let i = 1; i < 2; i++) {
      // Diagonal
      let multiplicadorX = (posicaoDesejada.x < posicaoInicial.x) ? -1 : (posicaoDesejada.x > posicaoInicial.x) ? 1 : 0;
      let multiplicadorY = (posicaoDesejada.y < posicaoInicial.y) ? -1 : (posicaoDesejada.y > posicaoInicial.y) ? 1 : 0;

      let posicaoPassada: Posicao = {x: posicaoInicial.x + (i * multiplicadorX), y: posicaoInicial.y + (i * multiplicadorY)};

      if(mesmaPosicao(posicaoPassada, posicaoDesejada)) {
        if(casaVaziaOuOcupadaPeloOponente(posicaoPassada, tabuleiroState, time)) {
          return true;
        }
      } else {
        if(casaOcupada(posicaoPassada, tabuleiroState)) {
          break;
        }
      }
    }
    return false;
  }