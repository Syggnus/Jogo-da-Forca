"use client";
import { useEffect, useState } from "react";
import { wordlist } from "./components/wordList";
import styles from "./page.module.css";

export default function Home() {
  const [word, setWord] = useState("");
  const [letters, setletters] = useState([""]);

  var arrayWord = [];

  useEffect(() => {
    const wordIndex = Math.floor(Math.random() * wordlist.length);
    setWord(wordlist[wordIndex].palavra);
  }, [word]);

  useEffect(() => {});

  for (let i = 0; i < word.length; i++) {
    arrayWord.push(word[i]);
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Jogo da Forca</h1>
        <div className={styles.letterBox}>
          {arrayWord.map((letter, index) => {
            return (
              <div className={styles.letterSpacing} key={index}>
                {letters.includes(letter) ? letter : "_"}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
