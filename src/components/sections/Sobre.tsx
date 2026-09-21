import logo from "@/assets/logo.jpeg.asset.json";
import { CtaButton } from "../CtaButton";

export function Sobre() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
        <img
          src={logo.url}
          alt="Logotipo Salão Marlu"
          loading="lazy"
          className="mx-auto w-full max-w-sm"
        />
        <div>
          <h2 className="text-4xl text-cream md:text-5xl">Sobre o Salão Marlu</h2>
          <p className="mt-6 leading-relaxed text-cream/75">
            O Salão Marlu nasceu para ser o lugar onde você cuida de tudo sem pressa e sem precisar
            ir a vários endereços. Reunimos serviços de cabeleireiro, química e estética com atenção
            a cada detalhe, em um ambiente pensado para o seu bem-estar em São José do Rio Preto.
          </p>
          <CtaButton className="mt-9">Agende Seu Horário</CtaButton>
        </div>
      </div>
    </section>
  );
}
