import Reveal from './Reveal';

const benefits = [
  {
    num: '01',
    title: 'Доверие и статус',
    text: 'Перед покупкой люди проверяют компанию в поиске. Сайт показывает, что бизнес серьёзный и никуда не денется завтра — это снижает страх «а вдруг обманут».',
    tags: ['Репутация', 'Экспертность', 'Первое впечатление'],
  },
  {
    num: '02',
    title: 'Работает 24/7',
    text: 'Заявки, заказы и вопросы клиентов сайт принимает даже ночью, в выходные и в отпуске — без участия менеджера и без «прочитано, отвечу позже».',
    tags: ['Заявки без выходных', 'Автоматизация', 'Не теряете клиентов'],
  },
  {
    num: '03',
    title: 'Независимость от площадок',
    text: 'Соцсеть могут заблокировать, маркетплейс — поднять комиссию, алгоритм — перестать показывать посты. Сайт принадлежит только вам, и никто не поменяет тут правила.',
    tags: ['Ваш актив', 'Без блокировок', 'Без чужих правил'],
  },
  {
    num: '04',
    title: 'Экономия на рекламе',
    text: 'Органический трафик из поиска дешевле таргета: сайт с базовым SEO продолжает приводить клиентов и через год после запуска, а не только пока идёт оплаченная кампания.',
    tags: ['SEO', 'Органический трафик', 'Долгий эффект'],
  },
  {
    num: '05',
    title: 'Больше средний чек',
    text: 'Каталог услуг, портфолио, цены и отзывы на одной странице продают лучше, чем один пост в ленте — клиент сравнивает варианты и решает у вас, а не у конкурента.',
    tags: ['Каталог', 'Кейсы и отзывы', 'Допродажи'],
  },
  {
    num: '06',
    title: 'Понятная аналитика',
    text: 'Счётчики и цели показывают, откуда приходят заявки, какая реклама окупается, а какая — сливает бюджет. Решения принимаете на основе цифр, а не ощущений.',
    tags: ['Аналитика', 'Источники трафика', 'Окупаемость рекламы'],
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative z-20 px-5 md:px-[35px] py-[80px] md:py-[140px]">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="font-manrope text-white/60 text-[12px] leading-[15.6px] uppercase tracking-[0.16em]">
            01 / Плюсы
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-graphik text-white font-normal text-[32px] sm:text-[42px] md:text-[56px] leading-[1.08] mt-[20px] max-w-[16ch]">
            Что даёт бизнесу собственный сайт
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="font-manrope text-white/50 text-[15px] md:text-[17px] leading-[1.65] mt-[24px] max-w-[62ch]">
            Шесть причин, из-за которых сайт окупается — даже у совсем небольшого бизнеса.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mt-[56px] md:mt-[72px]">
          {benefits.map((b, i) => (
            <Reveal key={b.num} delay={(i % 3) * 90} className="bg-black group relative overflow-hidden">
              <span className="absolute left-0 right-0 top-0 h-px bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="h-full p-[28px] md:p-[34px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white/[0.03] group-hover:-translate-y-[4px]">
                <span className="font-manrope text-white/40 text-[12px] tracking-[0.16em]">{b.num}</span>
                <h3 className="font-graphik text-white text-[20px] md:text-[23px] font-normal leading-[1.2] mt-[18px] mb-[14px]">
                  {b.title}
                </h3>
                <p className="font-manrope text-white/55 text-[14px] leading-[1.6]">{b.text}</p>
                <ul className="flex flex-wrap gap-[8px] mt-[20px]">
                  {b.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-manrope text-[11px] text-white/70 px-[10px] py-[5px] border border-white/15"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
