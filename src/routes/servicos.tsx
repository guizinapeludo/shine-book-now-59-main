import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/ServicesSection";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Aurora Estética" },
      { name: "description", content: "Conheça todos os tratamentos estéticos: limpeza de pele, sobrancelhas, cílios, drenagem e mais." },
      { property: "og:title", content: "Serviços — Aurora Estética" },
      { property: "og:description", content: "Conheça todos os nossos tratamentos estéticos." },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <section className="pt-40 pb-12 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Tratamentos</p>
        <h1 className="font-display text-5xl md:text-6xl">
          Nossos <span className="text-gradient-gold italic">serviços</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto mt-6 leading-relaxed">
          Protocolos exclusivos pensados para realçar a sua beleza e promover bem-estar.
        </p>
      </section>
      <ServicesSection />
    </>
  );
}
