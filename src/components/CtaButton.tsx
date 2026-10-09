import { WhatsappIcon } from "./WhatsappIcon";
import { WHATSAPP_URL } from "@/lib/contato";

export function CtaButton({
  children,
  variant = "solid",
  href = WHATSAPP_URL,
  icon = true,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "gold" | "dark";
  href?: string;
  icon?: boolean;
  className?: string;
}) {
  const styles =
    variant === "outline"
      ? "border border-foreground/25 text-foreground hover:bg-foreground/5"
      : "bg-primary text-primary-foreground hover:bg-primary/90";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors ${styles} ${className}`}
    >
      {icon && <WhatsappIcon />}
      {children}
    </a>
  );
}

export function LinkSeta({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm text-foreground transition-colors hover:border-foreground"
    >
      {children} <span aria-hidden>→</span>
    </a>
  );
}
