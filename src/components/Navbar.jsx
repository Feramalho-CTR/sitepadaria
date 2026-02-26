import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">🍞</span>
          <span className="logo-text">PANIS<span className="accent">&</span>TEC</span>
        </div>

        <ul className="nav-links">
          <li><a href="#hero">Início</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#process">Técnica</a></li>
          <li><a href="#about">História</a></li>
        </ul>

        <button className="nav-cta glass">Peça Agora</button>
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 30px 5%;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          padding: 15px 5%;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 2px;
          color: white;
        }

        .logo-text .accent {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-cta {
          padding: 10px 25px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .nav-cta:hover {
          background: var(--primary);
          color: var(--secondary);
          border-color: var(--primary);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
