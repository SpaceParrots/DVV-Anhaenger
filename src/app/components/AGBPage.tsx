import { Helmet } from "react-helmet-async";
import { FileText, Clock, Shield, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

interface AGBPageProps {
  onBack?: () => void;
}

export function AGBPage({ onBack }: AGBPageProps) {
  return (
    <div className="pb-24 md:pb-12 pt-[138px] bg-slate-50 min-h-screen">
      <Helmet>
        <title>Allgemeine Geschäftsbedingungen | DVV RENT</title>
        <meta name="description" content="AGB der DVV RENT GmbH für die Vermietung von Anhängern und Transportern." />
        <meta property="og:title" content="Allgemeine Geschäftsbedingungen | DVV RENT" />
        <meta property="og:description" content="AGB der DVV RENT GmbH für die Vermietung von Anhängern und Transportern." />
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
            Transparente Mietbedingungen
          </div>
          <div className="bg-white rounded-b-3xl shadow-sm p-6">
            <div className="flex items-start gap-4 mb-3">
              <FileText className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h1 className="text-[28px] font-black text-black leading-tight mb-2">
                  Allgemeine Geschäftsbedingungen
                </h1>
                <p className="text-sm font-medium text-slate-500">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Vermietung von Anhängern durch die DVV RENT GmbH an Privat- und Geschäftskunden.
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
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">§1 Geltungsbereich</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-2">
                  <p>Diese AGB gelten für alle Mietverhältnisse zwischen der DVV RENT GmbH (im Folgenden "Vermieter") und dem Mieter bezüglich der Vermietung von Anhängern.</p>
                  <p>Abweichende Bedingungen des Mieters werden nicht anerkannt, es sei denn, der Vermieter stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">§2 Vertragsabschluss und Mietvoraussetzungen</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-1">2.1 Mietvoraussetzungen</p>
                    <p>Der Mieter muss folgende Voraussetzungen erfüllen:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                      <li>Mindestalter 18 Jahre</li>
                      <li>Gültiger Führerschein Klasse B oder BE (je nach Anhängertyp)</li>
                      <li>Führerschein seit mindestens 1 Jahr</li>
                      <li>Vorlage eines gültigen Personalausweises oder Reisepasses</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">2.2 Vertragsabschluss</p>
                    <p>Der Mietvertrag kommt durch telefonische, persönliche oder WhatsApp-Reservierung zustande. Bei Abholung ist der Mietvertrag schriftlich zu unterzeichnen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">§3 Mietdauer und Mietpreis</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-1">3.1 Mietdauer</p>
                    <p>Die Mindestmietdauer beträgt 24 Stunden. Die Miete beginnt mit der Übergabe des Anhängers und endet mit dessen ordnungsgemäßer Rückgabe.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">3.2 Mietpreis</p>
                    <p>Die aktuellen Mietpreise sind auf der Website und an den Stationen einsehbar. Der Mietpreis ist bei Abholung fällig und kann bar oder per Stripe beglichen werden.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">3.3 Kaution</p>
                    <p>Bei Vertragsabschluss ist eine Kaution zu hinterlegen:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>750 kg Anhänger: 150 €</li>
                      <li>1350 kg Anhänger: 200 €</li>
                      <li>2600 kg Anhänger: 300 €</li>
                    </ul>
                    <p className="mt-2">Die Kaution wird bei ordnungsgemäßer Rückgabe vollständig erstattet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">§4 Pflichten des Mieters</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-2">
                  <p className="font-bold text-black">Der Mieter verpflichtet sich:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Den Anhänger pfleglich und verkehrssicher zu behandeln</li>
                    <li>Die zulässige Zuladung nicht zu überschreiten</li>
                    <li>Vor Fahrtantritt die ordnungsgemäße Befestigung der Ladung zu prüfen</li>
                    <li>Den Anhänger nicht an Dritte weiterzuvermieten oder zu verleihen</li>
                    <li>Den Anhänger besenrein zurückzugeben</li>
                    <li>Schäden oder Unfälle unverzüglich zu melden</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">§5 Versicherung und Haftung</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-1">5.1 Haftpflichtversicherung</p>
                    <p>Alle Anhänger sind haftpflichtversichert. Die Deckungssumme beträgt 100 Mio. € für Personen- und Sachschäden.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">5.2 Kaskoversicherung (optional)</p>
                    <p>Der Mieter kann eine Vollkaskoversicherung für 10 €/Tag abschließen. Diese reduziert die Selbstbeteiligung im Schadensfall auf 0 €.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">5.3 Selbstbeteiligung</p>
                    <p>Ohne Kaskoversicherung beträgt die Selbstbeteiligung bei Schäden am Anhänger:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Bei Verschulden des Mieters: 500 €</li>
                      <li>Bei grober Fahrlässigkeit: volle Schadenshöhe</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">5.4 Haftungsausschluss</p>
                    <p>Der Vermieter haftet nicht für Schäden an der Ladung des Mieters. Der Mieter haftet für alle Schäden, die durch unsachgemäße Handhabung, Überladung oder Missachtung der Verkehrsregeln entstehen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">§6 Rückgabe</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-1">6.1 Rückgabetermin</p>
                    <p>Der Anhänger ist zum vereinbarten Zeitpunkt zurückzugeben. Die regulären Rückgabezeiten sind:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Montag - Freitag: 08:00 - 18:00 Uhr</li>
                      <li>Samstag: 09:00 - 14:00 Uhr</li>
                      <li>24h-Stationen: Rückgabe jederzeit möglich</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">6.2 Verspätete Rückgabe</p>
                    <p>Bei verspäteter Rückgabe wird eine Gebühr von 15 € pro angefangene Stunde berechnet. Ab 6 Stunden Verspätung wird ein weiterer Tagessatz fällig.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">6.3 Zustand bei Rückgabe</p>
                    <p>Der Anhänger ist besenrein zurückzugeben. Bei erheblicher Verschmutzung wird eine Reinigungsgebühr von 30 € berechnet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">§7 Kündigung und Stornierung</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-3">
                  <div>
                    <p className="font-bold text-black mb-1">7.1 Stornierung durch den Mieter</p>
                    <p>Kostenlose Stornierung bis 24 Stunden vor Mietbeginn. Bei kurzfristigerer Stornierung wird 50% des Mietpreises berechnet.</p>
                  </div>
                  <div>
                    <p className="font-bold text-black mb-1">7.2 Kündigung durch den Vermieter</p>
                    <p>Der Vermieter kann den Vertrag außerordentlich kündigen, wenn:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Der Mieter falsche Angaben gemacht hat</li>
                      <li>Der Anhänger für unzulässige Zwecke verwendet wird</li>
                      <li>Der Mieter die Mietvoraussetzungen nicht erfüllt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black mb-3">§8 Schlussbestimmungen</h3>
                <div className="text-xs text-slate-500 leading-relaxed space-y-2">
                  <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
                  <p className="font-bold text-black mt-2">Es gilt das Recht der Bundesrepublik Deutschland.</p>
                  <p>Gerichtsstand ist Ahrensburg, sofern der Mieter Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-dark rounded-3xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-6 h-6 text-white" />
            <h2 className="text-lg font-black text-white uppercase">
              AGB als PDF herunterladen
            </h2>
          </div>
          <p className="text-xs text-white/80 mb-4">
            Laden Sie die vollständigen AGB als PDF-Datei herunter.
          </p>
          <button className="w-full bg-white text-dark text-xs font-black tracking-wider uppercase py-4 rounded-2xl transition-all active:scale-[0.98]">
            PDF HERUNTERLADEN
          </button>
        </div>
      </div>
    </div>
  );
}