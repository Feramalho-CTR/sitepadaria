import React from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Process from './components/Process'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h1 className="text-gradient">Panis & Tec</h1>
            <p className="hero-subtitle">A Tradição Encontra o Futuro da Panificação Artesanal</p>
            <div className="hero-cta">
              <a href="#menu" className="btn-primary">Explore Nossos Pães</a>
              <a href="#process" className="btn-secondary">A Ciência</a>
            </div>
          </div>
          <div className="hero-overlay"></div>
        </section>

        <Menu />
        <Process />

        {/* Footer Section */}
        <footer className="footer-section">
          <div className="footer-container glass">
            <div className="footer-logo">PANIS<span>&</span>TEC</div>
            <p>© 2024 Sistemas de Panificação Especializada. Todos os direitos reservados.</p>
            <div className="footer-links">
              <a href="#">Protocolo de Privacidade</a>
              <a href="#">Termos de Síntese</a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx="true">{`
        .app {
          min-height: 100vh;
        }

        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2000') no-repeat center center/cover;
          text-align: center;
          padding: 0 20px;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.9) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          animation: fadeIn 1.5s ease-out;
        }

        .hero-content h1 {
          font-size: clamp(3.5rem, 10vw, 7rem);
          margin-bottom: 1rem;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 4px;
        }

        .hero-cta {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: var(--transition-smooth);
        }

        .btn-primary {
          background: var(--primary);
          color: var(--secondary);
          box-shadow: 0 10px 20px var(--primary-glow);
        }

        .btn-primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px var(--primary-glow);
        }

        .btn-secondary {
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          color: white;
          backdrop-filter: var(--glass-blur);
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: var(--primary);
        }

        .footer-section {
          padding: 50px 5%;
          text-align: center;
        }

        .footer-container {
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .footer-logo span {
          color: var(--primary);
        }

        .footer-container p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 30px;
        }

        .footer-links a {
          color: var(--text-muted);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-links a:hover {
          color: var(--primary);
        }
      `}</style>
    </div>
  )
}

export default App
