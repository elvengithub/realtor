"use client";
import { Linkedin } from 'lucide-react';

const OurCoaches = () => {
  const coaches = [
    {
      name: 'Michael Rivera',
      role: 'Head of Growth Strategy',
      bio: 'Former VP of Operations with 15+ years of experience scaling national enterprises.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Sarah Gomez',
      role: 'Digital Growth Lead',
      bio: 'Digital marketing expert who has managed over $10M in strategic ad spend.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'David Tan',
      role: 'Project Productivity Lead',
      bio: 'Specializes in organizational efficiency and building high-performance professional cultures.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="coaches-page">
      <section className="section bg-light" style={{ paddingTop: '7rem' }}>
        <div className="container text-center">
          <span className="subtitle" style={{ color: 'var(--accent-text)' }}>THE EXPERTS</span>
          <h1 style={{ marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>The Senior <br />Strategists</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Hand-picked and certified by Anthony Leuterio, our coaches are veterans who have "been there and done that."
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {coaches.map((c, idx) => (
              <div key={idx} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ height: '300px', backgroundImage: `url(${c.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 800 }}>{c.name}</h3>
                  <span className="subtitle" style={{ fontSize: '0.7rem', color: 'var(--accent-text)', marginBottom: '1.5rem', fontWeight: 700 }}>{c.role}</span>
                  <p style={{ fontSize: '1rem', marginBottom: '2.5rem', opacity: 0.8, lineHeight: 1.7 }}>{c.bio}</p>
                  <a href="#" style={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem' }}>
                    <Linkedin size={18} /> CONNECT ON LINKEDIN
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCoaches;
