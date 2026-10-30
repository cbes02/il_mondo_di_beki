'use client';

import { useMemo } from 'react';

const perle = [
  'La vacca strana in mezzo alla via ha fatto la cacca: poesia.',
  'Chi dorme non piglia pesci, ma almeno non rompe le scatole.',
  'Meglio un aperitivo oggi che una tisana triste domani.',
  'La vita è breve: mangia il dolce e nega tutto.',
  'Se il buongiorno si vede dal mattino, torna a letto.',
  'Gallina vecchia fa buon brodo, ma pure un sacco di casino.',
  'Tra il dire e il fare c’è di mezzo un divano.',
  'Il mattino ha l’oro in bocca. Io ho ancora il dentifricio.',
  'Non rimandare a domani ciò che puoi ignorare per sempre.',
  'Ride bene chi ha già pagato il conto.',
  'L’erba del vicino è più verde perché finge meglio.',
  'Chi va piano arriva tardi, ma con molta dignità.',
  'Ogni scarrafone è bello a mamma sua. Agli altri, insomma.',
  'Sbagliando s’impara; insistendo si apre un bar.',
  'Il silenzio è d’oro, ma una pernacchia è gratis.',
  'Campare senza spritz è come stirare i calzini: inutile.',
  'Quando il gatto non c’è, il cane ordina le patatine.',
  'Volere è potere. Non volere è comodissimo.',
  'A caval donato controlla almeno che non scoreggi.',
  'La pazienza è la virtù di chi non ha campo.',
  'Se son rose fioriranno; se son cavoli, puzzeranno.',
  'Meglio soli che con uno che dice “facciamo alla romana”.',
  'Tanto va la gatta al lardo che poi chiede il digestivo.',
  'Chi trova un amico trova uno che ti ruba le patatine.',
  'La fortuna è cieca, la sfiga ha il navigatore.',
  'Non tutte le ciambelle escono col buco: mangiale lo stesso.',
  'Una mela al giorno leva il medico di torno. Forse gli stai antipatica.',
  'Il tempo cura tutto, tranne la frangia tagliata male.',
  'Cane che abbaia ha letto il gruppo WhatsApp.',
  'Dove c’è gusto non c’è perdenza, solo briciole sul letto.',
  'L’abito non fa il monaco, ma il pigiama fa subito domenica.',
  'Chi troppo vuole, ordina anche il dolce.',
  'Occhio non vede, screenshot non perdona.',
  'La calma è la virtù di chi ha già mangiato.',
  'Di mamma ce n’è una; di figuracce, un’infinità.',
  'Paese che vai, bagno che cerchi.',
  'Il riso abbonda sulla maglietta di chi mangia male.',
  'Finché c’è caffè c’è speranza. Dopo, solo tremore.',
  'Meglio tardi che spettinati.',
  'Chi fa da sé fa tre viaggi dal frigo.',
  'La classe non è acqua. Infatti io bevo prosecco.',
  'Morto un papa, si libera una sedia.',
  'L’unione fa la forza, ma pure una chat insopportabile.',
  'A mali estremi, patatine estreme.',
  'La notte porta consiglio; il mattino lo dimentica.',
  'Cuor contento, stomaco pieno e pantalone slacciato.',
  'Non c’è due senza tre, purtroppo anche per le figuracce.',
  'Chi semina vento raccoglie i panni stesi del vicino.',
  'Meglio un uovo oggi e una carbonara appena possibile.',
  'Dopo la pioggia viene il sereno. E le lumache sul marciapiede.',
];

function fraseDelGiorno() {
  return Math.floor(Date.now() / 86_400_000) % perle.length;
}

export default function Home() {
  const indice = useMemo(fraseDelGiorno, []);

  return (
    <main className="pagina">
      <div className="sfondo" aria-hidden="true" />
      <section className="contenuto">
        <h1 className="sr-only">Il mondo di Rebi</h1>
        <svg className="titolo-arco" viewBox="0 0 420 130" role="img" aria-label="Il mondo di Rebi">
          <defs>
            <path id="curva-titolo" d="M 30 108 Q 210 -2 390 108" />
          </defs>
          <text>
            <textPath href="#curva-titolo" startOffset="50%" textAnchor="middle">
              ✨il mondo di Rebi✨
            </textPath>
          </text>
        </svg>

        <p className="occhiello">la perla quotidiana di Moka</p>

        <div className="scena">
          <div className="fumetto">
            <span className="moka-dice">Moka dice:</span>
            <p>{perle[indice]}</p>
          </div>
          <img className="moka" src="/moka-v2.png" alt="Moka con gli occhiali da sole e uno spritz" />
        </div>

        <nav className="menu-pagine" aria-label="Le pagine del mondo di Rebi">
          <a className="tasto-pagina rosso" href="/ricordi">I nostri ricordi</a>
          <a className="tasto-pagina verde" href="/where-is-moki">Where is Moki?</a>
          <a className="tasto-pagina blu" href="/abi-puo-tutto">Perché la Rebi può fare tutto</a>
          <a className="tasto-pagina ocra" href="/pagina-4">Pagina 4</a>
        </nav>
        <p className="firma">consigli non richiesti • eleganza discutibile</p>
      </section>
    </main>
  );
}
