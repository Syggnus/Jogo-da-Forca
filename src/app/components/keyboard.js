import styles from "../page.module.css";
import Keys from "./keys";
export default function Keyboard({ chosenLetters, checkLetterHandle }) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  return (
    <div className={styles.keyboard}>
      {alphabet.map((letter) => {
        return (
          <Keys
            key={letter}
            chosenLetters={chosenLetters.includes(letter) ? true : false}
            checkLetterHandle={() => checkLetterHandle(letter)}
            keyboardKey={letter.toUpperCase()}
          />
        );
      })}
    </div>
  );
}
