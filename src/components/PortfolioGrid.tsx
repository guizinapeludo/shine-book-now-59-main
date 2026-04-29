import { Link } from "@tanstack/react-router";
import brows from "@/assets/portfolio-brows.jpeg";
import lashes from "@/assets/portfolio-lashes.jpeg";
import skin from "@/assets/portfolio-skin.jpg";
import massage from "@/assets/portfolio-massage.jpg";
import led from "@/assets/portofolio-led.jpeg";
import nails from "@/assets/portfolio-nails.jpg";

export const portfolioItems = [
  { image: skin, title: "Limpeza de pele profunda", category: "Facial" },
  { image: brows, title: "Design de sobrancelhas", category: "Sobrancelhas" },
  { image: lashes, title: "Extensão de cílios volume", category: "Cílios" },
  { image: massage, title: "Drenagem linfática", category: "Corporal" },
  { image: led, title: "Terapia LED facial", category: "Anti-idade" },
  { image: nails, title: "Manicure & spa das mãos", category: "Mãos" },
];

export function PortfolioGrid({ title = "Portfólio", limit }: { title?: string; limit?: number }) {
  const items = limit ? portfolioItems.slice(0, limit) : portfolioItems;

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-4">// portfolio.gallery</p>
          <h2 className="font-display text-4xl md:text-5xl">
            <span className="text-gradient-tech">{title}</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-primary/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] overflow-hidden bg-card cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-smooth translate-y-2 group-hover:translate-y-0">
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                  {item.category}
                </p>
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/40 transition-smooth" />
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary hover:text-gold-soft transition-smooth border-b border-primary/40 pb-1"
            >
              Ver portfólio completo
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
