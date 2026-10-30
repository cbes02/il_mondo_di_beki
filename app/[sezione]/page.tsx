import Link from 'next/link';
import Ricordi from './Ricordi';

const titoli: Record<string, string> = {
  ricordi: 'I nostri ricordi',
  scommesse: 'Scommesse',
  'pagina-3': 'Pagina 3',
  'pagina-4': 'Pagina 4',
};

export default async function Sezione({ params }: { params: Promise<{ sezione: string }> }) {
  const { sezione } = await params;
  const titolo = titoli[sezione] ?? 'Pagina in arrivo';

  if (sezione === 'ricordi') {
    return (
      <main className="pagina pagina-ricordi">
        <div className="sfondo" aria-hidden="true" />
        <Ricordi />
        <Link className="torna-home torna-ricordi" href="/">← Torna da Moka</Link>
      </main>
    );
  }

  return (
    <main className="pagina pagina-interna">
      <div className="sfondo" aria-hidden="true" />
      <section className="cartolina-interna">
        <span className="stelline">✨ 🐾 ✨</span>
        <h1>{titolo}</h1>
        <p>Questa pagina è pronta per la prossima idea di Rebi.</p>
        <Link className="torna-home" href="/">← Torna da Moka</Link>
      </section>
    </main>
  );
}
