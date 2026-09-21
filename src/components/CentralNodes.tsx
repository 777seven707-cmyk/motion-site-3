import ConnectorLine from './ConnectorLine';

interface Node {
  squarePos: string;
  squareDelay: number;
  labelPos: string;
  labelAnim: string;
  labelDelay: number;
  title: string;
  description: string;
  maxW: string;
}

const nodes: Node[] = [
  {
    squarePos: 'top-[27%] left-[60%]',
    squareDelay: 1500,
    labelPos: 'top-[11%] left-[26%]',
    labelAnim: 'anim-slide-left',
    labelDelay: 1100,
    title: '[ ДОВЕРИЕ ]',
    description: 'Сайт показывает, что бизнес серьёзный и никуда не денется завтра.',
    maxW: 'max-w-[170px]',
  },
  {
    squarePos: 'top-[58%] left-[32%]',
    squareDelay: 1800,
    labelPos: 'top-[76%] left-[3%]',
    labelAnim: 'anim-slide-left',
    labelDelay: 1400,
    title: '[ РАБОТА_24/7 ]',
    description: 'Заявки приходят даже ночью — без участия менеджера.',
    maxW: 'max-w-[170px]',
  },
  {
    squarePos: 'top-[63%] left-[50%]',
    squareDelay: 2100,
    labelPos: 'top-[50%] left-[78%]',
    labelAnim: 'anim-slide-right',
    labelDelay: 1700,
    title: '[ НЕЗАВИСИМОСТЬ ]',
    description: 'Сайт принадлежит вам — никто не поменяет тут правила.',
    maxW: 'max-w-[190px]',
  },
];

const connectors = [
  { x1: '38%', y1: '14%', x2: '52%', y2: '14%', delay: 1200 },
  { x1: '52%', y1: '14%', x2: '60%', y2: '27%', delay: 1400 },
  { x1: '32%', y1: '58%', x2: '20%', y2: '74%', delay: 1500 },
  { x1: '20%', y1: '74%', x2: '6%', y2: '74%', delay: 1700 },
  { x1: '78%', y1: '53%', x2: '63%', y2: '53%', delay: 1800 },
  { x1: '63%', y1: '53%', x2: '50%', y2: '63%', delay: 2000 },
];

export default function CentralNodes() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {connectors.map((c, i) => (
        <ConnectorLine key={i} {...c} />
      ))}

      {nodes.map((node) => (
        <div
          key={node.title}
          className={`absolute ${node.labelPos} ${node.labelAnim}`}
          style={{ animationDelay: `${node.labelDelay}ms` }}
        >
          <span className="font-manrope text-white text-[13px] leading-[15.6px] whitespace-nowrap">
            {node.title}
          </span>
          <p className={`font-manrope text-white/50 text-[11px] leading-[14px] mt-[4px] ${node.maxW}`}>
            {node.description}
          </p>
        </div>
      ))}

      {nodes.map((node) => (
        <div
          key={`${node.title}-square`}
          className={`absolute ${node.squarePos} w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-white/80 anim-scale-in`}
          style={{ animationDelay: `${node.squareDelay}ms` }}
        />
      ))}
    </div>
  );
}
