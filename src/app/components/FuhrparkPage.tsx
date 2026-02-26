import { Calendar, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fullFleet = [
  {
    name: '750kg Plane',
    tag: 'BESTSELLER',
    tagColor: 'bg-black',
    license: 'Führerschein B • Ungebremst',
    price: '29,00',
    image: 'https://images.unsplash.com/photo-1758243954976-049822ad9d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0cmFpbGVyJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzcxODUwMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: { weight: '750 kg', payload: '579 kg', brake: 'Nein' },
    dimensions: { length: '2515 mm', width: '1300 mm', height: '1500 mm' },
    features: ['Hochplane abnehmbar', 'Für Umzüge ideal', 'Ohne Anhängerführerschein']
  },
  {
    name: '1350kg Plane',
    tag: 'TOP-EMPFEHLUNG',
    tagColor: 'bg-[#E30613]',
    license: 'Führerschein B • Gebremst',
    price: '39,00',
    image: 'https://images.unsplash.com/photo-1622743473611-4d2842d8d009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHRyYWlsZXIlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MTg1MDM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: { weight: '1350 kg', payload: '1089 kg', brake: 'Ja' },
    dimensions: { length: '2515 mm', width: '1300 mm', height: '1500 mm' },
    features: ['Auflaufbremse', 'Sehr beliebt', 'Führerschein B ausreichend']
  },
  {
    name: '2600kg Auto',
    tag: 'XXL-KAPAZITÄT',
    tagColor: 'bg-dark',
    license: 'Führerschein BE • Gebremst',
    price: '59,00',
    image: 'https://images.unsplash.com/photo-1698245900574-051997b35b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbGVyJTIwcmVudGFsfGVufDF8fHx8MTc3MTg1MDM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: { weight: '2600 kg', payload: '2100 kg', brake: 'Ja' },
    dimensions: { length: '4000 mm', width: '2000 mm', height: '1800 mm' },
    features: ['Fahrzeugtransport', 'Schwerlasten', 'BE-Führerschein erforderlich']
  },
  {
    name: '1350kg Koffer',
    tag: 'WETTERFEST',
    tagColor: 'bg-[#10B981]',
    license: 'Führerschein B • Gebremst',
    price: '45,00',
    image: 'https://images.unsplash.com/photo-1622743473611-4d2842d8d009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHRyYWlsZXIlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MTg1MDM3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    specs: { weight: '1350 kg', payload: '1050 kg', brake: 'Ja' },
    dimensions: { length: '2500 mm', width: '1300 mm', height: '1500 mm' },
    features: ['Wetterschutz', 'Abschließbar', 'Ideal für Möbel']
  },
  {
    name: '750kg Kippanhänger',
    tag: 'BAUSTOFFE',
    tagColor: 'bg-[#F59E0B]',
    license: 'Führerschein B • Ungebremst',
    price: '35,00',
    image: 'https://images.unsplash.com/photo-1758243954976-049822ad9d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB0cmFpbGVyJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzcxODUwMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: { weight: '750 kg', payload: '600 kg', brake: 'Nein' },
    dimensions: { length: '2510 mm', width: '1250 mm', height: '350 mm' },
    features: ['Kippfunktion', 'Für Schüttgut', 'Gartenarbeiten']
  },
];

export function FuhrparkPage() {
  return (
    <div className="pb-24 md:pb-12 pt-[138px] bg-[#F8FAFC] min-h-screen">
      <div className="px-5">
        <div className="mb-8">
          <h1 className="text-[30px] font-black text-[#0F172A] tracking-[-0.75px] leading-tight mb-2">
            Fuhrpark
          </h1>
          <p className="text-[14px] font-medium text-[#64748B]">
            5 Premium-Anhängermodelle von Böckmann
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fullFleet.map((trailer, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F3F4F6]"
            >
              <div className="relative h-48 bg-gradient-to-b from-[#F0F2F5] to-[#E2E8F0]">
                <div className="absolute inset-[60%_0_0_0] bg-gradient-to-b from-transparent to-black/10" />
                <ImageWithFallback
                  src={trailer.image}
                  alt={trailer.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-3 left-4 ${trailer.tagColor} px-3 py-1.5 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]`}>
                  <span className="text-[10px] font-black tracking-[0.5px] uppercase text-white">
                    {trailer.tag}
                  </span>
                </div>
                {/* Expert Tip Badge */}
                {index === 0 && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white border-l-4 border-[#E30613] rounded-[16px] p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-black tracking-[1px] uppercase text-[#E30613] mb-1">
                          Pro-Tipp vom Fachmann
                        </p>
                        <p className="text-[12px] font-semibold text-black leading-tight">
                          Prüfen Sie unbedingt Ihre <span className="font-black">Fahrzeugpapiere</span> (Punkt O.1), um die maximale Anhängelast zu ermitteln.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-[20px] font-black text-black tracking-[-1px] uppercase leading-tight mb-1">
                  {trailer.name}
                </h3>
                <p className="text-[11px] font-bold tracking-[1.1px] uppercase text-[#9CA3AF] mb-3">
                  {trailer.license}
                </p>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-[26px] font-black text-black tracking-[-1.3px] leading-none">
                    {trailer.price} €
                  </span>
                  <span className="text-[11px] font-bold text-[#6B7280]">/Tag</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
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

                <div className="bg-[#F8FAFC] rounded-[12px] p-3 mb-4">
                  <div className="text-[8px] font-bold tracking-[0.8px] uppercase text-[#9CA3AF] mb-2">
                    Besondere Merkmale
                  </div>
                  <div className="space-y-2">
                    {trailer.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" />
                        <span className="text-[11px] font-semibold text-[#64748B]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-[#E30613] text-white text-[13px] font-black tracking-[1.3px] uppercase py-4 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                  JETZT BUCHEN
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-dark rounded-[24px] p-6 text-center">
          <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/60 mb-3">
            Mehr Informationen gewünscht?
          </div>
          <div className="text-[16px] font-black text-white mb-4">
            Wir beraten Sie gerne persönlich
          </div>
          <button className="w-full bg-white text-dark text-[13px] font-black tracking-[1.3px] uppercase py-4 rounded-[16px] transition-all active:scale-[0.98]">
            KONTAKT AUFNEHMEN
          </button>
        </div>
      </div>
    </div>
  );
}