import { Home, MapPin, Truck, FileText, Phone } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'stationen', label: 'Stationen', icon: MapPin },
    { id: 'fuhrpark', label: 'Fuhrpark', icon: Truck },
    { id: 'legales', label: 'Legales', icon: FileText },
    { id: 'kontakt', label: 'Kontakt', icon: Phone },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] z-50 safe-area-inset-bottom md:hidden">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 min-w-[60px] transition-all active:scale-95 ${
                isActive ? 'text-[#E30613]' : 'text-[#94A3B8]'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[9px] font-bold tracking-[0.5px] uppercase">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}