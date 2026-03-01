import { MapPin, CheckCircle, Package, Info, Clock, CalendarDays, Euro, Gauge, Fuel, Truck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProcessSteps } from './ProcessSteps';

// Trailer Images
import trailer750FlachImg from "figma:asset/DVVRENT_Trailer_750kg_Flachplane.png";
import trailer750HochImg from "figma:asset/DVV_RENT_Trailer_750kg_Hochplane.png";
import trailer1350Img from "figma:asset/DVV_RENT_Trailer_1350kg_Hochplane.png";
import trailer2700PImg from "figma:asset/DVV_RENT_Trailer_2700kg_Planenanhänger.png";
import trailer2700AImg from "figma:asset/DVV_RENT_Trailer_Autotransporter_2700kg.png";
import vanImg from 'figma:asset/232de78fbf2b913ea9aa8882ad1a4bf2f1c8ef9e.png';

const fullFleet = [
  {
    name: '750kg Flachplane',
    tag: 'KOMPAKT & WENDIG',
    tagColor: 'bg-black',
    license: 'Führerschein B • Ungebremst',
    price: '35,00',
    image: trailer750FlachImg,
    specs: { weight: '750 kg', payload: '615 kg', brake: 'Nein' },
    dimensions: { length: '2515 mm', width: '1300 mm', height: '400 mm' },
    features: ['Flachplane abnehmbar', 'Ideal für Grünschnitt', 'Niedrige Ladekante'],
    accessories: ['Adapter inkl.', 'Diebstahlsicherung inkl.'],
    pricing: { h4: '18,00', d1: '35,00', we: '50,00', w1: '150,00', deposit: '50,00' }
  },
  {
    name: '750kg Hochplane',
    tag: 'BESTSELLER',
    tagColor: 'bg-primary',
    license: 'Führerschein B • Ungebremst',
    price: '30,00',
    image: trailer750HochImg,
    specs: { weight: '750 kg', payload: '579 kg', brake: 'Nein' },
    dimensions: { length: '2515 mm', width: '1300 mm', height: '1500 mm' },
    features: ['100% Wetterfest', 'Viel Ladevolumen', 'Ohne Anhängerführerschein'],
    accessories: ['Adapter inkl.', 'Diebstahlsicherung inkl.'],
    pricing: { h4: '15,00', d1: '30,00', we: '45,00', w1: '120,00', deposit: '50,00' }
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
    features: ['Auflaufbremse', 'Sehr laufruhig', 'BE-Führerschein oft nicht nötig'],
    accessories: ['Adapter inkl.', 'Diebstahlsicherung inkl.'],
    pricing: { h4: '18,00', d1: '35,00', we: '50,00', w1: '150,00', deposit: '50,00' }
  },
  {
    name: '2700kg Planenanhänger',
    tag: 'PLATZWUNDER',
    tagColor: 'bg-emerald-600',
    license: 'Führerschein BE • Gebremst',
    price: '60,00',
    image: trailer2700PImg,
    specs: { weight: '2700 kg', payload: '2100 kg', brake: 'Ja' },
    dimensions: { length: '3000 mm', width: '1500 mm', height: '1800 mm' },
    features: ['Extrem belastbar', 'Große Ladefläche', 'Gewerbe & Umzug'],
    accessories: ['Adapter inkl.', 'Diebstahlsicherung inkl.', 'Profi-Gurte inkl.'],
    pricing: { h4: '35,00', d1: '60,00', we: '100,00', w1: '250,00', deposit: '50,00' }
  },
  {
    name: '2700kg Autotransporter',
    tag: 'FAHRZEUGTRANSPORT',
    tagColor: 'bg-dark',
    license: 'Führerschein BE • Gebremst',
    price: '60,00',
    image: trailer2700AImg,
    specs: { weight: '2700 kg', payload: '2050 kg', brake: 'Ja' },
    dimensions: { length: '4000 mm', width: '2000 mm', height: '100 mm' },
    features: ['Inkl. Auffahrrampen', 'Inkl. Seilwinde', 'Für PKW-Transporte'],
    accessories: ['Radstopper inkl.', 'Profi-Gurte inkl.'],
    pricing: { h4: '35,00', d1: '60,00', we: '100,00', w1: '250,00', deposit: '50,00' }
  },
];

