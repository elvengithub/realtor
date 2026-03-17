import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Events', path: '/events' },
    { name: 'Content', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'About', path: '/biography' },
  ];

  return (
    <nav id="navbar">
      <div className="container">
        <Link to="/" className="logo" style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '1px', fontSize: '1.8rem', color: 'var(--brand-gold)' }}>
          ANTHONY <span style={{ color: 'var(--text-heading)' }}>LEUTERIO</span>
        </Link>
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mobile-only">
            <Link 
              to="/free-coaching-consultation" 
              className="btn btn-primary" 
              style={{ padding: '0.6rem 1.5rem', margin: '1rem 0' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link to="/free-coaching-consultation" className="btn btn-primary desktop-only" style={{ padding: '0.6rem 2.5rem', marginLeft: '1.5rem', letterSpacing: '1px' }}>
            Book Consultation
          </Link>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
