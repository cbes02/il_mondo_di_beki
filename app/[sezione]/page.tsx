import Link from 'next/link';
import Ricordi from './Ricordi';
import WhereIsMoki from './WhereIsMoki';
import Abbracci from './Abbracci';

const titoli: Record<string, string> = {
  ricordi: 'I nostri ricordi',
  scommesse: 'Scommesse',
  'where-is-moki': 'Where is Moki?',
  'abi-puo-tutto': 'Perché la Rebi può fare tutto',
  'abbracci-virtuali': 'Abbracci virtuali',
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

  if (sezione === 'where-is-moki') {
    return (
      <main className="pagina pagina-moki">
        <div className="sfondo" aria-hidden="true" />
        <WhereIsMoki />
        <Link className="torna-home torna-moki" href="/">← Torna da Moka</Link>
      </main>
    );
  }

  if (sezione === 'abi-puo-tutto') {
    const motivi = [
      <><strong>Sopporta Pietro da cinque anni.</strong> E già questo, da solo, dovrebbe valere come prova definitiva di resistenza psicologica.</>,
      <><strong>Sopporta Cibes e i suoi audio da un anno e mezzo.</strong> Poco rispetto a Pietro, certo, ma più che sufficiente per mettere a dura prova chiunque.</>,
      <><strong>Sopporta anche il suo capo</strong>, che le scrive nei weekend e fuori dall’orario lavorativo, perché evidentemente il concetto di “tempo libero” è puramente teorico.</>,
      <><strong>Ha superato egregiamente gli esami della Cerri e di Saccoia</strong>, nonostante statistica e analisi non siano proprio il suo habitat naturale. Anzi, Saccoia l’ha confusa così tanto che alla fine le ha dato 30.</>,
      <><strong>È riuscita a lavorare e preparare contemporaneamente due esami</strong>, incastrando Saccoia e l’ultimo esame di Russo. Per quest’ultimo ha fatto un lavorone, preparato un’ottima presentazione e ottenuto pure un gran voto, nonostante il rincoglionimento generale.</>,
      <><strong>Ha scritto 180 pagine di tesi</strong> mentre lavorava e mentre il suo capo continuava a tormentarla anche nei weekend. Il tutto senza essere arrestata per omicidio, dettaglio da non sottovalutare.</>,
      <><strong>Riesce persino a mangiare decentemente, tenere in ordine la casa e condurre una vita più o meno sana.</strong> Soprattutto più o meno. Non esageriamo.</>,
      <><strong>Dopo tutto questo è riuscita anche a laurearsi con lode in Intelligenza Artificiale</strong>, dimostrando ufficialmente di essere più intelligente dell’intelligenza artificiale stessa.</>,
    ];

    return (
      <main className="pagina pagina-abi">
        <div className="sfondo" aria-hidden="true" />
        <article className="abi-wrap">
          <header className="abi-intestazione">
            <span aria-hidden="true">✨💪✨</span>
            <h1>Perché la Rebi<br />può fare tutto</h1>
            <p>Otto prove scientificamente inconfutabili</p>
          </header>

          <ol className="lista-abi">
            {motivi.map((motivo, indice) => <li key={indice}>{motivo}</li>)}
          </ol>

          <blockquote className="finale-abi">
            Se è sopravvissuta a Pietro, Cibes, Saccoia, Russo, al lavoro, al capo e a 180 pagine di tesi, ormai non la ferma più nessuno.
          </blockquote>

          <Link className="torna-home torna-abi" href="/">← Torna da Moka</Link>
        </article>
      </main>
    );
  }

  if (sezione === 'abbracci-virtuali') {
    return (
      <main className="pagina">
        <div className="sfondo" aria-hidden="true" />
        <Abbracci />
        <Link className="torna-home" href="/">← Torna da Moka</Link>
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
