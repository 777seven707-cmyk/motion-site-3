import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavItem from './components/NavItem';
import GridLines from './components/GridLines';
import CentralNodes from './components/CentralNodes';
import StarField from './components/StarField';
import BenefitsSection from './components/BenefitsSection';
import TypesSection from './components/TypesSection';
import CompareSection from './components/CompareSection';
import ClosingSection from './components/ClosingSection';

const navItems = [
  { number: '01', label: 'ПЛЮСЫ', href: '#benefits', delay: 350 },
  { number: '02', label: 'ВИДЫ_БИЗНЕСА', href: '#types', delay: 450 },
  { number: '03', label: 'СРАВНЕНИЕ', href: '#compare', delay: 550 },
  { number: '04', label: 'ИТОГ', href: '#cta', delay: 650 },
];

// Плавный, "догоняющий" скролл: сглаживаем реальную позицию скролла (lerp)
// каждый кадр, вместо того чтобы дёргать параллакс 1:1 за событием scroll.
function useSmoothScroll() {
  const [smoothY, setSmoothY] = useState(0);
  const targetRef = useRef(0);
  const smoothRef = useRef(0);

  useEffect(() => {
    let raf: number;
    const loop = () => {
      targetRef.current = window.scrollY;
      smoothRef.current += (targetRef.current - smoothRef.current) * 0.085;
      if (Math.abs(targetRef.current - smoothRef.current) < 0.05) {
        smoothRef.current = targetRef.current;
      }
      setSmoothY(smoothRef.current);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return smoothY;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useSmoothScroll();
  const vh = typeof window !== 'undefined' ? window.innerHeight || 1 : 1;
  const progress = Math.min(Math.max(scrollY / vh, 0), 1);

  return (
    <div className="relative bg-black">
      <StarField scrollY={scrollY} />
      <div className="relative" style={{ height: '160vh' }}>
        <section className="sticky top-0 w-full h-screen overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover anim-fade-in"
            style={{
              transform: `scale(${1 + progress * 0.16}) translateY(${progress * 40}px)`,
              filter: `blur(${progress * 8}px)`,
            }}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <div
            className="relative z-10 w-full h-full"
            style={{ filter: `blur(${progress * 10}px)`, opacity: 1 - progress * 0.35 }}
          >
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
                    <NavItem key={item.number} number={item.number} label={item.label} href={item.href} delay={item.delay} />
                  ))}
                </div>
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
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                      }`}
                      style={{ transitionDelay: menuOpen ? `${150 + i * 75}ms` : '0ms' }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-manrope text-white/60 text-[14px] leading-[1]">{item.number}.</span>
                        <span className="font-manrope text-white text-[28px] leading-[1.2] tracking-tight">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* ============ H1 ============ */}
            <div
              className="absolute top-[140px] sm:top-[160px] md:top-[178px] left-5 md:left-[35px]"
              style={{ transform: `translateY(${progress * -46}px)` }}
            >
              <h1
                className="font-graphik text-white font-normal leading-[1.05] anim-fade-up
                  text-[32px] sm:text-[48px] md:text-[64px]
                  max-w-[320px] sm:max-w-[460px] md:max-w-[620px]"
                style={{ animationDelay: '400ms' }}
              >
                Сайт — это не расход. Это актив бизнеса, который работает на вас 24/7.
              </h1>
            </div>

            <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${progress * -70}px)` }}>
              <GridLines />
            </div>
            <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${progress * -110}px)` }}>
              <CentralNodes />
            </div>

            {/* ============ BOTTOM ROW ============ */}
            <div className="absolute bottom-5 md:bottom-[35px] left-5 md:left-[35px] right-5 md:right-[35px] flex flex-col md:flex-row items-start md:items-end justify-between gap-5 md:gap-0">
              <a
                href="#benefits"
                className="bg-white px-[16px] md:px-[20px] py-[10px] md:py-[12px] flex items-center gap-[10px]
                  hover:bg-white/85 transition-colors anim-fade-up"
                style={{ animationDelay: '900ms' }}
              >
                <span className="text-black text-[16px] leading-none">&#10022;</span>
                <span className="font-manrope text-black text-[12px] md:text-[13px] leading-[15.6px] uppercase tracking-wide">
                  Смотреть плюсы
                </span>
              </a>

              <div className="relative max-w-[280px] hidden sm:block anim-slide-right" style={{ animationDelay: '1100ms' }}>
                <span className="font-manrope text-black text-[13px] leading-[15.6px] bg-white px-[6px] py-[2px] inline-block mb-[10px]">
                  СПРАВОЧНИК ПО ПОЛЬЗЕ САЙТА
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
                      stroke="#ffffff"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <p className="relative font-manrope text-white text-[13px] leading-[18px] mb-[18px]">
                    Собрали всё, что нужно знать бизнесу перед заказом сайта: плюсы, отличия и кто выигрывает
                    больше всех.
                  </p>
                  <a
                    href="#types"
                    className="relative block font-manrope text-white text-[13px] leading-[15.6px] cursor-pointer hover:underline"
                  >
                    СМОТРЕТЬ_ВИДЫ_БИЗНЕСА
                  </a>
                </div>
              </div>
            </div>

            {/* ============ SCROLL HINT ============ */}
            <div
              className="absolute bottom-5 md:bottom-[35px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[6px] anim-fade-in"
              style={{ animationDelay: '1600ms', opacity: 1 - progress * 3 }}
            >
              <span className="font-manrope text-white/50 text-[11px] uppercase tracking-[0.2em]">Листай вниз</span>
              <span className="w-px h-[26px] bg-gradient-to-b from-white/50 to-transparent" />
            </div>
          </div>
        </section>
      </div>

      <BenefitsSection />
      <TypesSection />
      <CompareSection />
      <ClosingSection />
    </div>
  );
}
