import { WhatsappIcon } from "./WhatsappIcon";
import { WHATSAPP_URL } from "@/lib/contato";

export function CtaButton({
  children,
  variant = "gold",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "gold" | "outline" | "dark";
  className?: string;
}) {
  const styles = {
    gold: "bg-gold text-ink hover:bg-gold-soft",
    outline:
      "border border-gold/70 text-gold hover:bg-gold hover:text-ink bg-transparent",
    dark: "bg-ink text-cream hover:bg-ink/85",
  }[variant];

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.25em] transition-colors duration-300 ${styles} ${className}`}
    >
      <WhatsappIcon />
      {children}
    </a>
  );
}
