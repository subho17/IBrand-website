import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Settings } from 'lucide-react';

const Navbar = ({ onConnectSales, onAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const isLight = isScrolled || isHovered;

  return (
    <>
      <header
        className={`header-wrapper ${isLight ? 'light' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="container navbar">
          <div className="nav-logo">
            <img src="/logo-icon.png" alt="Logo" style={{ height: '60px', objectFit: 'contain' }} className="logo-image-anim" />
            <span style={{ display: 'flex', alignItems: 'center', paddingTop: '4px' }}>iBrand<span className="logo-mark">Mark</span></span>
          </div>

          {/* Desktop Menu */}
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li onClick={handleNavClick}>Features <ChevronDown size={14} /></li>
            <li onClick={handleNavClick}>Pricing</li>
            <li onClick={handleNavClick}>Migration <ChevronDown size={14} /></li>
            <li onClick={handleNavClick}>Integrations <ChevronDown size={14} /></li>
            <li onClick={handleNavClick}>Resources <ChevronDown size={14} /></li>
            
            {/* Mobile Actions inside menu */}
            <li className="mobile-actions">
              <button className="btn btn-outline" onClick={() => { handleNavClick(); onConnectSales(); }}>Request demo</button>
              <button className="btn btn-primary" onClick={() => { handleNavClick(); onConnectSales(); }}>Start free</button>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn btn-outline" onClick={onConnectSales}>Request demo</button>
            <button className="btn btn-primary" onClick={onConnectSales}>Start free</button>
          </div>

          {/* Hamburger Icon */}
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <button
        onClick={onAdmin}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
          background: 'rgba(20, 20, 20, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '12px',
          cursor: 'pointer',
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(144, 244, 136, 0.2)';
          e.currentTarget.style.color = 'var(--accent-green)';
          e.currentTarget.style.borderColor = 'var(--accent-green)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(20, 20, 20, 0.9)';
          e.currentTarget.style.color = '#666';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }}
        title="Email Settings"
      >
        <Settings size={20} />
      </button>
    </>
  );
};

export default Navbar;