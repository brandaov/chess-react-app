import { Peca, Posicao, TipoTime } from "../../Constants";
import { casaVaziaOuOcupadaPeloOponente } from "./RegrasGerais";

export const movimentoCavalo = (posicaoInicial: Posicao, posicaoDesejada: Posicao, time: TipoTime, tabuleiroState: Peca[]): boolean => {
    for (let i = -1; i < 2; i += 2) {
      for (let j = -1; j < 2; j += 2) {
        //TOP AND BOTTOM SIDE MOVEMENT
        if (posicaoDesejada.y - posicaoInicial.y === 2 * i) {
          if (posicaoDesejada.x - posicaoInicial.x === j) {
            if (
              casaVaziaOuOcupadaPeloOponente(
                posicaoDesejada,
                tabuleiroState,
                time
              )
            ) {
              return true;
            }
          }
        }

        //RIGHT AND LEFT SIDE MOVEMENT
        if (posicaoDesejada.x - posicaoInicial.x === 2 * i) {
          if (posicaoDesejada.y - posicaoInicial.y === j) {
            if (
              casaVaziaOuOcupadaPeloOponente(
                posicaoDesejada,
                tabuleiroState,
                time
              )
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }