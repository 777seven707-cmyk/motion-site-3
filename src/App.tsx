import { useEffect, useState } from 'react';
import { Wallet, Menu, X } from 'lucide-react';
import NavItem from './components/NavItem';
import GridLines from './components/GridLines';
import CentralNodes from './components/CentralNodes';

const navItems = [
  { number: '01', label: 'ECOSYSTEM', delay: 350 },
  { number: '02', label: 'LIQUIDITY_POOLS', delay: 450 },
  { number: '03', label: 'LUMEN_INDEX', delay: 550 },
  { number: '04', label: 'GOVERNANCE', delay: 650 },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight || 1;
      setProgress(Math.min(Math.max(window.scrollY / vh, 0), 1));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return progress;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();

  return (
    <div className="relative bg-black" style={{ height: '200vh' }}>
    <section className="sticky top-0 w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover anim-fade-in"
        style={{ transform: `scale(${1 + progress * 0.14}) translateY(${progress * 36}px)` }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 w-full h-full">
        {/* ============ NAV ============ */}
        <nav className="absolute top-0 left-0 w-full flex items-center px-5 md:px-[35px] py-5 md:py-[27px]">
          <div className="flex items-center gap-[40px]">
            <span
              className="font-graphik text-white text-[18px] md:text-[21px] leading-[21px] whitespace-nowrap anim-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              LŪMEN // ÍNDEX
            </span>

            <div className="hidden lg:flex items-center gap-[40px]">
              {navItems.map((item) => (
                <NavItem key={item.number} number={item.number} label={item.label} delay={item.delay} />
              ))}
            </div>
          </div>

          <div
            className="hidden lg:flex items-center gap-[12px] ml-auto anim-slide-right"
            style={{ animationDelay: '600ms' }}
          >
            <Wallet className="w-[15px] h-[15px] text-white" strokeWidth={1.5} />
            <span className="font-manrope text-white text-[13px] leading-[15.6px]">0x71...f4e2</span>
            <span className="font-manrope text-[#AFDDFF] text-[13px] leading-[15.6px]">[ CONNECTED ]</span>
            <span className="font-manrope text-white text-[13px] leading-[15.6px] ml-[20px]">STATUS:</span>
            <span className="bg-[#AFDDFF] text-black rounded-[3px] px-[5px] py-[2px] text-[13px] leading-[15.6px]">
              PRIME_MEMBER
            </span>
          </div>

          <button
            className="lg:hidden ml-auto relative w-[40px] h-[40px] flex items-center justify-center anim-fade-in"
            style={{ animationDelay: '400ms' }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`absolute transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
            >
              <Menu className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
            </span>
            <span
              className={`absolute transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
            >
              <X className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
            </span>
          </button>
        </nav>

        {/* ============ MOBILE MENU ============ */}
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            menuOpen ? 'visible' : 'invisible'
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setMenuOpen(false)}
          />

          <div
            className={`relative h-full flex flex-col px-5 pt-24 pb-10 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <button
              className="absolute top-5 right-5 w-[40px] h-[40px] flex items-center justify-center"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
            </button>

            <nav className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <a
                  key={item.number}
                  href="#"
                  className={`transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${150 + i * 75}ms` : '0ms' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-manrope text-[#AFDDFF]/80 text-[14px] leading-[1]">{item.number}.</span>
                    <span className="font-manrope text-white text-[28px] leading-[1.2] tracking-tight">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </nav>

            <div
              className={`mt-auto pt-10 border-t border-white/10 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: menuOpen ? '450ms' : '0ms' }}
            >
              <div className="flex items-center gap-[10px] mb-3">
                <Wallet className="w-[15px] h-[15px] text-white" strokeWidth={1.5} />
                <span className="font-manrope text-white text-[13px] leading-[15.6px]">0x71...f4e2</span>
                <span className="font-manrope text-[#AFDDFF] text-[13px] leading-[15.6px]">[ CONNECTED ]</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="font-manrope text-white text-[13px] leading-[15.6px]">STATUS:</span>
                <span className="bg-[#AFDDFF] text-black rounded-[3px] px-[5px] py-[2px] text-[13px] leading-[15.6px]">
                  PRIME_MEMBER
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============ H1 ============ */}
        <div
          className="absolute top-[140px] sm:top-[160px] md:top-[178px] left-5 md:left-[35px]"
          style={{ transform: `translateY(${progress * -46}px)`, opacity: 1 - progress * 0.85 }}
        >
          <h1
            className="font-graphik text-white font-normal leading-[1em] anim-fade-up
              text-[32px] sm:text-[48px] md:text-[68px]
              max-w-[300px] sm:max-w-[420px] md:max-w-[554px]"
            style={{ animationDelay: '400ms' }}
          >
            Liquid Assets. Luminous Returns.
          </h1>
        </div>

        <div className="absolute inset-0" style={{ transform: `translateY(${progress * -70}px)` }}>
          <GridLines />
        </div>
        <div className="absolute inset-0" style={{ transform: `translateY(${progress * -110}px)`, opacity: 1 - progress * 0.5 }}>
          <CentralNodes />
        </div>

        {/* ============ BOTTOM ROW ============ */}
        <div
          className="absolute bottom-5 md:bottom-[35px] left-5 md:left-[35px] right-5 md:right-[35px]
            flex flex-col md:flex-row items-start md:items-end justify-between gap-5 md:gap-0"
          style={{ transform: `translateY(${progress * 24}px)`, opacity: 1 - progress * 0.7 }}
        >
          <button
            className="bg-[#AFDDFF] px-[16px] md:px-[20px] py-[10px] md:py-[12px] flex items-center gap-[10px]
              hover:bg-[#c8e8ff] transition-colors anim-fade-up"
            style={{ animationDelay: '900ms' }}
          >
            <span className="text-black text-[16px] leading-none">&#10022;</span>
            <span className="font-manrope text-black text-[12px] md:text-[13px] leading-[15.6px] uppercase tracking-wide">
              Explore Private Banking
            </span>
          </button>

          <div className="relative max-w-[280px] hidden sm:block anim-slide-right" style={{ animationDelay: '1100ms' }}>
            <span className="font-manrope text-black text-[13px] leading-[15.6px] bg-[#AFDDFF] px-[6px] py-[2px] inline-block mb-[10px]">
              NOT A BANK — AN ECOSYSTEM
            </span>

            <div className="relative p-[20px]">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 280 168"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0.5,0.5 279.5,0.5 279.5,167.5 30,167.5 0.5,137.5"
                  fill="none"
                  stroke="#AFDDFF"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <p className="relative font-manrope text-white text-[13px] leading-[18px] mb-[18px]">
                Maps the complexity of modern finance with a partner that brings clarity and organic growth to your
                portfolio.
              </p>
              <span className="relative font-manrope text-[#AFDDFF] text-[13px] leading-[15.6px] cursor-pointer hover:underline">
                VIEW_TRANSPARENCY_REPORT
              </span>
            </div>
          </div>
        </div>

        {/* ============ SCROLL HINT ============ */}
        <div
          className="absolute bottom-5 md:bottom-[35px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[6px] anim-fade-in"
          style={{ animationDelay: '1600ms', opacity: 1 - progress * 3 }}
        >
          <span className="font-manrope text-white/50 text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="w-px h-[26px] bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>

    {/* ============ REVEAL PANEL ============ */}
    <div className="relative z-20 h-screen w-full flex items-center justify-center bg-black border-t border-white/10">
      <div
        className="text-center px-5"
        style={{
          transform: `translateY(${(1 - progress) * 24}px)`,
          opacity: progress,
        }}
      >
        <span className="font-manrope text-[#AFDDFF] text-[12px] uppercase tracking-[0.25em]">LŪMEN // ÍNDEX</span>
        <p className="font-graphik text-white font-normal text-[28px] sm:text-[36px] md:text-[46px] leading-[1.2] max-w-[680px] mx-auto mt-[20px]">
          Clarity compounds. So does trust.
        </p>
        <button className="bg-[#AFDDFF] px-[20px] py-[12px] inline-flex items-center gap-[10px] hover:bg-[#c8e8ff] transition-colors mt-[36px]">
          <span className="text-black text-[16px] leading-none">&#10022;</span>
          <span className="font-manrope text-black text-[13px] leading-[15.6px] uppercase tracking-wide">
            Explore Private Banking
          </span>
        </button>
      </div>
    </div>
    </div>
  );
}
