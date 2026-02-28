export interface Station {
  name: string;
  region: string;
  address: string;
  city: string;
  phone: string;
  phoneClean: string;
  tag?: string;
  tagColor?: string;
  items: string[];
  hours?: string;
}

export const allStationsData: Station[] = [
  // Hamburg
  {
    name: "Hamburg / Hamm",
    region: "Hamburg",
    address: "Carl-Petersen-Straße 76",
    city: "20535 Hamburg",
    phone: "040 - 2500303",
    phoneClean: "+49402500303",
    tag: "ZENTRALE",
    tagColor: "bg-[#F1F5F9] text-dark",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Plane", "2700kg Auto", "750kg Flachplane"],
    hours: "Mo. - So. 6 - 22 Uhr"
  },
  {
    name: "Hamburg / Billstedt",
    region: "Hamburg",
    address: "Schiffbeker Weg 90-92",
    city: "22117 Hamburg",
    phone: "040 - 7330306",
    phoneClean: "+49407330306",
    tag: "24 STD.",
    tagColor: "bg-[#E6F9F0] text-[#25D366]",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Plane", "2700kg Auto"],
    hours: "24 Std. geöffnet"
  },
  {
    name: "Hamburg / Volksdorf",
    region: "Hamburg",
    address: "Eulenkrugstraße 72",
    city: "22359 Hamburg",
    phone: "040 - 6038018",
    phoneClean: "+49406038018",
    items: ["750kg Hochplane", "1350kg Hochplane"],
    hours: "Mo. - Sa. 6 - 22 Uhr / So. 7 - 22 Uhr"
  },
  {
    name: "Hamburg / Sasel",
    region: "Hamburg",
    address: "Meiendorfer Mühlenweg/Ecke Volksdorfer Weg",
    city: "22393 Hamburg",
    phone: "01522 - 4536658",
    phoneClean: "+4915224536658",
    tag: "TRANSPORTER",
    tagColor: "bg-primary text-white",
    items: ["Iveco Daily 3,5t", "750kg Hochplane", "1350kg Hochplane", "2700kg Plane", "2700kg Auto", "Motorrad-System"],
    hours: "Nach Vereinbarung"
  },
  // Schleswig-Holstein
  {
    name: "Ahrensburg",
    region: "Schleswig-Holstein",
    address: "Hamburger Straße 165",
    city: "22926 Ahrensburg",
    phone: "04102 - 81023",
    phoneClean: "+49410281023",
    tag: "SHELL",
    tagColor: "bg-[#FEE6E6] text-primary",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Auto", "750kg Flachplane"],
    hours: "Mo. - Sa. 6 - 22 Uhr / So. 7 - 22 Uhr"
  },
  {
    name: "Bad Oldesloe",
    region: "Schleswig-Holstein",
    address: "Industriestraße 5",
    city: "23843 Bad Oldesloe",
    phone: "04531 - 86081",
    phoneClean: "+49453186081",
    tag: "24 STD.",
    tagColor: "bg-[#E6F9F0] text-[#25D366]",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Auto"],
    hours: "24 Std. geöffnet"
  },
  {
    name: "Witzhave",
    region: "Schleswig-Holstein",
    address: "Möllner Landstraße 13",
    city: "22969 Witzhave",
    phone: "04104 - 3411",
    phoneClean: "+4941043411",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Auto"],
    hours: "Mo. - Sa. 6 - 22 Uhr / So. 7 - 22 Uhr"
  },
  {
    name: "Neumünster",
    region: "Schleswig-Holstein",
    address: "Ilsahl 56",
    city: "24536 Neumünster",
    phone: "04321 - 3344882",
    phoneClean: "+4943213344882",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Plane", "2700kg Auto"],
    hours: "Mo. - Sa. 6 - 22 Uhr"
  },
  {
    name: "Rendsburg (Kieler Str.)",
    region: "Schleswig-Holstein",
    address: "Kieler Straße 31 b",
    city: "24768 Rendsburg",
    phone: "04331 - 27623",
    phoneClean: "+49433127623",
    tag: "24 STD.",
    tagColor: "bg-[#E6F9F0] text-[#25D366]",
    items: ["750kg Hochplane", "1350kg Hochplane", "750kg Flachplane", "2700kg Plane", "2700kg Auto"],
    hours: "24 Std. geöffnet"
  },
  {
    name: "Rendsburg (Flensburger Str.)",
    region: "Schleswig-Holstein",
    address: "Flensburger Straße 79",
    city: "24768 Rendsburg Büdelsdorf",
    phone: "04331 - 27623",
    phoneClean: "+49433127623",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Auto"],
    hours: "Mo. - So. geöffnet"
  },
  {
    name: "Itzehoe",
    region: "Schleswig-Holstein",
    address: "Lindenstraße 253",
    city: "25524 Itzehoe",
    phone: "04821 - 1339933",
    phoneClean: "+4948211339933",
    tag: "24 STD.",
    tagColor: "bg-[#E6F9F0] text-[#25D366]",
    items: ["750kg Hochplane", "1350kg Hochplane", "750kg Flachplane", "2700kg Plane", "2700kg Auto"],
    hours: "24 Std. geöffnet"
  },
  {
    name: "Tornesch",
    region: "Schleswig-Holstein",
    address: "Ahrenloher Straße 47",
    city: "25436 Tornesch",
    phone: "04122 - 54895",
    phoneClean: "+49412254895",
    tag: "24 STD.",
    tagColor: "bg-[#E6F9F0] text-[#25D366]",
    items: ["750kg Hochplane", "1350kg Hochplane", "750kg Flachplane", "2700kg Plane", "2700kg Auto"],
    hours: "24 Std. geöffnet"
  },
  {
    name: "Quickborn",
    region: "Schleswig-Holstein",
    address: "Friedrichsgaber Straße 19",
    city: "25451 Quickborn",
    phone: "04106 - 71137",
    phoneClean: "+49410671137",
    tag: "24 STD.",
    tagColor: "bg-[#E6F9F0] text-[#25D366]",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Auto"],
    hours: "24 Std. geöffnet"
  },
  {
    name: "Norderstedt",
    region: "Schleswig-Holstein",
    address: "Alter Kirchenweg 21",
    city: "22844 Norderstedt",
    phone: "040 - 76500007",
    phoneClean: "+494076500007",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Auto"],
    hours: "Mo. - Fr. 6 - 22 Uhr"
  },
  // Mecklenburg-Vorpommern
  {
    name: "Friedland",
    region: "Mecklenburg-Vorpommern",
    address: "Neubrandenburger Straße 16 B",
    city: "17098 Friedland",
    phone: "039601 - 23097",
    phoneClean: "+493960123097",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Auto"],
    hours: "Mo. - Fr. 5 - 22 Uhr / Sa. 6 - 22 Uhr / So. 6 - 22 Uhr"
  },
  {
    name: "Platzhalter",
    region: "Mecklenburg-Vorpommern",
    address: "Demnächst für Sie",
    city: "Neuer Standort",
    phone: "040 - 2500303",
    phoneClean: "+49402500303",
    items: ["750kg Hochplane", "1350kg Hochplane", "2700kg Auto"],
  }
];
