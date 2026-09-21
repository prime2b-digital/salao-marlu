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
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {beneficios.map((b) => (
          <div key={b.titulo} className="border-t border-border pt-8">
            <b.icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
            <h3 className="mt-5 text-2xl text-foreground">{b.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
