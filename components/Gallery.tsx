
import React, { useRef } from 'react';

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const galleryItems = [
    { 
      img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy-3vwhIZfIpDjFVsOqBBEcv-No6WImlABy5JvNkUXkAkYUKeMq6S48GEn0H0YMrg2IdqXIBPwN--qB_MKfDwIDOpbvr-gXg9sL_MNQw2h63mVlKdvooqQJFw_T_6pYrLXBiwAgbNKa8wYe=s680", 
      tag: "Laboratory Core", 
      title: "Main Operations Hub", 
      color: "text-neon-blue" 
    },
    { 
      img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz4lUxgXEV6hTK4_9J19tb-uhIHhgCQuGkGGLxH5cQY-71ICyG0Kr67a5HIc5lvaX5E-8gRpjggG5dOxN1LHq57Wt7hew-hhzVSJFxM5Xp7-bfSsa-nK7aTqK7kOTmgKtI9LhR88Ark2gEb=s680", 
      tag: "Diagnostics", 
      title: "Hardware Synthesis Station", 
      color: "text-neon-violet" 
    },
    { 
      img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzvoO5U-KMgSYLbvKbylt1P0djbMb3oZnnqnsTyLXUp0LC3Va8d7KnlMBdU4S1wtjfxma7GZS6cBnMtw2nZAQMM6OkJ0ofRFwKhXzosCTigVZaZIwSybNWUvktji_abtA9tjhszi2cIviQn=s680", 
      tag: "Accessory Matrix", 
      title: "Premium Component Display", 
      color: "text-neon-blue" 
    },
    { 
      img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyYWxfg_nFLgvmubEs9yBuddiyiL9UMqTgFmIGUkN16Bmliz2P60gaUT9vGSoPd7_pOJ4ggS5nzm_TBqVzhrAgCipK8pobRF2-ltpDOAkNXQOu8NurrcjkDk2mRO6gcDTrzAX8f=s680", 
      tag: "Verification", 
      title: "Quality Control Node", 
      color: "text-neon-violet" 
    }
  ];

  return (
    <section id="gallery" className="bg-black/40 py-24 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center reveal">
        <h2 className="text-3xl font-bold uppercase tracking-tighter font-orbitron">Laboratory <span className="text-neon-violet">Preview</span></h2>
        <div className="flex gap-4">
          <button onClick={() => scroll(-450)} className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-neon-blue transition duration-300">←</button>
          <button onClick={() => scroll(450)} className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-neon-blue transition duration-300">→</button>
        </div>
      </div>

      <div ref={scrollRef} className="flex overflow-x-auto gap-6 px-6 no-scrollbar pb-8">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="min-w-[300px] md:min-w-[450px] aspect-video relative group overflow-hidden border border-white/10 bg-zinc-900/50 flex-shrink-0">
            <img 
              src={item.img} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
            <div className="absolute bottom-6 left-6 z-20">
              <p className={`text-[10px] font-bold mb-1 tracking-widest uppercase ${item.color}`}>{item.tag}</p>
              <p className="text-xl font-bold font-orbitron">{item.title}</p>
            </div>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue/30 transition-all duration-500 pointer-events-none z-30"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
