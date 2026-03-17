import { ArrowRight, Search, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const categories = ['All', 'Market Trends', 'Digital Strategy', 'Leadership', 'Tech'];
  
  const posts = [
    {
      id: 1,
      category: 'Market Trends',
      title: 'The Future of Real Estate in the Philippines: 2025-2030',
      excerpt: 'As we approach the mid-point of the decade, the landscape of property investment is shifting. Here is what every agent and investor needs to know...',
      date: 'May 12, 2024',
      author: 'Anthony Leuterio',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      category: 'Digital Strategy',
      title: '5 Mistakes New Agents Make in Digital Marketing',
      excerpt: 'In a world of noise, being heard requires more than just posting. Are you making these common errors that kill your conversion rates?',
      date: 'May 10, 2024',
      author: 'Marketing Team',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      category: 'Tech',
      title: 'How AI is Changing Property Viewing Forever',
      excerpt: 'Virtual tours were just the beginning. AI-driven personalization is now the frontier of how we connect people with their dream homes.',
      date: 'May 08, 2024',
      author: 'Tech Insights',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="content-hub">
      {/* Magazine Hero */}
      <section className="section bg-alt" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="subtitle">The Archipelago Insight</span>
            <h1 style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px' }}>Knowledge for Global Leaders</h1>
          </div>
          
          {/* Featured Post */}
          <div className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginTop: '3rem' }}>
            <div className="grid-2" style={{ gap: '0' }}>
              <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="subtitle" style={{ fontSize: '0.8rem' }}>Featured Article</span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Evolution of "Coaching with Heart"</h2>
                <p className="mb-4">
                  Leadership isn't about metrics; it's about the lives we impact. Anthony Leuterio shares his journey of building the largest network in the Philippines through empathy and innovation.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} /> May 15, 2024
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <User size={16} /> Anthony Leuterio
                  </span>
                </div>
                <Link to="#" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 3.5rem' }}>Read Full Story</Link>
              </div>
              <div style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="section">
        <div className="container">
          {/* Search & Filter Bar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`btn ${cat === 'All' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem' }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ position: 'relative', maxWidth: '300px', width: '100%' }}>
              <input 
                type="text" 
                placeholder="Search insights..." 
                className="form-control"
                style={{ paddingLeft: '3rem', borderRadius: '0', borderColor: 'var(--brand-gold)' }}
              />
              <Search size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--brand-gold)' }} />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid-3">
            {posts.map(post => (
              <div key={post.id} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ 
                  height: '240px', 
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="subtitle" style={{ fontSize: '0.7rem', marginBottom: '0.8rem', color: 'var(--brand-gold)' }}>{post.category}</span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ fontSize: '0.95rem', marginBottom: '2rem', flex: 1 }}>{post.excerpt}</p>
                  <Link 
                    to="#" 
                    style={{ 
                      color: 'var(--brand-gold)', 
                      fontWeight: 700, 
                      textDecoration: 'none', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Hint */}
          <div className="text-center" style={{ marginTop: '6rem' }}>
            <button className="btn btn-outline" style={{ padding: '1rem 4rem' }}>Load More Insights</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
