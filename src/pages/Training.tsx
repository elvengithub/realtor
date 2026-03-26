"use client";
import Link from 'next/link';
import { BookOpen, Rocket, Target } from 'lucide-react';

const Training = () => {
  return (
    <div className="training-page">
      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">Practical Training for Modern Real Estate</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.25rem' }}>Our training programs are built on real-world experience, providing you with the exact systems and scripts used by the top 1% of agents globally.</p>
          <div className="grid-2">
            <div className="card">
              <BookOpen size={48} color="var(--secondary-color)" className="mb-2" />
              <h3>Online Leads Accelerator</h3>
              <p>Master the art of digital lead generation and conversion in just 30 days.</p>
              <Link href="/programs/leads-accelerator" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More</Link>
            </div>
            <div className="card">
              <Rocket size={48} color="var(--secondary-color)" className="mb-2" />
              <h3>Prospecting Bootcamp</h3>
              <p>High-velocity prospecting systems to fill your pipeline with motivated sellers.</p>
              <Link href="/programs/bootcamp" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More</Link>
            </div>
            <div className="card">
              <Target size={48} color="var(--secondary-color)" className="mb-2" />
              <h3>Recruiting Roadmap</h3>
              <p>The definitive guide to building and scaling a high-performance real estate team.</p>
              <Link href="/programs/roadmap" className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container text-center">
          <h2 className="section-title">Ready to Elevate Your Skills?</h2>
          <div className="flex-center" style={{ flexDirection: 'column', gap: '1.5rem', width: '100%', marginTop: '2rem' }}>
            <Link href="/coaching" className="btn btn-primary" style={{ padding: '1rem 4rem' }}>
              Explore Coaching
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
