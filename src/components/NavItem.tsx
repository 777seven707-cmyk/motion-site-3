interface NavItemProps {
  number: string;
  label: string;
  delay: number;
  href: string;
}

export default function NavItem({ number, label, delay, href }: NavItemProps) {
  return (
    <a href={href} className="flex items-center gap-[3px] anim-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <span className="font-manrope text-[#AFDDFF]/80 text-[13px] leading-[15.6px]">{number}.</span>
      <span className="font-manrope text-white text-[13px] leading-[15.6px] cursor-pointer hover:text-[#AFDDFF] transition-colors">
        {label}
      </span>
    </a>
  );
}
