import cabelo from "@/assets/servico-cabelo.jpg";
import quimica from "@/assets/servico-quimica.jpg";
import estetica from "@/assets/servico-estetica.jpg";
import { WHATSAPP_URL } from "@/lib/contato";
import { CtaButton } from "../CtaButton";

const servicos = [
  { nome: "Cabelo", img: cabelo },
  { nome: "Química", img: quimica },
  { nome: "Estética", img: estetica },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="eyebrow text-gold">Diversidade de serviços</p>
        <h2 className="mt-4 text-4xl text-cream md:text-5xl">Conheça os Serviços do Marlu</h2>
        <p className="mx-auto mt-5 max-w-2xl text-cream/70">
          Do corte do dia a dia à transformação completa, cuidamos de você por inteiro.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {servicos.map((s) => (
            <a
              key={s.nome}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <img
                src={s.img}
                alt={s.nome}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 overlay-dark" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                <span className="text-2xl text-cream">{s.nome}</span>
                <span className="mt-2 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
              </div>
            </a>
          ))}
        </div>

        <CtaButton className="mt-12">Quero Agendar</CtaButton>
      </div>
    </section>
  );
}
