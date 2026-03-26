"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sun, Moon, Menu, X, LogOut, User as UserIcon, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchSettings() {
      const { data } = await supabase.from('site_content').select('*').eq('id', 'settings').single();
      if (data) setSettings(data.content);
    }
    fetchSettings();
  }, []);

  const branding = settings?.branding || { site_name: 'ANTHONY LEUTERIO' };
  const nameParts = (branding.site_name || "").split(' ');
  const firstName = nameParts[0] || "";
  const restName = nameParts.slice(1).join(' ');

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Content', path: '/blog' },
    { name: 'Testimonials', path: '/coaching/testimonials' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav id="navbar">
      <div className="container">
        <Link href="/" className="logo" style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '1px', fontSize: '1.8rem', color: 'var(--brand-gold)' }}>
          {firstName} <span style={{ color: 'var(--text-heading)' }}>{restName}</span>
        </Link>
        
        {user && (
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="auth-buttons" style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem', gap: '1rem' }}>
            {user ? (
              <>
                <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-heading)', fontSize: '0.9rem' }}>
                  <UserIcon size={18} />
                  <span className="hide-mobile">{(user.email || "").split('@')[0]}</span>
                </div>
                <a 
                  href="/admin/settings"
                  className="theme-toggle"
                  style={{ 
                    background: 'var(--brand-gold)', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Admin Settings"
                >
                  <Settings size={20} />
                </a>
                <button 
                  onClick={handleLogout}
                  className="btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                >
                  <LogOut size={16} />
                  <span className="hide-mobile">Logout</span>
                </button>
              </>
            ) : (
              <Link href="/login" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>
                Login
              </Link>
            )}
          </div>

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
