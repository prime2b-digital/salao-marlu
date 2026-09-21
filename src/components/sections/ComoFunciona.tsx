import { MessageCircle, CalendarClock, Scissors } from "lucide-react";
import { CtaButton } from "../CtaButton";

const passos = [
  { icon: MessageCircle, titulo: "Chame no WhatsApp" },
  { icon: CalendarClock, titulo: "Escolha o melhor horário" },
  { icon: Scissors, titulo: "Venha ser cuidada" },
];

export function ComoFunciona() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl text-foreground md:text-5xl">Agendar no Marlu é Simples</h2>
        <p className="mt-4 text-muted-foreground">Em três passos você garante seu horário.</p>

        <div className="relative mt-16">
          {/* linha da timeline */}
          <span className="absolute left-8 top-0 hidden h-full w-px bg-gold/40 sm:block md:left-0 md:top-8 md:h-px md:w-full" />

          <div className="relative grid gap-12 md:grid-cols-3">
            {passos.map((p, i) => (
              <div key={p.titulo} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold shadow-soft ring-8 ring-cream">
                  <p.icon className="h-6 w-6 text-ink" fill="currentColor" strokeWidth={1.2} />
                </div>
                <span className="eyebrow mt-5 text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-2 text-2xl text-foreground">{p.titulo}</h3>
              </div>
            ))}
          </div>
        </div>

        <CtaButton variant="dark" className="mt-14">
          Falar no WhatsApp
        </CtaButton>
      </div>
    </section>
  );
}
