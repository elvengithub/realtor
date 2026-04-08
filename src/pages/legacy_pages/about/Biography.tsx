"use client";
import { useTheme } from '@/src/context/ThemeContext';
import { useAuth } from '@/src/context/AuthContext';
const anthonyDarkImg = '/img/tondark1.jpg';
const anthonyLightImg = '/img/ton.jpg';
import { Award, Globe, Zap, Pencil } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Biography = () => {
  const { isDark } = useTheme();
  const { user } = useAuth();

  return (
    <div className="biography-page" style={{ position: 'relative' }}>
      {user && (
        <Link 
          href="/content" 
          style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100, background: 'var(--brand-gold)', color: 'white', padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          title="Edit Content"
        >
          <Pencil size={24} />
        </Link>
      )}
      {/* Executive Narrative Hero */}
      <section className="section" style={{ paddingTop: '7rem', background: 'var(--bg-section)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div className="reveal active">
              <div className="roi-badge mb-4">2024 International Realtor of the Year</div>
              <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: 'var(--text-heading)', letterSpacing: '2px' }}>The Narrative of <br /><span style={{ color: 'var(--brand-gold)' }}>Global Dominance</span></h1>
              <p className="lead" style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '2.5rem', fontWeight: 500 }}>
                Anthony Leuterio is the visionary founder of <strong>Filipino Homes</strong>, the largest comprehensive real estate ecosystem in the Philippines.
              </p>
              <p className="mb-4" style={{ fontSize: '1.05rem', opacity: 0.8, lineHeight: 1.8, color: 'var(--text-main)' }}>
                A computer science graduate from the University of San Jose - Recoletos, Anthony revolutionized the industry by merging technology with traditional real estate. Leading over 14,000 agents across 100+ offices, he has been instrumental in professionalizing the sector through <strong>Leuterio Realty & Brokerage</strong> and <strong>Rent.ph</strong>.
              </p>
            </div>
            <div className="reveal active">
              <div style={{ position: 'relative' }}>
                <Image 
                  src={isDark ? anthonyDarkImg : anthonyLightImg} 
                  alt="Anthony Leuterio" 
                  width={600}
                  height={750}
                  priority
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    aspectRatio: '4 / 5', 
                    objectFit: 'cover', 
                    objectPosition: 'center 10%',
                    borderRadius: 'var(--border-radius)', 
                    boxShadow: 'var(--shadow-focus)',
                    position: 'relative',
                    zIndex: 2
                  }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  right: '-20px', 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: 'var(--border-radius)',
                  opacity: 0.5,
                  zIndex: 1
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote - Philosophy */}
      <section className="section text-center" style={{ backgroundColor: 'var(--bg-section)', color: 'var(--text-heading)' }}>
        <div className="container">
          <blockquote className="quote-block" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', borderLeft: 'none', display: 'block' }}>
            <h2 style={{ fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, color: 'var(--text-heading)', fontWeight: 700, textTransform: 'none' }}>
              "My hierarchy of life is simple: <span style={{ color: 'var(--brand-gold)' }}>God first</span>, then family, then business."
            </h2>
            <cite style={{ display: 'block', marginTop: '3rem', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--brand-gold)', fontWeight: 800, fontSize: '0.9rem' }}>
              — Anthony Leuterio
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Narrative Section - The Journey */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '6rem' }}>
            <div>
              <h3 style={{ borderLeft: '4px solid var(--secondary-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                From Computer Science to Real Estate Tycoon
              </h3>
              <p className="mb-4">
                Born with an innate drive for innovation, Anthony applied his background in Computer Science to a then-traditional real estate market. He saw the inefficiency and lack of transparency as a "market gap" that technology could solve.
              </p>
              <p>
                This led to the creation of <strong>Filipino Homes</strong>, a tech-driven platform that empowers agents to reach a global audience, specifically targeting Overseas Filipino Workers (OFWs). His approach wasn't just about selling properties; it was about <strong>digitizing the entire value chain</strong>.
              </p>
            </div>
            <div>
              <h3 style={{ borderLeft: '4px solid var(--secondary-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                A Partnership Built on Trust
              </h3>
              <p className="mb-4">
                Behind the massive success of the ecosystem is a powerful partnership. Anthony is married to <strong>May Leuterio</strong>, affectionately known as the "Mother of Filipino Homes."
              </p>
              <p>
                While Anthony drives the vision and marketing strategy, May manages the operations and the people, creating a balanced leadership dynamic that has sustained the company's growth for over 30 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Achievements Grid */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle" style={{ color: 'var(--brand-gold)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>A Legacy of Excellence</span>
            <h2>Milestones & Recognition</h2>
          </div>
          <div className="grid-3">
            <div className="card" style={{ padding: '2.5rem' }}>
              <Award size={40} color="var(--brand-gold)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>International Acclaim</h4>
              <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
                Recognized as the <strong>2024 International Realtor of the Year</strong> by the National Association of Realtors (NAR), cementing his status as a global industry leader.
              </p>
            </div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <Globe size={40} color="var(--brand-gold)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Global Enterprise</h4>
              <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
                Shortlisted for "Best Enterprise" at the <strong>International Europe Business Assembly (EBA) Awards</strong>, highlighting the world-class standard of Leuterio Realty.
              </p>
            </div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <Zap size={40} color="var(--brand-gold)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Industry Reform</h4>
              <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
                Founder of <strong>ABREP (A Better Real Estate Philippines)</strong>, leading the charge to professionalize and protect the industry against unlicensed practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section text-center" style={{ background: 'var(--brand-black)', color: 'white' }}>
        <div className="container">
           <h2 style={{ color: 'white', marginBottom: '2rem' }}>Ready to Scale Your Legacy?</h2>
           <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', opacity: 0.8 }}>Join the thousands of professionals who have transformed their careers through Anthony's mentorship.</p>
           <a href="/coaching" className="btn btn-primary">Start Your Journey</a>
        </div>
      </section>
    </div>
  );
};

export default Biography;
