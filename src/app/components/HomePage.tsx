import {
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  CheckCircle,
  ArrowRight,
  Truck,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroTrailerImg from "figma:asset/8e05b2ac41f01dce3cdb575493eb2750de157665.png";

const locations = [
  {
    name: "Ahrensburg (HQ)",
    address: "Hauptzentrale",
    tag: "ZENTRALE",
    trailers: ["750kg", "1350kg", "2600kg"],
  },
  {
    name: "HH-Wandsbek",
    address: "Hamburg Ost",
    trailers: ["750kg", "1350kg"],
  },
  {
    name: "Lübeck-Süd",
    address: "Nähe A1 Ost",
    trailers: ["750kg", "2600kg"],
  },
  {
    name: "Norderstedt",
    address: "Hamburg Nord",
    trailers: ["750kg", "1350kg", "2600kg"],
  },
  {
    name: "Elmshorn",
    address: "Kreis Pinneberg",
    trailers: ["750kg", "1350kg"],
  },
];

const fleetData = [
  {
    name: "750kg Plane",
    tag: "BESTSELLER",
    tagColor: "bg-black",
    license: "Führerschein B • Ungebremst",
    price: "29,00",
    image:
      "https://images.unsplash.com/photo-1758243954976-049822ad9d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0cmFpbGVyJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzcxODUwMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      weight: "750 kg",
      payload: "579 kg",
      brake: "Nein",
    },
    dimensions: {
      length: "2515 mm",
      width: "1300 mm",
      height: "1500 mm",
    },
  },
  {
    name: "1350kg Plane",
    tag: "TOP-EMPFEHLUNG",
    tagColor: "bg-[#E30613]",
    license: "Führerschein B • Gebremst",
    price: "39,00",
    image:
      "https://images.unsplash.com/photo-1622743473611-4d2842d8d009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHRyYWlsZXIlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MTg1MDM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      weight: "1350 kg",
      payload: "1089 kg",
      brake: "Ja",
    },
    dimensions: {
      length: "2515 mm",
      width: "1300 mm",
      height: "1500 mm",
    },
  },
  {
    name: "2600kg Auto",
    tag: "XXL-KAPAZITÄT",
    tagColor: "bg-[#0055A4]",
    license: "Führerschein BE • Gebremst",
    price: "59,00",
    image:
      "https://images.unsplash.com/photo-1698245900574-051997b35b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbGVyJTIwcmVudGFsfGVufDF8fHx8MTc3MTg1MDM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    specs: {
      weight: "2600 kg",
      payload: "2100 kg",
      brake: "Ja",
    },
    dimensions: {
      length: "4000 mm",
      width: "2000 mm",
      height: "1800 mm",
    },
  },
];

