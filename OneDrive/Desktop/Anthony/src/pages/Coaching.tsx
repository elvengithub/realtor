import { Link } from 'react-router-dom';
import { Trophy, Users, Star, HelpCircle, Globe } from 'lucide-react';

const Coaching = () => {
  return (
    <div className="coaching-page">
      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">High-Impact Business & Leadership Coaching</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.25rem' }}>Whether you're a solopreneur or leading a global organization, our coaching programs are designed to provide the strategy, accountability, and systems you need to dominate your industry.</p>
          <div className="grid-2" style={{ textAlign: 'left' }}>
            <div className="card">
              <Trophy size={48} color="var(--secondary-color)" className="mb-2" />
              <h3>Coaching Elite</h3>
              <p>The gold standard for top producers. One-on-one sessions with our most senior coaches to scale your business exponentially.</p>
              <Link to="/coaching-elite" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More</Link>
            </div>
            <div className="card">
              <Users size={48} color="var(--secondary-color)" className="mb-2" />
              <h3>Coaching Core</h3>
              <p>Designed for leaders building their foundations. Group coaching, shared systems, and community accountability.</p>
              <Link to="/coaching-core" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="text-center mb-4">Why Choose Our Coaching?</h3>
          <div className="grid-3">
            <div className="text-center">
              <Star size={32} color="var(--secondary-color)" />
              <h4 style={{ marginTop: '1rem' }}>Proven Results</h4>
              <p>Our students see an average revenue increase of 40% in their first 12 months.</p>
            </div>
            <div className="text-center">
              <Globe size={32} color="var(--secondary-color)" />
              <h4 style={{ marginTop: '1rem' }}>Global Network</h4>
              <p>Access an elite professional network and international strategic systems.</p>
            </div>
            <div className="text-center">
              <HelpCircle size={32} color="var(--secondary-color)" />
              <h4 style={{ marginTop: '1rem' }}>Support & FAQ</h4>
              <p>Have questions? Our FAQ section covers everything you need to know.</p>
              <Link to="/coaching-faq" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: 600 }}>Visit FAQ</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container text-center">
          <h2 className="section-title">Ready to Start?</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/free-coaching-consultation" className="btn btn-primary">Free Consultation</Link>
            <Link to="/testimonials" className="btn btn-outline">Success Stories</Link>
            <Link to="/real-estate-coaching-programs" className="btn btn-outline">View All Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaching;
