import { Instagram, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl mb-3">
            <span className="text-gradient-gold">Bell</span> Estética
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Realçando a sua beleza natural com técnicas exclusivas e cuidado personalizado.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MessageCircle size={16} className="text-primary" /> (11) 99999-0000</li>
            <li className="flex items-center gap-2"><Instagram size={16} className="text-primary" /> @aurora.estetica</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Rua das Flores, 123 — São Paulo</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Horários</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Seg — Sex · 9h às 20h</li>
            <li>Sábado · 9h às 17h</li>
            <li>Domingo · Fechado</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bell Estética. Todos os direitos reservados.
      </div>
    </footer>
  );
}
