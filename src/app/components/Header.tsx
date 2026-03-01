import {
  Home,
  MapPin,
  Truck,
  FileText,
  Phone,
} from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "stationen", label: "Stationen", icon: MapPin },
    { id: "fuhrpark", label: "Fuhrpark", icon: Truck },
    { id: "legales", label: "Legales", icon: FileText },
    { id: "kontakt", label: "Kontakt", icon: Phone },
  ];

  return (
    <div className="fixed top-[35px] left-0 right-0 bg-white z-40 border-b border-[#F3F4F6]">
      {/* Mobile Header - Centered Logo */}
      <div className="md:hidden flex flex-col items-center py-4 px-5">
        <div className="flex flex-col items-center">
          <div className="relative">
            <h1 className="text-[32px] font-black leading-[32px] tracking-[-1.6px] text-dark">
              DVV RENT
            </h1>
            <div className="absolute -top-1 -right-2 w-2 h-2 bg-primary rounded-full" />
          </div>
          <p className="text-[9px] font-black tracking-[1.8px] uppercase text-dark mt-2">
            Anhängervermietung
          </p>
        </div>
      </div>

      {/* Desktop Header - Logo Left, Nav Right */}
      <div className="hidden md:flex items-center justify-between py-4 px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex flex-col cursor-pointer transition-all hover:opacity-80"
        >
          <div className="relative">
            <h1 className="text-[32px] font-black leading-[32px] tracking-[-1.6px] text-dark">
              DVV RENT
            </h1>
            <div className="absolute -top-1 -right-2 w-2 h-2 bg-primary rounded-full" />
          </div>
          <p className="text-[9px] font-black tracking-[1.8px] uppercase text-dark mt-1">
            Anhängervermietung
          </p>
        </button>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`${item.id === 'kontakt' ? 'hidden' : 'flex'} items-center gap-2 px-5 py-3 rounded-[12px] font-black text-xs tracking-[1px] uppercase transition-all  ${
                  isActive
                    ? "bg-primary text-white shadow-md hover:bg-primary/70"
                    : "text-dark hover:text-primary hover:bg-primary/10"
                }`}
              >
                <Icon
                  className="w-4 h-4"
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}