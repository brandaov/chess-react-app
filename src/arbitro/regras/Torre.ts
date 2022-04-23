import { Peca, Posicao, mesmaPosicao, TipoTime } from "../../Constants";
import { casaVaziaOuOcupadaPeloOponente, casaOcupada } from "./RegrasGerais";

export const movimentoTorre = (posicaoInicial: Posicao, posicaoDesejada: Posicao, time: TipoTime, tabuleiroState: Peca[]): boolean => {
    if(posicaoInicial.x === posicaoDesejada.x) {
      for(let i = 1; i < 8; i++) {
        let multiplicador = (posicaoDesejada.y < posicaoInicial.y) ? -1 : 1;

        let posicaoPassada: Posicao = {x: posicaoInicial.x, y: posicaoInicial.y + (i * multiplicador)}; 
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
    }

    if(posicaoInicial.y === posicaoDesejada.y) {
      for(let i = 1; i < 8; i++) {
        let multiplicador = (posicaoDesejada.x < posicaoInicial.x) ? -1 : 1;

        let posicaoPassada: Posicao = {x: posicaoInicial.x + (i * multiplicador), y: posicaoInicial.y};
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
    }
    return false;
  }