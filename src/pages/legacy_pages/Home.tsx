"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Globe, Trophy, Pencil } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';
import { useAuth } from '@/src/context/AuthContext';
import { supabase } from '@/src/lib/supabase';
import { fetchTopCompanies } from '@/src/lib/cms';

// Import assets
import anthonyImg from '@/src/assets/ton1.jpg';
import tonDarkImg from '@/src/assets/tondark1.jpg';

const Home = () => {
  const { isDark } = useTheme();
  const { user } = useAuth();
  const [content, setContent] = useState<any>(null);
  const [companies, setCompanies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPageData() {
      try {
        const [contentRes, companiesRes] = await Promise.all([
          supabase.from('site_content').select('*'),
          fetchTopCompanies(),
        ]);

        if (contentRes.data && Array.isArray(contentRes.data)) {
          const contentMap = contentRes.data.reduce((acc: any, item: any) => {
            acc[item.id] = item.content;
            return acc;
          }, {});
          setContent(contentMap);
        }

        if (companiesRes.success && companiesRes.data) {
          setCompanies(companiesRes.data);
        }
      } catch {
        // CMS is optional; defaults below keep the marketing page usable.
      }
    }
    fetchPageData();
  }, []);

  // Fallback defaults if content isn''t loaded yet
  const hero = content?.hero || {
    title: "MASTER THE SCIENCE OF SCALE",
    subtitle: "2024 International Realtor of the Year (NAR)",
    description: "The world's most elite entrepreneurs and leaders rely on Anthony Leuterio's proven frameworks to accelerate growth, maximize impact, and secure their legacy.",
    image: anthonyImg,
    cta_text: "Explore Coaching",
    cta_link: "/coaching"
  };

  const intro = content?.intro || {
    title: "The Architect of Modern Real Estate",
    subtitle: "Founder of Filipino Homes & Leuterio Realty",
    bio: "Anthony \"Tonton\" Leuterio is not just an entrepreneur; he is a movement builder. As the founder of the largest real estate ecosystem in the Philippines, he has empowered over 14,000 agents to achieve financial independence.",
    quote: "My philosophy is simple: God first, then family, then business. When you build with this foundation, success isn't just a goal—it's an inevitability.",
    image: anthonyImg
  };

  const ecosystem = content?.ecosystem || {
    filipino_homes: { title: "Filipino Homes", stat: "14,000+ LICENSED AGENTS", description: "The largest comprehensive real estate solutions portal in the Philippines, connecting thousands of properties to global buyers." },
    leuterio_realty: { title: "Leuterio Realty", stat: "100+ OFFICES NATIONWIDE", description: "The country's fastest-growing real estate brand, recognized globally for excellence in brokerage and consultation." },
    rent_ph: { title: "Rent.ph", stat: "TOP RENTAL PORTAL", description: "The pioneer digital rental platform in the Philippines, revolutionizing how property management and leasing connect." }
  };

  const event = content?.event || {
    badge: "Live Intensive",
    title: "The Edge 2024: Global Summit",
    date: "November 15-17, 2024",
    location: "Dubai, UAE",
    description: "Join Anthony Leuterio and the world's most elite real estate strategists for a three-day intensive designed to redefine your market position. This is where global legacies are architected.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
    cta_text: "Secure Your Seat",
    cta_link: "/events",
    availability: "Limited to 100 Elite Delegates",
    day: "15",
    month: "Nov 2024"
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="hero" className="hero" style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%), url(${(typeof hero.image === 'string' && hero.image.startsWith('http')) ? hero.image : (anthonyImg as any).src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 5%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '100px 8% 80px 12%',
        position: 'relative'
      }}>
        {user && (
          <Link 
            href="/content" 
            style={{ position: 'absolute', top: '100px', right: '2rem', zIndex: 100, background: 'var(--brand-gold)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            title="Edit Hero Content"
          >
            <Pencil size={20} />
          </Link>
        )}
        <div style={{ maxWidth: '600px', textAlign: 'left', position: 'relative', zIndex: 10 }}>
          <p style={{ color: 'var(--brand-gold)', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
            {hero.subtitle}
          </p>
          <p style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 500, opacity: 0.9 }}>
            Transform Your Reality
          </p>
          <h1 style={{ 
            marginBottom: '2rem', 
            fontSize: 'clamp(2.5rem, 8vw, 4.8rem)', 
            color: '#FFFFFF', 
            letterSpacing: '-2px', 
            lineHeight: 0.95,
            fontWeight: 900,
            textTransform: 'uppercase'
          }}>
            {(hero.title || "").split('<br />').map((text: string, i: number) => (
              <React.Fragment key={i}>
                {text}
                {i < (hero.title || "").split('<br />').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#FFFFFF', maxWidth: '500px', marginBottom: '3.5rem', fontWeight: 400, lineHeight: 1.6, opacity: 0.95 }}>
            {hero.description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link href={hero.cta_link} className="btn btn-primary" style={{ padding: '1rem 3.5rem', fontSize: '1.1rem' }}>
              {hero.cta_text}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar / Top Companies */}
      <section className="section py-8" style={{ background: 'var(--bg-section)' }}>
        <div className="container flex-center" style={{ gap: '4rem', opacity: 0.9, flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--brand-gold)' }}>Global Dominance:</span>
          {companies.length > 0 ? (
            companies.map((company) => (
              <div key={company.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--text-heading)', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {company.name}
                </span>
                {company.location && (
                  <span style={{ fontSize: '0.7rem', color: 'var(--brand-gold)', opacity: 0.6 }}>({company.location})</span>
                )}
              </div>
            ))
          ) : (
            <>
              <span style={{ color: 'var(--text-heading)', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '2px' }}>FILIPINO HOMES</span>
              <span style={{ color: 'var(--text-heading)', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '2px' }}>LEUTERIO REALTY</span>
              <span style={{ color: 'var(--text-heading)', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '2px' }}>RENT.PH</span>
            </>
          )}
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="section bg-light" style={{ position: 'relative' }}>
        {user && (
          <Link 
            href="/content" 
            style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 100, background: 'var(--brand-gold)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            title="Edit Introduction Content"
          >
            <Pencil size={20} />
          </Link>
        )}
        <div className="container">
          <div className="grid-2">
            <div className="reveal active">
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                {(intro.title || "").split('<br />').map((text: string, i: number) => (
                  <React.Fragment key={i}>
                    {text}
                    {i < (intro.title || "").split('<br />').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="mb-2" style={{ fontSize: '1.1rem', fontWeight: 500 }}>{intro.subtitle}</p>
              <p className="mb-4">
                {intro.bio}
              </p>
              <p className="mb-4" style={{ fontStyle: 'italic', paddingLeft: '1rem', color: 'var(--text-muted)' }}>
                "{intro.quote}"
              </p>
              <Link href="/about" className="btn btn-outline">Read Full Biography</Link>
            </div>
            <div className="reveal active">
              <Image 
                src={(typeof intro.image === 'string' && intro.image.startsWith('http')) ? intro.image : (isDark ? tonDarkImg : anthonyImg)} 
                alt={intro.name || "Anthony Leuterio"} 
                width={500}
                height={625}
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
      <section className="section bg-light" style={{ position: 'relative' }}>
        {user && (
          <Link 
            href="/content" 
            style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 100, background: 'var(--brand-gold)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            title="Edit Ecosystem Content"
          >
            <Pencil size={20} />
          </Link>
        )}
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
              <h3 style={{ color: 'var(--brand-orange)', marginBottom: '1rem' }}>{ecosystem.filipino_homes?.title || "Filipino Homes"}</h3>
              <p className="mb-4">{ecosystem.filipino_homes?.description}</p>
              <div style={{ padding: '1rem 0' }}>
                <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>{ecosystem.filipino_homes?.stat}</span>
              </div>
            </div>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ color: 'var(--brand-orange)', marginBottom: '1rem' }}>{ecosystem.leuterio_realty?.title || "Leuterio Realty"}</h3>
              <p className="mb-4">{ecosystem.leuterio_realty?.description}</p>
              <div style={{ padding: '1rem 0' }}>
                <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>{ecosystem.leuterio_realty?.stat}</span>
              </div>
            </div>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 style={{ color: 'var(--brand-orange)', marginBottom: '1rem' }}>{ecosystem.rent_ph?.title || "Rent.ph"}</h3>
              <p className="mb-4">{ecosystem.rent_ph?.description}</p>
              <div style={{ padding: '1rem 0' }}>
                <span style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>{ecosystem.rent_ph?.stat}</span>
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
              <h3>Coaching Core</h3>
              <p>Foundational group coaching for agents wanting to build a sustainable business.</p>
              <Link href="/coaching/core" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Learn More</Link>
            </div>
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <Users size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>Our Programs</h3>
              <p>Explore our wide range of coaching services tailored to your specific needs.</p>
              <Link href="/coaching/programs" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Explore All</Link>
            </div>
            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
              <Globe size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h3>Our Coaches</h3>
              <p>Meet the elite strategists certified by Anthony Leuterio.</p>
              <Link href="/coaches" className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Meet the Team</Link>
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
              <Link href="/programs/leads-accelerator" className="btn btn-primary">Explore Training</Link>
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


      {/* Upcoming Event */}
      <section className="section" style={{ backgroundColor: 'var(--bg-base)', position: 'relative' }}>
        {user && (
          <Link 
            href="/content" 
            style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 100, background: 'var(--brand-gold)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            title="Edit Event Content"
          >
            <Pencil size={20} />
          </Link>
        )}
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="reveal active">
              <span className="roi-badge mb-4">{event.badge}</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem', color: 'var(--brand-gold)' }}>
                {(event.title || "").split('<br />').map((text: string, i: number) => (
                  <React.Fragment key={i}>
                    {text}
                    {i < (event.title || "").split('<br />').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--text-heading)' }}>
                {event.date} | {event.location}
              </p>
              <p className="mb-4" style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                {event.description}
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Link href={event.cta_link} className="btn btn-primary">{event.cta_text}</Link>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>{event.availability}</span>
              </div>
            </div>
            <div className="reveal active" style={{ position: 'relative' }}>
              <div style={{ 
                height: '400px', 
                backgroundImage: `url(${event.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000'})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow-focus)',
                border: '1px solid var(--glass-border)'
              }}></div>
              <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-20px', 
                background: 'var(--luxury-gradient)', 
                color: 'var(--brand-black)', 
                padding: '1.5rem 2rem', 
                fontWeight: 900, 
                borderRadius: '4px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}>
                <div style={{ fontSize: '2rem', lineHeight: 1 }}>{event.day}</div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>{event.month}</div>
              </div>
            </div>
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
              <div style={{ height: '240px', backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800')`, backgroundSize: 'cover' }}></div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Blog</h4>
                <h3>The Future of Digital Real Estate</h3>
                <p>How AI and online platforms are reshaping the archipelago's market.</p>
                <Link href="/blog" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Read Article</Link>
              </div>
            </div>
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '240px', backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800')`, backgroundSize: 'cover' }}></div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Strategy</h4>
                <h3>5 Mistakes in Digital Marketing</h3>
                <p>Avoid these common errors that kill your conversion rates.</p>
                <Link href="/blog" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Read More</Link>
              </div>
            </div>
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '240px', backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800')`, backgroundSize: 'cover' }}></div>
              <div style={{ padding: '2rem' }}>
                <h4 className="org">Tech</h4>
                <h3>How AI is Changing Real Estate</h3>
                <p>Explore the frontier of AI-driven property marketing.</p>
                <Link href="/blog" style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}>Read More</Link>
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
                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                  <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                    alt="Maria Santos" 
                    fill
                    sizes="80px"
                    style={{ borderRadius: '50%', objectFit: 'cover' }} 
                  />
                </div>
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
                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                  <Image 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                    alt="John Doe" 
                    fill
                    sizes="80px"
                    style={{ borderRadius: '50%', objectFit: 'cover' }} 
                  />
                </div>
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
            <Link href="/coaching/testimonials" className="btn btn-outline" style={{ padding: '1rem 4rem' }}>View More Success Stories</Link>
          </div>
        </div>
      </section>

      {/* Admin Login */}
      <section className="section" style={{ background: 'var(--bg-base)', padding: '2rem 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <Link href="/login" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textDecoration: 'none', opacity: 0.6, transition: 'opacity 0.2s' }}>
            Admin Login
          </Link>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section" style={{ background: 'var(--bg-section)', color: 'var(--text-main)' }}>
        <div className="container text-center">
          <h2 className="section-title" style={{ fontSize: '3rem', color: 'var(--text-heading)' }}>Ready to Take Command?</h2>
          <p className="mb-4" style={{ fontSize: '1.4rem', opacity: 0.9, maxWidth: '850px', margin: '0 auto 4rem', fontWeight: 500, color: 'var(--text-main)' }}>The window to redefine your future is narrowing. Secure your strategy session today.</p>
          <a href="mailto:consultation@tonleuterio.com" className="btn btn-primary" style={{ padding: '1.8rem 5rem', fontSize: '1.2rem' }}>Inquire for Consultation</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
