import Link from 'next/link';
import Image from 'next/image'; // IMPORT THIS

interface NavbarProps {
  ctaText?: string;
  ctaLink?: string;
}

export default function Navbar({ ctaText = "Book Audit", ctaLink = "mailto:adriansantamaria@oceanaveconsulting.com" }: NavbarProps) {
  return (
    <nav className="relative z-50 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto w-full">
      
      {/* LEFT: Logo & Brand Name */}
      <Link href="/" className="flex items-center gap-3 group">
        
        {/* LOGO CONTAINER */}
        <div className="relative -mt-2"> 
           <Image 
             src="/logo.png" 
             alt="Ocean Avenue" 
             width={48}   // Width in pixels 
             height={48}  // Height in pixels 
             className="w-auto h-12 object-contain" // CSS ensures it stays responsive
             priority // Loads instantly
           />
        </div>
        
        {/* TEXT */}
        <span className="text-xl md:text-2xl font-serif font-bold tracking-widest leading-none text-white group-hover:text-cyan-400 transition-colors">
          OCEAN AVENUE
        </span>
      </Link>

      {/* RIGHT: CTA Button */}
      <div className="flex items-center gap-4">
          <Link 
            href={ctaLink} 
            className="hidden md:inline-block bg-white text-slate-950 font-sans px-6 py-2 rounded-full font-medium text-sm hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
          >
            {ctaText}
          </Link>
          
          {/* Mobile Text Link */}
          <Link href={ctaLink} className="md:hidden text-sm font-bold text-cyan-400 uppercase tracking-widest">
            Book
          </Link>
      </div>

    </nav>
  );
}