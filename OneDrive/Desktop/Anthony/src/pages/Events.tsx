import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      id: 1,
      type: 'Summit',
      title: 'Asian Real Estate Summit 2024',
      date: 'MAY 15',
      location: 'Bangkok, Thailand',
      description: 'Join Anthony Leuterio and global property leaders for the most prestigious summit in Asia.',
      link: '/summit'
    },
    {
      id: 2,
      type: 'Intensive',
      title: 'The Edge: Sales Mastery',
      date: 'JUN 22',
      location: 'Cebu City, Philippines',
      description: 'A 3-day high-velocity training program designed to double your conversion rate.',
      link: '/the-edge'
    },
    {
      id: 3,
      type: 'Webinar',
      title: 'Digital Lead Gen Secrets',
      date: 'JUL 05',
      location: 'Global / Virtual',
      description: 'Live masterclass on mastering the OLA systems from anywhere in the world.',
      link: '/webinars'
    }
  ];

  return (
    <div className="events-page">
      {/* Hero Header */}
      <section className="section bg-alt" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">Global Schedule</span>
          <h1 style={{ marginBottom: '2rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px' }}>Where in the World <br />is Anthony?</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
            Experience the energy of live training. From international summits to local intensives, join the movement redefining global real estate.
          </p>
        </div>
      </section>

      {/* Event Ticket List */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {events.map(event => (
              <div key={event.id} className="card" style={{ 
                padding: '0', 
                overflow: 'hidden', 
                display: 'flex',
                border: '1px solid var(--glass-border)',
                flexWrap: 'wrap'
              }}>
                {/* Left: Date Stub */}
                <div style={{ 
                  background: 'var(--luxury-gradient)', 
                  color: 'var(--brand-black)', 
                  padding: '2rem 3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '180px',
                  textAlign: 'center',
                  boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.3)'
                }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 900, letterSpacing: '2px', opacity: 0.9 }}>{event.date.split(' ')[0]}</span>
                  <span style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>{event.date.split(' ')[1]}</span>
                </div>

                {/* Middle: Content */}
                <div style={{ 
                  padding: '2.5rem 3rem', 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center' 
                }}>
                  <span className="subtitle" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>{event.type}</span>
                  <h3 style={{ marginBottom: '1rem' }}>{event.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} color="var(--secondary-color)" /> {event.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} color="var(--secondary-color)" /> 2024 Season
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '1rem' }}>{event.description}</p>
                </div>

                {/* Right: Action Stub */}
                <div style={{ 
                  padding: '2rem 3rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderLeft: '2px dashed var(--glass-border)',
                  minWidth: '220px'
                }}>
                  <Link to={event.link} className="btn btn-primary" style={{ width: '100%' }}>
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Success / Impact */}
      <section className="section bg-alt">
        <div className="container">
          <div className="grid-3 text-center">
            <div>
              <Users size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '3rem' }}>50k+</h2>
              <p className="subtitle">Attendees Annually</p>
            </div>
            <div>
              <Globe size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '3rem' }}>12+</h2>
              <p className="subtitle">Countries Visited</p>
            </div>
            <div>
              <Award size={48} color="var(--secondary-color)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '3rem' }}>100+</h2>
              <p className="subtitle">Global Stages</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <div className="card" style={{ padding: '5rem', background: 'var(--luxury-gradient)', color: 'var(--brand-black)', border: 'none', boxShadow: 'var(--shadow-focus)' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--brand-black)', fontWeight: 900 }}>Want Anthony to Speak at Your Event?</h2>
            <p style={{ color: 'var(--brand-black)', opacity: 0.8, maxWidth: '600px', margin: '0 auto 3rem', fontWeight: 600 }}>
              Bring world-class real estate insights and high-energy leadership to your stage. Now booking for the 2025 global season.
            </p>
            <Link to="/contact" className="btn btn-secondary" style={{ border: '2px solid var(--brand-black)', background: 'transparent', color: 'var(--brand-black)' }}>
              Inquire for Keynote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock Award for stats section
const Award = ({ size, color, style }: { size: number, color: string, style?: any }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const Globe = ({ size, color, style }: { size: number, color: string, style?: any }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default Events;
