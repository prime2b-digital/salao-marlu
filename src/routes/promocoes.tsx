import { createFileRoute, Link } from "@tanstack/react-router";
import limpeza from "@/assets/promo-limpeza.jpg.asset.json";
import reconstrucao from "@/assets/promo-reconstrucao.jpg.asset.json";
import sobrancelha from "@/assets/promo-sobrancelha.jpg.asset.json";
import { CtaButton } from "@/components/CtaButton";
import { Rodape } from "@/components/sections/Rodape";
import { BarraPrime } from "@/components/sections/BarraPrime";

const promocoes = [
  { url: limpeza.url, titulo: "Limpeza de Pele com Peeling de Diamante" },
  { url: reconstrucao.url, titulo: "Tratamento Reconstrução com Escova" },
  { url: sobrancelha.url, titulo: "Sobrancelha de Henna" },
];

export const Route = createFileRoute("/promocoes")({
  head: () => ({
    meta: [
      { title: "Promoções | Salão Marlu em Rio Preto" },
      {
        name: "description",
        content:
          "Promoções do Salão Marlu: limpeza de pele, reconstrução capilar e sobrancelha de henna. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Promoções | Salão Marlu em Rio Preto" },
      {
        property: "og:description",
        content: "Confira as promoções da semana no Salão Marlu e agende seu horário.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Promocoes,
});

function Promocoes() {
  return (
    <main>
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Link to="/" className="eyebrow text-gold hover:text-gold-soft">
            ← Voltar ao início
          </Link>
          <h1 className="mt-6 text-4xl text-cream md:text-6xl">Promoções</h1>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Aproveite as condições especiais do Salão Marlu. Vagas limitadas.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {promocoes.map((p) => (
              <figure
                key={p.url}
                className="overflow-hidden rounded-3xl border border-gold/35 bg-card shadow-soft"
              >
                <img src={p.url} alt={p.titulo} className="aspect-[9/16] w-full object-cover" />
                <figcaption className="p-6 text-left">
                  <p className="text-lg text-foreground">{p.titulo}</p>
                  <CtaButton variant="dark" className="mt-4">
                    Quero Essa Promoção
                  </CtaButton>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Rodape />
      <BarraPrime />
    </main>
  );
}
