import Link from 'next/link';

interface NavbarProps {
  ctaText?: string;
  ctaLink?: string;
}

export default function Navbar({ ctaText = "Book Audit", ctaLink = "mailto:adriansantamaria@oceanaveconsulting.com" }: NavbarProps) {
  return (
    <nav className="relative z-50 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto w-full">
      
      {/* LEFT: Logo & Brand Name */}
      <Link href="/" className="flex items-center gap-3 group">
        
        {/* LOGO CONTAINER: 
            h-12: Sets a fixed height relative to text.
            -mt-2: THE FIX. This lifts the boat up 8px to counter the "mast" height. 
        */}
        <div className="relative h-12 w-auto -mt-2"> 
           <img src="/logo.png" alt="Ocean Avenue" className="h-full w-auto object-contain" />
        </div>
        
        {/* TEXT CONTAINER:
            leading-none: Kills invisible line-height so it centers perfectly.
            tracking-widest: Adds luxury spacing.
        */}
        <span className="text-xl md:text-2xl font-serif font-bold tracking-wide leading-none text-white group-hover:text-cyan-400 transition-colors">
          OCEAN AVENUE
        </span>
      </Link>

      {/* RIGHT: CTA Button */}
      <Link 
        href={ctaLink} 
        className="hidden md:inline-block bg-white text-slate-950 font-sans px-6 py-2 rounded-full font-medium text-sm hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
      >
        {ctaText}
      </Link>
      
      {/* Mobile Only: Simple Link if screen is small */}
      <Link href={ctaLink} className="md:hidden text-sm font-bold text-cyan-400 uppercase tracking-widest">
        Book
      </Link>

    </nav>
  );
}