'use client';

import { useState } from 'react';
import './hugs.css';

const abbracci = ['🤗', '🫂', '🤗', '💞', '🫂', '💕', '🤗', '💗', '🫂', '🤗', '💖', '🫂'];

export default function Abbracci() {
  const [numero, setNumero] = useState(0);

  return (
    <section className="hugs section">
      <h1>Abbracci<br />virtuali</h1>
      <p className="subtitle">Per quando Rebi ha bisogno di un abbraccio, anche da lontano.</p>
      <div className="hug-sky" aria-live="polite">
        {abbracci.map((abbraccio, indice) => (
          <span className="hug" key={indice} style={{ '--x': `${6 + (indice * 29) % 88}%`, '--d': `${5 + indice % 5}s`, '--delay': `${-(indice * .7)}s`, '--size': `${30 + (indice % 4) * 10}px` } as React.CSSProperties}>{abbraccio}</span>
        ))}
        {Array.from({ length: numero }, (_, indice) => <span className="hug hug-new" key={`nuovo-${indice}`} style={{ '--x': `${15 + (indice * 23) % 70}%`, '--size': `${48 + (indice % 3) * 8}px` } as React.CSSProperties}>{indice % 3 === 2 ? '🫂' : '🤗'}</span>)}
      </div>
      <button className="hug-button" onClick={() => setNumero(numero + 1)}>Tocca qui per un abbraccio 🤗</button>
      <p className="hug-count">{numero === 0 ? 'Un abbraccio speciale è pronto per te.' : numero === 1 ? 'È arrivato un abbraccio tutto per Rebi!' : `Sono arrivati ${numero} abbracci per Rebi!`}</p>
    </section>
  );
}
