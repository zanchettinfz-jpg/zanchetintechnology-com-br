import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow p-4 shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-6 text-primary-foreground" />
      <span className="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap text-primary-foreground transition-all duration-300 group-hover:max-w-[12rem] group-focus-visible:max-w-[12rem]">
        Solicitar orçamento
      </span>
    </a>
  );
}