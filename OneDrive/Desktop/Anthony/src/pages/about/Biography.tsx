import { useTheme } from '../../context/ThemeContext';
import anthonyDarkImg from '../../assets/tondark1.jpg';
import anthonyLightImg from '../../assets/ton1.jpg';
import { Award, Target, Globe, BookOpen } from 'lucide-react';

const Biography = () => {
  const { isDark } = useTheme();

  return (
    <div className="biography-page">
      {/* Executive Narrative Hero */}
      <section className="section" style={{ paddingTop: '10rem', background: 'var(--bg-section)', borderBottom: '1px solid var(--brand-gold)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div className="reveal active">
              <div className="roi-badge mb-4">2024 International Realtor of the Year</div>
              <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: 'var(--text-heading)', letterSpacing: '2px' }}>The Narrative of <br /><span style={{ color: 'var(--brand-gold)' }}>Global Dominance</span></h1>
              <p className="lead" style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '2.5rem', fontWeight: 500 }}>
                Anthony Leuterio is the first Filipino to be named International Realtor of the Year by the National Association of Realtors (NAR).
              </p>
              <p className="mb-4" style={{ fontSize: '1.05rem', opacity: 0.8, lineHeight: 1.8, color: 'var(--text-main)' }}>
                As the founder of Filipino Homes—the largest real estate network in the Philippines—Anthony has built an ecosystem of over 14,000 agents and 100+ offices. With more than 500 individual awards, he is the undisputed authority in professionalizing the real estate industry at scale.
              </p>
            </div>
            <div className="reveal active">
              <div style={{ position: 'relative' }}>
                <img 
                  src={isDark ? anthonyDarkImg : anthonyLightImg} 
                  alt="Anthony Leuterio" 
                  style={{ 
                    width: '100%', 
                    aspectRatio: '4 / 5', 
                    objectFit: 'cover', 
                    objectPosition: 'center 10%', /* Focuses on face, shifted up */
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
                  border: '1px solid var(--brand-gold)', 
                  borderRadius: 'var(--border-radius)',
                  opacity: 0.5,
                  zIndex: 1
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="section text-center" style={{ backgroundColor: 'var(--bg-section)', color: 'var(--text-heading)', borderTop: '4px solid var(--brand-gold)', borderBottom: '4px solid var(--brand-gold)' }}>
        <div className="container">
          <blockquote className="quote-block" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left', borderLeft: 'none' }}>
            <h2 style={{ fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, color: 'var(--text-heading)', fontWeight: 700, textTransform: 'none' }}>
              "Success is not just about scaling numbers; it's about <span style={{ color: 'var(--brand-gold)' }}>scaling the impact</span> of your vision on the world."
            </h2>
            <cite style={{ display: 'block', marginTop: '3rem', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--brand-gold)', fontWeight: 800, fontSize: '0.9rem' }}>
              — Anthony Leuterio
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '6rem' }}>
            <div>
              <h3 style={{ borderLeft: '4px solid var(--secondary-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                From Vision to Global Scale
              </h3>
              <p>
                Born and raised with a passion for innovation, Anthony’s journey began with a simple mission: to modernize traditional industries through digital systems. He saw the potential of emerging markets and realized that for businesses to truly thrive, they needed a unified, tech-driven network of empowered professionals.
              </p>
              <p>
                By pioneering digital marketing at a time when the world was still catching up, he bridged the gap between local enterprise and global opportunity, creating thousands of jobs and fueling sustainable economic growth.
              </p>
            </div>
            <div>
              <h3 style={{ borderLeft: '4px solid var(--secondary-color)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                The "Leadership with Heart" Philosophy
              </h3>
              <p>
                Anthony’s mentorship is defined by his commitment to "Leadership with Heart." He believes that a true professional is more than just a strategist—they are visionaries and legacy-builders.
              </p>
              <p>
                His exclusive training programs have become the gold standard for entrepreneurs looking to scale their operations in the digital age. Today, he continues to lead the charge in integrating AI and advanced data analytics into business through innovative tech initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Core Pillars */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Core Achievements</span>
            <h2>Milestones of Excellence</h2>
          </div>
          <div className="grid-4">
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Award size={40} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Recognition</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>2024 International Realtor of the Year (NAR)</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Globe size={40} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Network Scaling</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Founder of Global Business Ecosystems</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <Target size={40} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Innovation</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Pioneer in Digital Property Marketing Ecosystems</p>
            </div>
            <div className="card text-center" style={{ padding: '2.5rem 1.5rem' }}>
              <BookOpen size={40} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Mentorship</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Impacted 100,000+ Leaders Globally</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biography;
