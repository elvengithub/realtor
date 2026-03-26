"use client";
import React from 'react';
import ProtectedRoute from "@/src/components/ProtectedRoute";

const EventsPage = () => {
  return (
    <div className="events-page" style={{ paddingTop: '7rem', minHeight: '80vh', textAlign: 'center' }}>
      <div className="container">
        <span className="roi-badge mb-4">Elite Summits</span>
        <h1 className="section-title">The Edge: Global Strategy Series</h1>
        <p className="mb-4" style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.25rem' }}>
          Experience the world's most intensive real estate strategy summits. These are not just events—they are where global legacies are architected.
        </p>
        
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem' }}>
          <h3>The Edge 2024: Global Summit</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--brand-gold)', fontWeight: 700, margin: '1rem 0' }}>
            November 15-17, 2024 | Dubai, UAE
          </p>
          <p className="mb-4">
            Join Anthony Leuterio and the world's most elite real estate strategists for a three-day intensive designed to redefine your market position.
          </p>
          <a href="mailto:events@tonleuterio.com" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
            Inquire for Availability
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <ProtectedRoute>
      <EventsPage />
    </ProtectedRoute>
  );
}
