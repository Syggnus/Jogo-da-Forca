"use client";
import { useEffect, useState } from "react";
import { listaDePalavras } from "./components/listaDePalavras";
import Teclado from "./components/teclado";
import styles from "./page.module.css";
export default function Home() {
  const [palavra, setPalavra] = useState("");
  const [letras, setLetras] = useState([""]);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([""]);

  useEffect(() => {
    const index = Math.floor(Math.random() * listaDePalavras.length);
    setPalavra(listaDePalavras[index].palavra);
  }, []);

  var letrasDaForca = [];
  for (let i = 0; i < palavra.length; i++) {
    letrasDaForca.push(palavra[i]);
  }

  function checkLetrasEscolhidas(letra) {
    setLetrasEscolhidas((prevLetra) => [...prevLetra, letra]);

    if (letrasDaForca.includes(letra)) {
      setLetras((prevLetra) => [...prevLetra, letra]);
    }
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
          checarLetrasHandle={checkLetrasEscolhidas}
          letrasEscolhidas={letrasEscolhidas}
        />
      </main>
    </>
  );
}
