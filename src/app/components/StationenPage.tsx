import { MapPin, Phone, Navigation } from 'lucide-react';
import { allStationsData, Station } from '../data/stations';
import { ProcessSteps } from './ProcessSteps';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface StationCardProps {
  station: Station;
  isMatch: boolean;
  highlightedVehicle?: string;
  scrollRef?: (el: HTMLDivElement | null) => void;
}

function StationCard({ station, isMatch, highlightedVehicle, scrollRef }: StationCardProps) {
  return (
    <motion.div
      ref={scrollRef}
      initial={false}
      animate={isMatch ? {
        scale: [1, 1.02, 1],
        borderColor: ['#F1F5F9', '#ef4444', '#F1F5F9'],
        boxShadow: isMatch ? '0 10px 25px -5px rgba(239, 68, 68, 0.1)' : '0 1px 2px 0 rgba(0,0,0,0.05)'
      } : {}}
      transition={{ duration: 2, repeat: isMatch ? Infinity : 0, repeatDelay: 1 }}
      className={`bg-white rounded-3xl p-5 shadow-sm border h-full flex flex-col ${isMatch ? 'border-primary border-2' : 'border-slate-100'}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-black text-dark tracking-tight leading-tight mb-1">
            {station.name}
          </h3>
          <p className="text-[11px] font-semibold text-slate-500">
            {station.address}<br />{station.city}
          </p>
          {station.hours && (
            <p className="text-[9px] font-bold text-primary mt-1 uppercase tracking-wide">
              {station.hours}
            </p>
          )}
        </div>
        {station.tag && (
          <div className={`px-2 py-1 rounded-xl ${station.tagColor || 'bg-slate-100 text-dark'}`}>
            <span className="text-[9px] font-black tracking-wide uppercase whitespace-nowrap">
              {station.tag}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-3 flex-1">
        {station.items.map((item, i) => {
          const isItemMatch = highlightedVehicle && (
            item.toLowerCase().includes(highlightedVehicle.toLowerCase()) ||
            highlightedVehicle.toLowerCase().includes(item.toLowerCase())
          );
          return (
            <motion.div 
              key={i} 
              animate={isItemMatch ? {
                scale: [1, 1.1, 1],
                brightness: [1, 1.2, 1]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`${isItemMatch ? 'bg-primary text-white' : 'bg-slate-100 text-dark'} px-2.5 py-1.5 rounded-lg transition-colors h-fit`}
            >
              <span className="text-[9px] font-bold whitespace-nowrap">{item}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="flex gap-2.5 pt-4 border-t border-slate-50 mt-auto">
        <a
          href={`tel:${station.phoneClean}`}
          className="flex-1 bg-dark text-white text-[10px] font-black tracking-widest uppercase py-3 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Phone className="w-3 h-3" />
          ANRUFEN
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.address + ", " + station.city)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-primary text-white text-[10px] font-black tracking-widest uppercase py-3 rounded-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Navigation className="w-3 h-3" />
          ANFAHRT
        </a>
      </div>
    </motion.div>
  );
}

interface StationenPageProps {
  highlightedVehicle?: string;
}

export function StationenPage({ highlightedVehicle }: StationenPageProps) {
  const regions = ["Hamburg", "Schleswig-Holstein", "Mecklenburg-Vorpommern"];
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (highlightedVehicle) {
      const firstStationWithVehicle = allStationsData.find(s => 
        s.items.some(item => 
          item.toLowerCase().includes(highlightedVehicle.toLowerCase()) ||
          highlightedVehicle.toLowerCase().includes(item.toLowerCase())
        )
      );

      if (firstStationWithVehicle) {
        const element = scrollRefs.current[firstStationWithVehicle.name];
        if (element) {
          const isDesktop = window.innerWidth >= 768;
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, isDesktop ? 100 : 400); // Accelerated delay for desktop
        }
      }
    }
  }, [highlightedVehicle]);

  return (
    <div className="pb-12 pt-[158px] bg-slate-50 min-h-screen">
      <div className="px-5">
        <ProcessSteps />

        <div className="mb-8">
          <h1 className="text-3xl font-black text-dark tracking-tight leading-tight mb-2">
            Mietstationen
          </h1>
          <p className="text-sm font-medium text-slate-500">
            Über 16 Standorte in Ihrer Nähe
          </p>
          {highlightedVehicle && (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 animate-bounce">
                <span className="text-[10px] font-black text-primary uppercase tracking-wider">
                  Stationen mit: {highlightedVehicle}
                </span>
              </div>
            </div>
          )}
        </div>

        {regions.map((regionName, regionIndex) => {
          const regionStations = allStationsData.filter(s => s.region === regionName);
          if (regionStations.length === 0) return null;

          const transporterStations = regionStations.filter(s => s.tag === "TRANSPORTER");
          const regularStations = regionStations.filter(s => s.tag !== "TRANSPORTER");

          const isOdd = regionIndex % 2 !== 0;

          return (
            <div 
              key={regionIndex} 
              className={`-mx-5 px-5 py-10 ${isOdd ? 'bg-slate-100/50 border-y border-slate-200' : 'bg-transparent'}`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center shadow-lg shadow-dark/10">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-black tracking-[2.8px] uppercase text-dark leading-none mb-1">
                    {regionName}
                  </h2>
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>
              </div>

              <div className="space-y-12">
                {/* Transporter Section */}
                {transporterStations.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full w-fit">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-primary">Transporter-Stationen</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {transporterStations.map((station, sIdx) => (
                        <StationCard 
                          key={sIdx}
                          station={station}
                          isMatch={highlightedVehicle ? station.items.some(item => 
                            item.toLowerCase().includes(highlightedVehicle.toLowerCase()) ||
                            highlightedVehicle.toLowerCase().includes(item.toLowerCase())
                          ) : false}
                          highlightedVehicle={highlightedVehicle}
                          scrollRef={el => scrollRefs.current[station.name] = el}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Section */}
                {regularStations.length > 0 && (
                  <div className="space-y-6">
                    {transporterStations.length > 0 && (
                      <div className="flex items-center gap-3 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Standard-Anhänger-Stationen</h3>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {regularStations.map((station, sIdx) => (
                        <StationCard 
                          key={sIdx}
                          station={station}
                          isMatch={highlightedVehicle ? station.items.some(item => 
                            item.toLowerCase().includes(highlightedVehicle.toLowerCase()) ||
                            highlightedVehicle.toLowerCase().includes(item.toLowerCase())
                          ) : false}
                          highlightedVehicle={highlightedVehicle}
                          scrollRef={el => scrollRefs.current[station.name] = el}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
