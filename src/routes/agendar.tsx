import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/BookingForm";
import { Clock, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/agendar")({
  head: () => ({
    meta: [
      { title: "Agendar Horário — Aurora Estética" },
      { name: "description", content: "Agende seu horário de tratamento estético de forma rápida e fácil pelo WhatsApp." },
      { property: "og:title", content: "Agendar Horário — Aurora Estética" },
      { property: "og:description", content: "Agende seu horário pelo WhatsApp." },
    ],
  }),
  component: AgendarPage,
});

function AgendarPage() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Reserve seu horário</p>
          <h1 className="font-display text-5xl md:text-6xl">
            <span className="text-gradient-gold italic">Agendamento</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
            Preencha os dados abaixo e enviaremos diretamente ao WhatsApp para confirmação.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          <div className="bg-card p-8 md:p-10 border border-border shadow-elegant">
            <BookingForm />
          </div>

          <aside className="space-y-8">
            <div className="bg-card p-8 border border-border">
              <Clock className="text-primary mb-4" size={28} strokeWidth={1.2} />
              <h3 className="font-display text-xl mb-3">Horários</h3>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>Seg — Sex · 9h às 20h</li>
                <li>Sábado · 9h às 17h</li>
                <li>Domingo · Fechado</li>
              </ul>
            </div>

            <div className="bg-card p-8 border border-border">
              <MapPin className="text-primary mb-4" size={28} strokeWidth={1.2} />
              <h3 className="font-display text-xl mb-3">Localização</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rua das Flores, 123<br />
                Jardins · São Paulo, SP
              </p>
            </div>

            <div className="bg-card p-8 border border-border">
              <MessageCircle className="text-primary mb-4" size={28} strokeWidth={1.2} />
              <h3 className="font-display text-xl mb-3">Contato direto</h3>
              <p className="text-sm text-muted-foreground">
                (11) 99999-0000
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
