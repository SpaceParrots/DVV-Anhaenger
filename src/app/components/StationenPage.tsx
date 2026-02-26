import { MapPin, Phone, Navigation } from 'lucide-react';

const allStations = [
  {
    region: 'Hamburg Standorte',
    stations: [
      { name: 'Hamburg / Hamm', address: 'Shell Station • Carl-Petersen-Str. 76', tag: 'ZENTRALE', tagColor: 'bg-[#F1F5F9] text-[#0F172A]', trailers: ['750kg', '1350kg', '2700kg'] },
      { name: 'Hamburg / Billstedt', address: 'Shell Station • Schiffbeker Weg 90-92', tag: '24H GEÖFFNET', tagColor: 'bg-[#E6F9F0] text-[#25D366]', trailers: ['750kg', '2700kg'] },
      { name: 'Hamburg / Volksdorf', address: 'Shell Station • Eulenkrugstraße 72', trailers: ['750kg', '1350kg'] },
      { name: 'Hamburg / Sasel', address: 'Shell Station • Saseler Chaussee 100', trailers: ['750kg', '2700kg'] },
      { name: 'Hamburg / Wandsbek', address: 'Shell Station • Wandsbeker Chaussee 100', trailers: ['750kg', '1350kg', '2700kg'] },
    ]
  },
  {
    region: 'Schleswig-Holstein',
    stations: [
      { name: 'Ahrensburg', address: 'Reesenbütteler Redder 10', tag: 'HQ', tagColor: 'bg-[#FEE6E6] text-[#E30613]', trailers: ['750kg', '1350kg', '2700kg'] },
      { name: 'Norderstedt', address: 'Berliner Allee 34', trailers: ['750kg', '1350kg'] },
      { name: 'Elmshorn', address: 'Mühlenstraße 12', trailers: ['750kg', '2700kg'] },
      { name: 'Pinneberg', address: 'Bahnhofstraße 45', trailers: ['750kg', '1350kg', '2700kg'] },
      { name: 'Wedel', address: 'Rissener Straße 89', trailers: ['750kg'] },
    ]
  },
  {
    region: 'Mecklenburg-Vorpommern',
    stations: [
      { name: 'Lübeck-Süd', address: 'Nähe A1 Ost', trailers: ['750kg', '2700kg'] },
      { name: 'Bad Schwartau', address: 'Hamburger Straße 67', trailers: ['750kg', '1350kg'] },
      { name: 'Schwerin', address: 'Ludwigsluster Chaussee 23', trailers: ['750kg', '1350kg', '2700kg'] },
      { name: 'Wismar', address: 'Am Hafen 5', trailers: ['750kg', '1350kg'] },
      { name: 'Rostock', address: 'Warnowallee 12', trailers: ['750kg', '2700kg'] },
    ]
  }
];

export function StationenPage() {
  return (
    <div className="pb-24 md:pb-12 pt-[138px] bg-[#F8FAFC] min-h-screen">
      <div className="px-5">
        <div className="mb-8">
          <h1 className="text-[30px] font-black text-[#0F172A] tracking-[-0.75px] leading-tight mb-2">
            Mietstationen
          </h1>
          <p className="text-[14px] font-medium text-[#64748B]">
            Über 16 Standorte in Ihrer Nähe
          </p>
        </div>

        {allStations.map((region, regionIndex) => (
          <div key={regionIndex} className="mb-8">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E2E8F0]">
              <MapPin className="w-3 h-3 text-[#0F172A]" />
              <h2 className="text-[11px] font-black tracking-[2.2px] uppercase text-[#94A3B8]">
                {region.region}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {region.stations.map((station, stationIndex) => (
                <div
                  key={stationIndex}
                  className="bg-white rounded-[24px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[18px] font-black text-[#0F172A] tracking-[-0.45px] leading-tight mb-1">
                        {station.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#64748B]">
                        {station.address}
                      </p>
                    </div>
                    {station.tag && (
                      <div className={`px-2 py-1 rounded-[12px] ${station.tagColor}`}>
                        <span className="text-[9px] font-black tracking-[0.5px] uppercase whitespace-nowrap">
                          {station.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mb-3">
                    {station.trailers.map((trailer, i) => (
                      <div key={i} className="bg-[#F1F5F9] px-2.5 py-1.5 rounded-[8px]">
                        <span className="text-[9px] font-bold text-[#0F172A]">{trailer}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button className="flex-1 bg-dark text-white text-[10px] font-black tracking-[1px] uppercase py-3 rounded-[12px] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                      <Phone className="w-3 h-3" />
                      ANRUFEN
                    </button>
                    <button className="flex-1 bg-[#E30613] text-white text-[10px] font-black tracking-[1px] uppercase py-3 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.2)] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                      <Navigation className="w-3 h-3" />
                      ANFAHRT
                    </button>
                  </div>

                  <button className="w-full text-center text-[9px] font-black tracking-[0.9px] uppercase text-[#94A3B8] py-1 mt-2">
                    Details &gt;
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}