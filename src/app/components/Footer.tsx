import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Scale, FileText } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full py-4 flex items-center justify-between text-left transition-colors hover:text-primary"
      >
        <span className="text-sm font-bold text-dark">{question}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-primary" aria-hidden="true" /> : <ChevronDown className="w-4 h-4 text-slate-400" aria-hidden="true" />}
      </button>
      {isOpen && (
        <div className="pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-line">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  const faqs = [
    {
      question: "Welchen Führerschein brauche ich für welchen Anhänger?",
      answer: "Das hängt von der zulässigen Gesamtmasse (zGM) ab: \n• Einachser ungebremst (750kg): Klasse B (alle Klassen)\n• Einachser gebremst (1350kg): B (bei Gespann bis 3,5t), B96 (bis 4,25t) oder BE\n• Doppelachser (2700kg) & Autotrailer (2600kg): Klasse BE erforderlich"
    },
    {
      question: "Welche Dokumente benötige ich für die Miete?",
      answer: "Sie benötigen einen gültigen Personalausweis oder Reisepass mit Meldebescheinigung sowie einen für die jeweilige Fahrzeugklasse gültigen Führerschein."
    },
    {
      question: "Ist eine Kaution erforderlich?",
      answer: "Ja, für alle Fahrzeuge und Anhänger ist eine Kaution in bar zu hinterlegen. Die Höhe richtet sich nach dem gewählten Modell und wird bei ordnungsgemäßer Rückgabe sofort erstattet."
    },
    {
      question: "Wie bin ich im Schadensfall versichert?",
      answer: "Unsere Fahrzeuge sind haftpflichtversichert. Optional können Sie eine Haftungsfreistellung (Vollkasko) mit Selbstbeteiligung abschließen, um Ihr finanzielles Risiko zu minimieren."
    },
    {
      question: "Kann ich den Anhänger an einer anderen Station abgeben?",
      answer: "Aktuell bieten wir ausschließlich die Rückgabe an der Anmietstation an (One-Way Mieten sind nicht möglich)."
    },
    {
      question: "Welche Zahlungsmöglichkeiten werden akzeptiert?",
      answer: "Die Mietgebühr können Sie bequem vor Ort in bar sowie mit allen gängigen EC- und Kreditkarten bezahlen. Bitte beachten Sie: Die Kaution muss grundsätzlich in bar hinterlegt werden."
    }
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-24 px-5">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-6 bg-primary rounded-full" />
            <h2 className="text-base font-black uppercase tracking-wider text-dark">Häufige Fragen (FAQ)</h2>
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          <button 
            onClick={() => onNavigate('legales')}
            className="flex flex-col items-start p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 transition-all group"
          >
            <Scale className="w-5 h-5 text-slate-400 group-hover:text-primary mb-3" />
            <p className="text-xs font-bold text-dark leading-none mb-1">Impressum</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tight">Rechtliches</p>
          </button>

          <button 
            onClick={() => onNavigate('legales')}
            className="flex flex-col items-start p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 transition-all group"
          >
            <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-primary mb-3" />
            <p className="text-xs font-bold text-dark leading-none mb-1">Datenschutz</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tight">Ihre Daten</p>
          </button>

          <button 
            onClick={() => onNavigate('legales')}
            className="flex flex-col items-start p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 transition-all group"
          >
            <Scale className="w-5 h-5 text-slate-400 group-hover:text-primary mb-3" />
            <p className="text-xs font-bold text-dark leading-none mb-1">AGB</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tight">Bedingungen</p>
          </button>

          <button 
            onClick={() => onNavigate('legales')}
            className="flex flex-col items-start p-4 bg-white border border-slate-200 rounded-xl hover:border-primary/30 transition-all group"
          >
            <FileText className="w-5 h-5 text-slate-400 group-hover:text-primary mb-3" />
            <p className="text-xs font-bold text-dark leading-none mb-1">Widerruf</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-tight">Belehrung</p>
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="text-center space-y-4">
          <div className="inline-block p-1 bg-dark rounded-lg mb-2">
            <span className="text-[10px] font-black text-white px-2 py-1 uppercase tracking-widest">DVV RENT</span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} DVV RENT - Anhänger- und Transporterverleih.<br />
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
