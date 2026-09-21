import heroBg from "@/assets/hero-salao.jpg";
import logo from "@/assets/logo-transparente.png";
import { CtaButton } from "../CtaButton";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[700px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 overlay-dark" />
      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <img
          src={logo}
          alt="Salão Marlu - Espaço de Beleza"
          width={771}
          height={254}
          className="mb-8 w-52 brightness-0 invert md:w-64"
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
