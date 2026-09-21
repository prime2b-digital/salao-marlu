import { MessageCircle, CalendarClock, Scissors } from "lucide-react";
import { CtaButton } from "../CtaButton";

const passos = [
  { icon: MessageCircle, titulo: "Chame no WhatsApp" },
  { icon: CalendarClock, titulo: "Escolha o melhor horário" },
  { icon: Scissors, titulo: "Venha ser cuidada" },
];

export function ComoFunciona() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl text-foreground md:text-5xl">Agendar no Marlu é Simples</h2>
        <p className="mt-4 text-muted-foreground">Em três passos você garante seu horário.</p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {passos.map((p, i) => (
            <div key={p.titulo} className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50">
                <p.icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
              </div>
              <span className="eyebrow mt-5 text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-2 text-2xl text-foreground">{p.titulo}</h3>
            </div>
          ))}
        </div>

        <CtaButton variant="dark" className="mt-12">
          Falar no WhatsApp
        </CtaButton>
      </div>
    </section>
  );
}
