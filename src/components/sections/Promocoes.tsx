import limpeza from "@/assets/promo-limpeza.jpg.asset.json";
import reconstrucao from "@/assets/promo-reconstrucao.jpg.asset.json";
import sobrancelha from "@/assets/promo-sobrancelha.jpg.asset.json";
import { CtaButton } from "../CtaButton";

const promocoes = [
  { url: limpeza.url, titulo: "Limpeza de Pele com Peeling de Diamante" },
  { url: reconstrucao.url, titulo: "Tratamento Reconstrução com Escova" },
  { url: sobrancelha.url, titulo: "Sobrancelha de Henna" },
];

export function Promocoes() {
  return (
    <section id="promocoes" className="bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="eyebrow text-gold">Condições especiais</p>
        <h2 className="mt-4 text-4xl text-cream md:text-5xl">Promoções</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {promocoes.map((p) => (
            <figure key={p.url} className="overflow-hidden rounded-3xl border border-gold/35 shadow-soft">
              <img src={p.url} alt={p.titulo} loading="lazy" className="aspect-[9/16] w-full object-cover" />
            </figure>
          ))}
        </div>
        <CtaButton className="mt-14">Quero Aproveitar</CtaButton>
      </div>
    </section>
  );
}
