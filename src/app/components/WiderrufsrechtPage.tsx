import { Helmet } from "react-helmet-async";
import { RotateCcw, Clock, Mail, FileText, AlertCircle, ArrowLeft } from 'lucide-react';

interface WiderrufsrechtPageProps {
  onBack?: () => void;
}

export function WiderrufsrechtPage({ onBack }: WiderrufsrechtPageProps) {
  return (
    <div className="pb-24 md:pb-12 pt-[138px] bg-slate-50 min-h-screen">
      <Helmet>
        <title>Widerrufsrecht | DVV RENT</title>
        <meta name="description" content="Widerrufsbelehrung und Muster-Widerrufsformular der DVV RENT GmbH." />
        <meta property="og:title" content="Widerrufsrecht | DVV RENT" />
        <meta property="og:description" content="Widerrufsbelehrung und Muster-Widerrufsformular der DVV RENT GmbH." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
      </Helmet>
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
            Ihre gesetzlichen Rechte
          </div>
          <div className="bg-white rounded-b-3xl shadow-sm p-6">
            <div className="flex items-start gap-4 mb-3">
              <RotateCcw className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h1 className="text-[28px] font-black text-black leading-tight mb-2">
                  Widerrufsrecht
                </h1>
                <p className="text-sm font-medium text-slate-500">
                  Als Verbraucher haben Sie ein gesetzliches Widerrufsrecht bei Fernabsatzverträgen. Hier finden Sie alle wichtigen Informationen zu Ihrem Widerrufsrecht.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-4">
              Stand: Februar 2026
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-100 border-2 border-amber-500 rounded-3xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-black text-amber-800 mb-2">Wichtiger Hinweis</h3>
              <p className="text-xs text-amber-900 leading-relaxed">
                Das Widerrufsrecht gilt nur für Verbraucher (Privatkunden). Unternehmer und Gewerbetreibende sind vom Widerrufsrecht ausgeschlossen.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-4 mb-8">
          {/* Section 1 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">Widerrufsbelehrung</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-2">Widerrufsrecht</p>
                    <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-2">Widerrufsfrist</p>
                    <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses (Reservierung).</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-2">Ausübung des Widerrufsrechts</p>
                    <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:</p>
                    <div className="bg-slate-100 rounded-xl p-4 mt-2">
                      <p className="font-black text-black mb-1">DVV RENT GmbH</p>
                      <p>Reesenbütteler Redder 10<br />22926 Ahrensburg</p>
                      <p className="mt-2">Telefon: +49 (0) 4102 999 888<br />E-Mail: widerruf@dvv-rent.de</p>
                    </div>
                    <p className="mt-3">mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">Widerrufsfolgen</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-2">Bei fristgerechtem Widerruf</p>
                    <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-2">Rückzahlungsmodalitäten</p>
                    <p>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart.</p>
                    <p className="mt-2">In keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">Vorzeitiges Erlöschen des Widerrufsrechts</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-2">Bei Dienstleistungsbeginn vor Ablauf der Widerrufsfrist</p>
                    <p>Haben Sie verlangt, dass die Dienstleistung (Anhängervermietung) während der Widerrufsfrist beginnen soll, so erlischt Ihr Widerrufsrecht mit vollständiger Vertragserfüllung.</p>
                  </div>
                  <div className="bg-amber-100 border border-yellow-300 rounded-xl p-4">
                    <p className="font-bold text-amber-800 mb-2">Beispiel:</p>
                    <p className="text-amber-900">Wenn Sie einen Anhänger für 24 Stunden mieten und diesen am selben Tag abholen, erlischt Ihr Widerrufsrecht mit der Übergabe des Anhängers, sofern Sie der vorzeitigen Vertragserfüllung zugestimmt haben.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">Muster-Widerrufsformular</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <p>Wenn Sie den Vertrag widerrufen wollen, können Sie das folgende Formular verwenden (nicht verpflichtend):</p>
                  
                  <div className="bg-slate-100 border-2 border-slate-200 rounded-xl p-4 space-y-3">
                    <p className="font-bold text-black">An:</p>
                    <p className="text-black">DVV RENT GmbH<br />
                    Reesenbütteler Redder 10<br />
                    22926 Ahrensburg<br />
                    E-Mail: widerruf@dvv-rent.de</p>
                    
                    <div className="border-t border-slate-300 pt-3 mt-3">
                      <p className="text-black">Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:</p>
                      <p className="text-black mt-2">_________________________________</p>
                      <p className="text-slate-400 text-[10px]">(z.B. "Vermietung Anhänger 750kg")</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-black">Bestellt am (*)/erhalten am (*):</p>
                      <p className="text-black">_________________________________</p>
                      
                      <p className="text-black mt-2">Name des/der Verbraucher(s):</p>
                      <p className="text-black">_________________________________</p>
                      
                      <p className="text-black mt-2">Anschrift des/der Verbraucher(s):</p>
                      <p className="text-black">_________________________________</p>
                      
                      <p className="text-black mt-2">Unterschrift des/der Verbraucher(s):</p>
                      <p className="text-black">_________________________________</p>
                      
                      <p className="text-black mt-2">Datum:</p>
                      <p className="text-black">_________________________________</p>
                    </div>
                    
                    <p className="text-[10px] text-slate-400 italic mt-3">(*) Unzutreffendes streichen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">Stornierung vs. Widerruf</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-2">Unterschied beachten</p>
                    <p>Das Widerrufsrecht ist nicht zu verwechseln mit dem Stornierungsrecht gemäß unseren AGB:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                      <li><span className="font-bold text-black">Widerrufsrecht:</span> Gesetzliches Recht bei Fernabsatzverträgen (14 Tage)</li>
                      <li><span className="font-bold text-black">Stornierung:</span> Vertragliche Regelung (kostenlos bis 24h vor Mietbeginn)</li>
                    </ul>
                  </div>
                  <div className="bg-sky-100 border border-sky-300 rounded-xl p-4">
                    <p className="font-bold text-sky-900 mb-2">Tipp:</p>
                    <p className="text-sky-900">In der Praxis ist bei kurzfristigen Mietänderungen meist die Stornierung gemäß AGB der einfachere Weg. Das Widerrufsrecht gilt vor allem bei längerfristigen Buchungen.</p>
                  </div>
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
              Fragen zum Widerrufsrecht?
            </h2>
          </div>
          <p className="text-xs text-white/80 mb-4">
            Unser Kundenservice hilft Ihnen gerne weiter.
          </p>
          <button className="w-full bg-white text-dark text-xs font-black tracking-wider uppercase py-4 rounded-2xl transition-all active:scale-[0.98] mb-3">
            E-MAIL SENDEN
          </button>
          <button className="w-full bg-whatsapp text-white text-xs font-black tracking-wider uppercase py-4 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            WHATSAPP KONTAKT
          </button>
        </div>
      </div>
    </div>
  );
}