export function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(
    new Set(),
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
          );
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
            setCurrentSlide(index);
          }
        });
      },
      { threshold: 0.5 },
    );

    const cards =
      scrollRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 16; // 16px gap (gap-4)
      const scrollPosition = index * (cardWidth + gap);
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % fleetData.length;
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentSlide === 0
        ? fleetData.length - 1
        : currentSlide - 1;
    scrollToSlide(newIndex);
  };

  return (
    <div className="pb-24 md:pb-12 pt-[138px] bg-[#F8FAFC] min-h-screen">
      {/* Hero Card */}
      <div className="px-5 mb-8">
        <div className="flex flex-col md:flex-row md:min-h-[420px]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center flex-1 md:p-10 lg:p-14">
            <div className="mb-2">
              <span className="inline-block bg-primary text-white text-[10px] font-black tracking-[1.5px] uppercase px-3 py-1.5 rounded-[8px]">
                Nr. 1 in Norddeutschland
              </span>
            </div>
            <h1 className="font-black text-[#0F172A] uppercase tracking-[-1px] leading-[1.1] mb-4 text-[24px]">Der schnellste Weg zuR<br /><span className="text-primary">Transportlösung</span></h1>
            <p className="text-[14px] lg:text-[16px] text-[#64748B] leading-relaxed mb-6 max-w-[480px]">
              DVV RENT ist Ihr zuverlässiger Partner für
              Anhängervermietung in Hamburg, Schleswig-Holstein
              und Mecklenburg-Vorpommern. Hochwertige
              Böckmann-Anhänger von 750 kg bis 2.600 kg –
              flexibel für Umzug, Transport oder Gewerbe. Über
              16 Mietstationen in Norddeutschland.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "Führerschein B genügt",
                "Ab 29 €/Tag",
                "16+ Standorte",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-[#F1F5F9] px-3 py-2 rounded-[10px]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-bold text-[#0F172A] uppercase tracking-[0.5px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + CTA */}
          <div className="md:flex-1 md:flex md:flex-col bg-white rounded-[40px] shadow-md overflow-hidden border-4 border-white ">
            <div className="relative h-38 md:h-full md:min-h-[240px] md:rounded-none">
              <ImageWithFallback
                src={heroTrailerImg}
                alt="DVV RENT Anhänger mieten – Böckmann Qualitätsanhänger in Norddeutschland"
                className="w-full h-full object-cover"
              />
              {/* Desktop-only overlay button */}
              <div className="absolute bottom-7 right-7 left-7 hidden md:flex p-5 md:p-6">
                <button className="w-full bg-primary text-white font-black text-[13px] tracking-[1.3px] uppercase py-4 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  MIETSTATION FINDEN
                </button>
              </div>
              {/* Mobile-only overlay text */}
              <div className="absolute bottom-7 left-7 md:hidden">
                <h1 className="text-[24px] font-black leading-[24px] text-white uppercase">
                  Anhänger mieten –
                  <br />
                  einfach & günstig
                </h1>
                <p className="text-[10px] font-bold tracking-[1px] uppercase text-white/80 mt-1">
                  Ihre Transportlösung in Norddeutschland
                </p>
              </div>
            </div>
            <div className="md:hidden p-7 md:p-6">
              <button className="w-full bg-primary text-white font-black text-[13px] tracking-[1.3px] uppercase py-4 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                MIETSTATION FINDEN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-5 mb-8"></div>

      {/* WOW Banner */}
      <div className="px-5 mb-8">
        <div className="bg-dark rounded-[24px] p-6 text-center">
          <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/60 mb-2">
            Qualität die überzeugt
          </div>
          <div className="text-[16px] font-black tracking-[-0.5px] text-white uppercase leading-tight">
            DVV VERTRAUT AUF
            <br />
            QUALITÄTSANHÄNGER VON
            <br />
            <span className="text-primary">BÖCKMANN</span>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="px-5 mb-8">
        <div className="mb-6">
          <h2 className="text-[24px] font-black text-[#0F172A] tracking-[-0.6px] mb-1">
            Unsere Standorte
          </h2>
          <p className="text-[12px] font-bold text-[#64748B]">
            Wählen Sie Ihre Station für die Buchung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9]"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[16px] font-black text-[#0F172A] leading-tight mb-1">
                    {location.name}
                  </h3>
                  <p className="text-[10px] font-bold tracking-[0.5px] uppercase text-[#94A3B8]">
                    {location.address}
                  </p>
                </div>
                {location.tag && (
                  <div className="bg-[#F1F5F9] px-2 py-1 rounded-[12px]">
                    <span className="text-[9px] font-black tracking-[0.5px] uppercase text-[#0F172A]">
                      {location.tag}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mb-4">
                {location.trailers.map((trailer, i) => (
                  <div
                    key={i}
                    className="bg-[#F1F5F9] px-2.5 py-1.5 rounded-[8px]"
                  >
                    <span className="text-[9px] font-bold text-[#0F172A]">
                      {trailer}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-primary text-white text-[10px] font-black tracking-[1px] uppercase py-3 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(227,6,19,0.2)] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                  <Phone className="w-3 h-3" />
                  ANRUFEN
                </button>
                <button className="flex-1 bg-[#F1F5F9] text-[#0F172A] text-[10px] font-black tracking-[1px] uppercase py-3 rounded-[12px] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                  <MapPin className="w-3 h-3" />
                  ANFAHRT
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 text-[#94A3B8] text-[11px] font-black tracking-[1px] uppercase py-3">
          ALLE 16 STANDORTE ANZEIGEN →
        </button>
      </div>

      {/* Process Section */}
      <div className="px-5 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-[10px] font-black tracking-[2px] uppercase text-[#94A3B8] mb-1">
            IN 5 SCHRITTEN ZUM ANHÄNGER
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-5 left-10 right-10 h-px bg-[#E2E8F0] border-t border-dashed border-[#E5E7EB]" />
          <div className="flex justify-between px-1 relative">
            {[
              { icon: Truck, label: "Standort wählen" },
              { icon: Phone, label: "Station anrufen" },
              { icon: Calendar, label: "Termin reservieren" },
              {
                icon: CheckCircle,
                label: "Anhänger abholen",
                active: true,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 flex-1 max-w-[70px]"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.active
                      ? "bg-primary shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.3)]"
                      : "bg-white border border-[#E2E8F0] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  }`}
                >
                  <step.icon
                    className={`w-4 h-4 ${step.active ? "text-white" : "text-primary"}`}
                  />
                </div>
                <span
                  className={`text-[9px] font-bold text-center leading-tight uppercase ${
                    step.active
                      ? "text-primary"
                      : "text-[#64748B]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet Carousel */}
      <div className="mb-8">
        <div className="px-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[20px] font-black text-black tracking-[-0.5px] uppercase leading-tight">
                UNSERE
                <br />
                ANHÄNGER
              </h2>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="flex-1 text-right">
              <p className="text-[10px] font-bold tracking-[1px] uppercase text-[#9CA3AF] leading-tight">
                5 Modelle
                <br />
                verfügbar
              </p>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {fleetData.map((trailer, index) => (
            <div
              key={index}
              data-index={index}
              className={`min-w-[280px] snap-center transition-all duration-500 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="bg-white rounded-[24px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F3F4F6] h-full flex flex-col">
                <div className="relative h-40 bg-gradient-to-b from-[#F0F2F5] to-[#E2E8F0] flex-shrink-0">
                  <div className="absolute inset-[60%_0_0_0] bg-gradient-to-b from-transparent to-black/10" />
                  <ImageWithFallback
                    src={trailer.image}
                    alt={trailer.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-3 left-4 ${trailer.tagColor} px-3 py-1 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]`}
                  >
                    <span className="text-xs font-black uppercase text-white">
                      {trailer.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[20px] font-black text-black tracking-[-1px] uppercase leading-tight mb-1">
                    {trailer.name}
                  </h3>
                  <p className="text-[11px] font-bold tracking-[1.1px] uppercase text-[#9CA3AF] mb-2">
                    {trailer.license}
                  </p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[26px] font-black text-black tracking-[-1.3px] leading-none">
                      {trailer.price} €
                    </span>
                    <span className="text-[11px] font-bold text-[#6B7280]">
                      /Tag
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 flex-grow">
                    <div className="bg-[#F9FAFB] border border-[#F3F4F6] rounded-[12px] p-3">
                      <div className="text-[8px] font-bold tracking-[0.8px] uppercase text-[#9CA3AF] mb-2">
                        Technik
                      </div>
                      <div className="space-y-1 text-[11px] font-bold text-black">
                        <div className="flex justify-between">
                          <span>Gewicht:</span>
                          <span>{trailer.specs.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Nutzlast:</span>
                          <span>{trailer.specs.payload}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bremse:</span>
                          <span>{trailer.specs.brake}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#F9FAFB] border border-[#F3F4F6] rounded-[12px] p-3">
                      <div className="text-[8px] font-bold tracking-[0.8px] uppercase text-[#9CA3AF] mb-2">
                        Maße (Innen)
                      </div>
                      <div className="space-y-1 text-[11px] font-bold text-black">
                        <div className="flex justify-between">
                          <span>Länge:</span>
                          <span>
                            {trailer.dimensions.length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Breite:</span>
                          <span>
                            {trailer.dimensions.width}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Höhe:</span>
                          <span>
                            {trailer.dimensions.height}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white text-[13px] font-black tracking-[1.3px] uppercase py-4 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                    JETZT BUCHEN
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="px-5 mt-6">
          <div className="flex items-center justify-between">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-primary text-primary rounded-full shadow-[0px_4px_6px_-1px_rgba(227,6,19,0.2)] transition-all active:scale-95 hover:bg-primary hover:text-white flex items-center justify-center"
            >
              <ChevronLeft
                className="w-5 h-5"
                strokeWidth={3}
              />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {fleetData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border-2 border-primary text-primary rounded-full shadow-[0px_4px_6px_-1px_rgba(227,6,19,0.2)] transition-all active:scale-95 hover:bg-primary hover:text-white flex items-center justify-center"
            >
              <ChevronRight
                className="w-5 h-5"
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="px-5 mb-8">
        <div className="bg-white rounded-[32px] p-6 shadow-[0px_20px_25px_-5px_rgba(226,232,240,0.6)] border border-[#F8FAFC]">
          <div className="text-center mb-4">
            <p className="text-[10px] font-black tracking-[2px] uppercase text-[#94A3B8]">
              FRAGEN? SCHREIBEN SIE UNS
            </p>
          </div>
          <button className="w-full bg-[#25D366] text-white text-[18px] font-black leading-[28px] py-4 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(37,211,102,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-3">
            <MessageCircle className="w-5 h-5" />
            WHATSAPP CHAT STARTEN
          </button>
        </div>
      </div>

      {/* Phone CTA */}
      <div className="px-5">
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-[24px] p-6 text-center">
          <div className="text-[11px] font-black tracking-[1.5px] uppercase text-white/60 mb-3">
            Persönliche Beratung
          </div>
          <div className="text-[18px] font-black text-white mb-4">
            24/7 Fachliche Hotline
          </div>
          <button className="w-full bg-white text-[#0F172A] text-[13px] font-black tracking-[1.3px] uppercase py-4 rounded-[16px] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            JETZT ANRUFEN
          </button>
        </div>
      </div>
    </div>
  );
}