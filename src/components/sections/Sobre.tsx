import sobreA from "@/assets/sobre-salao.png.asset.json";
const sobreImg = sobreA.url;
import { CtaButton } from "../CtaButton";

export function Sobre() {
  return (
    <section className="bg-ink py-28 md:py-40">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-2">
        <img
          src={sobreImg}
          alt="Atendimento no Salão Marlu"
          loading="lazy"
          width={1024}
          height={1280}
          className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl object-cover shadow-soft"
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
