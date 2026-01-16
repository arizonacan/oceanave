import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/oceanwater.jpeg')] bg-cover bg-center bg-fixed text-white font-sans">
      
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Ocean Avenue Logo" className="h-16 w-auto" />
          {/* FIXED: Added 'font-serif' so it uses Bodoni Moda */}
          <span className="text-xl font-serif font-bold tracking-tighter text-white">
            OCEAN AVENUE
          </span>
        </div>
        <a href="mailto:adriansantamaria@oceanaveconsulting.com" className="bg-white text-slate-900 px-5 py-2 rounded-full font-medium text-sm hover:bg-slate-200 transition">
          Book Audit
        </a>
      </nav>

      {/* HERO SECTION */}
      {/* FIXED: Changed invalid 'pt-15' to 'pt-24' so the text doesn't smash the nav */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-32">
        
        {/* THE HEADLINE - Bodoni Moda */}
        <h1 className="text-6xl md:text-8xl font-serif font-extrabold tracking-tight mb-8 leading-tight text-white animate-fade-up">
          Your Business. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-400 to-cyan-200 bg-[length:200%_auto] animate-shine">
          On The Main Stage.
          </span>
        </h1>
        
        {/* THE SUBHEAD - FIXED: Added 'font-serif' (Bodoni Moda) */}
        <p className="text-xl md:text-2xl font-serif text-slate-200 mb-12 leading-relaxed max-w-2xl font-light">
          You've built a reputation in the Hamptons. We build the digital infrastructure that matches it.
          <br/><br/>
          No templates. No overseas outsourcing. Just premium engineering, right here in town.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://calendly.com/oceanaveconsulting/30-minute-strategy-call" 
            target="_blank" 
            className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-200 bg-cyan-100 text-lg rounded-lg hover:bg-cyan-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] focus:outline-none"
          >
            Book Your Strategy Call
          </a>
          <Link href="/about" className="px-8 py-4 rounded-lg font-bold text-lg border border-white hover:bg-white hover:text-black transition text-center text-white">
            Meet The Founder
          </Link>
        </div>
      </main>

      {/* VALUE PROPS */}
      <section className="bg-slate-900/80 py-24 border-t border-slate-800 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Card 1 */}
            <div className="space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-white/10 group cursor-default">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-400 font-bold">1</div>
              <h3 className="text-2xl font-bold">Speed is Money.</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Most Hampton Bays sites take 5 seconds to load. Ours take 0.5.
                Google ranks fast sites higher. Period.
              </p>
            </div>

            {/* Card 2 */}
            <div className="space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-white/10 group cursor-default">
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-400 font-bold">2</div>
              <h3 className="text-2xl font-bold">Mobile First.</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                80% of your customers are on iPhones. If your site looks bad on mobile, you don't exist.
              </p>
            </div>

            {/* Card 3 - The Upsell */}
            <div className="space-y-4 p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-white/10 group cursor-default">
              <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center text-green-400 font-bold">3</div>
              <h3 className="text-2xl font-bold">Profit, Not Rent.</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Stop paying agencies purely for "hosting."
                Our monthly packages are focused on <strong>active growth</strong>, not just server space.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-400 text-sm bg-black">
        &copy; {new Date().getFullYear()} Ocean Avenue Consulting. Built in Hampton Bays.
      </footer>
    </div>
  );
}