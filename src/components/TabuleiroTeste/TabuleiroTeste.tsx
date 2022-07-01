/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./TabuleiroTeste.css";
import Casa from "../Casa/Casa";
import Arbitro from "../../arbitro/Arbitro";
import {
  EIXO_VERTICAL,
  EIXO_HORIZONTAL,
  TAMANHO_GRID,
  Peca,
  TipoPeca,
  TipoTime,
  Posicao,
  mesmaPosicao,
  testeTabuleiroState,
  desafio,
  dica
} from "../../Constants";

export default function TabuleiroTeste() {
  const [pecaAtiva, setPecaAtiva] = useState<HTMLElement | null>(null);
  const [promocaoPeao, setPromocaoPeao] = useState<Peca>();
  const [posicaoOrigem, setPosicaoOrigem] = useState<Posicao>({ x: -1, y: -1 });
  const [vezJogador] = useState<TipoTime>(1);
  const [tentativas, setTentativas] = useState<number>(1);
  const [numeroTeste, setNumeroTeste] = useState<number>(1);
  const [pontuacao, setPontuacao] = useState<number>(0);
  const [numeroJogada, setNumeroJogada] = useState<number>(1);
  // const [check, setCheck] = useState<boolean>(false);
  // const [checkmate, setCheckmate] = useState<boolean>(false);
  const tabuleiroRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const dicaRef = useRef<HTMLDivElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const arbitro = new Arbitro();
  const [pecas, setPecas] = useState<Peca[]>(testeTabuleiroState.teste[0]);

  function pegarPeca(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    const tabuleiroXadrez = tabuleiroRef.current;
    if (element.classList.contains("peca") && tabuleiroXadrez) {
      const grabX = Math.floor((e.clientX - tabuleiroXadrez.offsetLeft) / TAMANHO_GRID);
      const grabY = Math.abs(
        Math.ceil((e.clientY - tabuleiroXadrez.offsetTop - 800) / TAMANHO_GRID)
      );
      setPosicaoOrigem({ x: grabX, y: grabY });

      const x = e.clientX - TAMANHO_GRID / 2;
      const y = e.clientY - TAMANHO_GRID / 2;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setPecaAtiva(element);
    }
  }

  function moverPeca(e: React.MouseEvent) {
    const tabuleiroXadrez = tabuleiroRef.current;
    if (pecaAtiva && tabuleiroXadrez) {
      const minX = tabuleiroXadrez.offsetLeft - 25;
      const minY = tabuleiroXadrez.offsetTop - 25;
      const maxX = tabuleiroXadrez.offsetLeft + tabuleiroXadrez.clientWidth - 75;
      const maxY = tabuleiroXadrez.offsetTop + tabuleiroXadrez.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      pecaAtiva.style.position = "absolute";

      //Se x é menor que o valor minimo
      if (x < minX) {
        pecaAtiva.style.left = `${minX}px`;
      }
      //Se x é maior que o valor máximo
      else if (x > maxX) {
        pecaAtiva.style.left = `${maxX}px`;
      }
      //Se x está dentro das restrições do tabuleiro
      else {
        pecaAtiva.style.left = `${x}px`;
      }

      //Se y é menor que o valor mínimo
      if (y < minY) {
        pecaAtiva.style.top = `${minY}px`;
      }
      //Se y é maior que o valor máximo
      else if (y > maxY) {
        pecaAtiva.style.top = `${maxY}px`;
      }
      //Se y é está dentro das restrições do tabuleiro
      else {
        pecaAtiva.style.top = `${y}px`;
      }
    }
  }

  function soltarPeca(e: React.MouseEvent) {
    const tabuleiroXadrez = tabuleiroRef.current;
    if (pecaAtiva && tabuleiroXadrez) {
      const x = Math.floor((e.clientX - tabuleiroXadrez.offsetLeft) / TAMANHO_GRID);
      const y = Math.abs(
        Math.ceil((e.clientY - tabuleiroXadrez.offsetTop - 800) / TAMANHO_GRID)
      );

      const pecaAtual = pecas.find((p) =>
        mesmaPosicao(p.posicao, posicaoOrigem)
      );

      if (pecaAtual) {
        const movimentoValido = arbitro.isMovimentoValido(
          posicaoOrigem,
          { x, y },
          pecaAtual.tipo,
          pecaAtual.time,
          pecas,
          vezJogador
        );

        const enPassant = arbitro.enPassant(
          posicaoOrigem,
          { x, y },
          pecaAtual.tipo,
          pecaAtual.time,
          pecas
        );

        const direcaoPeao = pecaAtual.time === TipoTime.JOGADOR ? 1 : -1;

        if (enPassant) {
          const updatedPecas = pecas.reduce((resultados, peca) => {
            if (mesmaPosicao(peca.posicao, posicaoOrigem)) {
              peca.enPassant = false;
              peca.posicao.x = x;
              peca.posicao.y = y;
              resultados.push(peca);
            } else if (
              !mesmaPosicao(peca.posicao, { x, y: y - direcaoPeao })
            ) {
              if (peca.tipo === TipoPeca.PEAO) {
                peca.enPassant = false;
              }
              resultados.push(peca);
            }

            return resultados;
          }, [] as Peca[]);

          setPecas(updatedPecas);
        } else if (movimentoValido) {
          // Atualiza a posição da peça
          // Se uma peça for atacada, ela é removida
          const updatedPecas = pecas.reduce((resultados, peca) => {
            if (mesmaPosicao(peca.posicao, posicaoOrigem)) {
              // Movimento especial
              peca.enPassant =
                Math.abs(posicaoOrigem.y - y) === 2 &&
                peca.tipo === TipoPeca.PEAO;

              peca.posicao.x = x;
              peca.posicao.y = y;

              let promotionRow = (peca.time === TipoTime.JOGADOR) ? 7 : 0;

              if (y === promotionRow && peca.tipo === TipoPeca.PEAO) {
                modalRef.current?.classList.remove("hidden");
                setPromocaoPeao(peca);
              }
              resultados.push(peca);
            } else if (!mesmaPosicao(peca.posicao, { x, y })) {
              if (peca.tipo === TipoPeca.PEAO) {
                peca.enPassant = false;
              }
              resultados.push(peca);
            }

            return resultados;
          }, [] as Peca[]);

          const reiEmPerigo = checaReiEmPerigo(updatedPecas, vezJogador);

          if (!reiEmPerigo) {

            if (isMovimentoCorreto(updatedPecas)) {
              let vez = (vezJogador ? 0 : 1);
              setPecas(updatedPecas);
              const isCheck = checaReiEmPerigo(updatedPecas, vez);
              const isCheckmate = (isCheck && !existeMovimentoParaProtegerORei(updatedPecas, vez))
              if (isCheckmate) {
                // setCheckmate(true);
                alert('Checkmate!');
              } else if (isCheck) {
                // setCheck(true);
                alertRef.current?.classList.remove('hidden');
                setTimeout(() => alertRef.current?.classList.add('hidden'), 2000);
              }

              realizaJogadaOponente();
            } else {
              // reseta a posição da peça
              setTentativas(tentativas + 1);
              pecaAtual.posicao = posicaoOrigem;
              pecaAtiva.style.position = "relative";
              pecaAtiva.style.removeProperty("top");
              pecaAtiva.style.removeProperty("left");
            }
          } else {
            // reseta a posição da peça
            pecaAtual.posicao = posicaoOrigem;
            pecaAtiva.style.position = "relative";
            pecaAtiva.style.removeProperty("top");
            pecaAtiva.style.removeProperty("left");
          }

        } else {
          // reseta a posição da peça
          setTentativas(tentativas + 1);
          pecaAtiva.style.position = "relative";
          pecaAtiva.style.removeProperty("top");
          pecaAtiva.style.removeProperty("left");
        }
      }
      setPecaAtiva(null);
    }
  }

  function isMovimentoCorreto(updatedPecas: Peca[]): boolean {
    const jogadasPossiveis = testeTabuleiroState.jogada[numeroTeste - 1][numeroJogada - 1]

    let response = undefined;
    if (jogadasPossiveis.length) {
      for (const jogada of jogadasPossiveis) {
        if (response) {
          break;
        }
        const pecaResposta = {
          ...jogada,
          enPassant: false
        }
        response = updatedPecas.find(
          (p) =>
          (
            p.imagem === pecaResposta.imagem
            && p.posicao.x === pecaResposta.posicao.x
            && p.posicao.y === pecaResposta.posicao.y
          ));
      }
    } else {
      const pecaResposta = {
        ...jogadasPossiveis,
        enPassant: false
      }
      response = updatedPecas.find(
        (p) =>
        (
          p.imagem === pecaResposta.imagem
          && p.posicao.x === pecaResposta.posicao.x
          && p.posicao.y === pecaResposta.posicao.y
        ));
    }

    return response ? true : false;

  }

  function realizaJogadaOponente() {
    if (numeroJogada <= testeTabuleiroState.jogadaOponente[numeroTeste - 1].length) {
      const pecaJogada = testeTabuleiroState.jogadaOponente[numeroTeste - 1][numeroJogada - 1]
      const pecaAtual: any = pecas.find(
        (p) => (
          p.tipo === pecaJogada.tipo
          && p.time === pecaJogada.time
        )
      );
      const updatedPecas = pecas.reduce((resultados, peca) => {
        if (mesmaPosicao(peca.posicao, pecaJogada.posicao)) {
          peca = pecaJogada;
        }
        if (!mesmaPosicao(peca.posicao, pecaAtual.posicao)) {
          resultados.push(peca);
        }

        return resultados;
      }, [] as Peca[]);

      if (!updatedPecas.find((p) => p.posicao === pecaJogada.posicao)) {
        updatedPecas.push(pecaJogada);
      }

      setPecas(updatedPecas);
      setNumeroJogada(numeroJogada + 1);
    } else {
      proximoTeste();
      alert('Teste concluído!')
    }
  }

  function existeMovimentoParaProtegerORei(pecas: Peca[], time: TipoTime): boolean {
    let pecasDefensoras: Peca[] = [];
    const rei = pecas.find(
      (p) => (p.time === time && p.tipo === TipoPeca.REI)
    ) as Peca;

    const pecasJogador = pecas.filter(
      (p) =>
        p.time === time
    );

    // TODO: LÓGICA CHECKMATE:
    // if for every move for player X (ignoring rules about king threats), 
    // player Y can capture player X's king next turn, then player X is in checkmate
    console.log(JSON.stringify(pecasDefensoras));
    console.log(JSON.stringify(pecasJogador));

    return rei ? true : false;
  }

  function checaReiEmPerigo(pecas: Peca[], time: TipoTime): boolean {
    let pecasPerigosas = [];

    const rei = pecas.find(
      (p) => (p.time === time && p.tipo === TipoPeca.REI)
    ) as Peca;
    if (!rei) {
      return false;
    }
    const pecasOponente = pecas.filter(
      (p) =>
        p.time !== time
    );
    const pecaPerigosa = pecasOponente.find(
      (p) => arbitro.isMovimentoValido(p.posicao, rei.posicao, p.tipo, p.time, pecas, p.time)
    )
    if (pecaPerigosa) {
      pecasPerigosas.push(pecaPerigosa);
    }

    return pecasPerigosas.length ? true : false;
  }

  function promoverPeao(tipoPeca: TipoPeca) {
    if (promocaoPeao === undefined) {
      return;
    }

    const updatedPecas = pecas.reduce((resultados, peca) => {
      if (mesmaPosicao(peca.posicao, promocaoPeao.posicao)) {
        peca.tipo = tipoPeca;
        const tipoTime = (peca.time === TipoTime.JOGADOR) ? "branco" : "preto";
        let imagem = "";
        switch (tipoPeca) {
          case TipoPeca.TORRE: {
            imagem = "torre";
            break;
          }
          case TipoPeca.BISPO: {
            imagem = "bispo";
            break;
          }
          case TipoPeca.CAVALO: {
            imagem = "cavalo";
            break;
          }
          case TipoPeca.RAINHA: {
            imagem = "rainha";
            break;
          }
        }
        peca.imagem = `assets/images/${imagem}_${tipoTime}.png`;
      }
      resultados.push(peca);
      return resultados;
    }, [] as Peca[])

    setPecas(updatedPecas);

    modalRef.current?.classList.add("hidden");
  }

  function tipoTimePromocao() {
    return (promocaoPeao?.time === TipoTime.JOGADOR) ? "branco" : "preto";
  }

  function proximoTeste() {
    setPontuacao(pontuacao + 100 / tentativas);
    if (numeroTeste < 3) {
      setNumeroTeste(numeroTeste + 1);
      setPecas(testeTabuleiroState.teste[numeroTeste]);
      setTentativas(1);
      setNumeroJogada(1);
      escondeDica();
    }
  }

  function pularTeste() {
    if (numeroTeste < 3) {
      setNumeroTeste(numeroTeste + 1);
      setPecas(testeTabuleiroState.teste[numeroTeste]);
      setTentativas(1);
      setNumeroJogada(1);
      escondeDica();
    }
  }

  function mostrarDica() {
    dicaRef.current?.classList.remove("hidden");
  }

  function escondeDica() {
    dicaRef.current?.classList.add("hidden");
  }

  let tabuleiro = [];

  for (let j = EIXO_VERTICAL.length - 1; j >= 0; j--) {
    for (let i = 0; i < EIXO_HORIZONTAL.length; i++) {
      const numero = j + i + 2;
      const peca = pecas.find((p) =>
        mesmaPosicao(p.posicao, { x: i, y: j })
      );
      let imagem = peca ? peca.imagem : undefined;

      tabuleiro.push(<Casa key={`${j},${i}`} imagem={imagem} numero={numero} />);
    }
  }

  return (
    <>
      <div className="teste-menu-buttons">
        <text style={{ fontSize: '30px', marginBottom: '20px' }}>Teste {numeroTeste}/3</text>
        <text>Tentativa {tentativas}</text>
        <text>Pontuação: {pontuacao.toFixed(2)}</text>
        <button onClick={pularTeste}>Pular teste</button>
      </div>
      <div id='alert-event' className='hidden' ref={alertRef}>
        <text>Check!</text>
      </div>
      <div id="promocao-peao-modal" className="hidden" ref={modalRef}>
        <div className="modal-body">
          <img onClick={() => promoverPeao(TipoPeca.TORRE)} src={`/assets/images/torre_${tipoTimePromocao()}.png`} />
          <img onClick={() => promoverPeao(TipoPeca.BISPO)} src={`/assets/images/bispo_${tipoTimePromocao()}.png`} />
          <img onClick={() => promoverPeao(TipoPeca.CAVALO)} src={`/assets/images/cavalo_${tipoTimePromocao()}.png`} />
          <img onClick={() => promoverPeao(TipoPeca.RAINHA)} src={`/assets/images/rainha_${tipoTimePromocao()}.png`} />
        </div>
      </div>
      <div
        onMouseMove={(e) => moverPeca(e)}
        onMouseDown={(e) => pegarPeca(e)}
        onMouseUp={(e) => soltarPeca(e)}
        id="tabuleiroDeXadrez"
        ref={tabuleiroRef}
      >
        {tabuleiro}
      </div>
      <div className="dicas">
        <text>Desafio: {desafio[numeroTeste - 1]}</text>
        <button onClick={mostrarDica}>Dica</button>
        <div id="dica-text" className="hidden" ref={dicaRef} >
          <text>Dica: {dica[numeroTeste - 1]}</text>
        </div>
      </div>
    </>
  );
}