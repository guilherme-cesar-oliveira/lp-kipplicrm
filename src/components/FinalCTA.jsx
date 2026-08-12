import { WHATSAPP_URL } from '../data/content';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="container">
        <div className="final-cta__card">
          <h2>Pronto para organizar seu comercial hoje mesmo?</h2>
          <p>Clique e fale conosco no WhatsApp.</p>
          <a href={WHATSAPP_URL} className="btn btn-white" target="_blank" rel="noreferrer">
            Falar com Consultor no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
