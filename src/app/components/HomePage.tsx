import {
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  CheckCircle,
  ArrowRight,
  Truck,
  Package,
  Clock,
  Gauge,
  Fuel,
  Info,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

// Trailer Images
import heroTrailerImg from "figma:asset/ad60b82d854c8c96ce9863db9d7c3d55ea2465c2.png";
import trailer750FlachImg from "figma:asset/DVVRENT_Trailer_750kg_Flachplane.png";
import trailer750HochImg from "figma:asset/DVV_RENT_Trailer_750kg_Hochplane.png";
import trailer1350Img from "figma:asset/DVV_RENT_Trailer_1350kg_Hochplane.png";
import trailer2700PImg from "figma:asset/DVV_RENT_Trailer_2700kg_Planenanhänger.png";
import trailer2700AImg from "figma:asset/DVV_RENT_Trailer_Autotransporter_2700kg.png";
import vanImg from 'figma:asset/232de78fbf2b913ea9aa8882ad1a4bf2f1c8ef9e.png';

import { allStationsData } from "../data/stations";
import { ProcessSteps } from "./ProcessSteps";

const fleetData = [
  {
    name: '750kg Hochplane',
    tag: 'BESTSELLER',
    tagColor: 'bg-primary',
    license: 'Führerschein B • Ungebremst',
    price: '30,00',
    image: trailer750HochImg,
    specs: { weight: '750 kg', payload: '579 kg', brake: 'Nein' },
    dimensions: { length: '2515 mm', width: '1300 mm', height: '1500 mm' },
    h4Price: '15,00'
  },
  {
    name: '750kg Flachplane',
    tag: 'KOMPAKT & WENDIG',
    tagColor: 'bg-black',
    license: 'Führerschein B • Ungebremst',
    price: '35,00',
    image: trailer750FlachImg,
    specs: { weight: '750 kg', payload: '615 kg', brake: 'Nein' },
    dimensions: { length: '2515 mm', width: '1300 mm', height: '400 mm' },
    h4Price: '18,00'
  },
  {
    name: '1350kg Hochplane',
    tag: 'TOP-EMPFEHLUNG',
    tagColor: 'bg-primary',
    license: 'Führerschein B • Gebremst',
    price: '35,00',
    image: trailer1350Img,
    specs: { weight: '1350 kg', payload: '1089 kg', brake: 'Ja' },
    dimensions: { length: '2515 mm', width: '1300 mm', height: '1500 mm' },
    h4Price: '18,00'
  },
  {
    name: '2700kg Plane',
    tag: 'PLATZWUNDER',
    tagColor: 'bg-emerald-600',
    license: 'Führerschein BE • Gebremst',
    price: '60,00',
    image: trailer2700PImg,
    specs: { weight: '2700 kg', payload: '2100 kg', brake: 'Ja' },
    dimensions: { length: '3000 mm', width: '1500 mm', height: '1800 mm' },
    h4Price: '35,00'
  },
  {
    name: '2700kg Auto',
    tag: 'XXL-KAPAZITÄT',
    tagColor: 'bg-dark',
    license: 'Führerschein BE • Gebremst',
    price: '60,00',
    image: trailer2700AImg,
    specs: { weight: '2700 kg', payload: '2050 kg', brake: 'Ja' },
    dimensions: { length: '4000 mm', width: '2000 mm', height: '100 mm' },
    h4Price: '35,00'
  },
];

const transporterData = [
  {
    id: 'l',
    name: 'Iveco Daily Gr. L',
    tag: 'DER ALLROUNDER',
    tagColor: 'bg-black',
    specs: { model: '3,5t', transmission: 'Automatik', extra: 'AHK / Rückf. Kamera' },
    dimensions: { length: '3,50 m' },
    price: '149,00',
    h4Price: '59,00',
    features: ['Automatikgetriebe', 'Rückfahrkamera', 'Anhängerkupplung', 'Vollkasko mit 1.000€ SB inkl.'],
    pricing: {
      moDo: [
        { label: '4 Std.', price: '59,-', km: '250' },
        { label: '8 Std.', price: '99,-', km: '500' },
        { label: '12 Std.', price: '119,-', km: '750' },
        { label: '24 Std.', price: '149,-', km: '1000' }
      ],
      frSo: [
        { label: '8 Std.', price: '119,-', km: '500' },
        { label: '12 Std.', price: '149,-', km: '750' },
        { label: '24 Std.', price: '179,-', km: '1000' }
      ]
    }
  },
  {
    id: 'xl',
    name: 'Iveco Daily Gr. XL',
    tag: 'MAXIMALE LAST',
    tagColor: 'bg-primary',
    specs: { model: '3,5t', transmission: 'Automatik', extra: 'AHK / Rückf. Kamera' },
    dimensions: { length: '4,60 m' },
    price: '179,00',
    h4Price: '79,00',
    features: ['Extra lange Ladefläche', 'Automatikgetriebe', 'Rückfahrkamera', 'Vollkasko mit 1.000€ SB inkl.'],
    pricing: {
      moDo: [
        { label: '4 Std.', price: '79,-', km: '250' },
        { label: '8 Std.', price: '119,-', km: '500' },
        { label: '12 Std.', price: '149,-', km: '750' },
        { label: '24 Std.', price: '179,-', km: '1000' }
      ],
      frSo: [
        { label: '8 Std.', price: '139,-', km: '500' },
        { label: '12 Std.', price: '169,-', km: '750' },
        { label: '24 Std.', price: '199,-', km: '1000' }
      ]
    }
  }
];

interface HomePageProps {
  onNavigate: (page: string, state?: any) => void;
}

function HeroTrailerAnimation({ src }: { src: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center p-8">
      <motion.div
        style={{ x, opacity, scale }}
        className="relative z-10 w-full max-w-[400px]"
      >
        
      </motion.div>
    </div>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
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
      const gap = 16; 
      const scrollPosition = index * (cardWidth + gap);
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      // Sofortiges Highlight setzen für besseres Feedback
      setCurrentSlide(index);
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
    <div className="pb-24 md:pb-12 pt-[158px] bg-slate-50 min-h-screen">
      {/* Hero Card */}
      <div className="px-5 mb-8">
        <div className="flex flex-col md:flex-row md:min-h-[420px]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center flex-1 md:p-10 lg:p-14">
            <div className="mb-2">
              <span className="inline-block bg-primary text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg">
                Nr. 1 in Norddeutschland
              </span>
            </div>
            <h1 className="font-black text-dark uppercase tracking-tighter leading-[1.1] mb-4 text-2xl">Der schnellste Weg zuR<br /><span className="text-primary">Transportlösung</span></h1>
            <p className="text-sm lg:text-base text-slate-500 leading-relaxed mb-6 max-w-[480px]">
              DVV RENT ist Ihr zuverlässiger Partner für
              Anhängervermietung in Hamburg, Schleswig-Holstein
              und Mecklenburg-Vorpommern. Hochwertige
              Böckmann-Anhänger von 750 kg bis 2.700 kg –
              flexibel für Umzug, Transport oder Gewerbe. Über
              16 Mietstationen in Norddeutschland.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "Ab 15 €/4h",
                "16+ Standorte",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-[10px]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-bold text-dark uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + CTA */}
          <div className="md:flex-1 md:flex md:flex-col bg-white rounded-[40px] shadow-md overflow-hidden border-4 border-white h-[280px] md:h-auto">
            <div className="relative h-full overflow-hidden">
              {/* Road Background */}
              <div className="absolute inset-0 opacity-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760887527978-675b4c3eecfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3BoYWx0JTIwaGlnaHdheSUyMHJvYWQlMjBwZXJzcGVjdGl2ZXxlbnwxfHx8fDE3NzIzMTYwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Road background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              {/* Driving Trailer Animation */}
              <HeroTrailerAnimation src={heroTrailerImg} />

              {/* Desktop-only overlay button */}
              <div className="absolute bottom-7 right-7 left-7 hidden md:flex p-5 md:p-6 z-10">
                <button 
                  onClick={() => onNavigate("stationen")}
                  className="w-full bg-primary text-white font-black text-xs tracking-wider uppercase py-4 rounded-xl shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  MIETSTATION FINDEN
                </button>
              </div>
            </div>
            <div className="md:hidden p-7 md:p-6">
              <button 
                onClick={() => onNavigate("stationen")}
                className="w-full bg-primary text-white font-black text-xs tracking-wider uppercase py-4 rounded-xl shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                MIETSTATION FINDEN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WOW Banner */}
      <div className="px-5 mb-8">
        <div className="bg-dark rounded-3xl p-6 text-center">
          <div className="text-[11px] font-bold tracking-widest uppercase text-white/60 mb-2">
            Qualität die überzeugt
          </div>
          <div className="text-base font-black tracking-tight text-white uppercase leading-tight">
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
          <h2 className="text-2xl font-black text-dark tracking-tight mb-1">
            Unsere Standorte
          </h2>
          <p className="text-xs font-bold text-slate-500">
            Wählen Sie Ihre Station für die Buchung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allStationsData.slice(0, 6).map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-black text-dark leading-tight mb-1">
                    {location.name}
                  </h3>
                  <p className="text-[10px] font-bold tracking-wide uppercase text-slate-400">
                    {location.address}
                  </p>
                </div>
                {location.tag && (
                  <div className={`${location.tagColor || 'bg-slate-100 text-dark'} px-2 py-1 rounded-xl`}>
                    <span className="text-[9px] font-black tracking-wide uppercase">
                      {location.tag}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {location.items.map((trailer, i) => (
                  <div
                    key={i}
                    className="bg-slate-100 px-2.5 py-1.5 rounded-lg"
                  >
                    <span className="text-[9px] font-bold text-dark whitespace-nowrap">
                      {trailer}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${location.phoneClean}`}
                  className="flex-1 bg-primary text-white text-[10px] font-black tracking-widest uppercase py-3 rounded-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Phone className="w-3 h-3" />
                  ANRUFEN
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address + ", " + location.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-100 text-dark text-[10px] font-black tracking-widest uppercase py-3 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3 h-3" />
                  ANFAHRT
                </a>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onNavigate("stationen")}
          className="w-full mt-4 text-slate-400 text-[11px] font-black tracking-widest uppercase py-3 transition-colors hover:text-primary"
        >
          ALLE 16 STANDORTE ANZEIGEN →
        </button>
      </div>

      {/* Process Section */}
      <ProcessSteps />

      {/* Fleet Carousel */}
      <div className="mb-8">
        <div className="px-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-black tracking-tight uppercase leading-tight">
                UNSERE
                <br />
                ANHÄNGER
              </h2>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="flex-1 text-right">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 leading-tight">
                {fleetData.length} Modelle
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
              className={`min-w-[85%] md:min-w-[280px] snap-center transition-all duration-500 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <motion.div
                initial={false}
                animate={currentSlide === index ? {
                  scale: [1, 1.02, 1],
                  borderColor: ['#F3F4F6', '#ef4444', '#F3F4F6'],
                  boxShadow: ['0 1px 2px 0 rgba(0,0,0,0.05)', '0 10px 25px -5px rgba(239, 68, 68, 0.1)', '0 1px 2px 0 rgba(0,0,0,0.05)']
                } : {}}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                onClick={() => onNavigate("stationen", { vehicle: trailer.name })}
                className={`bg-white rounded-3xl overflow-hidden border-2 h-full flex flex-col transition-colors cursor-pointer ${currentSlide === index ? 'border-primary' : 'border-gray-100'}`}
              >
                <div className="relative h-40 bg-gradient-to-b from-[#F0F2F5] to-slate-200 flex-shrink-0">
                  <div className="absolute inset-[60%_0_0_0] bg-gradient-to-b from-transparent to-black/10" />
                  <ImageWithFallback
                    src={trailer.image}
                    alt={trailer.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-3 left-4 ${trailer.tagColor} px-3 py-1 rounded-lg shadow-md`}
                  >
                    <span className="text-xs font-black uppercase text-white">
                      {trailer.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-black tracking-tighter uppercase leading-tight mb-1">
                    {trailer.name}
                  </h3>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                    {trailer.license}
                  </p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[26px] font-black text-black tracking-tighter leading-none">
                      {trailer.price} €
                    </span>
                    <span className="text-[11px] font-bold text-gray-500">
                      /Tag
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 flex-grow">
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <div className="text-[8px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                        Technik
                      </div>
                      <div className="space-y-1 text-[11px] font-bold text-black">
                        <div className="flex justify-between gap-1">
                          <span className="shrink-0">Gewicht:</span>
                          <span className="whitespace-nowrap">{trailer.specs.weight}</span>
                        </div>
                        <div className="flex justify-between gap-1">
                          <span className="shrink-0">Nutzlast:</span>
                          <span className="whitespace-nowrap">{trailer.specs.payload}</span>
                        </div>
                        <div className="flex justify-between gap-1">
                          <span className="shrink-0">Bremse:</span>
                          <span className="whitespace-nowrap">{trailer.specs.brake}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <div className="text-[8px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                        Maße (Innen)
                      </div>
                      <div className="space-y-1 text-[11px] font-bold text-black">
                        <div className="flex justify-between gap-1">
                          <span className="shrink-0">Länge:</span>
                          <span className="whitespace-nowrap">
                            {trailer.dimensions.length}
                          </span>
                        </div>
                        <div className="flex justify-between gap-1">
                          <span className="shrink-0">Breite:</span>
                          <span className="whitespace-nowrap">
                            {trailer.dimensions.width}
                          </span>
                        </div>
                        <div className="flex justify-between gap-1">
                          <span className="shrink-0">Höhe:</span>
                          <span className="whitespace-nowrap">
                            {trailer.dimensions.height}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Info Badge for Home */}
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[10px] font-black text-dark uppercase tracking-wide">4h Miete ab {trailer.h4Price}€</span>
                  </div>

                  <button 
                    onClick={() => onNavigate("stationen", { vehicle: trailer.name })}
                    className="w-full bg-primary text-white text-xs font-black tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    STATION FINDEN
                    <MapPin className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="px-5 mt-6">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-primary text-primary rounded-full shadow-primary/20 transition-all active:scale-95 hover:bg-primary hover:text-white flex items-center justify-center"
            >
              <ChevronLeft
                className="w-5 h-5"
                strokeWidth={3}
              />
            </button>

            <div className="flex gap-2">
              {fleetData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border-2 border-primary text-primary rounded-full shadow-primary/20 transition-all active:scale-95 hover:bg-primary hover:text-white flex items-center justify-center"
            >
              <ChevronRight
                className="w-5 h-5"
                strokeWidth={3}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Transporter Section */}
      <div className="px-5 mb-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-black tracking-tight uppercase leading-tight">
              NEU IM FUHRPARK:
              <br />
              <span className="text-primary">TRANSPORTER</span>
            </h2>
          </div>
          <div className="flex-1 text-right">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 leading-tight">
              Iveco Daily 3,5t
              <br />
              L & XL
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {transporterData.map((van) => (
            <motion.div 
              key={van.id} 
              whileHover={{ 
                scale: 1.01,
                borderColor: '#ef4444',
                boxShadow: '0 20px 25px -5px rgba(239, 68, 68, 0.1)'
              }}
              onClick={() => onNavigate("stationen", { vehicle: van.name })}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border-2 border-slate-100 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 md:h-64 bg-gradient-to-b from-[#F0F2F5] to-slate-200">
                <ImageWithFallback src={vanImg} alt={van.name} className="w-full h-full object-cover" />
                <div className={`absolute top-4 left-5 ${van.tagColor} px-4 py-1.5 rounded-[10px] shadow-lg`}>
                  <span className="text-[11px] font-black tracking-widest uppercase text-white">{van.tag}</span>
                </div>
                {/* L/XL Badge overlay */}
                <div className="absolute top-4 right-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-[10px] border border-slate-200">
                  <span className="text-sm font-black text-dark tracking-widest">GR. {van.id.toUpperCase()}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-dark tracking-tighter uppercase leading-tight mb-1">{van.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-slate-100 text-[9px] font-bold text-slate-500 px-2 py-1 rounded-md uppercase tracking-wide">{van.specs.transmission}</span>
                      <span className="bg-slate-100 text-[9px] font-bold text-slate-500 px-2 py-1 rounded-md uppercase tracking-wide">{van.specs.extra}</span>
                      <span className="bg-primary/10 text-[9px] font-bold text-primary px-2 py-1 rounded-md uppercase tracking-wide">Ladelänge {van.dimensions.length}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Ab</div>
                    <div className="text-2xl font-black text-dark tracking-tighter leading-none">{van.h4Price} €</div>
                    <div className="text-[10px] font-bold text-gray-500 mt-1">/ 4 Std.</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Mo - Do Pricing */}
                  <div className="bg-slate-50 rounded-[20px] p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[10px] font-black text-dark tracking-widest uppercase">Mo. - Do. Tarife</span>
                    </div>
                    <div className="space-y-2">
                      {van.pricing.moDo.map((p, i) => (
                        <div key={i} className="flex justify-between items-center text-xs border-b border-dotted border-slate-200 pb-1 last:border-0">
                          <span className="font-bold text-slate-500">{p.label}</span>
                          <div className="text-right">
                            <span className="font-black text-dark">{p.price} €</span>
                            <span className="text-[9px] font-bold text-slate-400 ml-2">({p.km} km frei)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fr - So Pricing */}
                  <div className="bg-slate-50 rounded-[20px] p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[10px] font-black text-dark tracking-widest uppercase">Fr. - So. Tarife</span>
                    </div>
                    <div className="space-y-2">
                      {van.pricing.frSo.map((p, i) => (
                        <div key={i} className="flex justify-between items-center text-xs border-b border-dotted border-slate-200 pb-1 last:border-0">
                          <span className="font-bold text-slate-500">{p.label}</span>
                          <div className="text-right">
                            <span className="font-black text-dark">{p.price} €</span>
                            <span className="text-[9px] font-bold text-slate-400 ml-2">({p.km} km frei)</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-3 text-center">
                    <div className="text-[9px] font-bold text-primary uppercase mb-1">Wochenendtarif</div>
                    <div className="text-sm font-black text-dark">3 Tage / 1500 km</div>
                    <div className="text-base font-black text-primary mt-1">{van.id === 'l' ? '399,- €' : '449,- €'}</div>
                  </div>
                  <div className="bg-dark border border-dark rounded-2xl p-3 text-center">
                    <div className="text-[9px] font-bold text-white/60 uppercase mb-1">Wochentarif</div>
                    <div className="text-sm font-black text-white">7 Tage / 2500 km</div>
                    <div className="text-base font-black text-primary mt-1">{van.id === 'l' ? '749,- €' : '799,- €'}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-between py-4 border-t border-slate-100 mb-6">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-slate-400" />
                    <span className="text-[11px] font-bold text-slate-500">Extra: 0,25€ / KM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-slate-400" />
                    <span className="text-[11px] font-bold text-slate-500">Kaution: 200,- €</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-slate-400" />
                    <span className="text-[11px] font-bold text-slate-500">Tank: Voll / Voll</span>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate("stationen", { vehicle: "Iveco Daily 3,5t" })}
                  className="w-full bg-primary text-white text-xs font-black tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  TRANSPORTER ANFRAGEN
                  <MapPin className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ad Blue & Extra KM Info */}
        <div className="mt-6 bg-slate-50 rounded-3xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-primary" />
            <h4 className="text-xs font-black text-dark uppercase tracking-wide">Wichtige Miet-info für transporter</h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase mb-2">Ad Blue Pauschale (nach gefahrenen KM):</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-black text-dark">0€</span>
                  <span className="text-[9px] font-bold text-slate-400">0 - 249 km</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-dark">5€</span>
                  <span className="text-[9px] font-bold text-slate-400">250 - 499 km</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-dark">10€</span>
                  <span className="text-[9px] font-bold text-slate-400">500 - 749 km</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-dark">15€</span>
                  <span className="text-[9px] font-bold text-slate-400">750 - 1000 km</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed italic border-t border-slate-200 pt-4">
              Alle Preise inkl. MwSt. Gültig ab 01.01.2026. Vorherige Tarife verlieren ihre Gültigkeit.
            </p>
          </div>
        </div>
      </div>

      {/* Phone CTA */}
      <div className="px-5">
        <div className="bg-gradient-to-r from-dark to-slate-800 rounded-3xl p-6 text-center">
          <div className="text-[11px] font-black tracking-widest uppercase text-white/60 mb-3">ANhänger & Transporter Mieten?</div>
          <div className="text-lg font-black text-white mb-4">24/7 MIETSERVICE</div>
          <button 
            onClick={() => onNavigate("stationen")}
            className="w-full bg-white text-dark text-xs font-black tracking-wider uppercase py-4 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            STATION FINDEN
          </button>
        </div>
      </div>
    </div>
  );
}
