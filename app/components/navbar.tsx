import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  ctaText?: string;
  ctaLink?: string;
}

export default function Navbar({ ctaText = "Book Audit", ctaLink = "mailto:adriansantamaria@oceanaveconsulting.com" }: NavbarProps) {
  return (
    <nav className="relative z-50 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto w-full">
      
      {/* LEFT: Logo Group */}
      <Link href="/" className="flex items-center gap-2 group">
        {/* Using standard img for logo is fine if it's small, but consistency is key */}
        <div className="relative h-10 w-auto -mt-1.5"> 
           <img src="/logo.png" alt="Ocean Avenue" className="h-14 w-auto object-contain" />
        </div>
        <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
          OCEAN AVENUE
        </span>
      </Link>

      {/* RIGHT: Dynamic CTA Button */}
      <Link 
        href={ctaLink} 
        className="bg-white text-slate-950 font-sans px-6 py-2 rounded-full font-medium text-sm hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
      >
        {ctaText}
      </Link>
    </nav>
  );
}