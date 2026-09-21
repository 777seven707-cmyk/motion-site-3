import Reveal from './Reveal';

const without = [
  'Клиент ищет вас в поиске — и находит конкурента',
  'Заявки принимает только человек и только в рабочее время',
  'Все контакты и отзывы разбросаны по разным соцсетям',
  'Реклама останавливается — трафик обнуляется вместе с ней',
  'Цены и условия приходится присылать вручную каждому',
  'Нет данных о том, откуда на самом деле приходят клиенты',
];

const withSite = [
  'Клиент находит именно вас — с первого экрана понятно, что вы предлагаете',
  'Заявка принимается в любое время суток, автоматически',
  'Все услуги, цены, кейсы и контакты — в одном месте',
  'Поисковый трафик продолжает идти и без ежедневных вложений',
  'Каталог и цены доступны сразу, без переписки',
  'Аналитика показывает точный путь клиента от клика до заявки',
];

export default function CompareSection() {
  return (
    <section id="compare" className="relative z-20 bg-black px-5 md:px-[35px] py-[80px] md:py-[140px] border-t border-white/10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="font-manrope text-[#AFDDFF]/80 text-[12px] leading-[15.6px] uppercase tracking-[0.16em]">
            03 / Разница
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-graphik text-white font-normal text-[32px] sm:text-[42px] md:text-[56px] leading-[1.08] mt-[20px] max-w-[16ch]">
            Без сайта — и с сайтом
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mt-[56px] md:mt-[72px]">
          <Reveal className="bg-black">
            <div className="h-full p-[32px] md:p-[40px]">
              <span className="font-manrope text-white/40 text-[12px] uppercase tracking-[0.16em]">Без сайта</span>
              <ul className="mt-[24px] flex flex-col gap-[16px]">
                {without.map((item) => (
                  <li key={item} className="font-manrope text-white/55 text-[14px] leading-[1.55] flex gap-[12px]">
                    <span className="text-white/25 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="bg-black">
            <div className="h-full p-[32px] md:p-[40px]">
              <span className="font-manrope text-[#AFDDFF] text-[12px] uppercase tracking-[0.16em]">С сайтом</span>
              <ul className="mt-[24px] flex flex-col gap-[16px]">
                {withSite.map((item) => (
                  <li key={item} className="font-manrope text-white/80 text-[14px] leading-[1.55] flex gap-[12px]">
                    <span className="text-[#AFDDFF] shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
