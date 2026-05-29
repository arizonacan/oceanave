import React from 'react';
import Image from 'next/image'; 
import Navbar from '../components/navbar'; 

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white font-sans selection:bg-cyan-500 selection:text-black">
      
      <Navbar ctaText="Back Home" ctaLink="/" />

      {/* Added space-y-24 to create breathing room between the two profiles */}
        <main className="max-w-7xl mx-auto px-6 pt-4 pb-12 md:pt-8 md:pb-20 space-y-24">        
        {/* =========================================
            FOUNDER 1: ADRIAN (Text Left, Image Right) 
            ========================================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
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
                <h3 className="text-xl font-bold text-white mb-4">Why work with us?</h3>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✱</span>
                    <span>No slow drag-and-drop builders. We use <strong>Next.js</strong> (Netflix/TikTok tech).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✱</span>
                    <span>We aren't a 1-800 number. We are your neighbors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold">✱</span>
                    <span>We treat your business like an asset, not a project.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative animate-fade-up delay-200">
            <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-20 rounded-full"></div>
            
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800 group">
              <Image 
                src="/adrian.jpg" 
                alt="Adrian Santamaria" 
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                <p className="text-white font-serif font-bold text-lg">Adrian Santamaria</p>
                <p className="text-cyan-400 text-sm tracking-widest uppercase font-sans">Founder & Lead Engineer</p>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================
            FOUNDER 2: THE PARTNER (Image Left, Text Right) 
            ========================================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center pt-12 border-t border-slate-800/50">
          
          <div className="order-1 relative animate-fade-up">
            <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-20 rounded-full"></div>
            
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800 group">
              {/* CHANGE THIS IMAGE SRC WHEN YOU HAVE IT */}
              <Image 
                src="/israelpulla.png" 
                alt="Israel Pulla" 
                fill
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 object-[center_35%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                <p className="text-white font-serif font-bold text-lg">Israel Pulla</p>
                <p className="text-cyan-400 text-sm tracking-widest uppercase font-sans">Founder & Principal Consultant</p>
              </div>
            </div>
          </div>

          <div className="order-2 animate-fade-up delay-200">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
              Scaling <br/><span className="text-cyan-400">The Vision.</span>
            </h2>
            
            <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed space-y-6 font-sans">
              <p>
                 The Hamptons have always been home to me. It's a place built on hardworking business owners, strong relationships, and a sense of community that you won't find anywhere else.
              </p>
              <p>
                My name is <strong>Israel Pulla</strong>. I'm a business student at Bentley University with experience working alongside Fortune 500 organizations in Manhattan, where I've seen firsthand how strategy, execution, and strong partnerships drive success.
              </p>
              <p>
                My vision for <strong>Ocean Avenue Consulting</strong> is simple: to bring the same level of strategic thinking, professional support, and growth opportunities used by leading organizations to the businesses that make our communities thrive.
              </p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}