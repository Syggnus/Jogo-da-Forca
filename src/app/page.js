"use client";
import { useEffect, useState } from "react";
import Keyboard from "./components/keyboard";
import { wordlist } from "./components/wordlist";
import styles from "./page.module.css";
export default function Home() {
  const [word, setWord] = useState("");
  const [letters, setletters] = useState([""]);
  const chosenLetters = ["a", "b"];
  var arrayWord = [];

  useEffect(() => {
    const wordIndex = Math.floor(Math.random() * wordlist.length);
    setWord(wordlist[wordIndex].palavra);
  }, []);

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
        <Keyboard
          key={2}
          checkLetterHandle={() => {}}
          chosenLetters={chosenLetters}
        />
      </main>
    </>
  );
}
