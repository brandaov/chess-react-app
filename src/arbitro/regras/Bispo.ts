import { Peca, Posicao, mesmaPosicao, TipoTime } from "../../Constants";
import { casaVaziaOuOcupadaPeloOponente, casaOcupada } from "./RegrasGerais";

export const movimentoBispo = (posicaoInicial: Posicao, posicaoDesejada: Posicao, time: TipoTime, tabuleiroState: Peca[]): boolean => {
    for(let i = 1; i < 8; i++) {
      // Movimento diagonal para cima direita
      if(posicaoDesejada.x > posicaoInicial.x && posicaoDesejada.y > posicaoInicial.y) {
        let posicaoPassada: Posicao = {x: posicaoInicial.x + i, y: posicaoInicial.y + i};
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
        
      // Movimento diagonal para baixo direita
      if(posicaoDesejada.x > posicaoInicial.x && posicaoDesejada.y < posicaoInicial.y) {
        let posicaoPassada: Posicao = {x: posicaoInicial.x + i, y: posicaoInicial.y - i};
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

      // Movimento diagonal para baixo esquerda
      if(posicaoDesejada.x < posicaoInicial.x && posicaoDesejada.y < posicaoInicial.y) {
        let posicaoPassada: Posicao = {x: posicaoInicial.x - i, y: posicaoInicial.y - i};
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

      // Movimento diagonal para cima esquerda
      if(posicaoDesejada.x < posicaoInicial.x && posicaoDesejada.y > posicaoInicial.y) {
        let posicaoPassada: Posicao = {x: posicaoInicial.x - i, y: posicaoInicial.y+i};
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