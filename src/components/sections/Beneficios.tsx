import { Sparkles, CalendarCheck, CreditCard, MapPin } from "lucide-react";

const beneficios = [
  {
    icon: Sparkles,
    titulo: "Tudo em um só lugar.",
    texto: "Cabelo, química e estética sem precisar trocar de salão.",
  },
  {
    icon: CalendarCheck,
    titulo: "Agendamento rápido.",
    texto: "Basta chamar no WhatsApp e escolher o melhor horário.",
  },
  {
    icon: CreditCard,
    titulo: "Pagamento facilitado.",
    texto: "O salão aceita todas as formas de pagamento.",
  },
  {
    icon: MapPin,
    titulo: "Atendimento em Rio Preto.",
    texto: "Fica perto de você e é fácil de chegar.",
  },
];

export function Beneficios() {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {beneficios.map((b) => (
          <div
            key={b.titulo}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold">
              <b.icon className="h-6 w-6 text-ink" strokeWidth={1.4} />
            </div>
            <h3 className="mt-6 text-2xl text-foreground">{b.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
