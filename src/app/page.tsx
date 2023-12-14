import ClientColumn from "./components/ClientColumn";
import { LyricsContext } from "./context/LyricsProvider";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl min-h-screen p-4">
      <h1 className="text-center text-4xl mb-4">Lyrics Memory</h1>
      <LyricsContext>
        <ClientColumn />
      </LyricsContext>
    </main>
  );
}
