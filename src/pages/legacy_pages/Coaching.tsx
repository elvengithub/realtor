"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trophy, Star, HelpCircle, Globe, Crown, Pencil } from 'lucide-react';
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/context/ThemeContext';
import { supabase } from '@/src/lib/supabase';
import InlineEditorModal from '@/src/components/admin/InlineEditorModal';

const Coaching = () => {
  const { user } = useAuth();
  const { isDark } = useTheme();
  
  const [content, setContent] = useState<any>(null);
  const [activeEditor, setActiveEditor] = useState<string | null>(null);

  const handleSaveSuccess = (sectionId: string, newData: any) => {
    setContent((prev: any) => ({
      ...prev,
      [sectionId]: newData
    }));
    setActiveEditor(null);
  };

  useEffect(() => {
    async function fetchPageData() {
      const { data } = await supabase.from('site_content').select('*');
      if (data) {
        const mapped = data.reduce((acc, curr) => {
          acc[curr.id] = curr.content;
          return acc;
        }, {} as any);
        setContent(mapped);
      }
    }
    fetchPageData();
  }, []);

  // Fallbacks
  const heroContent = content?.coaching_hero || {
    title: "High-Impact Business & Leadership Coaching",
    description: "Whether you're a solopreneur or leading a global organization, our coaching programs are designed to provide the strategy, accountability, and systems you need to dominate your industry."
  };

  const programsContent = content?.coaching_programs || {
    core_title: "Coaching Core",
    core_desc: "Designed for leaders building their foundations. Group coaching, shared systems, and community accountability.",
    exec_title: "Executive Mentorship",
    exec_desc: "Exclusive 1-on-1 strategy sessions mapping out global expansions, high-ticket acquisitions, and legacy building."
  };

  const whyContent = content?.coaching_why || {
    stat_title: "Proven Results",
    stat_desc: "Our students see an average revenue increase of 40% in their first 12 months.",
    global_title: "Global Network",
    global_desc: "Access an elite professional network and international strategic systems.",
    support_title: "Elite Support",
    support_desc: "Have strategic questions? Our elite advisory team is here to help you scale rapidly."
  };

  return (
    <div className="coaching-page">
      {/* Premium Hero Section */}
      <section className="section pb-20" style={{ position: 'relative', background: isDark ? '#050505' : '#111', color: '#fff', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 60%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: isDark ? 'linear-gradient(to top, rgba(0,0,0,1), transparent)' : 'linear-gradient(to top, var(--bg-light), transparent)', pointerEvents: 'none', zIndex: 1 }}></div>

        {user && (
          <button 
            onClick={() => setActiveEditor('coaching_hero')}
            style={{ position: 'absolute', top: '100px', right: '2rem', zIndex: 100, background: 'var(--brand-gold)', color: 'black', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', border: 'none' }}
            title="Edit Hero Content"
          >
            <Pencil size={20} />
          </button>
        )}
        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <span className="roi-badge mb-6 shimmer-gold">Elite Performance</span>
          <h1 className="section-title text-gold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: '#fff' }}>
            {heroContent.title}
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: '#ccc', lineHeight: 1.6 }}>
            {heroContent.description}
          </p>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="section bg-light" style={{ position: 'relative' }}>
        {user && (
          <button 
            onClick={() => setActiveEditor('coaching_programs')}
            style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 100, background: 'var(--brand-gold)', color: 'black', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', border: 'none' }}
            title="Edit Programs Content"
          >
            <Pencil size={20} />
          </button>
        )}
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Flagship Programs</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--brand-gold)', margin: '0 auto' }}></div>
          </div>

          {/* Balanced 2-Column Grid */}
          <div className="grid-2">
            <div className="card glass-card p-8 flex flex-col h-full" style={{ background: isDark ? 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(0,0,0,0.9))' : 'var(--bg-base)' }}>
              <div style={{ background: 'rgba(212,175,55,0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Trophy size={40} color="var(--brand-gold)" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">{programsContent.core_title}</h3>
              <p className="flex-1 mb-6 text-[var(--text-muted)] leading-relaxed">{programsContent.core_desc}</p>
              <Link href="/coaching/core" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>Explore Core</Link>
            </div>

            <div className="card glass-card p-8 flex flex-col h-full" style={{ border: '1px solid var(--brand-gold)', background: isDark ? 'linear-gradient(135deg, rgba(30,25,10,0.8), rgba(10,5,0,0.9))' : 'linear-gradient(135deg, rgba(255,245,210,0.8), rgba(255,255,255,0.9))' }}>
              <div style={{ background: 'var(--brand-gold)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(212,175,55,0.3)' }}>
                <Crown size={40} color="#000" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">{programsContent.exec_title}</h3>
              <p className="flex-1 mb-6 text-[var(--text-muted)] leading-relaxed">{programsContent.exec_desc}</p>
              <Link href="/coaching/programs" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Apply for Elite</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-base" style={{ position: 'relative' }}>
        {user && (
          <button 
            onClick={() => setActiveEditor('coaching_why')}
            style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 100, background: 'var(--brand-gold)', color: 'black', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none' }}
            title="Edit Advantages Content"
          >
            <Pencil size={20} />
          </button>
        )}
        <div className="container">
          <h3 className="text-center mb-12 section-title">The Coaching Advantage</h3>
          <div className="grid-3">
            <div className="text-center p-6 border rounded-2xl glass-card transition-all hover:-translate-y-2" style={{ borderColor: 'var(--border-color)' }}>
              <div className="mx-auto mb-4" style={{ width: '60px', height: '60px', background: 'rgba(212,175,55,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={32} color="var(--brand-gold)" />
              </div>
              <h4 style={{ marginTop: '1rem', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{whyContent.stat_title}</h4>
              <p style={{ color: 'var(--text-muted)' }}>{whyContent.stat_desc}</p>
            </div>
            
            <div className="text-center p-6 border rounded-2xl glass-card transition-all hover:-translate-y-2" style={{ borderColor: 'var(--border-color)' }}>
              <div className="mx-auto mb-4" style={{ width: '60px', height: '60px', background: 'rgba(212,175,55,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Globe size={32} color="var(--brand-gold)" />
              </div>
              <h4 style={{ marginTop: '1rem', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{whyContent.global_title}</h4>
              <p style={{ color: 'var(--text-muted)' }}>{whyContent.global_desc}</p>
            </div>

            <div className="text-center p-6 border rounded-2xl glass-card transition-all hover:-translate-y-2" style={{ borderColor: 'var(--border-color)' }}>
              <div className="mx-auto mb-4" style={{ width: '60px', height: '60px', background: 'rgba(212,175,55,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HelpCircle size={32} color="var(--brand-gold)" />
              </div>
              <h4 style={{ marginTop: '1rem', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{whyContent.support_title}</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{whyContent.support_desc}</p>
              <a href="mailto:support@tonleuterio.com" style={{ color: 'var(--brand-gold)', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Access Support</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="section bg-alt" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h2 className="section-title mb-8">Ready to Scale?</h2>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/coaching/testimonials" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Read Success Stories</Link>
            <Link href="/coaching/programs" className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Explore Curriculums</Link>
          </div>
        </div>
      </section>

      {/* Admin Inline Editor Modal */}
      {activeEditor && (
        <InlineEditorModal 
          id={activeEditor} 
          initialData={content?.[activeEditor] || (
            activeEditor === 'coaching_hero' ? heroContent :
            activeEditor === 'coaching_programs' ? programsContent :
            activeEditor === 'coaching_why' ? whyContent : {}
          )} 
          onClose={() => setActiveEditor(null)} 
          onSaveSuccess={(newData) => handleSaveSuccess(activeEditor, newData)} 
        />
      )}
    </div>
  );
};

export default Coaching;