const transporterFleet = [
  {
    id: 'l',
    name: 'Iveco Daily Gr. L',
    tag: 'DER ALLROUNDER',
    tagColor: 'bg-black',
    license: 'Führerschein B • 3,5t',
    price: '149,00',
    h4Price: '59,00',
    specs: { model: '3,5t', transmission: 'Automatik', extra: 'AHK / Rückf. Kamera' },
    dimensions: { length: '3,50 m', width: '2,00 m', height: '2,10 m' },
    features: ['Automatikgetriebe', 'Rückfahrkamera', 'Anhängerkupplung', 'Vollkasko mit 1.000€ SB inkl.'],
    pricing: {
      moDo: [
        { label: '4 Std.', price: '59,00', km: '250' },
        { label: '8 Std.', price: '99,00', km: '500' },
        { label: '12 Std.', price: '119,00', km: '750' },
        { label: '24 Std.', price: '149,00', km: '1000' }
      ],
      frSo: [
        { label: '8 Std.', price: '119,00', km: '500' },
        { label: '12 Std.', price: '149,00', km: '750' },
        { label: '24 Std.', price: '179,00', km: '1000' }
      ],
      weekend: { price: '399,00', km: '1500' },
      week: { price: '749,00', km: '2500' },
      deposit: '200,00',
      insurance: '1.000,00'
    }
  },
  {
    id: 'xl',
    name: 'Iveco Daily Gr. XL',
    tag: 'MAXIMALE LAST',
    tagColor: 'bg-primary',
    license: 'Führerschein B • 3,5t',
    price: '179,00',
    h4Price: '79,00',
    specs: { model: '3,5t', transmission: 'Automatik', extra: 'AHK / Rückf. Kamera' },
    dimensions: { length: '4,60 m', width: '1,80 m', height: '2,10 m' },
    features: ['Extra lange Ladefläche', 'Automatikgetriebe', 'Rückfahrkamera', 'Vollkasko mit 1.000€ SB inkl.'],
    pricing: {
      moDo: [
        { label: '4 Std.', price: '79,00', km: '250' },
        { label: '8 Std.', price: '119,00', km: '500' },
        { label: '12 Std.', price: '149,00', km: '750' },
        { label: '24 Std.', price: '179,00', km: '1000' }
      ],
      frSo: [
        { label: '8 Std.', price: '139,00', km: '500' },
        { label: '12 Std.', price: '169,00', km: '750' },
        { label: '24 Std.', price: '199,00', km: '1000' }
      ],
      weekend: { price: '449,00', km: '1500' },
      week: { price: '799,00', km: '2500' },
      deposit: '200,00',
      insurance: '1.000,00'
    }
  }
];

