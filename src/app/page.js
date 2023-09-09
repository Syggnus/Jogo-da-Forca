"use client";
import { useEffect, useState } from "react";
import { listaDePalavras } from "./components/listaDePalavras";
import Teclado from "./components/teclado";
import styles from "./page.module.css";

function gerarIndiceAleatorio() {
  return Math.floor(Math.random() * listaDePalavras.length);
}

export default function Home() {
  const [palavra, setPalavra] = useState("");
  const [letras, setLetras] = useState([""]);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([""]);
  const [erros, setErros] = useState(9);

  useEffect(() => {
    const index = gerarIndiceAleatorio();
    setPalavra(listaDePalavras[index].palavra.toUpperCase());
  }, []);

  var letrasDaForca = [];
  for (let i = 0; i < palavra.length; i++) {
    letrasDaForca.push(palavra[i]);
  }

  function checkLetrasEscolhidas(letra) {
    setLetrasEscolhidas((prevLetra) => [...prevLetra, letra]);

    if (letrasDaForca.includes(letra)) {
      setLetras((prevLetra) => [...prevLetra, letra]);
    } else if (erros <= 8) {
      setErros((prevContador) => prevContador + 1);
    }
  }

  function handleResetarJogo() {
    setLetras((prevLetter) => []);
    setErros((prevCount) => 0);
    setLetrasEscolhidas((prevLetter) => []);
    const index = gerarIndiceAleatorio();
    setPalavra(listaDePalavras[index].palavra.toUpperCase());
  }
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Jogo da Forca</h1>
        <div className={styles.letterBox}>
          {erros > 8 ? (
            <>
              <div>Você Perdeu !</div>
              <button onClick={handleResetarJogo}>Recomeçar</button>
            </>
          ) : (
            letrasDaForca.map((letra, index) => {
              if (letra == " ") {
                return <div className={styles.space} key={index}></div>;
              }
              return (
                <div className={styles.letterSpacing} key={index}>
                  {letras.includes(letra) ? letra : "_"}
                </div>
              );
            })
          )}
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
