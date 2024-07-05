import "./globals.css";

export const metadata = {
  title: "AnkiJr",
  description:
    "Projeto de repetição espaçada utilizando flashcards baseado no Anki!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
