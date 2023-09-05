"use client";
import { useEffect, useState } from "react";
import { listaDePalavras } from "./components/listaDePalavras";
import Teclado from "./components/teclado";
import styles from "./page.module.css";
export default function Home() {
  const [palavra, setPalavra] = useState(""); //Palavra da Forca
  const [letras, setLetras] = useState([""]);
  const letrasEscolhidas = ["a", "b"]; //Isso vai virar um useState

  // Ao carregar a página é feita a escolha randomica da palavra da forca
  useEffect(() => {
    const index = Math.floor(Math.random() * listaDePalavras.length);
    setPalavra(listaDePalavras[index].palavra);
  }, []);

  // Colocando as letras da palavra em um array para ser exibido posteriormente
  var letrasDaForca = [];
  for (let i = 0; i < palavra.length; i++) {
    letrasDaForca.push(palavra[i]);
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Jogo da Forca</h1>
        <div className={styles.letterBox}>
          {letrasDaForca.map((letra, index) => {
            return (
              <div className={styles.letterSpacing} key={index}>
                {letras.includes(letra) ? letra : "_"}
              </div>
            );
          })}
        </div>
        <Teclado
          key={2}
          checarLetrasHandle={() => {}}
          letrasEscolhidas={letrasEscolhidas}
        />
      </main>
    </>
  );
}
