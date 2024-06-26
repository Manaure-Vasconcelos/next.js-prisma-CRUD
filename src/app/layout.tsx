import { Inter } from "next/font/google";
import "./globals.css";
import { NotesProvider } from "@/context/NoteContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}
