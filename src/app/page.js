"use client";
import { useEffect, useState } from "react";
import { listaDePalavras } from "./components/listaDePalavras";
import Teclado from "./components/teclado";
import styles from "./page.module.css";

function gerarIndiceAleatorio() {
  return Math.floor(Math.random() * listaDePalavras.length);
}

export default function Home() {
  const [forca, setForca] = useState({ palavra: "", dica: "" });
  const [letras, setLetras] = useState([""]);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([""]);
  const [erros, setErros] = useState(0);
  const [mostrarDica, setMostrarDica] = useState(false);
  const [venceu, setVenceu] = useState(false);

  function handleNovaForca() {
    const index = gerarIndiceAleatorio();
    setForca((forcaAnterior) => ({
      ...forcaAnterior,
      palavra: listaDePalavras[index].palavra.toUpperCase(),
      dica: listaDePalavras[index].dica.toUpperCase(),
    }));
  }

  useEffect(() => {
    handleNovaForca();
  }, []);

  var letrasDaForca = [];
  for (let i = 0; i < forca.palavra.length; i++) {
    letrasDaForca.push(forca.palavra[i]);
  }

  function checkLetrasEscolhidas(letra) {
    setLetrasEscolhidas((prevLetra) => [...prevLetra, letra]);

    if (letrasDaForca.includes(letra)) {
      setLetras((prevLetra) => [...prevLetra, letra]);

      const todasLetrasAdivinhadas = letrasDaForca.every((letraForca) =>
        letras.includes(letraForca)
      );
      if (todasLetrasAdivinhadas) {
        setVenceu(() => true);
      }
    } else if (erros <= 8) {
      setErros((prevContador) => prevContador + 1);
    }
  }

  function handleResetarJogo() {
    setLetras((prevLetter) => []);
    setErros((prevCount) => 0);
    setLetrasEscolhidas((prevLetter) => []);
    handleNovaForca();
  }

  function handleMostrarDica() {
    setMostrarDica(!mostrarDica);
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Isto Não é um Jogo da Forca</h1>
        <div className={styles.letterBox}>
          {erros > 8 ? (
            <>
              <div className={styles.lostBox}>
                <div className={styles.resetText}>Você Perdeu!</div>
                <button
                  className={styles.resetButton}
                  onClick={handleResetarJogo}
                >
                  Recomeçar
                </button>
              </div>
            </>
          ) : venceu ? (
            <div className={styles.wonBox}>
              <div className={styles.resetText}>Você Venceu!</div>
              <button
                className={styles.resetButton}
                onClick={handleResetarJogo}
              >
                Recomeçar
              </button>
            </div>
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
        <div className={styles.hintBox}>
          <button
            onClick={() => handleMostrarDica()}
            className={styles.hintButton}
          >
            Dica
          </button>
          <p className={styles.hintText}>
            {mostrarDica ? forca.dica : "*******"}
          </p>
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
