import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Scale, FileText, Info, Gavel, AlertTriangle } from 'lucide-react';

interface LegalesPageProps {
  onNavigate: (page: string, state?: any) => void;
}

export function LegalesPage({ onNavigate }: LegalesPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      

      {/* Hero Section */}
      <div className="pt-24 pb-8 px-5 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[32px] font-black text-dark tracking-tighter uppercase mb-2 mt-12">Impressum & <span className="text-primary">Rechtliches</span></h1>
          <p className="text-sm font-medium text-slate-500">Alle gesetzlich vorgeschriebenen Informationen zu DVV RENT auf einen Blick.</p>
        </div>
      </div>

      {/* Content Navigation (Anchor Links) */}
      <div className="bg-white border-b border-slate-200 overflow-x-auto scrollbar-hide">
        <div className="flex px-5 py-3 gap-4 whitespace-nowrap max-w-4xl mx-auto">
          {['Impressum', 'Datenschutz', 'Haftung', 'AGB', 'Widerruf'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-black uppercase tracking-wider text-slate-400 hover:text-primary transition-colors px-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-5 max-w-4xl mx-auto space-y-16">
        
        {/* Impressum Section */}
        <section id="impressum" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-black uppercase text-dark tracking-tight">Impressum</h2>
          </div>
          
          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="font-bold text-dark uppercase text-[11px] tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Anbieter
                </p>
                <div className="text-sm text-slate-600 space-y-1 font-medium">
                  <p className="text-dark font-bold">DVV Dienstleistung, Vermietung und Verkauf</p>
                  <p>Inhaber: Tony Schönbeck</p>
                  <p>Volksdorfer Weg 233</p>
                  <p>22393 Hamburg</p>
                </div>
              </div>
              
              <div>
                <p className="font-bold text-dark uppercase text-[11px] tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Kontakt
                </p>
                <div className="text-sm text-slate-600 space-y-1 font-medium">
                  <p>Telefon: 0171 - 856 48 67</p>
                  <p>Fax: 032 - 121 13 72 77</p>
                  <p>E-Mail: mail-dvv@gmx.de</p>
                  <p>Internet: www.dvv-rent.de</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-bold text-dark uppercase text-[11px] tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Steuernummer
                </p>
                <div className="text-sm text-slate-600 font-medium">
                  <p>Umsatzsteuer-Identifikationsnummer / Steuernummer:</p>
                  <p className="text-dark font-bold mt-1">50/218/03210</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-dark uppercase text-[11px] tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Inhaltlich Verantwortlich
                </p>
                <div className="text-sm text-slate-600 font-medium">
                  <p>Gemäß § 18 Abs. 2 MStV:</p>
                  <p className="text-dark font-bold mt-1">Tony Schönbeck</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  Plattform der EU-Kommission zur Online-Streitbeilegung: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Haftungsausschluss Section */}
        <section id="haftung" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-black uppercase text-dark tracking-tight">Haftungsausschluss</h2>
          </div>
          
          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-200 space-y-8">
            <div className="space-y-3">
              <h3 className="text-base font-black text-dark uppercase">1. Haftung für Inhalte</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-base font-black text-dark uppercase">2. Haftung für Links</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-black text-dark uppercase">3. Urheberrecht</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </section>

        {/* Mietbedingungen (AGB) Section */}
        <section id="agb" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Gavel className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-black uppercase text-dark tracking-tight">Mietbedingungen (AGB)</h2>
          </div>
          
          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-200 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-black text-dark uppercase mb-2">1. Mindestalter & Führerschein</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Der Mieter muss mindestens 18 Jahre alt sein und einen gültigen Führerschein für die entsprechende Fahrzeugklasse besitzen. Der Führerschein ist bei Anmietung im Original vorzulegen.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-black text-dark uppercase mb-2">2. Kaution</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bei Mietbeginn ist eine Kaution in bar (Höhe modellabhängig) zu hinterlegen. Diese wird bei ordnungsgemäßer Rückgabe sofort erstattet.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-black text-dark uppercase mb-2">3. Haftung & Versicherung</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Der Mieter haftet für Schäden am Mietobjekt. Eine Reduzierung der Selbstbeteiligung durch Zusatzversicherung ist bei Transportern obligatorisch (1.000€ SB).
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-black text-dark uppercase mb-2">4. Rückgabe</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Die Rückgabe muss während der Geschäftszeiten erfolgen. Anhänger/Transporter müssen sauber und (bei Transportern) vollgetankt zurückgegeben werden.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="text-sm font-black text-dark uppercase mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    5. Technische Daten (O1/O2)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Details zum Fahrzeugschein (Klassen O1 / O2) finden Sie in unseren vollständigen AGB sowie unter 
                    <a href="https://xn--dvv-mietanhnger-blb.de/Technische-Daten/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1 font-bold">
                      dvv-mietanhänger.de/Technische-Daten/
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed">
                Diese Kurzübersicht ersetzt nicht den vollständigen Mietvertrag. Es gelten die bei der Anmietung vor Ort ausgehängten und unterzeichneten Bedingungen.
              </p>
            </div>
          </div>
        </section>

        {/* Datenschutz Section */}
        <section id="datenschutz" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-black uppercase text-dark tracking-tight">Datenschutz</h2>
          </div>
          
          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-200 space-y-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
          </div>
        </section>

        {/* Widerrufsbelehrung Section */}
        <section id="widerruf" className="scroll-mt-32 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-black uppercase text-dark tracking-tight">Widerrufsbelehrung</h2>
          </div>
          
          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-200 space-y-6">
            <div className="space-y-4">
              <h3 className="text-base font-black text-dark uppercase">Widerrufsrecht</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (DVV Dienstleistung, Vermietung und Verkauf, Volksdorfer Weg 233, 22393 Hamburg, mail-dvv@gmx.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Info */}
      <div className="bg-dark py-12 px-5 text-center">
        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">DVV RENT • Hamburg</p>
        <div className="w-8 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-white/60 text-[11px] leading-relaxed max-w-lg mx-auto">
          Stand: Februar 2026. Alle Angaben ohne Gewähr. Änderungen vorbehalten.
          <br />
          Bei Fragen kontaktieren Sie uns bitte direkt telefonisch.
        </p>
      </div>
    </div>
  );
}
