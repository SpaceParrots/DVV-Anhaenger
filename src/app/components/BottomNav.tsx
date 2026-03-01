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
    { id: 'legales', label: 'Legales', icon: FileText }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 safe-area-inset-bottom md:hidden">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 min-w-[60px] transition-all active:scale-95 ${
                isActive ? 'text-primary' : 'text-slate-400'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[9px] font-bold tracking-wide uppercase">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}