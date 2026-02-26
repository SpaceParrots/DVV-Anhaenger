import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export function KontaktPage() {
  return (
    <div className="pb-24 md:pb-12 pt-[138px] bg-[#F8FAFC] min-h-screen">
      <div className="px-5">
        <div className="mb-8">
          <h1 className="text-[30px] font-black text-[#0F172A] tracking-[-0.75px] leading-tight mb-2">
            Kontakt
          </h1>
          <p className="text-[14px] font-medium text-[#64748B]">
            Wir sind für Sie da – 24/7
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button className="bg-[#E30613] rounded-[20px] p-5 shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.3)] transition-all active:scale-[0.98]">
            <Phone className="w-8 h-8 text-white mb-3" />
            <div className="text-white text-left">
              <div className="text-[10px] font-bold tracking-[1px] uppercase mb-1">Hotline</div>
              <div className="text-[14px] font-black">Jetzt anrufen</div>
            </div>
          </button>

          <button className="bg-[#25D366] rounded-[20px] p-5 shadow-[0px_10px_15px_-3px_rgba(37,211,102,0.3)] transition-all active:scale-[0.98]">
            <MessageCircle className="w-8 h-8 text-white mb-3" />
            <div className="text-white text-left">
              <div className="text-[10px] font-bold tracking-[1px] uppercase mb-1">WhatsApp</div>
              <div className="text-[14px] font-black">Chat starten</div>
            </div>
          </button>
        </div>

        {/* Main Contact Info */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9] mb-6">
          <h2 className="text-[20px] font-black text-black mb-6">Hauptzentrale</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#FEE6E6] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#E30613]" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-1">Adresse</p>
                <p className="text-[14px] font-bold text-black leading-relaxed">
                  DVV RENT GmbH<br />
                  Reesenbütteler Redder 10<br />
                  22926 Ahrensburg
                </p>
              </div>
            </div>

            <div className="h-px bg-[#E2E8F0]" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#FEE6E6] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#E30613]" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-1">Telefon</p>
                <p className="text-[16px] font-black text-black">+49 (0) 4102 999 888</p>
                <p className="text-[12px] text-[#64748B] mt-1">24/7 erreichbar</p>
              </div>
            </div>

            <div className="h-px bg-[#E2E8F0]" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#FEE6E6] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#E30613]" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-1">E-Mail</p>
                <p className="text-[14px] font-bold text-black">info@dvv-rent.de</p>
                <p className="text-[12px] text-[#64748B] mt-1">Antwort innerhalb von 2 Stunden</p>
              </div>
            </div>

            <div className="h-px bg-[#E2E8F0]" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#E6F9F0] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-1">WhatsApp</p>
                <p className="text-[16px] font-black text-black">+49 (0) 172 345 6789</p>
                <p className="text-[12px] text-[#64748B] mt-1">Schnellste Antwortzeit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9] mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-[#E30613]" />
            <h2 className="text-[20px] font-black text-black">Öffnungszeiten</h2>
          </div>
          
          <div className="space-y-3 text-[14px]">
            <div className="flex justify-between">
              <span className="font-bold text-black">Montag - Freitag</span>
              <span className="font-semibold text-[#64748B]">8:00 - 18:00 Uhr</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-black">Samstag</span>
              <span className="font-semibold text-[#64748B]">9:00 - 16:00 Uhr</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-black">Sonntag</span>
              <span className="font-semibold text-[#64748B]">10:00 - 14:00 Uhr</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
            <div className="bg-[#E6F9F0] rounded-[12px] p-3">
              <p className="text-[11px] font-black tracking-[0.5px] uppercase text-[#25D366] mb-1">
                24/7 Service verfügbar
              </p>
              <p className="text-[12px] text-[#64748B]">
                An ausgewählten Standorten bieten wir Abholung und Rückgabe rund um die Uhr an.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9] mb-8">
          <h2 className="text-[20px] font-black text-black mb-6">Nachricht senden</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-2">
                Name *
              </label>
              <input
                type="text"
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] font-semibold text-black focus:outline-none focus:border-[#E30613] transition-colors"
                placeholder="Ihr vollständiger Name"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] font-semibold text-black focus:outline-none focus:border-[#E30613] transition-colors"
                placeholder="ihre.email@beispiel.de"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-2">
                Telefon
              </label>
              <input
                type="tel"
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] font-semibold text-black focus:outline-none focus:border-[#E30613] transition-colors"
                placeholder="+49 123 456789"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-2">
                Betreff
              </label>
              <select className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] font-semibold text-black focus:outline-none focus:border-[#E30613] transition-colors">
                <option>Buchungsanfrage</option>
                <option>Allgemeine Frage</option>
                <option>Technisches Problem</option>
                <option>Feedback</option>
                <option>Sonstiges</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold tracking-[0.5px] uppercase text-[#94A3B8] mb-2">
                Nachricht *
              </label>
              <textarea
                rows={5}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] px-4 py-3 text-[14px] font-semibold text-black focus:outline-none focus:border-[#E30613] transition-colors resize-none"
                placeholder="Ihre Nachricht an uns..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E30613] text-white text-[13px] font-black tracking-[1.3px] uppercase py-4 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.3)] transition-all active:scale-[0.98]"
            >
              NACHRICHT SENDEN
            </button>

            <p className="text-[11px] text-[#94A3B8] text-center">
              * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
            </p>
          </form>
        </div>

        {/* Social Media */}
        <div className="bg-dark rounded-[24px] p-6 text-center">
          <h2 className="text-[16px] font-black text-white uppercase mb-4">
            Folgen Sie uns
          </h2>
          <div className="flex justify-center gap-3">
            {['Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
              <button
                key={platform}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-[12px] flex items-center justify-center text-white font-bold text-[11px] transition-all active:scale-95 hover:bg-white/20"
              >
                {platform[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}