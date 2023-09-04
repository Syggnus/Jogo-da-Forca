import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jogo da Forca",
  description:
    "Divirta-se testando seu vocabulário e habilidades de adivinhação com o Jogo da Forca online! Desafie seus amigos ou jogue sozinho enquanto tenta adivinhar palavras secretas e evita que seu personagem seja enforcado. Um passatempo clássico para todas as idades!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
