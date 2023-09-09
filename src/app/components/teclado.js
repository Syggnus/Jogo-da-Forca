import styles from "../page.module.css";
import Keys from "./teclas";
export default function Teclado({ letrasEscolhidas, checarLetrasHandle }) {
  const alfabeto = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i).toUpperCase()
  );

  return (
    <div className={styles.keyboard}>
      {alfabeto.map((letra) => {
        return (
          <Keys
            key={letra}
            letrasEscolhidas={letrasEscolhidas.includes(letra) ? true : false}
            checarLetrasHandle={() => checarLetrasHandle(letra)}
            teclas={letra}
          />
        );
      })}
    </div>
  );
}
