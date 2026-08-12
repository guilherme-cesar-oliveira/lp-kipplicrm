import { Layers, KanbanSquare, Bot, Megaphone } from 'lucide-react';
import { MODULES } from '../data/content';
import './ModulesGrid.css';

const ICONS = [Layers, KanbanSquare, Bot, Megaphone];

export default function ModulesGrid() {
  return (
    <section id="modulos" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Módulos que alavancam suas vendas</h2>
          <p>Tudo o que sua equipe comercial precisa, dentro de uma única plataforma.</p>
        </div>

        <div className="modules-grid">
          {MODULES.map((mod, index) => {
            const Icon = ICONS[index];
            return (
              <div key={mod.title} className="module-card">
                <span className="module-card__icon">
                  <Icon size={20} />
                </span>
                <h3>{mod.title}</h3>
                <p>{mod.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
