import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="section bg-alt" style={{ paddingTop: '10rem' }}>
        <div className="container text-center">
          <span className="subtitle">Get in Touch</span>
          <h1 style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px' }}>Let’s Build Your <br />Future Together</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Whether you have a question about coaching or want to book Anthony for a speaking engagement, our team is ready to assist.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '5rem' }}>
            <div>
              <div className="grid-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
                <div className="card" style={{ padding: '2rem' }}>
                  <Mail size={24} color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Email Us</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>info@anthonyleuterio.com</p>
                </div>
                <div className="card" style={{ padding: '2rem' }}>
                  <Phone size={24} color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Call Us</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>+63 (32) 234 5678</p>
                </div>
              </div>
              
              <div style={{ paddingLeft: '1rem' }}>
                <h3 style={{ marginBottom: '2rem' }}>Office Locations</h3>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                  <MapPin size={20} color="var(--brand-gold)" />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.3rem' }}>Cebu Headquarters</strong>
                    <p style={{ fontSize: '0.95rem' }}>Filipino Homes Tower, Cebu Business Park, Cebu City, Philippines</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <Clock size={20} color="var(--brand-gold)" />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.3rem' }}>Business Hours</strong>
                    <p style={{ fontSize: '0.95rem' }}>Monday – Friday: 9:00 AM – 6:00 PM (GMT+8)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '4rem' }}>
                <LeadCaptureForm title="Send a Message" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
