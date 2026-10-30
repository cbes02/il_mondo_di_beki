'use client';

import { useState } from 'react';

const livelli = [
  { immagine: '/moki/01.png', x: 39, y: 86 },
  { immagine: '/moki/02.png', x: 89, y: 46 },
  { immagine: '/moki/03.png', x: 46, y: 78 },
  { immagine: '/moki/04.png', x: 43, y: 57 },
  { immagine: '/moki/05.png', x: 15, y: 61 },
  { immagine: '/moki/06.png', x: 87, y: 74 },
  { immagine: '/moki/07.png', x: 51, y: 81 },
  { immagine: '/moki/08.png', x: 52, y: 80 },
  { immagine: '/moki/09.png', x: 45, y: 88 },
  { immagine: '/moki/10.png', x: 37, y: 91 },
];

export default function WhereIsMoki() {
  const [livello, setLivello] = useState(0);
  const [trovata, setTrovata] = useState(false);
  const [errore, setErrore] = useState<{ x: number; y: number } | null>(null);
  const [finito, setFinito] = useState(false);
  const corrente = livelli[livello];

  function cerca(evento: React.MouseEvent<HTMLButtonElement>) {
    if (trovata) return;
    const box = evento.currentTarget.getBoundingClientRect();
    const x = ((evento.clientX - box.left) / box.width) * 100;
    const y = ((evento.clientY - box.top) / box.height) * 100;
    const distanza = Math.hypot(x - corrente.x, y - corrente.y);

    if (distanza < 8.5) {
      setTrovata(true);
      setErrore(null);
    } else {
      setErrore({ x, y });
    }
  }

  function avanti() {
    if (livello === livelli.length - 1) {
      setFinito(true);
      return;
    }
    setLivello((valore) => valore + 1);
    setTrovata(false);
    setErrore(null);
  }

  function ricomincia() {
    setLivello(0);
    setTrovata(false);
    setErrore(null);
    setFinito(false);
  }

  if (finito) {
    return (
      <section className="moki-finale">
        <div className="moki-medaglia">🏆</div>
        <h1>Le hai trovate tutte!</h1>
        <p>Moki non può più nascondersi da te.</p>
        <button type="button" onClick={ricomincia}>Rigioca</button>
      </section>
    );
  }

  return (
    <section className="moki-game">
      <header className="moki-header">
        <p className="moki-kicker">trova la Moka nascosta</p>
        <h1>Where is Moki?</h1>
        <div className="moki-progress" aria-label={`Livello ${livello + 1} di ${livelli.length}`}>
          {livelli.map((_, indice) => <span key={indice} className={indice <= livello ? 'attivo' : ''} />)}
        </div>
      </header>

      <button className="moki-scena" type="button" onClick={cerca} aria-label="Tocca Moki quando la trovi">
        <img src={corrente.immagine} alt={`Scenario ${livello + 1}: trova Moki`} />
        {errore && <span className="moki-errore" style={{ left: `${errore.x}%`, top: `${errore.y}%` }}>×</span>}
        {trovata && <span className="moki-trovata" style={{ left: `${corrente.x}%`, top: `${corrente.y}%` }}>✓</span>}
      </button>

      <div className={`moki-messaggio ${trovata ? 'successo' : errore ? 'riprova' : ''}`} role="status">
        {trovata ? 'Bravissima! Hai trovato Moki 🐾' : errore ? 'Nope… cerca meglio 👀' : 'Tocca l’immagine quando la trovi'}
      </div>

      {trovata && <button className="moki-avanti" type="button" onClick={avanti}>{livello === 9 ? 'Vedi il risultato' : 'Prossimo livello →'}</button>}
    </section>
  );
}
