import { FileText, Shield, CreditCard, RotateCcw, Download, CheckCircle } from 'lucide-react';
import imgLegal from 'figma:asset/993f58cc39b66f98056778a559e7c8cdcc6949d4.png';

interface LegalesPageProps {
  onNavigate?: (page: string) => void;
}

export function LegalesPage({ onNavigate }: LegalesPageProps) {
  return (
    <div className="pb-24 md:pb-12 pt-[138px] bg-[#F8FAFC] min-h-screen">
      <div className="px-5">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-[#E30613] text-white text-center py-2 px-4 rounded-t-[24px] text-[9px] font-bold tracking-[1px] uppercase">
            Über 100.000 zufriedene Kunden vertrauen DVV Rent
          </div>
          <div className="bg-white rounded-b-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-6">
            <h1 className="text-[28px] font-black text-black leading-tight mb-2">
              Alles für Ihre reibungslose Miete.
            </h1>
            <p className="text-[14px] font-medium text-[#64748B]">
              Hier finden Sie alle rechtlichen Details und Voraussetzungen für Ihre Anmeldung bei DVV Rent – transparent und klar strukturiert.
            </p>
          </div>
        </div>

        {/* Checklist */}
        <div className="mb-8">
          <div className="bg-[#E30613] rounded-[24px] p-6 text-white">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <h2 className="text-[18px] font-black uppercase leading-tight">
                Checkliste für die Abholung
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-bold">Gültiger Personalausweis oder Reisepass</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-bold">Führerschein Klasse B oder BE</p>
                  <p className="text-[11px] text-white/80">(anhängerabhängig)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-bold">Kaution (Bar oder per Stripe reserviert)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-[24px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FEE6E6] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#E30613]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[18px] font-black text-black">1. Voraussetzungen</h3>
                  <span className="text-[9px] font-bold tracking-[1px] uppercase text-[#94A3B8]">Alter & Klasse B/BE</span>
                </div>
                <p className="text-[12px] text-[#64748B] leading-relaxed">
                  Mindestens 18 Jahre alt, gültiger Führerschein Klasse B (für Anhänger bis 750 kg) oder BE (für schwerere Anhänger). Führerschein muss seit mindestens 1 Jahr gültig sein.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FEE6E6] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-[#E30613]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[18px] font-black text-black">2. Kaution & Bezahlung</h3>
                  <span className="text-[9px] font-bold tracking-[1px] uppercase text-[#94A3B8]">Stripe / Barzahlung</span>
                </div>
                <p className="text-[12px] text-[#64748B] leading-relaxed">
                  Kaution: 150-300 € (je nach Anhängertyp). Bezahlung vor Ort in bar oder vorab per Stripe. Die Kaution wird nach ordnungsgemäßer Rückgabe vollständig erstattet.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FEE6E6] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#E30613]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[18px] font-black text-black">3. Versicherung & Haftung</h3>
                  <span className="text-[9px] font-bold tracking-[1px] uppercase text-[#94A3B8]">Haftpflicht / Kasko</span>
                </div>
                <p className="text-[12px] text-[#64748B] leading-relaxed">
                  Alle Anhänger sind haftpflichtversichert. Optionale Vollkasko-Versicherung verfügbar (10 €/Tag). Sie haften für Schäden während der Mietdauer gemäß AGB.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FEE6E6] rounded-[12px] flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-6 h-6 text-[#E30613]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[18px] font-black text-black">4. Rückgabe & Reinigung</h3>
                  <span className="text-[9px] font-bold tracking-[1px] uppercase text-[#94A3B8]">Zeiten & Bedingungen</span>
                </div>
                <p className="text-[12px] text-[#64748B] leading-relaxed">
                  Rückgabe bis 18 Uhr am Folgetag (bei 24h-Stationen auch später möglich). Anhänger besenrein zurückgeben. Verspätete Rückgabe: 15 € pro angefangene Stunde.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-dark rounded-[24px] p-6 text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Download className="w-6 h-6 text-white" />
            <h2 className="text-[18px] font-black text-white uppercase">
              Vollständige AGB als PDF laden
            </h2>
          </div>
          <button className="w-full bg-white text-dark text-[13px] font-black tracking-[1.3px] uppercase py-4 rounded-[16px] transition-all active:scale-[0.98]">
            AGB HERUNTERLADEN
          </button>
          <p className="text-[10px] text-white/60 mt-3">
            Stand: Oktober 2023. Alle Angaben ohne Gewähr. Mit Abschluss einer Buchung akzeptieren Sie unsere Allgemeinen Geschäftsbedingungen.
          </p>
        </div>

        {/* Imprint */}
        <div className="bg-white rounded-[24px] p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#F1F5F9]">
          <h2 className="text-[20px] font-black text-black mb-4">Impressum</h2>
          
          <div className="space-y-4 text-[12px] text-[#64748B]">
            <div>
              <p className="font-black text-black mb-1">DVV RENT GmbH</p>
              <p>Reesenbütteler Redder 10</p>
              <p>22926 Ahrensburg</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-bold text-black mb-1">Kontakt:</p>
              <p>Telefon: +49 (0) 4102 999 888</p>
              <p>E-Mail: info@dvv-rent.de</p>
              <p>Website: www.dvv-rent.de</p>
            </div>

            <div>
              <p className="font-bold text-black mb-1">Geschäftsführung:</p>
              <p>Tony Schönbeck</p>
            </div>

            <div>
              <p className="font-bold text-black mb-1">Registereintrag:</p>
              <p>Amtsgericht Lübeck</p>
              <p>HRB 12345 HL</p>
              <p>USt-IdNr.: DE123456789</p>
            </div>

            <div>
              <p className="font-bold text-black mb-1">Verantwortlich für den Inhalt:</p>
              <p>Tony Schönbeck (Anschrift wie oben)</p>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0]">
              <p className="text-[11px] font-semibold text-black mb-2">Datenschutz & Rechtliches:</p>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => onNavigate?.('datenschutz')}
                  className="text-[#E30613] font-bold hover:underline transition-all active:scale-95"
                >
                  Datenschutzerklärung
                </button>
                <span>•</span>
                <button 
                  onClick={() => onNavigate?.('agb')}
                  className="text-[#E30613] font-bold hover:underline transition-all active:scale-95"
                >
                  AGB
                </button>
                <span>•</span>
                <button 
                  onClick={() => onNavigate?.('widerrufsrecht')}
                  className="text-[#E30613] font-bold hover:underline transition-all active:scale-95"
                >
                  Widerrufsrecht
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}