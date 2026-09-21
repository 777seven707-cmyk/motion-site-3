import Reveal from './Reveal';

export default function ClosingSection() {
  return (
    <section
      id="cta"
      className="relative z-20 px-5 md:px-[35px] py-[100px] md:py-[160px] border-t border-white/10 flex items-center justify-center text-center"
    >
      <Reveal className="max-w-[680px]">
        <span className="font-graphik text-white text-[12px] uppercase tracking-[0.25em] font-semibold">
          На твоё усмотрение
        </span>
        <p className="font-graphik text-white font-normal text-[28px] sm:text-[36px] md:text-[46px] leading-[1.25] mt-[24px]">
          Сайт не гарантирует продажи сам по себе. Но без него бизнес теряет клиентов там, где их даже не видно.
        </p>
        <p className="font-manrope text-white/50 text-[14px] md:text-[15px] leading-[1.65] mt-[24px] max-w-[52ch] mx-auto">
          Каждый из двенадцати видов бизнеса выше решает сайтом свою конкретную задачу — запись, каталог, заявку,
          доверие. Определите свою — и это уже половина технического задания.
        </p>
        <a
          href="index.html#contact"
          className="bg-white px-[20px] py-[12px] inline-flex items-center gap-[10px] hover:bg-white/85 transition-colors mt-[36px]"
        >
          <span className="text-black text-[16px] leading-none">&#10022;</span>
          <span className="font-manrope text-black text-[13px] leading-[15.6px] uppercase tracking-wide">
            Обсудить свой сайт
          </span>
        </a>
      </Reveal>
    </section>
  );
}
