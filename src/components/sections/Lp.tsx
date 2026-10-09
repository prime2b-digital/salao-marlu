import { useState } from "react";
import { Menu, X, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-preta.png";
import heroAsset from "@/assets/hero-salao.png.asset.json";
import sobreA from "@/assets/sobre-salao.png.asset.json";
import bannerD from "@/assets/banner-produto-desktop.jpg.asset.json";
import bannerM from "@/assets/banner-produto-mobile.jpg.asset.json";
import pureLogo from "@/assets/pure-logo.png.asset.json";
import corCabelo from "@/assets/lp-Cabelo_2.png.asset.json";
import corte from "@/assets/lp-Corte.png.asset.json";
import maquiagem from "@/assets/lp-Maquiagem.png.asset.json";
import manicure from "@/assets/lp-Manicure.png.asset.json";
import cabelo1 from "@/assets/lp-Cabelo.png.asset.json";
import galeria1 from "@/assets/galeria-1.jpg.asset.json";
import galeria2 from "@/assets/galeria-2.jpg.asset.json";
import galeria4 from "@/assets/galeria-4.jpg.asset.json";
import { CtaButton, LinkSeta } from "../CtaButton";
import { WhatsappIcon } from "../WhatsappIcon";
import { ENDERECO, GOOGLE_PERFIL, LOJA_URL, TELEFONE, WHATSAPP_URL } from "@/lib/contato";

const menu = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galerias", href: "#galeria" },
  { label: "Nossas Unidades", href: "#unidades" },
  { label: "Sobre", href: "#sobre" },
];

function Marca({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" className={`flex items-center gap-3 ${className}`}>
      <img src={logo} alt="Salão Marlu" width={771} height={254} className="h-8 w-auto" />
      <span className="h-5 w-px bg-foreground/25" />
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        Espaço de Beleza
      </span>
    </a>
  );
}

