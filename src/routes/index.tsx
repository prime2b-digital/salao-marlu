import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, Produtos, Servicos, Galeria, Sobre, Unidades, Rodape } from "@/components/sections/Lp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salão Marlu | Beleza, cuidado e experiência em Rio Preto" },
      {
        name: "description",
        content:
          "Cabelo, cor, sobrancelhas, maquiagem, unha e estética em um só lugar em São José do Rio Preto. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Salão Marlu | Beleza, cuidado e experiência" },
      {
        property: "og:description",
        content: "Cabelo, cor, sobrancelhas, maquiagem, unha e estética. Tudo em um só lugar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Produtos />
        <Servicos />
        <Galeria />
        <Unidades />
        <Sobre />
      </main>
      <Rodape />
    </>
  );
}
