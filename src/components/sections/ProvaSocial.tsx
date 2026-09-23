import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cliente1 from "@/assets/cliente-1.jpg.asset.json";
import cliente2 from "@/assets/cliente-2.jpg.asset.json";
import cliente3 from "@/assets/cliente-3.jpg.asset.json";
import salao1 from "@/assets/salao-1.jpg.asset.json";
import galeria1 from "@/assets/galeria-1.jpg.asset.json";
import galeria2 from "@/assets/galeria-2.jpg.asset.json";
import galeria3 from "@/assets/galeria-3.jpg.asset.json";
import galeria4 from "@/assets/galeria-4.jpg.asset.json";
import espaco1 from "@/assets/espaco-1.png.asset.json";
import { CtaButton } from "../CtaButton";

const depoimentos = [
  {
    nome: "Ana Paula Ferreira",
    iniciais: "A",
    cor: "#1A73E8",
    tempo: "2 semanas atrás",
    texto:
      "Atendimento maravilhoso do começo ao fim. Fiz corte e escova e amei o resultado. Ambiente limpo, equipe atenciosa e muito profissional.",
  },
  {
    nome: "Juliana Martins",
    iniciais: "J",
    cor: "#E52592",
    tempo: "1 mês atrás",
    texto:
      "Já fiz coloração e progressiva e sempre saio satisfeita. Cuidam muito bem do cabelo e explicam cada etapa do procedimento.",
  },
  {
    nome: "Camila Souza",
    iniciais: "C",
    cor: "#12B5CB",
    tempo: "1 mês atrás",
    texto:
      "Resolvo tudo em um lugar só: cabelo, sobrancelha e estética. O agendamento pelo WhatsApp é super rápido e sempre conseguem encaixar.",
  },
  {
    nome: "Renata Oliveira",
    iniciais: "R",
    cor: "#F9AB00",
    tempo: "2 meses atrás",
    texto:
      "Profissionais excelentes e muito cuidadosas com a química. Meu cabelo ficou macio e com brilho. Recomendo demais!",
  },
  {
    nome: "Patrícia Gomes",
    iniciais: "P",
    cor: "#7B1FA2",
    tempo: "3 meses atrás",
    texto:
      "Ambiente acolhedor, música boa e um atendimento que faz a gente se sentir em casa. Virei cliente fixa.",
  },
];

const galeria = [
  { url: espaco1.url, alt: "Espaço do Salão Marlu" },
  { url: cliente1.url, alt: "Cliente do Salão Marlu" },
  { url: cliente2.url, alt: "Cliente do Salão Marlu" },
  { url: cliente3.url, alt: "Cliente do Salão Marlu" },
  { url: galeria1.url, alt: "Clientes no Salão Marlu" },
  { url: galeria2.url, alt: "Escova realizada no Salão Marlu" },
  { url: galeria3.url, alt: "Clientes sendo atendidas no Salão Marlu" },
  { url: galeria4.url, alt: "Corte e escova feitos no Salão Marlu" },
];

function Estrelas() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.5 14.5 0 0 1 9.77 24c0-1.6.27-3.15.76-4.59l-7.98-6.19A23.94 23.94 0 0 0 0 24c0 3.88.93 7.54 2.56 10.78z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48"
      />
    </svg>
  );
}

export function ProvaSocial() {
  const trilho = useRef<HTMLDivElement>(null);

  const rolar = (dir: number) => {
    trilho.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="bg-cream pb-28 pt-14 md:pb-40 md:pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl text-foreground md:text-5xl">O Que Nossas Clientes Dizem</h2>
        </div>

        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GoogleG />
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">5,0</span>
                <Estrelas />
                <span className="text-sm text-muted-foreground">Avaliações do Google</span>
              </div>
            </div>
            <div className="hidden gap-2 md:flex">
              <button
                type="button"
                aria-label="Anterior"
                onClick={() => rolar(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Próximo"
                onClick={() => rolar(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={trilho}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {depoimentos.map((d) => (
              <article
                key={d.nome}
                className="w-[300px] shrink-0 snap-start rounded-3xl bg-card p-6 shadow-soft"
              >
                <header className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-base text-white"
                    style={{ backgroundColor: d.cor }}
                    aria-hidden="true"
                  >
                    {d.iniciais}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{d.nome}</p>
                    <p className="text-xs text-muted-foreground">{d.tempo}</p>
                  </div>
                </header>
                <div className="mt-3">
                  <Estrelas />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
              </article>
            ))}
          </div>
        </div>

        <h3 className="mt-20 text-center text-3xl text-foreground md:text-4xl">
          Conheça Nosso Espaço
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galeria.map((g) => (
            <img
              key={g.url}
              src={g.url}
              alt={g.alt}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton variant="dark">Agende Seu Horário</CtaButton>
        </div>
      </div>
    </section>
  );
}
