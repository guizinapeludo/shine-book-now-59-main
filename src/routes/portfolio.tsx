import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Aurora Estética" },
      { name: "description", content: "Veja resultados reais de tratamentos estéticos: pele, sobrancelhas, cílios e muito mais." },
      { property: "og:title", content: "Portfólio — Aurora Estética" },
      { property: "og:description", content: "Resultados reais dos nossos tratamentos." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="pt-40 pb-4 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Resultados</p>
        <h1 className="font-display text-5xl md:text-6xl">
          <span className="text-gradient-gold italic">Portfólio</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
          Cada cliente é única — veja transformações reais feitas com técnica e carinho.
        </p>
      </section>
      <PortfolioGrid title="Trabalhos recentes" />
    </>
  );
}