export function Header() {
  const [aberto, setAberto] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Marca />
        <nav className="hidden items-center gap-7 lg:flex">
          {menu.map((m) => (
            <a key={m.href} href={m.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
              {m.label}
            </a>
          ))}
        </nav>
        <button className="lg:hidden" aria-label="Abrir menu" onClick={() => setAberto(!aberto)}>
          {aberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {aberto && (
        <nav className="flex flex-col border-t border-border px-6 py-4 lg:hidden">
          {menu.map((m) => (
            <a key={m.href} href={m.href} onClick={() => setAberto(false)} className="py-2.5 text-sm">
              {m.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-16 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="eyebrow text-muted-foreground">São José do Rio Preto</p>
          <h1 className="mt-5 text-4xl leading-tight md:text-6xl">
            Beleza, cuidado e <strong className="font-bold">Experiência.</strong>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Cabelo, Cor, Sobrancelhas, Maquiagem, Unha e Estética. Tudo em um só lugar.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaButton>Agendar horário</CtaButton>
            <a href="#servicos" className="inline-flex items-center rounded-sm border border-foreground/25 px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] hover:bg-foreground/5">
              Ver serviços
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md pb-12 pl-12">
          <img src={heroAsset.url} alt="Salão Marlu" width={900} height={1100} className="aspect-[4/5] w-full object-cover" />
          <img src={galeria4.url} alt="Cliente do Salão Marlu" loading="lazy" className="absolute bottom-0 left-0 aspect-[3/4] w-2/5 border-4 border-background object-cover" />
        </div>
      </div>
    </section>
  );
}

export function Produtos() {
  return (
    <section id="produtos" className="relative scroll-mt-16 overflow-hidden">
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerD.url} />
        <img src={bannerM.url} alt="Produtos Pure Orgânico" className="absolute inset-0 h-full w-full object-cover object-bottom md:object-center" />
      </picture>
      <div className="relative mx-auto flex min-h-[640px] max-w-6xl px-6 py-20 md:min-h-[520px] md:items-center">
        <div className="max-w-sm md:max-w-md">
          <img src={pureLogo.url} alt="Pure Orgânico" width={480} height={178} className="h-16 w-auto md:h-20" />
          <h2 className="mt-8 text-3xl leading-snug md:text-4xl">
            Seu cabelo merece um cuidado que <strong className="font-bold">transforma.</strong>
          </h2>
          <div className="mt-8">
            <LinkSeta href={LOJA_URL}>Conheça a loja</LinkSeta>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardServico({ img, nome, className = "", texto }: { img: string; nome: string; className?: string; texto?: string }) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`group relative block overflow-hidden ${className}`}>
      <img src={img} alt={nome} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/70 to-transparent" />
      <div className="absolute bottom-0 p-4 md:p-5">
        <span className="text-sm text-primary-foreground md:text-lg">{nome}</span>
        {texto && <p className="mt-1 max-w-xs text-xs text-primary-foreground/80">{texto}</p>}
      </div>
    </a>
  );
}

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl">
            O que <strong className="font-bold">Fazemos</strong>
          </h2>
          <LinkSeta href={WHATSAPP_URL}>Agendar</LinkSeta>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2">
          <CardServico img={corCabelo.url} nome="Cor e luzes" texto="Loiros, iluminados e coloração com acabamento de salão." className="col-span-2 aspect-square md:row-span-2 md:aspect-auto" />
          <CardServico img={corte.url} nome="Corte" className="aspect-[4/3]" />
          <CardServico img={maquiagem.url} nome="Maquiagem" className="aspect-[4/3]" />
          <CardServico img={manicure.url} nome="Manicure" className="aspect-[4/3]" />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex aspect-[4/3] flex-col justify-end bg-accent p-4 md:p-5">
            <span className="text-sm text-accent-foreground md:text-lg">Estética</span>
            <p className="mt-1 text-xs text-accent-foreground/80">Cuidados com a pele e bem-estar.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Galeria() {
  const fotos = [cabelo1.url, corCabelo.url, galeria2.url, galeria1.url];
  return (
    <section id="galeria" className="scroll-mt-16 bg-background pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl">
          Nosso <strong className="font-bold">Trabalho</strong>
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-4">
          {fotos.map((f, i) => (
            <img key={i} src={f} alt="Trabalho do Salão Marlu" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          ))}
        </div>
        <div className="mt-8">
          <LinkSeta href={GOOGLE_PERFIL}>Ver galeria</LinkSeta>
        </div>
      </div>
    </section>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-16 bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
        <img src={sobreA.url} alt="Salão Marlu" loading="lazy" className="mx-auto aspect-[3/4] w-full max-w-xs object-cover" />
        <div>
          <img src={logo} alt="Salão Marlu" width={771} height={254} className="h-12 w-auto" />
          <p className="mt-8 text-2xl font-light leading-snug md:text-3xl">
            O Salão Marlu nasceu para ser o lugar onde você cuida de tudo <strong className="font-semibold">sem pressa</strong>: cabelo,
            cor, maquiagem, unhas e estética, com atenção a cada detalhe em São José do Rio Preto.
          </p>
          <div className="mt-8">
            <LinkSeta href={WHATSAPP_URL}>Agende seu horário</LinkSeta>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Unidades() {
  return (
    <section id="unidades" className="scroll-mt-16 bg-background py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <iframe
          title="Mapa Salão Marlu"
          src={`https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`}
          className="h-80 w-full border border-border"
          loading="lazy"
        />
        <div>
          <h2 className="text-3xl md:text-4xl">
            Venha nos <strong className="font-bold">visitar</strong>
          </h2>
          <ul className="mt-8 space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.3} />
              <div>
                <p className="font-semibold">Av. Sebastião Tavares da Silva, 1081</p>
                <p className="text-muted-foreground">Jardim Vista Alegre, São José do Rio Preto - SP</p>
                <a href={GOOGLE_PERFIL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block underline">
                  Abrir no Google Maps
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.3} />
              <div>
                <p className="font-semibold">Terça a sexta</p>
                <p className="text-muted-foreground">das 8h às 19h · Sábado das 8h às 17h</p>
              </div>
            </li>
            <li className="flex gap-4">
              <WhatsappIcon />
              <div>
                <p className="font-semibold">{TELEFONE}</p>
                <p className="text-muted-foreground">WhatsApp</p>
              </div>
            </li>
          </ul>
          <CtaButton className="mt-9">Agendar horário</CtaButton>
        </div>
      </div>
    </section>
  );
}

export function Rodape() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Marca />
          <p className="mt-5 text-sm text-muted-foreground">Beleza, cuidado e experiência.</p>
        </div>
        <div>
          <h3 className="eyebrow font-semibold">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {menu.map((m) => (
              <li key={m.href}><a href={m.href} className="hover:text-foreground">{m.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow font-semibold">Endereço</h3>
          <a href={GOOGLE_PERFIL} target="_blank" rel="noopener noreferrer" className="mt-4 block text-sm text-muted-foreground hover:text-foreground">
            {ENDERECO}
          </a>
        </div>
        <div>
          <h3 className="eyebrow font-semibold">Horário e contato</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Terça a sexta, das 8h às 19h<br />Sábado, das 8h às 17h
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-muted-foreground hover:text-foreground">
            {TELEFONE}<br />WhatsApp
          </a>
        </div>
      </div>
      <p className="border-t border-border px-6 py-5 text-center text-xs text-muted-foreground">
        © 2026 Salão Marlu - Todos os Direitos Reservados | Feito com ❤️ pela Prime2B
      </p>
    </footer>
  );
}
