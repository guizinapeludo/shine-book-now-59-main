import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpeg";
import hero2 from "@/assets/hero-2.jpeg";
import hero3 from "@/assets/hero-3.jpeg";

const slides = [
  {
    image: hero1,
    tag: "01 / Signature",
    title: "A arte de cuidar da sua beleza",
    subtitle: "Tratamentos exclusivos em um ambiente sofisticado e acolhedor.",
  },
  {
    image: hero2,
    tag: "02 / Skin",
    title: "Pele radiante, confiança renovada",
    subtitle: "Protocolos personalizados para revelar o seu brilho natural.",
  },
  {
    image: hero3,
    tag: "03 / Wellness",
    title: "Um ritual para corpo e alma",
    subtitle: "Massagens e terapias que transformam o seu dia.",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const current = slides[selected];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="relative z-20 container mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-5">
            {current.tag}
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            {current.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient-tech italic">
              {current.title.split(" ").slice(-2).join(" ")}
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        {/* Centered carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Frame corners */}
          <div className="absolute -inset-4 pointer-events-none z-30">
            <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-primary/60" />
            <span className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-primary/60" />
            <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary/60" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-primary/60" />
          </div>

          <div className="overflow-hidden shadow-glow" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, i) => (
                <div key={i} className="relative min-w-0 flex-[0_0_100%] aspect-[16/9]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Anterior"
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-30 h-12 w-12 flex items-center justify-center border border-primary/40 bg-background/60 backdrop-blur text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Próximo"
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-30 h-12 w-12 flex items-center justify-center border border-primary/40 bg-background/60 backdrop-blur text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators + counter */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {String(selected + 1).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-[2px] transition-smooth ${
                  i === selected ? "w-12 bg-primary shadow-glow" : "w-6 bg-foreground/20"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            to="/agendar"
            className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium shadow-gold hover:opacity-90 transition-smooth"
          >
            Agendar horário
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary/10 transition-smooth font-mono"
          >
            Ver portfólio
          </Link>
        </div>
      </div>
    </section>
  );
}
