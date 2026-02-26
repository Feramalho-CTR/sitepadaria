import React from 'react'

const steps = [
  {
    num: "01",
    title: "Sourcing Molecular",
    desc: "Selecionamos grãos baseados no conteúdo de nitrogênio e atividade enzimática para uma integridade estrutural superior."
  },
  {
    num: "02",
    title: "Amassamento de Precisão",
    desc: "Mistura controlada pela atmosfera garante oxigenação perfeita e desenvolvimento da rede de glúten."
  },
  {
    num: "03",
    title: "Fermentação Quântica",
    desc: "Monitoramento por sensores em tempo real dos níveis de pH e CO2 leva a perfis de sabor inigualáveis."
  }
]

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title text-gradient">O Ofício Tecnológico</h2>

        <div className="process-grid">
          {steps.map(step => (
            <div key={step.num} className="process-step">
              <span className="step-number">{step.num}</span>
              <div className="step-info">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .process-section {
          padding: var(--section-padding);
          background: #0d0d0d;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 60px;
          margin-top: 4rem;
        }

        .process-step {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }

        .step-number {
          font-size: 5rem;
          font-weight: 800;
          line-height: 1;
          color: rgba(197, 160, 89, 0.1);
          font-family: var(--font-body);
        }

        .step-info h3 {
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 15px;
        }

        .step-info p {
          color: var(--text-muted);
          font-weight: 300;
        }

        @media (min-width: 768px) {
          .process-step::after {
            content: '→';
            position: absolute;
            right: -30px;
            top: 2rem;
            font-size: 2rem;
            color: var(--glass-border);
          }
          .process-step:last-child::after {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Process
