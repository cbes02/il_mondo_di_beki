'use client';

import { useState } from 'react';

const foto = Array.from({ length: 17 }, (_, indice) =>
  `/ricordi/${String(indice + 1).padStart(2, '0')}.jpeg`,
);

const rotazioni = [-2.4, 2.1, -1.2, 1.5, -0.7];

export default function Ricordi() {
  const [prima, setPrima] = useState(0);

  return (
    <section className="ricordi-wrap" aria-label="Album dei nostri ricordi">
      <div className="ricordi-intestazione">
        <span aria-hidden="true">✦</span>
        <h1>I nostri ricordi</h1>
        <p>Tocca la foto per sfogliare il mazzo</p>
      </div>

      <button
        className="mazzo-foto"
        type="button"
        onClick={() => setPrima((corrente) => (corrente + 1) % foto.length)}
        aria-label={`Foto ${prima + 1} di ${foto.length}. Tocca per vedere la successiva.`}
      >
        {foto.map((src, indice) => {
          const distanza = (indice - prima + foto.length) % foto.length;
          return (
            <span
              className="polaroid"
              key={src}
              style={{
                zIndex: foto.length - distanza,
                transform: `translate(${Math.min(distanza, 4) * 2}px, ${Math.min(distanza, 4) * 3}px) rotate(${rotazioni[distanza % rotazioni.length]}deg)`,
                opacity: distanza > 5 ? 0 : 1,
              }}
              aria-hidden={distanza !== 0}
            >
              <img src={src} alt={distanza === 0 ? `Ricordo ${prima + 1}` : ''} />
              <span className="numero-foto">{prima + 1} / {foto.length}</span>
            </span>
          );
        })}
      </button>
    </section>
  );
}
