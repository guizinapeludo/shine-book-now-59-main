import { Sparkles, Flower2, Heart, Hand, Eye, Sun } from "lucide-react";

export const services = [
  {
    icon: Sparkles,
    title: "Limpeza de Pele",
    description: "Extração profunda, esfoliação e hidratação para uma pele renovada.",
    duration: "60 min",
  },
  {
    icon: Eye,
    title: "Design de Sobrancelhas",
    description: "Modelagem personalizada com henna ou design natural.",
    duration: "45 min",
  },
  {
    icon: Flower2,
    title: "Extensão de Cílios",
    description: "Volume russo, fio a fio ou híbrido para um olhar marcante.",
    duration: "120 min",
  },
  {
    icon: Heart,
    title: "Drenagem Linfática",
    description: "Massagem terapêutica para redução de inchaço e bem-estar.",
    duration: "60 min",
  },
  {
    icon: Sun,
    title: "Terapia LED",
    description: "Bioestimulação facial para anti-idade e luminosidade.",
    duration: "30 min",
  },
  {
    icon: Hand,
    title: "Spa das Mãos",
    description: "Manicure, hidratação intensiva e cuidados completos.",
    duration: "60 min",
  },
];

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? services.slice(0, 6) : services;

  return (
    <section className="relative py-24 px-6 bg-card/30 overflow-hidden">
      <div className="relative container mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-4">// services.list</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Serviços <span className="text-gradient-tech">exclusivos</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-primary/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group relative p-8 bg-background border border-border hover:border-primary/60 hover:shadow-glow transition-smooth"
              >
                <span className="absolute top-0 left-0 h-3 w-3 border-t border-l border-primary/60" />
                <span className="absolute top-0 right-0 h-3 w-3 border-t border-r border-primary/60" />
                <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-primary/60" />
                <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-primary/60" />

                <div className="flex items-start justify-between mb-6">
                  <Icon className="text-primary group-hover:scale-110 transition-smooth" size={32} strokeWidth={1.2} />
                  <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">→ {s.duration}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
