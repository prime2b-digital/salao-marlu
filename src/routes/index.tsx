import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Beneficios } from "@/components/sections/Beneficios";
import { Servicos } from "@/components/sections/Servicos";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { ProvaSocial } from "@/components/sections/ProvaSocial";
import { Sobre } from "@/components/sections/Sobre";
import { Rodape } from "@/components/sections/Rodape";
import { BarraPrime } from "@/components/sections/BarraPrime";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Salão Marlu | Cabelo, Estética e Química em Rio Preto",
      },
      {
        name: "description",
        content:
          "Salão de beleza em São José do Rio Preto: cabelo, estética e química em um só lugar. Agende seu horário pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Salão Marlu | Cabelo, Estética e Química em Rio Preto",
      },
      {
        property: "og:description",
        content:
          "Tudo o que você precisa para se sentir bem, com uma equipe preparada para cuidar de cada detalhe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Beneficios />
      <Servicos />
      <ComoFunciona />
      <ProvaSocial />
      <Sobre />
      <Rodape />
      <BarraPrime />
    </main>
  );
}
