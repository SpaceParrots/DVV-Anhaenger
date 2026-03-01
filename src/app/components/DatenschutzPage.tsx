import { Shield, Lock, Eye, Database, Mail, ArrowLeft } from 'lucide-react';

interface DatenschutzPageProps {
  onBack?: () => void;
}

export function DatenschutzPage({ onBack }: DatenschutzPageProps) {
  return (
    <div className="pb-24 md:pb-12 pt-[138px] bg-slate-50 min-h-screen">
      <div className="px-5">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary text-xs font-black tracking-widest uppercase mb-6 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </button>
        )}

        {/* Header */}
        <div className="mb-8">
          <div className="bg-primary text-white text-center py-2 px-4 rounded-t-3xl text-[9px] font-bold tracking-widest uppercase">
            Ihre Daten sind bei uns sicher
          </div>
          <div className="bg-white rounded-b-3xl shadow-sm p-6">
            <div className="flex items-start gap-4 mb-3">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h1 className="text-[28px] font-black text-black leading-tight mb-2">
                  Datenschutzerklärung
                </h1>
                <p className="text-sm font-medium text-slate-500">
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie über die Verarbeitung Ihrer Daten bei DVV RENT GmbH.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-4">
              Stand: Februar 2026
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-4 mb-8">
          {/* Section 1 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">1. Verantwortliche Stelle</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-2">
                  <p className="font-black text-black">DVV RENT GmbH</p>
                  <p>Reesenbütteler Redder 10<br />22926 Ahrensburg<br />Deutschland</p>
                  <p>Telefon: +49 (0) 4102 999 888<br />E-Mail: datenschutz@dvv-rent.de</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">2. Erhebung und Speicherung personenbezogener Daten</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-1">Welche Daten werden erfasst?</p>
                    <p>Bei der Anmietung eines Anhängers erheben wir folgende Daten:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                      <li>Vor- und Nachname</li>
                      <li>Anschrift</li>
                      <li>Geburtsdatum</li>
                      <li>Telefonnummer und E-Mail-Adresse</li>
                      <li>Führerscheindaten (Klasse, Ausstellungsdatum, Nummer)</li>
                      <li>Personalausweis- oder Reisepassnummer</li>
                      <li>Zahlungsinformationen (bei Stripe-Zahlung)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">Zweck der Datenverarbeitung</p>
                    <p>Diese Daten sind erforderlich zur Durchführung des Mietvertrags, zur Identifikation des Mieters und zur Abwicklung der Zahlung.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">3. Weitergabe von Daten</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <p>Ihre Daten werden nur in folgenden Fällen an Dritte weitergegeben:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>An Zahlungsdienstleister (Stripe) zur Abwicklung von Online-Zahlungen</li>
                    <li>An Versicherungen im Schadensfall</li>
                    <li>An Behörden, wenn eine gesetzliche Verpflichtung besteht</li>
                  </ul>
                  <p className="font-bold text-black mt-3">Eine Weitergabe zu Werbezwecken erfolgt nicht.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">4. Speicherdauer</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-2">
                  <p>Ihre personenbezogenen Daten werden gelöscht, sobald sie für die Zwecke, für die sie erhoben wurden, nicht mehr erforderlich sind.</p>
                  <p className="font-bold text-black mt-2">Ausnahmen:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Aufbewahrungspflichten nach Handels- und Steuerrecht (bis zu 10 Jahre)</li>
                    <li>Laufende Vertragsverhältnisse oder offene Forderungen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">5. Ihre Rechte</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-2">
                  <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><span className="font-bold text-black">Auskunftsrecht:</span> Recht auf Auskunft über die von uns gespeicherten Daten</li>
                    <li><span className="font-bold text-black">Berichtigungsrecht:</span> Recht auf Korrektur unrichtiger Daten</li>
                    <li><span className="font-bold text-black">Löschungsrecht:</span> Recht auf Löschung Ihrer Daten</li>
                    <li><span className="font-bold text-black">Einschränkung:</span> Recht auf Einschränkung der Verarbeitung</li>
                    <li><span className="font-bold text-black">Widerspruch:</span> Recht auf Widerspruch gegen die Verarbeitung</li>
                    <li><span className="font-bold text-black">Datenübertragbarkeit:</span> Recht auf Datenübertragbarkeit</li>
                  </ul>
                  <p className="font-bold text-black mt-3">Kontakt:</p>
                  <p>Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: <span className="text-primary">datenschutz@dvv-rent.de</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">6. Cookies und Tracking</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-2">
                  <p>Diese Website verwendet keine Cookies oder Tracking-Technologien. Ihre Navigation auf unserer Website wird nicht verfolgt oder analysiert.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">7. Datensicherheit</h3>
                <div className="text-xs text-slate-500 leading-relaxed">
                  <p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-dark rounded-3xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-white" />
            <h2 className="text-lg font-black text-white uppercase">
              Fragen zum Datenschutz?
            </h2>
          </div>
          <p className="text-xs text-white/80 mb-4">
            Unser Datenschutzbeauftragter steht Ihnen gerne zur Verfügung.
          </p>
          <button className="w-full bg-white text-dark text-xs font-black tracking-wider uppercase py-4 rounded-2xl transition-all active:scale-[0.98]">
            E-MAIL SENDEN
          </button>
        </div>
      </div>
    </div>
  );
}