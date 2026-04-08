"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Footer = () => {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    async function fetchSettings() {
      const { data } = await supabase.from('site_content').select('*').eq('id', 'settings').single();
      if (data) setSettings(data.content);
    }
    fetchSettings();
  }, []);

  const branding = settings?.branding || { site_name: 'ANTHONY LEUTERIO', site_description: '2024 NAR International Realtor of the Year. Founder of Filipino Homes. Global authority in real estate scaling and executive coaching.' };
  const contact = settings?.contact || { email: 'support@tonleuterio.com' };
  const social = settings?.social || { facebook: 'https://facebook.com', instagram: 'https://instagram.com', twitter: 'https://twitter.com', youtube: 'https://youtube.com', linkedin: 'https://linkedin.com' };

  const nameParts = (branding.site_name || "").split(' ');
  const firstName = nameParts[0] || "";
  const restName = nameParts.slice(1).join(' ');

  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', padding: '6rem 0 3rem' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo" style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, letterSpacing: '1px', fontSize: '1.5rem' }}>
              <span className="text-gold">{firstName}</span> <span style={{ color: 'var(--text-heading)' }}>{restName}</span>
            </Link>
            <p style={{ marginTop: '1.5rem', opacity: 0.9, color: 'var(--text-main)', fontWeight: 500 }}>
              {branding.site_description}
            </p>
            <div className="social-links">
              {social.facebook && <a href={social.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>}
              {social.instagram && <a href={social.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>}
              {social.twitter && <a href={social.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>}
              {social.youtube && <a href={social.youtube} target="_blank" rel="noopener noreferrer"><Youtube size={20} /></a>}
              {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>}
            </div>
          </div>
          
          <div className="footer-col">
            <h4 style={{ color: 'var(--brand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '2rem' }}>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/coaching">Coaching Programs</Link></li>
              <li><Link href="/blog">Latest Content</Link></li>
              <li><a href="https://reviiai.com" target="_blank" rel="noopener noreferrer">Revii AI</a></li>
              <li><a href="https://reviicoaching.com" target="_blank" rel="noopener noreferrer">Revii Coaching</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ color: 'var(--brand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '2rem' }}>About</h4>
            <ul className="footer-links">
              <li><Link href="/about">Biography</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ color: 'var(--brand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 800, marginBottom: '2rem' }}>Support</h4>
            <ul className="footer-links">
              <li><a href={`mailto:${contact.email}`}>Email Support</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {branding.site_name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