function DetailedPricingTable() {
  return (
    <div className="mt-16 bg-white rounded-[32px] p-6 md:p-8 shadow-xl border border-slate-100">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-dark tracking-tight uppercase mb-2">
          Detaillierte Preisliste
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-4" />
        <p className="text-sm font-medium text-slate-500">
          Alle Tarife und Konditionen auf einen Blick
        </p>
      </div>

      <div className="space-y-12">
        {/* Row 1: 750kg Hochplane */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 pb-8 last:border-0">
          <div className="w-full md:w-1/3 flex justify-center">
            <ImageWithFallback src={trailer750HochImg} alt="750kg Hochplane" className="max-w-[240px] w-full h-auto object-contain drop-shadow-xl" />
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">4 Stunden Mindestmietdauer:</span>
              <span className="font-black text-dark">15,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Tagesmiete / 24 h:</span>
              <span className="font-black text-dark">30,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Wochenendmiete:</span>
              <span className="font-black text-dark">45,00 €</span>
            </div>
            <div className="flex justify-between py-1 text-[11px] text-slate-400 italic">
              <span>Fr. 18:00 Uhr - Mo. 8:00 Uhr</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Wochenmiete 7 Tage:</span>
              <span className="font-black text-dark">120,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Langzeitmiete:</span>
              <span className="font-black text-dark">n.V.</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Miet Kaution:</span>
              <span className="font-black text-dark">50,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Adapter optional:</span>
              <span className="font-black text-primary">incl.</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Zurrgurt optional 1 Stk.:</span>
              <span className="font-black text-dark">3,00 €</span>
            </div>
          </div>
        </div>

        {/* Row 2: 1350kg Hochplane */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 pb-8 last:border-0">
          <div className="w-full md:w-1/3 flex justify-center">
            <ImageWithFallback src={trailer1350Img} alt="1350kg Hochplane" className="max-w-[240px] w-full h-auto object-contain drop-shadow-xl" />
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">4 Stunden Mindestmietdauer:</span>
              <span className="font-black text-dark">18,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Tagesmiete / 24 h:</span>
              <span className="font-black text-dark">35,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Wochenendmiete:</span>
              <span className="font-black text-dark">50,00 €</span>
            </div>
            <div className="flex justify-between py-1 text-[11px] text-slate-400 italic">
              <span>Fr. 18:00 Uhr - Mo. 8:00 Uhr</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Wochenmiete 7 Tage:</span>
              <span className="font-black text-dark">150,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Langzeitmiete:</span>
              <span className="font-black text-dark">n.V.</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Miet Kaution:</span>
              <span className="font-black text-dark">50,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Adapter optional:</span>
              <span className="font-black text-primary">incl.</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Zurrgurt optional 1 Stk.:</span>
              <span className="font-black text-dark">3,00 €</span>
            </div>
          </div>
        </div>

        {/* Row 3: 2700kg Plane */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 pb-8 last:border-0">
          <div className="w-full md:w-1/3 flex justify-center">
            <ImageWithFallback src={trailer2700PImg} alt="2700kg Planenanhänger" className="max-w-[240px] w-full h-auto object-contain drop-shadow-xl" />
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">4 Stunden Mindestmietdauer:</span>
              <span className="font-black text-dark">35,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Tagesmiete / 24 h:</span>
              <span className="font-black text-dark">60,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Wochenendmiete:</span>
              <span className="font-black text-dark">100,00 €</span>
            </div>
            <div className="flex justify-between py-1 text-[11px] text-slate-400 italic">
              <span>Fr. 18:00 Uhr - Mo. 8:00 Uhr</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Wochenmiete 7 Tage:</span>
              <span className="font-black text-dark">250,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Langzeitmiete:</span>
              <span className="font-black text-dark">n.V.</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Miet Kaution:</span>
              <span className="font-black text-dark">50,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Adapter optional:</span>
              <span className="font-black text-primary">incl.</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Zurrgurt optional 1 Stk.:</span>
              <span className="font-black text-dark">3,00 €</span>
            </div>
          </div>
        </div>

        {/* Row 4: 2700kg Auto */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 pb-8 last:border-0">
          <div className="w-full md:w-1/3 flex justify-center">
            <ImageWithFallback src={trailer2700AImg} alt="2700kg Autotransporter" className="max-w-[240px] w-full h-auto object-contain drop-shadow-xl" />
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">4 Stunden Mindestmietdauer:</span>
              <span className="font-black text-dark">35,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Tagesmiete / 24 h:</span>
              <span className="font-black text-dark">60,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Wochenendmiete:</span>
              <span className="font-black text-dark">100,00 €</span>
            </div>
            <div className="flex justify-between py-1 text-[11px] text-slate-400 italic">
              <span>Fr. 18:00 Uhr - Mo. 8:00 Uhr</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Wochenmiete 7 Tage:</span>
              <span className="font-black text-dark">250,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Langzeitmiete:</span>
              <span className="font-black text-dark">n.V.</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Miet Kaution:</span>
              <span className="font-black text-dark">50,00 €</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Adapter optional:</span>
              <span className="font-black text-primary">incl.</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
              <span className="font-bold text-slate-600">Zurrgurt optional 1 Stk.:</span>
              <span className="font-black text-dark">3,00 €</span>
            </div>
          </div>
        </div>

        {/* Transporter Rows */}
        {transporterFleet.map((van) => (
          <div key={van.id} className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 pb-8 last:border-0">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <ImageWithFallback src={vanImg} alt={van.name} className="max-w-[280px] w-full h-auto object-contain drop-shadow-xl" />
              <div className="mt-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Gr. {van.id.toUpperCase()}
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Mindestmietdauer 4 Std.:</span>
                <span className="font-black text-dark">{van.pricing.moDo[0].price} €</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Tagesmiete / 24 h:</span>
                <span className="font-black text-dark">{van.price} €</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Wochenendmiete (3 Tage):</span>
                <span className="font-black text-dark">{van.pricing.weekend.price} €</span>
              </div>
              <div className="flex justify-between py-1 text-[11px] text-slate-400 italic">
                <span>Fr. 12:00 Uhr - Mo. 12:00 Uhr</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Wochenmiete 7 Tage:</span>
                <span className="font-black text-dark">{van.pricing.week.price} €</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Miet Kaution:</span>
                <span className="font-black text-dark">{van.pricing.deposit} €</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Selbstbeteiligung (SB):</span>
                <span className="font-black text-primary">1.000,00 €</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Frei-KM (Tagesmiete):</span>
                <span className="font-black text-primary">1000 km</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Zusatz-KM:</span>
                <span className="font-black text-dark">0,25 €</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-slate-200 py-1">
                <span className="font-bold text-slate-600">Tankregelung:</span>
                <span className="font-black text-dark">Voll / Voll</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FuhrparkPageProps {
  onNavigate: (page: string, state?: any) => void;
}

export function FuhrparkPage({ onNavigate }: FuhrparkPageProps) {
  return (
    <div className="pb-24 md:pb-12 pt-[158px] bg-slate-50 min-h-screen">
      <div className="px-5">
        <ProcessSteps />

        <div className="mb-8">
          <h1 className="text-3xl font-black text-dark tracking-tight leading-tight mb-2">
            Fuhrpark
          </h1>
          <p className="text-sm font-medium text-slate-500">
            Premium-Anhänger & Transporter für jeden Bedarf
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-black text-dark tracking-tight uppercase mb-4 flex items-center gap-3">
            <Truck className="w-5 h-5 text-primary" />
            Anhänger-Flotte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fullFleet.map((trailer, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-48 bg-gradient-to-b from-[#F0F2F5] to-slate-200">
                  <div className="absolute inset-[60%_0_0_0] bg-gradient-to-b from-transparent to-black/10" />
                  <ImageWithFallback
                    src={trailer.image}
                    alt={trailer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-3 left-4 ${trailer.tagColor} px-3 py-1.5 rounded-lg shadow-md`}>
                    <span className="text-[10px] font-black tracking-wide uppercase text-white">
                      {trailer.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-black text-black tracking-tighter uppercase leading-tight mb-1">
                    {trailer.name}
                  </h3>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-3">
                    {trailer.license}
                  </p>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[26px] font-black text-black tracking-tighter leading-none">
                      {trailer.price} €
                    </span>
                    <span className="text-[11px] font-bold text-gray-500">/Tag</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <div className="text-[8px] font-bold tracking-wider uppercase text-gray-400 mb-2">
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

                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <div className="text-[8px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                        Maße (Innen)
                      </div>
                      <div className="space-y-1 text-[11px] font-bold text-black">
                        <div className="flex justify-between">
                          <span>Länge:</span>
                          <span>{trailer.dimensions.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Breite:</span>
                          <span>{trailer.dimensions.width}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Höhe:</span>
                          <span>{trailer.dimensions.height}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Info Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-black text-dark">4h ab {trailer.pricing.h4}€</span>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2">
                      <CalendarDays className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-black text-dark">WE ab {trailer.pricing.we}€</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 mb-4">
                    <div className="text-[8px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                      Besondere Merkmale
                    </div>
                    <div className="space-y-2">
                      {trailer.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-whatsapp flex-shrink-0" />
                          <span className="text-[11px] font-semibold text-slate-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accessories Section */}
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 mb-4">
                    <div className="flex items-center gap-2 text-[8px] font-bold tracking-wider uppercase text-primary mb-2">
                      <Package className="w-3 h-3" />
                      Inklusive Zubehör
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {trailer.accessories.map((acc, i) => (
                        <span key={i} className="bg-white border border-primary/20 text-[9px] font-bold text-dark px-2 py-1 rounded-md">
                          {acc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => onNavigate("stationen", { vehicle: trailer.name })}
                    className="w-full bg-primary text-white text-xs font-black tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    STATION FINDEN
                    <MapPin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transporter Section */}
        <div className="mb-8">
          <h2 className="text-lg font-black text-dark tracking-tight uppercase mb-4 flex items-center gap-3">
            <Truck className="w-5 h-5 text-primary" />
            Transporter-Flotte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transporterFleet.map((van) => (
              <div
                key={van.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-48 bg-gradient-to-b from-[#F0F2F5] to-slate-200">
                  <ImageWithFallback src={vanImg} alt={van.name} className="w-full h-full object-cover" />
                  <div className={`absolute top-3 left-4 ${van.tagColor} px-3 py-1.5 rounded-lg shadow-lg`}>
                    <span className="text-[10px] font-black tracking-wide uppercase text-white">{van.tag}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-black text-black tracking-tighter uppercase leading-tight mb-1">
                    {van.name}
                  </h3>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-gray-400 mb-3">
                    {van.license}
                  </p>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[26px] font-black text-black tracking-tighter leading-none">
                      {van.price} €
                    </span>
                    <span className="text-[11px] font-bold text-gray-500">/Tag</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <div className="text-[8px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                        Technik
                      </div>
                      <div className="space-y-1 text-[11px] font-bold text-black">
                        <div className="flex justify-between">
                          <span>Modell:</span>
                          <span>{van.specs.model}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Getriebe:</span>
                          <span>{van.specs.transmission}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Extra:</span>
                          <span className="text-[9px]">AHK/Kamera</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <div className="text-[8px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                        Laderaum
                      </div>
                      <div className="space-y-1 text-[11px] font-bold text-black">
                        <div className="flex justify-between">
                          <span>Länge:</span>
                          <span>{van.dimensions.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Breite:</span>
                          <span>{van.dimensions.width}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Höhe:</span>
                          <span>{van.dimensions.height}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-black text-dark">4h ab {van.h4Price}€</span>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-2.5 flex items-center gap-2">
                      <Gauge className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-black text-dark">Inkl. {van.pricing.moDo[3].km}km</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 mb-4">
                    <div className="text-[8px] font-bold tracking-wider uppercase text-gray-400 mb-2">
                      Inklusive Highlights
                    </div>
                    <div className="space-y-2">
                      {van.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="text-[11px] font-semibold text-slate-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 items-center justify-between p-3 bg-dark rounded-2xl mb-4">
                    <div className="flex items-center gap-2">
                      <Fuel className="w-3.5 h-3.5 text-white/60" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Tank: Voll / Voll</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-white/60" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wide">Kaution: 200€</span>
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
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Pricing Section */}
        <DetailedPricingTable />

        {/* Ad Blue Info */}
        <div className="mt-8 bg-slate-50 rounded-3xl p-6 border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-primary" />
            <h4 className="text-xs font-black text-dark uppercase tracking-wide">Transporter: Ad Blue & Zusatz-KM</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase mb-2">Ad Blue Pauschale:</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs"><span className="text-slate-600">0 - 249 km:</span><span className="font-black text-dark">0,00 €</span></div>
                <div className="flex justify-between text-xs"><span className="text-slate-600">250 - 499 km:</span><span className="font-black text-dark">5,00 €</span></div>
                <div className="flex justify-between text-xs"><span className="text-slate-600">500 - 749 km:</span><span className="font-black text-dark">10,00 €</span></div>
                <div className="flex justify-between text-xs"><span className="text-slate-600">750 - 1000 km:</span><span className="font-black text-dark">15,00 €</span></div>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase mb-2">Kilometer-Abrechnung:</p>
              <p className="text-xs text-dark font-medium leading-relaxed">
                Zusätzlich gefahrene Kilometer über die Inklusiv-Leistung hinaus werden mit <span className="font-black text-primary">0,25 €</span> pro Kilometer berechnet.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-dark rounded-3xl p-6 text-center">
          <div className="text-[11px] font-bold tracking-widest uppercase text-white/60 mb-3">Noch mehr Informationen?</div>
          <div className="text-base font-black text-white mb-4">Jetzt bei Deiner Station anrufen</div>
          <button 
            onClick={() => onNavigate("stationen")}
            className="w-full bg-white text-dark text-xs font-black tracking-wider uppercase py-4 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-primary" />
            STATION FINDEN
          </button>
        </div>
      </div>
    </div>
  );
}
