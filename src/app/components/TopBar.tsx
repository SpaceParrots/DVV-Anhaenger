import { useState, useEffect } from 'react';

export function TopBar() {
  const announcements = [
    "WIR SETZEN AUF QUALITÄTSANHÄNGER & -TRANSPORTER",
    "+50 ANHÄNGER AN ÜBER 16 STANDORTEN VERFÜGBAR",
    "VERMIETUNG IN HH, SCHLESWIG-HOLSTEIN & MVP",
    "TELEFONISCHE ABSPRACHE MÖGLICH 📞",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000); // Change announcement every 3 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="fixed h-[35px] top-0 left-0 right-0 bg-primary z-50 text-white overflow-hidden">
      <div className="relative h-full flex items-center justify-center">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={`absolute whitespace-nowrap text-[10px] font-bold tracking-[1px] uppercase transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 translate-y-0'
                : index < currentIndex
                ? 'opacity-0 -translate-y-full'
                : 'opacity-0 translate-y-full'
            }`}
          >
            {announcement}
          </div>
        ))}
      </div>
    </div>
  );
}