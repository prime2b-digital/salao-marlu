import peMao from "@/assets/promocao-pe-mao-escova.jpg.asset.json";
import coloracao from "@/assets/promocao-coloracao-escova.jpg.asset.json";
import maoOuPe from "@/assets/promocao-mao-ou-pe-escova.jpg.asset.json";
import esmaltacaoGel from "@/assets/promocao-esmaltacao-gel.jpeg.asset.json";
import tratamentoKerastase from "@/assets/promocao-tratamento-kerastase.jpeg.asset.json";
import Promo10 from "@/assets/Promo10.png";
import Promo11 from "@/assets/Promo11.jpeg";

const imagens = [
  { src: Promo10, alt: "Promoção Salão Marlu" },
  { src: Promo11, alt: "Promoção Salão Marlu 2" },
];

export function Ofertas() {
  return (
    <section aria-labelledby="ofertas-titulo" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="ofertas-titulo" className="text-3xl md:text-4xl">
          Nossas <strong className="font-bold">Promoções</strong>
        </h2>
        <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {imagens.map((imagem) => (
            <img
              key={imagem.src}
              src={imagem.src}
              alt={imagem.alt}
              width={768}
              height={1153}
              loading="lazy"
              className="mx-auto h-auto w-full max-w-md rounded-sm border border-border"
            />
          ))}
        </div>
      </div>
    </section>
  );
}