import heroBg from "@/assets/hero-salao.jpg";
import logo from "@/assets/logo.jpeg.asset.json";
import { CtaButton } from "../CtaButton";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-cover bg-bottom bg-no-repeat md:bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 overlay-dark" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 pt-28 pb-[400px] text-center md:justify-center md:py-32">
        <img
          src={logo.url}
          alt="Salão Marlu - Espaço de Beleza"
          width={320}
          height={320}
          className="mb-8 w-40 md:w-52"
        />
        <h1 className="text-4xl leading-tight text-cream md:text-6xl">
          Salão de Beleza em Rio Preto: Cabelo, Estética e Química em Um Só Lugar
        </h1>
        <p className="mt-6 max-w-xl text-base text-cream/80 md:text-lg">
          Tudo o que você precisa para se sentir bem, com uma equipe preparada para cuidar de cada
          detalhe.
        </p>
        <CtaButton className="mt-10">Agende Seu Horário</CtaButton>
      </div>
    </section>
  );
}
