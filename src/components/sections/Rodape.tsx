import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";
import { EMAIL, ENDERECO, TELEFONE, WHATSAPP_URL } from "@/lib/contato";
import { WhatsappIcon } from "../WhatsappIcon";

export function Rodape() {
  return (
    <footer className="bg-background py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        <div>
          <img src={logo.url} alt="Salão Marlu" loading="lazy" className="w-40" />
        </div>

        <div>
          <h3 className="eyebrow text-gold">Endereço</h3>
          <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.2} />
            {ENDERECO}
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Contatos</h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-gold" strokeWidth={1.2} />
            {TELEFONE}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-2 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 text-gold" strokeWidth={1.2} />
            {EMAIL}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-whatsapp transition-opacity hover:opacity-80"
          >
            <WhatsappIcon />
            Falar no WhatsApp
          </a>
        </div>

        <div>
          <h3 className="eyebrow text-gold">Horário de funcionamento</h3>
          <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.2} />
            <span>
              Terça a Sext das 08:00 as 19:00
              <br />
              Sáb das 08:00 às 17:00
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
