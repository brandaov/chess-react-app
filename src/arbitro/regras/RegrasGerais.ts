import { Peca, Posicao, mesmaPosicao, TipoTime } from "../../Constants";

export const casaOcupada = (posicao: Posicao, tabuleiroState: Peca[]): boolean => {
    const peca = tabuleiroState.find((p) => mesmaPosicao(p.posicao, posicao));

    if (peca) {
      return true;
    } else {
      return false;
    }
  }

export const  casaOcupadaPeloOponente = (
    posicao: Posicao,
    tabuleiroState: Peca[],
    time: TipoTime
  ): boolean => {
    const peca = tabuleiroState.find(
      (p) => mesmaPosicao(p.posicao, posicao) && p.time !== time
    );

    if (peca) {
      return true;
    } else {
      return false;
    }
  }

  export const casaVaziaOuOcupadaPeloOponente =(
    posicao: Posicao,
    tabuleiroState: Peca[],
    time: TipoTime
  ) => {
    return (
      !casaOcupada(posicao, tabuleiroState) ||
      casaOcupadaPeloOponente(posicao, tabuleiroState, time)
    );
  }