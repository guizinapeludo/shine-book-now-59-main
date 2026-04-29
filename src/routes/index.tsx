import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <PortfolioGrid title="Nossos Trabalhos" limit={6} />

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6">Pronta para se cuidar?</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Reserve um momento <span className="text-gradient-gold italic">só seu</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Cada atendimento é planejado com carinho para oferecer a melhor experiência.
            Vem viver esse ritual de autocuidado com a gente.
          </p>
          <Link
            to="/agendar"
            className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium shadow-gold hover:opacity-90 transition-smooth"
          >
            Agendar agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
          </Link>
        </div>
      </section>
    </>
  );
}
