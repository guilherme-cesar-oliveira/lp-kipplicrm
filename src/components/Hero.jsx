import { ArrowRight } from 'lucide-react';
import { HERO_HIGHLIGHTS, WHATSAPP_URL } from '../data/content';
import ScreenshotFrame from './ScreenshotFrame';
import dashboardCrm from '../assets/screenshots/dashboard-crm.jpeg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <span className="eyebrow">CRM &amp; Hub Comercial Completo</span>

        <h1 className="hero__title">
          Transforme seu WhatsApp em um funil de vendas organizado e lucrativo
        </h1>

        <p className="hero__subtitle">
          Central de atendimento multicanal, CRM Kanban e Agentes de IA em uma única
          plataforma — para sua equipe vender mais sem deixar nenhum lead esfriar.
        </p>

        <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
          Testar o Kippli no WhatsApp
          <ArrowRight size={18} />
        </a>

        <div id="produto" className="hero__mockup">
          <ScreenshotFrame src={dashboardCrm} alt="Dashboard CRM do Kippli, com oportunidades, pipeline e funil de vendas" />
        </div>

        <div className="hero__highlights">
          {HERO_HIGHLIGHTS.map((item) => (
            <div key={item.title} className="hero__highlight">
              <span className="hero__highlight-bar" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
