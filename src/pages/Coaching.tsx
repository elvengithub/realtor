"use client";
import Link from 'next/link';
import { Trophy, Star, HelpCircle, Globe } from 'lucide-react';

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
              <h3>Coaching Core</h3>
              <p>Designed for leaders building their foundations. Group coaching, shared systems, and community accountability.</p>
              <Link href="/coaching/core" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More</Link>
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
              <h4 style={{ marginTop: '1rem' }}>Support</h4>
              <p>Have questions? Our support team is here to help you scale.</p>
              <a href="mailto:support@tonleuterio.com" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: 600 }}>Email Support</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container text-center">
          <h2 className="section-title">Ready to Start?</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/coaching/testimonials" className="btn btn-primary">Success Stories</Link>
            <Link href="/coaching/programs" className="btn btn-outline">View All Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaching;
