"use client";
import React from 'react';
import { CheckCircle, ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

interface MasterSalesPageProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  price?: string;
  benefitsTitle?: string;
}

const MasterSalesPage: React.FC<MasterSalesPageProps> = ({
  title,
  subtitle,
  description,
  image = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  features,
  ctaText = "Enroll Now",
  ctaLink = "/free-coaching-consultation",
  price,
  benefitsTitle = "What You Will Master"
}) => {
  return (
    <div className="sales-page">
      {/* Hero Header */}
      <section className="section bg-light" style={{ paddingTop: '7rem' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal active">
              <span className="subtitle">{subtitle}</span>
              <h1 style={{ marginBottom: '2rem' }}>{title}</h1>
              <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>{description}</p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link href={ctaLink} className="btn btn-primary">{ctaText}</Link>
                <button className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem' }}>
                  <PlayCircle size={18} /> Watch Preview
                </button>
              </div>
            </div>
            <div className="reveal active">
              <div style={{ 
                height: '450px', 
                backgroundImage: `url(${image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow-focus)'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '5rem' }}>
            <div className="card" style={{ padding: '4rem' }}>
              <h2 style={{ marginBottom: '3rem' }}>{benefitsTitle}</h2>
              <ul className="check-list">
                {features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{feature}</li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="subtitle">The Result</span>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Systems Designed for Exponential Scale.</h3>
              <p className="mb-4">
                Stop trading time for money. Our programs are built on the exact blueprints Anthony Leuterio used to build the Philippines' largest real estate network. 
              </p>
              <div style={{ padding: '2rem', borderLeft: '4px solid var(--secondary-color)', background: 'var(--bg-section)' }}>
                <p style={{ fontStyle: 'italic', marginBottom: 0 }}>
                  "This program was the single best investment I made in my career. I doubled my closings in 90 days."
                </p>
                <strong style={{ display: 'block', marginTop: '1rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>— Top Producer Graduate</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA */}
      <section className="section bg-light">
        <div className="container text-center">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem' }}>
            <span className="subtitle">Investment</span>
            <h2 style={{ marginBottom: '1.5rem' }}>Ready to Take Control?</h2>
            {price && <h3 style={{ fontSize: '3.5rem', color: 'var(--secondary-color)', marginBottom: '2rem' }}>{price}</h3>}
            <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
              Join thousands of global agents who have already mastered these systems. Your future in real estate starts today.
            </p>
            <Link href={ctaLink} className="btn btn-primary" style={{ padding: '1.5rem 5rem' }}>
              {ctaText} <ArrowRight size={18} style={{ marginLeft: '1rem' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterSalesPage;
