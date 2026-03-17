import { Link } from 'react-router-dom';
import { Star, ArrowRight, Trophy, Users, Globe, PlayCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Import assets
import anthonyImg from '../assets/ton1.jpg';
import tonDarkImg from '../assets/tondark1.jpg';

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="hero" className="hero" style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%), url(${isDark ? tonDarkImg : anthonyImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 5%',
        minHeight: '100vh', /* Perfect viewport fit */
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '80px 8% 60px' /* Slightly shifted right for better "small" corner look */
      }}>
        <div style={{ maxWidth: '500px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
          <div className="roi-badge mb-4" style={{ display: 'inline-flex' }}>
            <Star size={12} fill="currentColor" /> 2024 International Realtor of the Year (NAR)
          </div>
          <span className="script-text" style={{ color: 'var(--brand-gold)', fontSize: '1.4rem', display: 'block', marginBottom: '1rem', opacity: 0.8 }}>
            Transform Your Reality
          </span>
          <h1 style={{ 
            marginBottom: '2rem', 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            color: '#FFFFFF', 
            letterSpacing: '-1.5px', 
            lineHeight: 0.95,
            fontWeight: 900,
            textTransform: 'uppercase'
          }}>
            MASTER THE <br />
            <span style={{ color: 'var(--brand-gold)' }}>SCIENCE</span><br />
            OF SCALE
          </h1>
          <p className="mb-8" style={{ fontSize: '1.1rem', color: '#FFFFFF', maxWidth: '400px', marginBottom: '3.5rem', fontWeight: 600, lineHeight: 1.5 }}>
            The world's most elite entrepreneurs and leaders rely on Anthony Leuterio's proven frameworks to accelerate growth, maximize impact, and secure their legacy.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
            <Link to="/free-coaching-consultation" className="btn btn-primary" style={{ padding: '0.8rem 3.5rem', fontSize: '1rem' }}>
              Book Consultation <ArrowRight size={18} style={{ marginLeft: '1rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="section py-8" style={{ background: 'var(--bg-section)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container flex-center" style={{ gap: '4rem', opacity: 0.9 }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--brand-gold)' }}>Global Dominance:</span>
          <span style={{ color: 'var(--text-heading)', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '2px' }}>FILIPINO HOMES</span>
          <span style={{ color: 'var(--text-heading)', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '2px' }}>LEUTERIO REALTY</span>
          <span style={{ color: 'var(--text-heading)', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '2px' }}>RENT.PH</span>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-2">
            <div className="reveal active">
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>About Anthony Orais Leuterio</h2>
              <p className="mb-2">Anthony "Tonton" Leuterio is a visionary entrepreneur and strategic growth coach, recognized for building massive marketing networks and pioneering digital business transformation at scale.</p>
              <p className="mb-4">With a legacy of empowering thousands of professionals and connecting global markets, Anthony now focuses on mentoring the next generation of world-class leaders and business owners.</p>
              <Link to="/biography" className="btn btn-outline">Read Full Biography</Link>
            </div>
            <div className="reveal active">
              <img 
                src={isDark ? tonDarkImg : anthonyImg} 
                alt="Anthony Leuterio" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  borderRadius: 'var(--border-radius)', 
                  boxShadow: 'var(--shadow-focus)',
                  filter: 'grayscale(0.2) contrast(1.1)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="section bg-light" style={{ borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="roi-badge mb-4">Full-Spectrum Authority</span>
            <h2 className="section-title">The Powered Ecosystem</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-main)' }}>
              Anthony Leuterio's coaching is fueled by the largest real estate infrastructure in the Philippines.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: '4rem' }}>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ color: 'var(--brand-orange)', marginBottom: '1rem' }}>Filipino Homes</h3>
              <p className="mb-4">The largest comprehensive real estate solutions portal in the Philippines, connecting thousands of properties to global buyers.</p>
              <div style={{ padding: '1rem 0', borderTop: '1px solid var(--glass-border)' }}>
                <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>14,000+ LICENSED AGENTS</span>
              </div>
            </div>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ color: 'var(--brand-orange)', marginBottom: '1rem' }}>Leuterio Realty</h3>
              <p className="mb-4">The country's fastest-growing real estate brand, recognized globally for excellence in brokerage and consultation.</p>
              <div style={{ padding: '1rem 0', borderTop: '1px solid var(--glass-border)' }}>
                <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>100+ OFFICES NATIONWIDE</span>
              </div>
            </div>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ color: 'var(--brand-orange)', marginBottom: '1rem' }}>Rent.ph</h3>
              <p className="mb-4">The pioneer digital rental platform in the Philippines, revolutionizing how property management and leasing connect.</p>
              <div style={{ padding: '1rem 0', borderTop: '1px solid var(--glass-border)' }}>
                <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>TOP RENTAL PORTAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Programs Overview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">The Masterclasses</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', opacity: 0.7, lineHeight: 1.8 }}>Refined strategies built for those who refuse to settle for the status quo. Our programs are engineered to deliver measurable ROI and transformative leadership.</p>
          </div>
          <div className="grid-3">
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <Trophy size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>Coaching Elite</h3>
              <p>Exclusive 1-on-1 coaching for top producers looking to scale to the next level.</p>
              <Link to="/coaching-elite" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Learn More</Link>
            </div>
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <Users size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>Coaching Core</h3>
              <p>Foundational group coaching for agents wanting to build a sustainable business.</p>
              <Link to="/coaching-core" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Learn More</Link>
            </div>
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <Globe size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>Our Programs</h3>
              <p>Explore our wide range of coaching services tailored to your specific needs.</p>
              <Link to="/our-programs" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Explore All</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="section bg-alt">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>Accelerate Your Growth</h2>
              <p className="mb-2">Our training programs are built on real-world experience and proven systems that drive results in today's competitive market.</p>
              <ul className="check-list" style={{ marginBottom: '2.5rem' }}>
                <li>Online Leads Accelerator</li>
                <li>Prospecting Bootcamp</li>
                <li>Recruiting Roadmap</li>
                <li>Altman Advantage</li>
              </ul>
              <Link to="/program-online-leads-accelerator" className="btn btn-primary">Explore Training</Link>
            </div>
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <div className="card" style={{ padding: '2rem' }}>
                <h4 className="org">Popular</h4>
                <h3>OLA</h3>
                <p>Master digital marketing for real estate.</p>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <h4 className="org">Intensive</h4>
                <h3>Bootcamp</h3>
                <p>30 days of high-velocity prospecting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Upcoming Events</h2>
          </div>
          <div className="grid-2">
            <div className="card" style={{ display: 'flex', gap: '2rem', padding: '3rem' }}>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <span className="award-year" style={{ fontSize: '2rem', display: 'block' }}>MAY</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>15</span>
              </div>
              <div>
                <h4 className="org">Summit</h4>
                <h3>Asian Real Estate Summit</h3>
                <p>Bangkok, Thailand. Join global leaders for the premier real estate event of the year.</p>
                <Link to="/summit" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  Register Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', gap: '2rem', padding: '3rem' }}>
              <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                <span className="award-year" style={{ fontSize: '2rem', display: 'block' }}>JUN</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>22</span>
              </div>
              <div>
                <h4 className="org">Workshop</h4>
                <h3>The Edge Intensive</h3>
                <p>Strategic growth training for entrepreneurs and high-impact professionals.</p>
                <Link to="/the-edge" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  Register Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/events" className="btn btn-outline">View All Events</Link>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Latest Content</h2>
          </div>
          <div className="grid-3">
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#ccc' }}></div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Blog</h4>
                <h3>The Future of Digital Real Estate</h3>
                <p>How AI and online platforms are reshaping the archipelago's market.</p>
                <Link to="/blog" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Read Article</Link>
              </div>
            </div>
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PlayCircle size={64} color="white" />
              </div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Podcast</h4>
                <h3>Interview with Global Investors</h3>
                <p>Insights on cross-border transactions and the OFW market.</p>
                <Link to="/podcast" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Listen Now</Link>
              </div>
            </div>
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#ccc' }}></div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Video</h4>
                <h3>Filipino Homes Success Stories</h3>
                <p>Real agents sharing their journey from zero to top producer.</p>
                <Link to="/tfshow" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Watch Video</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">Success Stories</span>
            <h2>Real Results from Real Leaders</h2>
          </div>
          <div className="grid-2">
            <div className="card" style={{ padding: '4rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                  alt="Maria Santos" 
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>Maria Santos</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Founding Partner, Growth Architects</span>
                </div>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                "Anthony's coaching completely changed my perspective on leadership. I went from struggling with operations to scaling my business globally using his strategic systems. Our revenue increased by 400% in just one year."
              </p>
            </div>
            <div className="card" style={{ padding: '4rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                  alt="John Doe" 
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h4 style={{ marginBottom: '0.2rem' }}>John Doe</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>CEO, Strategic Ventures</span>
                </div>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                "The systems I learned are now the backbone of my team's success. We scaled from 5 to 50 agents while maintaining profitability and culture. Anthony is truly the visionary the industry needed."
              </p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '5rem' }}>
            <Link to="/testimonials" className="btn btn-outline" style={{ padding: '1rem 4rem' }}>View More Success Stories</Link>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section" style={{ background: 'var(--bg-section)', color: 'var(--text-main)', borderTop: '4px solid var(--brand-orange)' }}>
        <div className="container text-center">
          <h2 className="section-title" style={{ fontSize: '3rem', color: 'var(--text-heading)' }}>Ready to Take Command?</h2>
          <p className="mb-4" style={{ fontSize: '1.4rem', opacity: 0.9, maxWidth: '850px', margin: '0 auto 4rem', fontWeight: 500, color: 'var(--text-main)' }}>The window to redefine your future is narrowing. Secure your diagnostic strategy session today.</p>
          <Link to="/free-coaching-consultation" className="btn btn-primary" style={{ padding: '1.8rem 5rem', fontSize: '1.2rem' }}>Initiate Your Transformation</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
