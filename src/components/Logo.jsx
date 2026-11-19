import React from 'react';

// Logo da Danny Lira Nails: "Danny" em letra cursiva, "Lira" em serifa e NAILS espaçado,
// em vinho com detalhe dourado (cores tiradas das fotos dela: vinho, nude e ouro).
export default function Logo({ light = false }) {
  const main = light ? '#f6e6df' : '#3b0826';
  return (
    <span className="inline-flex flex-col items-start leading-none select-none" aria-label="Danny Lira Nails">
      <span className="flex items-end">
        <span className="font-script text-[2.05rem] sm:text-[2.3rem] leading-[0.9]" style={{ color: main }}>Danny</span>
        <span className="font-serif font-semibold text-[1.35rem] sm:text-[1.5rem] ml-1 mb-0.5 tracking-wide" style={{ color: main }}>Lira</span>
      </span>
      <span className="flex items-center gap-1.5 ml-1 mt-0.5">
        <span className="h-px w-6 bg-champagne" />
        <span className={`text-[8px] tracking-[0.55em] font-medium font-serif ${light ? 'text-champagne' : 'text-champagne-dark'}`}>NAILS</span>
        <span className="h-px w-6 bg-champagne" />
      </span>
    </span>
  );
}
