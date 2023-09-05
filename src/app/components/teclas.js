import styles from "../page.module.css";
export default function Tecla({
  checarLetrasHandle,
  teclas,
  letrasEscolhidas,
}) {
  return (
    <>
      <button
        className={styles.keyboardkeys}
        disabled={letrasEscolhidas}
        onClick={checarLetrasHandle}
      >
        {teclas}
      </button>
    </>
  );
}
