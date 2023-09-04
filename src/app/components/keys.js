import styles from "../page.module.css";
export default function Keys({
  checkLetterHandle,
  keyboardKey,
  chosenLetters,
}) {
  return (
    <>
      <button
        className={styles.keyboardkeys}
        disabled={chosenLetters}
        onClick={checkLetterHandle}
      >
        {keyboardKey}
      </button>
    </>
  );
}
