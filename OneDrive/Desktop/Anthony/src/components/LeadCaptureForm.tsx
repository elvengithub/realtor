import { useState } from 'react';

const LeadCaptureForm = ({ title = "Book Your Consultation" }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card text-center" style={{ padding: '4rem', borderTop: '4px solid var(--brand-gold)' }}>
        <h3 style={{ color: 'var(--brand-gold)' }}>Thank You!</h3>
        <p style={{ fontWeight: 600 }}>Your request has been received. Our team will contact you within 24 hours to confirm your booking.</p>
        <button className="btn btn-primary" style={{ marginTop: '2rem', padding: '1rem 3rem' }} onClick={() => setSubmitted(false)}>Back to Form</button>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: '3rem' }}>
      <h3 style={{ marginBottom: '2rem' }}>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="form-control" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" className="form-control" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label>Program of Interest</label>
          <select className="form-control">
            <option>Free Coaching Consultation</option>
            <option>Elite Deal Consultation</option>
            <option>Listing Velocity Consultation</option>
            <option>Coaching Elite</option>
            <option>Coaching Core</option>
          </select>
        </div>
        <div className="form-group">
          <label>Message (Optional)</label>
          <textarea className="form-control" rows={4} placeholder="Tell us about your goals"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Request</button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
