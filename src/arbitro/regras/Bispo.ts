import { Peca, Posicao, mesmaPosicao, TipoTime } from "../../Constants";
import { casaVaziaOuOcupadaPeloOponente, casaOcupada } from "./RegrasGerais";

export const movimentoBispo = (posicaoInicial: Posicao, posicaoDesejada: Posicao, time: TipoTime, tabuleiroState: Peca[]): boolean => {
    for(let i = 1; i < 8; i++) {
      //Up right movement
      if(posicaoDesejada.x > posicaoInicial.x && posicaoDesejada.y > posicaoInicial.y) {
        let posicaoPassada: Posicao = {x: posicaoInicial.x + i, y: posicaoInicial.y + i};
        //Check if the tile is the destination tile
        if(mesmaPosicao(posicaoPassada, posicaoDesejada)) {
          //Dealing with destination tile
          if(casaVaziaOuOcupadaPeloOponente(posicaoPassada, tabuleiroState, time)) {
            return true;
          }
        } else {
          //Dealing with passing tile
          if(casaOcupada(posicaoPassada, tabuleiroState)) {
            break;
          }
        }
      }
        
      //Bottom right movement
      if(posicaoDesejada.x > posicaoInicial.x && posicaoDesejada.y < posicaoInicial.y) {
        let posicaoPassada: Posicao = {x: posicaoInicial.x + i, y: posicaoInicial.y - i};
        //Check if the tile is the destination tile
        if(mesmaPosicao(posicaoPassada, posicaoDesejada)) {
          //Dealing with destination tile
          if(casaVaziaOuOcupadaPeloOponente(posicaoPassada, tabuleiroState, time)) {
            return true;
          }
        } else {
          if(casaOcupada(posicaoPassada, tabuleiroState)) {
            break;
          }
        }
      }

      //Bottom left movement
      if(posicaoDesejada.x < posicaoInicial.x && posicaoDesejada.y < posicaoInicial.y) {
        let posicaoPassada: Posicao = {x: posicaoInicial.x - i, y: posicaoInicial.y - i};
        //Check if the tile is the destination tile
        if(mesmaPosicao(posicaoPassada, posicaoDesejada)) {
          //Dealing with destination tile
          if(casaVaziaOuOcupadaPeloOponente(posicaoPassada, tabuleiroState, time)) {
            return true;
          }
        } else {
          if(casaOcupada(posicaoPassada, tabuleiroState)) {
            break;
          }
        }
      }

      //Top left movement
      if(posicaoDesejada.x < posicaoInicial.x && posicaoDesejada.y > posicaoInicial.y) {
        let posicaoPassada: Posicao = {x: posicaoInicial.x - i, y: posicaoInicial.y+i};
        //Check if the tile is the destination tile
        if(mesmaPosicao(posicaoPassada, posicaoDesejada)) {
          //Dealing with destination tile
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