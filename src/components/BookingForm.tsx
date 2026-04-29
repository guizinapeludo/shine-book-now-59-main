import { useState } from "react";
import { services } from "./ServicesSection";
import { MessageCircle } from "lucide-react";

const PHONE = "5511999990000"; // (11) 99999-0000 — substituir pelo número real

export function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0].title);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar um horário.%0A%0A*Nome:* ${name}%0A*Serviço:* ${service}%0A*Data:* ${date}%0A*Horário:* ${time}${
      notes ? `%0A*Observações:* ${notes}` : ""
    }`;
    window.open(`https://wa.me/${PHONE}?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">Nome completo</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-input/40 border border-border focus:border-primary px-4 py-3 text-foreground outline-none transition-smooth"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">Serviço desejado</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full bg-input/40 border border-border focus:border-primary px-4 py-3 text-foreground outline-none transition-smooth"
        >
          {services.map((s) => (
            <option key={s.title} value={s.title} className="bg-background">
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">Data</label>
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-input/40 border border-border focus:border-primary px-4 py-3 text-foreground outline-none transition-smooth"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">Horário</label>
          <input
            required
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-input/40 border border-border focus:border-primary px-4 py-3 text-foreground outline-none transition-smooth"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">Observações</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="w-full bg-input/40 border border-border focus:border-primary px-4 py-3 text-foreground outline-none transition-smooth resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-3 bg-gradient-gold text-primary-foreground py-4 text-sm uppercase tracking-[0.2em] font-medium shadow-gold hover:opacity-90 transition-smooth"
      >
        <MessageCircle size={18} />
        Enviar pelo WhatsApp
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Você será redirecionada para o WhatsApp com a mensagem pronta.
      </p>
    </form>
  );
}
