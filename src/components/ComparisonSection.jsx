import { Check, X } from 'lucide-react';
import './ComparisonSection.css';

export default function ComparisonSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Por que o Kippli não é apenas mais um chat de WhatsApp?</h2>
          <p>
            A maioria dos CRMs trata a conversa e a venda como coisas separadas: você atende no
            WhatsApp e depois anota manualmente em outra ferramenta em que etapa o cliente está.
            É aí que o lead se perde.
          </p>
        </div>

        <div className="compare">
          <div className="compare-card">
            <span className="compare-card__badge">
              <X size={14} /> CRM comum
            </span>
            <p>
              Conversa e funil vivem em ferramentas separadas. Cada atualização exige registro
              manual. O lead fica no WhatsApp pessoal do vendedor, fora de qualquer controle.
            </p>
          </div>

          <div className="compare-card compare-card--highlight">
            <span className="compare-card__badge compare-card__badge--highlight">
              <Check size={14} /> Kippli
            </span>
            <p>
              Cada conversa já é a oportunidade — nasce no Pipeline Kanban, avança pelas etapas
              do funil e carrega produtos, agendamentos e histórico. Nada fica solto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
