import { Truck, Phone, Calendar, CheckCircle } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    { icon: Truck, label: "Standort wählen" },
    { icon: Phone, label: "Station anrufen" },
    { icon: Calendar, label: "Termin reservieren" },
    {
      icon: CheckCircle,
      label: "Anhänger abholen",
      active: true,
    },
  ];

  return (
    <div className="px-5 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-[10px] font-black tracking-[2px] uppercase text-[#94A3B8] mb-1">
          IN 5 SCHRITTEN ZUM ANHÄNGER
        </h2>
      </div>

      <div className="relative">
        <div className="absolute top-5 left-10 right-10 h-px bg-[#E2E8F0] border-t border-dashed border-[#E5E7EB]" />
        <div className="flex justify-between px-1 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 flex-1 max-w-[70px]"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.active
                    ? "bg-primary shadow-primary/30"
                    : "bg-white border border-[#E2E8F0] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                }`}
              >
                <step.icon
                  className={`w-4 h-4 ${step.active ? "text-white" : "text-primary"}`}
                />
              </div>
              <span
                className={`text-[9px] font-bold text-center leading-tight uppercase ${
                  step.active
                    ? "text-primary"
                    : "text-[#64748B]"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
