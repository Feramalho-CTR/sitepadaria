import React from 'react'

const products = [
  {
    id: 1,
    name: "Sourdough Dourado",
    price: "R$ 62,00",
    desc: "Fermentação lenta de 36 horas com grãos ancestrais e controle de umidade de precisão.",
    tag: "Artesanal",
    img: "/sourdough.png"
  },
  {
    id: 2,
    name: "Cyber Croissant",
    price: "R$ 28,50",
    desc: "Camadas projetadas de manteiga francesa premium para a proporção perfeita entre crocância e ar.",
    tag: "Precisão",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Brioche Baseado em Dados",
    price: "R$ 42,00",
    desc: "Textura ultra-rica otimizada para a torrada perfeita todas as vezes.",
    tag: "Otimizado",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Centeio Moderno",
    price: "R$ 52,00",
    desc: "Uma abordagem ousada e tecnológica de um favorito denso tradicional.",
    tag: "Futuro",
    img: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&q=80&w=800"
  }
]

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title text-gradient">A Despensa Digital</h2>
        <p className="section-subtitle">Uma seleção curada de obras-primas artesanais</p>

        <div className="menu-grid">
          {products.map(product => (
            <div key={product.id} className="menu-card glass">
              <div className="card-image">
                <img src={product.img} alt={product.name} />
                <span className="card-tag">{product.tag}</span>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{product.name}</h3>
                  <span className="price">{product.price}</span>
                </div>
                <p>{product.desc}</p>
                <button className="card-btn">Configurar Pedido</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .menu-section {
          padding: var(--section-padding);
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-top: -1.5rem;
          margin-bottom: 4rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .menu-card {
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .menu-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .card-image {
          height: 250px;
          position: relative;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .menu-card:hover .card-image img {
          transform: scale(1.1);
        }

        .card-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--primary);
          color: var(--secondary);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .card-content {
          padding: 25px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .card-header h3 {
          font-size: 1.5rem;
          color: var(--primary);
        }

        .price {
          font-weight: 600;
          font-family: var(--font-body);
        }

        .card-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 25px;
          min-height: 3rem;
        }

        .card-btn {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: 1px solid var(--glass-border);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: var(--transition-smooth);
          font-weight: 600;
        }

        .menu-card:hover .card-btn {
          background: var(--primary);
          color: var(--secondary);
          border-color: var(--primary);
        }
      `}</style>
    </section>
  )
}

export default Menu
