import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white font-sans">
      
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-6 py-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Ocean Avenue Logo" className="h-14 w-auto" />
          {/* LOGO: Bodoni Moda (Serif) - The Luxury Look */}
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
            OCEAN AVENUE
          </span>
        </Link>
        
        {/* BUTTON: Inter (Sans) - The Clean UI Look */}
        <Link 
          href="/" 
          className="bg-white text-slate-950 font-sans px-5 py-2 rounded-full font-medium text-sm hover:bg-slate-200 transition shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          Back Home
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* THE SPLIT LAYOUT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Copy */}
          <div className="order-2 md:order-1 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-cyan-400 leading-tight">
              The Local <br/> Advantage.
            </h1>
            
            <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed space-y-6 font-sans">
              <p>
                Most "web design" companies are giant call centers in the Midwest, or a huge agency in NYC.
                They don't know Hampton Bays. They don't know that seasonal businesses live and die by the summer rush.
              </p>
              <p>
                My name is <strong>Adrian Santamaria</strong>. I'm a Computer Science major at SUNY Albany, but Hampton Bays is home.
              </p>
              <p>
                I founded <strong>Ocean Avenue Consulting</strong> with one goal: To bring Silicon Valley-grade digital infrastructure to the businesses I grew up with.
              </p>
              
              <div className="pt-6 border-t border-slate-800 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Why work with me?</h3>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✱</span>
                    <span>No slow drag-and-drop builders. We use <strong>Next.js</strong> (Netflix/TikTok tech).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✱</span>
                    <span>I'm not a 1-800 number. I'm your neighbor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✱</span>
                    <span>I treat your business like an asset, not a project.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Photo */}
          <div className="order-1 md:order-2 relative animate-fade-up delay-200">
            {/* Cyan Glow */}
            <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-20 rounded-full"></div>
            
            {/* Image Container (Correct Aspect Ratio: 4/3) */}
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800 group">
              <img 
                src="/adrian.jpg" 
                alt="Adrian Santamaria" 
                className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" 
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-serif font-bold text-lg">Adrian Santamaria</p>
                <p className="text-cyan-400 text-sm tracking-widest uppercase font-sans">Founder & Lead Engineer</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}