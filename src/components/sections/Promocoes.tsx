import promo from "@/assets/promo-atual.jpg.asset.json";
import { CtaButton } from "../CtaButton";

export function Promocoes() {
  return (
    <section id="promocoes" className="bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="eyebrow text-gold">Condições especiais</p>
        <h2 className="mt-4 text-4xl text-cream md:text-5xl">Promoções</h2>
        <figure className="mx-auto mt-16 max-w-md overflow-hidden rounded-3xl border border-gold/35 shadow-soft">
          <img src={promo.url} alt="Promoção Salão Marlu" loading="lazy" width={853} height={1280} className="h-auto w-full" />
        </figure>
        <CtaButton className="mt-14">Quero Aproveitar</CtaButton>
      </div>
    </section>
  );
}
