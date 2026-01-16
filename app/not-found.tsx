import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center bg-slate-950 text-white p-6">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

      {/* The 404 Number - Bodoni */}
      <h1 className="text-[10rem] md:text-[15rem] leading-none font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-950 select-none">
        404
      </h1>

      {/* The Message - Inter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 w-full">
        <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight">
          You've drifted too far.
        </h2>
        <p className="text-slate-400 max-w-md mx-auto font-sans">
          The page you are looking for doesn't exist. Let's get you back to shore.
        </p>
        
        {/* The "Pill" Button */}
        <Link 
          href="/"
          className="inline-block bg-white text-slate-950 font-sans px-8 py-3 rounded-full font-bold hover:bg-cyan-50 transition shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Return Home
        </Link>
      </div>

    </div>
  )
}