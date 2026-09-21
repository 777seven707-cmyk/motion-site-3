import Reveal from './Reveal';

const types = [
  { tag: 'Торговля', title: 'Магазины и розница', text: 'Каталог товаров, остатки, доставка и оплата онлайн — вместо бесконечной переписки «а сколько стоит».' },
  { tag: 'Общепит', title: 'Кафе, рестораны, доставка еды', text: 'Меню с фото, бронь столика и заказ навынос — гость решает всё сам, без звонка администратору.' },
  { tag: 'Красота', title: 'Салоны, барбершопы, мастера', text: 'Онлайн-запись на удобное время и портфолио работ, которое продаёт лучше любого прайс-листа.' },
  { tag: 'Медицина', title: 'Клиники и частные специалисты', text: 'Расписание врачей, перечень услуг с ценами и запись на приём — снижает нагрузку на регистратуру.' },
  { tag: 'Строительство', title: 'Ремонт и строительные бригады', text: 'Портфолио объектов «до/после», примерный расчёт стоимости и форма заявки на смету.' },
  { tag: 'Услуги для дома', title: 'Клининг, мастера, сервис техники', text: 'Прайс, зоны выезда и кнопка «вызвать мастера» — заявка оформляется за минуту, без звонка.' },
  { tag: 'Образование', title: 'Курсы, репетиторы, школы', text: 'Программа обучения, расписание, оплата и личный кабинет ученика в одном месте.' },
  { tag: 'Недвижимость', title: 'Агентства и застройщики', text: 'База объектов с фильтрами по цене и району, ипотечный калькулятор, заявка на просмотр.' },
  { tag: 'Право и финансы', title: 'Юристы, бухгалтеры, консультанты', text: 'Кейсы и экспертные статьи вместо голых обещаний — формируют доверие ещё до первого звонка.' },
  { tag: 'IT и digital', title: 'Разработка, маркетинг, агентства', text: 'Портфолио проектов, тарифы и форма брифа — сайт сам квалифицирует заявки до созвона.' },
  { tag: 'Производство', title: 'Опт, поставщики, B2B', text: 'Каталог продукции, условия сотрудничества и форма заявки на прайс-лист для партнёров.' },
  { tag: 'Туризм и события', title: 'Туры, отели, организация мероприятий', text: 'Программы туров или события с датами, фото и онлайн-бронированием мест без посредников.' },
];

export default function TypesSection() {
  return (
    <section id="types" className="relative z-20 px-5 md:px-[35px] py-[80px] md:py-[140px] border-t border-white/10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="font-manrope text-white/60 text-[12px] leading-[15.6px] uppercase tracking-[0.16em]">
            02 / Виды бизнеса
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-graphik text-white font-normal text-[32px] sm:text-[42px] md:text-[56px] leading-[1.08] mt-[20px] max-w-[18ch]">
            Кому особенно нужен сайт
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="font-manrope text-white/50 text-[15px] md:text-[17px] leading-[1.65] mt-[24px] max-w-[62ch]">
            Двенадцать направлений бизнеса — и что именно сайт закрывает в каждом из них.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mt-[56px] md:mt-[72px]">
          {types.map((t, i) => (
            <Reveal key={t.title} delay={(i % 4) * 70} className="bg-black group relative overflow-hidden">
              <span className="absolute left-0 right-0 top-0 h-px bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="h-full p-[24px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white/[0.03] group-hover:-translate-y-[3px]">
                <span className="inline-block font-manrope text-[10px] text-white/50 uppercase tracking-[0.12em] px-[9px] py-[4px] border border-white/15 group-hover:border-white/40 transition-colors">
                  {t.tag}
                </span>
                <h3 className="font-graphik text-white text-[16px] font-normal leading-[1.3] mt-[16px] mb-[10px]">
                  {t.title}
                </h3>
                <p className="font-manrope text-white/50 text-[13px] leading-[1.55]">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
