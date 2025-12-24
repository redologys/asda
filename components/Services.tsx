
import React from 'react';
import HudCard from './HudCard';

const Services: React.FC = () => {
  const services = [
    {
      title: "Hardware Restoration",
      description: "Screen surgery, battery transplants, and deep circuitry cleaning for all flagship devices.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>,
      tags: ["IPHONE SPECIALISTS", "ANDROID OPTIMIZATION", "LAPTOP DEEP DIAGNOSTICS"],
      accentColor: "neon-blue"
    },
    {
      title: "Signal Unlocking",
      description: "Remove carrier restrictions and tether your device to any network worldwide.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>,
      tags: ["WORLDWIDE CARRIER FREEDOM", "PERMANENT DECRYPTION", "INSTANT SIGNAL BOOST"],
      accentColor: "neon-violet"
    },
    {
      title: "Cyber Upgrades",
      description: "Military-grade protection, rapid charging cores, and high-fidelity audio peripherals.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
      tags: ["TITANIUM CASES", "100W CHARGING MODULES", "PRIVACY FILTERS"],
      accentColor: "neon-blue"
    },
    {
      title: "Credits Transfer",
      description: "Secure, encrypted global money routing. Support for all major international networks.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      tags: ["WESTERN UNION NODE", "RIA FINANCIAL", "INSTANT GLOBAL REACH"],
      accentColor: "neon-violet"
    },
    {
      title: "Bill Settlement",
      description: "Centralized payment hub for utilities, wireless plans, and municipal fees.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      tags: ["UTILITY PAYMENTS", "CARRIER REFILLS", "TICKET CLEARANCE"],
      accentColor: "neon-blue"
    },
    {
      title: "Analog Archiving",
      description: "High-resolution physical document printing, scanning, and digital synthesis.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>,
      tags: ["HD COLOR RENDERING", "SECURE SCANNING", "FAX PROTOCOLS"],
      accentColor: "neon-violet"
    }
  ];

  return (
    <section id="services" class="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
        <div>
          <h2 className="text-4xl font-bold mb-4 font-orbitron uppercase">Core <span className="text-neon-blue">Services</span></h2>
          <div className="h-1 w-24 bg-neon-blue"></div>
        </div>
        <p className="text-gray-500 max-w-sm mt-4 md:mt-0 italic">Comprehensive technical solutions for the digital age.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <HudCard key={idx} {...svc} />
        ))}
      </div>
    </section>
  );
};

export default Services;
