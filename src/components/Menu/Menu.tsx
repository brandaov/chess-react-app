// import { useRef, useState } from "react";

import { useRef } from "react";
import Tabuleiro from "../Tabuleiro/Tabuleiro";
import './Menu.css';
import '../../Constants';
import TabuleiroTeste from "../TabuleiroTeste/TabuleiroTeste";

export default function Menu() {
  const jogoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const testeRef = useRef<HTMLDivElement>(null);

  function jogar() {
    menuRef.current?.classList.add("hidden");
    jogoRef.current?.classList.remove("hidden");
  }

  function testar() {
    menuRef.current?.classList.add("hidden");
    testeRef.current?.classList.remove("hidden");
  }

  return (
    <div className="tabuleiro-background">
      <div id="menu-container" ref={menuRef}>
        <div className="title-header">
          <img alt="" src={'/assets/images/cavalo_preto.png'}></img>
          <text>Xadrez App</text>
        </div>
        <div className="menu-buttons">
          <button onClick={jogar}>JOGAR</button>
          <button onClick={testar}>TESTE DE USABILIDADE</button>
        </div>
      </div>
      <div id='tabuleiro' className="hidden" ref={jogoRef}><Tabuleiro /></div>
      <div id='tabuleiroTeste' className="hidden" ref={testeRef}><TabuleiroTeste/></div>
    </div>
  );


}