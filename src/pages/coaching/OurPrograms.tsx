"use client";
import { Trophy, Users, Target, Zap } from 'lucide-react';
import Link from 'next/link';

const OurPrograms = () => {
  const programs = [
    {
      title: "Coaching Elite",
      icon: <Trophy size={32} />,
      desc: "Exclusive 1-on-1 mentorship for high-volume producers.",
      link: "/coaching"
    },
    {
      title: "Coaching Core",
      icon: <Users size={32} />,
      desc: "Foundational group coaching for consistent growth.",
      link: "/coaching/core"
    },
    {
      title: "OLA Masterclass",
      icon: <Zap size={32} />,
      desc: "Master the Online Leads Accelerator system.",
      link: "/programs/leads-accelerator"
    },
    {
      title: "Prospecting Bootcamp",
      icon: <Target size={32} />,
      desc: "30 days of high-velocity lead generation.",
      link: "/programs/bootcamp"
    }
  ];

  return (
    <div className="programs-page">
      <section className="section bg-light" style={{ paddingTop: '7rem' }}>
        <div className="container text-center">
          <span className="subtitle">Choose Your Path</span>
          <h1 style={{ marginBottom: '2rem' }}>Coaching & Training <br />Programs</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            From foundational skills to elite-level mastery, find the program that matches your ambition.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {programs.map((p, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                <div style={{ color: 'var(--secondary-color)', background: 'var(--bg-section)', padding: '1.5rem', borderRadius: '12px' }}>
                  {p.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ marginBottom: '1.5rem' }}>{p.desc}</p>
                  <Link href={p.link} className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPrograms;
