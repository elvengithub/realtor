"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, MapPin, Bed, Bath, Square, Mail } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';

interface PropertyDetailModalProps {
  property: any;
  onClose: () => void;
}

export default function PropertyDetailModal({ property, onClose }: PropertyDetailModalProps) {
  const { isDark } = useTheme();

  // Prevent background scrolling when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-12" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}>
      {/* Close Background Click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto flex flex-col rounded-[32px] shadow-2xl glass-card animate-in fade-in zoom-in duration-500" 
           style={{ background: isDark ? 'linear-gradient(to bottom, #111, #050505)' : 'linear-gradient(to bottom, #fff, #f4f2ec)', border: `1px solid ${isDark ? 'rgba(212,175,55,0.2)' : 'rgba(212,175,55,0.4)'}` }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-50 p-2 rounded-full shadow-lg transition-transform hover:scale-110 hover:rotate-90" 
          style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <X size={24} />
        </button>

        {/* Hero Image Section */}
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <Image 
            src={property.images?.[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920'} 
            alt={property.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          {/* Deep Gradient to blend with text */}
          <div className="absolute inset-0" style={{ background: isDark ? 'linear-gradient(to top, #111 0%, transparent 60%)' : 'linear-gradient(to top, #fff 0%, transparent 60%)' }}></div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <span className="roi-badge mb-4 shimmer-gold bg-black/50">{property.status}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2" style={{ color: isDark ? '#fff' : '#000', textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9)' }}>
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-lg" style={{ color: isDark ? '#ccc' : '#444', textShadow: isDark ? '0 2px 4px rgba(0,0,0,0.8)' : '0 2px 4px rgba(255,255,255,0.8)' }}>
              <MapPin size={20} style={{ color: 'var(--brand-gold)', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }} />
              <span className="font-semibold">{property.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-12 flex flex-col lg:flex-row gap-12">
          
          {/* Left: Details */}
          <div className="flex-1">
            <p className="text-5xl font-black text-gold mb-8 tracking-tighter drop-shadow-sm">
              {new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(property.price)}
            </p>

            <div className="flex gap-6 mb-10 pb-10 border-b" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ background: 'rgba(212,175,55,0.1)' }}><Bed size={24} color="var(--brand-gold)" /></div>
                <div><span className="block text-2xl font-bold">{property.bedrooms}</span><span className="text-xs uppercase text-gray-500 font-bold">Beds</span></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ background: 'rgba(212,175,55,0.1)' }}><Bath size={24} color="var(--brand-gold)" /></div>
                <div><span className="block text-2xl font-bold">{property.bathrooms}</span><span className="text-xs uppercase text-gray-500 font-bold">Baths</span></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ background: 'rgba(212,175,55,0.1)' }}><Square size={24} color="var(--brand-gold)" /></div>
                <div><span className="block text-2xl font-bold">{new Intl.NumberFormat().format(property.area_sqft)}</span><span className="text-xs uppercase text-gray-500 font-bold">SqFt</span></div>
              </div>
            </div>

            <div className="prose prose-lg">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--brand-gold)' }}>About The Estate</h3>
              <p className="text-lg leading-relaxed" style={{ color: isDark ? '#b3b3b3' : '#555' }}>
                {property.description}
              </p>
            </div>
          </div>

          {/* Right: Call to action block */}
          <div className="w-full lg:w-[350px]">
            <div className="p-8 rounded-3xl sticky top-8" style={{ border: `1px solid ${isDark ? 'rgba(212,175,55,0.3)' : 'var(--brand-gold)'}`, background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(212,175,55,0.05)' }}>
              <h4 className="text-2xl font-bold mb-4">Interested in this property?</h4>
              <p className="mb-8" style={{ color: isDark ? '#a3a3a3' : '#666' }}>
                Our elite brokers are ready to provide you with exclusive documentation and arrange a secure private viewing.
              </p>
              
              <a 
                href={`mailto:support@tonleuterio.com?subject=Inquiry: ${property.title}&body=I would like to request a private viewing of ${property.title} located at ${property.location}.`}
                className="w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl"
                style={{ background: 'var(--brand-gold)', color: '#000' }}
              >
                <Mail size={20} />
                Request Private Showing
              </a>
              
              <p className="text-xs text-center mt-6 uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
                Confidentiality Guaranteed
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
