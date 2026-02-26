import svgPaths from "./svg-n5iaoody2g";
import imgHeroTrailer from "figma:asset/ad60b82d854c8c96ce9863db9d7c3d55ea2465c2.png";
import imgFachmann from "figma:asset/4c350c7c4a79b0149b8a085bdaec40b5aa8111a0.png";
import img750KgPlane from "figma:asset/21d2b8cae4601d38ee0d567a87667d1b14bf2f53.png";
import img2600KgAuto from "figma:asset/f4492a193301162db0a9e7059512cf7b9edc460e.png";

function Container2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black tracking-[-1.6px] w-[154.17px]">
        <p className="leading-[32px] whitespace-pre-wrap">DVV RENT</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute h-0 left-0 right-0 top-[32px]" data-name="Margin">
      <div className="absolute bg-[#e30613] h-[4px] left-0 right-0 top-[-4px]" data-name="Background" />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[3.47px] pt-[8px] top-[32px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-black tracking-[1.8px] uppercase w-[147.23px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">Anhängervermietung</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[53.5px] relative shrink-0 w-[154.17px]" data-name="Container">
      <Container2 />
      <Margin />
      <Margin1 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center max-w-[inherit] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[25px] pt-[24px] px-[20px] right-0 top-[53px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function HeroTrailer() {
  return (
    <div className="h-[193.38px] relative shrink-0 w-full" data-name="Hero Trailer">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[180.99%] left-0 max-w-none top-[-40.5%] w-full" src={imgHeroTrailer} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white uppercase w-[213.84px]">
        <p className="leading-[24px] whitespace-pre-wrap">Premium Flotte</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.8)] tracking-[1px] uppercase w-[197.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">Qualität für Ihren Transport</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-[28px] left-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Heading />
        <Container4 />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[40px] shrink-0 w-full" data-name="Overlay+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[4px] relative rounded-[inherit] w-full">
        <HeroTrailer />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.4)] inset-[4px] to-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[40px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Fachmann() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Fachmann">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFachmann} />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background+Border">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Fachmann />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.5px] h-full items-start leading-[0] not-italic pr-[5.56px] relative">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center relative shrink-0 text-[#e30613] text-[10px] tracking-[1px] uppercase w-[157.92px]">
          <p className="leading-[15px] whitespace-pre-wrap">Pro-Tipp vom Fachmann</p>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[45px] justify-center relative shrink-0 text-[12px] text-black w-[252.44px] whitespace-pre-wrap">
          <p className="mb-0">
            <span className="leading-[15px]">{`Prüfen Sie unbedingt Ihre `}</span>
            <span className="font-['Inter:Black',sans-serif] font-black leading-[15px] not-italic">Fahrzeugpapiere</span>
          </p>
          <p className="leading-[15px] mb-0">(Punkt O.1), um die maximale Anhängelast</p>
          <p className="leading-[15px]">zu ermitteln.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorderShadow() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[#e30613] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[16px] items-start pl-[20px] pr-[16px] py-[16px] relative w-full">
        <BackgroundBorder />
        <Paragraph />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[80.99px] relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] uppercase w-[114.28px] whitespace-pre-wrap">
        <p className="mb-0">UNSERE</p>
        <p>ANHÄNGER</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[4px] top-0" data-name="Container">
      <Heading1 />
      <div className="bg-[#e30613] h-[8px] rounded-[9999px] shrink-0 w-[7.98px]" data-name="Background" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[215.25px] pr-[68.3px] top-[10px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[30px] justify-center leading-[15px] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[1px] uppercase w-[70.45px] whitespace-pre-wrap">
        <p className="mb-0">5 Modelle</p>
        <p>verfügbar</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Component750KgPlane() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="750kg Plane">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img750KgPlane} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4.5px] rounded-[8px] top-[11px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase w-[68.05px]">
        <p className="leading-[15px] whitespace-pre-wrap">Bestseller</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gradient-to-b from-[#f0f2f5] relative shrink-0 to-[#e2e8f0] w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[24px] relative w-full">
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-[60%_0_0_0] to-[rgba(0,0,0,0.08)]" data-name="Gradient" />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Component750KgPlane />
          </div>
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-1px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">750kg Plane</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px] whitespace-pre-wrap">Führerschein B • Ungebremst</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[93.64px] pl-[4px] top-[17px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11px] w-[24.16px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">/Tag</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[39px] justify-center leading-[0] left-0 not-italic text-[26px] text-black top-[19.5px] tracking-[-1.3px] w-[93.64px]">
        <p className="leading-[39px] whitespace-pre-wrap">29,00 €</p>
      </div>
      <Margin3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container10 />
      <Margin2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Technik</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.02px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Gewicht:</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[36.25px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">750 kg</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.8px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Nutzlast:</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[35.97px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">579 kg</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[44.47px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Bremse:</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[24.78px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Nein</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container16 />
        <Container19 />
        <Container22 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Maße (Innen)</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[36.64px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Länge:</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.05px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">2515 mm</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[35.17px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Breite:</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[49.38px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1300 mm</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[32.05px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Höhe:</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[49.11px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1500 mm</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container27 />
        <Container30 />
        <Container33 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
        <g id="Container">
          <path d={svgPaths.p2d7c5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e30613] content-stretch flex gap-[12px] items-end justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[1.3px] uppercase w-[116.28px]">
        <p className="leading-[19.5px] whitespace-pre-wrap">JETZT BUCHEN</p>
      </div>
      <Container36 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
        <Container9 />
        <Container13 />
        <Button />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background />
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Component1350KgPlane() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="1350kg Plane">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img750KgPlane} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#e30613] content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4.5px] rounded-[8px] top-[11px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase w-[102.42px]">
        <p className="leading-[15px] whitespace-pre-wrap">Top-Empfehlung</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-gradient-to-b from-[#f0f2f5] relative shrink-0 to-[#e2e8f0] w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[24px] relative w-full">
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-[60%_0_0_0] to-[rgba(0,0,0,0.08)]" data-name="Gradient" />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Component1350KgPlane />
          </div>
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-1px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">1350kg Plane</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px] whitespace-pre-wrap">Gebremst • Hochplane</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[95.19px] pl-[4px] top-[17px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11px] w-[24.16px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">/Tag</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[39px] justify-center leading-[0] left-0 not-italic text-[26px] text-black top-[19.5px] tracking-[-1.3px] w-[95.19px]">
        <p className="leading-[39px] whitespace-pre-wrap">42,00 €</p>
      </div>
      <Margin5 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container39 />
      <Margin4 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Technik</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.02px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Gewicht:</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[41.8px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1350 kg</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.8px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Nutzlast:</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[41.92px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1029 kg</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[44.47px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Bremse:</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[12.83px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Ja</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container45 />
        <Container48 />
        <Container51 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Maße (Innen)</p>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[36.64px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Länge:</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.8px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">3015 mm</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[35.17px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Breite:</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[49.11px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1500 mm</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[32.05px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Höhe:</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[49.11px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1500 mm</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container56 />
        <Container59 />
        <Container62 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
        <g id="Container">
          <path d={svgPaths.p2d7c5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black content-stretch flex gap-[12px] items-end justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[1.3px] uppercase w-[116.28px]">
        <p className="leading-[19.5px] whitespace-pre-wrap">JETZT BUCHEN</p>
      </div>
      <Container65 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
        <Container38 />
        <Container42 />
        <Button1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background2 />
        <Container37 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Component2000KgKoffer() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="2000kg Koffer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img750KgPlane} />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4.5px] rounded-[8px] top-[11px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase w-[53.61px]">
        <p className="leading-[15px] whitespace-pre-wrap">Gewerbe</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-gradient-to-b from-[#f0f2f5] relative shrink-0 to-[#e2e8f0] w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[24px] relative w-full">
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-[60%_0_0_0] to-[rgba(0,0,0,0.08)]" data-name="Gradient" />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Component2000KgKoffer />
          </div>
          <Background5 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-1px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">2000kg Koffer</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px] whitespace-pre-wrap">Tandem • Geschlossen</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container69 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[95.52px] pl-[4px] top-[17px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11px] w-[24.16px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">/Tag</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[39px] justify-center leading-[0] left-0 not-italic text-[26px] text-black top-[19.5px] tracking-[-1.3px] w-[95.52px]">
        <p className="leading-[39px] whitespace-pre-wrap">48,00 €</p>
      </div>
      <Margin7 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container70 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container68 />
      <Margin6 />
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Technik</p>
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.02px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Gewicht:</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[44.88px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">2000 kg</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.8px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Nutzlast:</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[42.13px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1394 kg</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container74 />
        <Container77 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Maße (Innen)</p>
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[36.64px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Länge:</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.8px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">3015 mm</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container83 />
        <Container84 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[35.17px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Breite:</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[49.11px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1500 mm</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container82 />
        <Container85 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container80 />
        <Container81 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder5 />
      <BackgroundBorder6 />
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
        <g id="Container">
          <path d={svgPaths.p2d7c5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-black content-stretch flex gap-[12px] items-end justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[1.3px] uppercase w-[116.28px]">
        <p className="leading-[19.5px] whitespace-pre-wrap">JETZT BUCHEN</p>
      </div>
      <Container88 />
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
        <Container67 />
        <Container71 />
        <Button2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background4 />
        <Container66 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Component2600KgAuto() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="2600kg Auto">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2600KgAuto} />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4.5px] rounded-[8px] top-[11px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase w-[52.13px]">
        <p className="leading-[15px] whitespace-pre-wrap">Premium</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-gradient-to-b from-[#f0f2f5] relative shrink-0 to-[#e2e8f0] w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[24px] relative w-full">
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-[60%_0_0_0] to-[rgba(0,0,0,0.08)]" data-name="Gradient" />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Component2600KgAuto />
          </div>
          <Background7 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-1px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">2600kg Auto</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px] whitespace-pre-wrap">Kippbar • Autotransport</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container92 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[93.97px] pl-[4px] top-[17px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11px] w-[24.16px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">/Tag</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[39px] justify-center leading-[0] left-0 not-italic text-[26px] text-black top-[19.5px] tracking-[-1.3px] w-[93.97px]">
        <p className="leading-[39px] whitespace-pre-wrap">65,00 €</p>
      </div>
      <Margin9 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container93 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container91 />
      <Margin8 />
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Technik</p>
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.8px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Nutzlast:</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[44.88px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">2000 kg</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[44.47px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Bremse:</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[12.83px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Ja</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container97 />
        <Container100 />
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Maße (Innen)</p>
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[36.64px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Länge:</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[50.97px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">4070 mm</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container106 />
        <Container107 />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[35.17px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Breite:</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[51.89px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">2040 mm</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container109 />
      <Container110 />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container105 />
        <Container108 />
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container103 />
        <Container104 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder7 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
        <g id="Container">
          <path d={svgPaths.p2d7c5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-black content-stretch flex gap-[12px] items-end justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[1.3px] uppercase w-[116.28px]">
        <p className="leading-[19.5px] whitespace-pre-wrap">JETZT BUCHEN</p>
      </div>
      <Container111 />
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
        <Container90 />
        <Container94 />
        <Button3 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background6 />
        <Container89 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Component2700KgPlane() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="2700kg Plane">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2600KgAuto} />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start left-[16px] px-[12px] py-[4.5px] rounded-[8px] top-[11px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] uppercase w-[72.47px]">
        <p className="leading-[15px] whitespace-pre-wrap">Heavy Duty</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-gradient-to-b from-[#f0f2f5] relative shrink-0 to-[#e2e8f0] w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[24px] relative w-full">
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-[60%_0_0_0] to-[rgba(0,0,0,0.08)]" data-name="Gradient" />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Component2700KgPlane />
          </div>
          <Background9 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-1px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">2700kg Plane</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[11px] tracking-[1.1px] uppercase w-full">
        <p className="leading-[16.5px] whitespace-pre-wrap">Tandem • XXL Ladefläche</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container115 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[94.31px] pl-[4px] top-[17px]" data-name="Margin">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11px] w-[24.16px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">/Tag</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[39px] justify-center leading-[0] left-0 not-italic text-[26px] text-black top-[19.5px] tracking-[-1.3px] w-[94.31px]">
        <p className="leading-[39px] whitespace-pre-wrap">54,00 €</p>
      </div>
      <Margin11 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container116 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container114 />
      <Margin10 />
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Technik</p>
        </div>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.02px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Gewicht:</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[43.69px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">2700 kg</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container121 />
      <Container122 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.8px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Nutzlast:</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[44.61px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">2060 kg</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container124 />
        <Container125 />
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container120 />
        <Container123 />
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container118 />
        <Container119 />
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[8px] tracking-[0.8px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">Maße (Innen)</p>
        </div>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[36.64px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Länge:</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[48.72px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">4150 mm</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container129 />
        <Container130 />
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[35.17px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Breite:</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-[49.42px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">1800 mm</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container132 />
        <Container133 />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container128 />
        <Container131 />
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[13px] relative size-full">
        <Container126 />
        <Container127 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder9 />
      <BackgroundBorder10 />
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
        <g id="Container">
          <path d={svgPaths.p2d7c5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-black content-stretch flex gap-[12px] items-end justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white tracking-[1.3px] uppercase w-[116.28px]">
        <p className="leading-[19.5px] whitespace-pre-wrap">JETZT BUCHEN</p>
      </div>
      <Container134 />
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
        <Container113 />
        <Container117 />
        <Button4 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Background8 />
        <Container112 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.5px] uppercase w-[229.05px]">
        <p className="leading-[28px] whitespace-pre-wrap">UNSERE TRANSPORTER</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Heading7 />
      <div className="bg-[#e30613] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pt-[32px] px-[4px] relative w-full">
        <Container136 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[35px] relative shrink-0 w-[30px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 35">
        <g id="Container">
          <path d={svgPaths.p49e6600} fill="var(--fill-0, #D1D5DB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container137 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] text-center uppercase w-[201.28px]">
        <p className="leading-[28px] whitespace-pre-wrap">In Kürze verfügbar</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[33px] justify-center leading-[16.5px] not-italic relative shrink-0 text-[#9ca3af] text-[11px] text-center w-[216.5px] whitespace-pre-wrap">
        <p className="mb-0">Wir erweitern unsere Flotte um moderne</p>
        <p>Transporter.</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <Container139 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative">
        <Container138 />
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[42px] relative w-full">
          <Background10 />
          <Margin12 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pt-[32px] px-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[33px] justify-center leading-[16.25px] not-italic relative shrink-0 text-[#9ca3af] text-[10px] text-center tracking-[1px] uppercase w-[311.18px] whitespace-pre-wrap">
            <p className="mb-0">DVV RENT Master Fleet System v3.0</p>
            <p>Preise inkl. MwSt. • Alle Angaben ohne Gewähr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 max-w-[512px] pb-[64px] pt-[16px] px-[16px] right-0 top-[155.5px]" data-name="Main">
      <OverlayBorderShadow />
      <BackgroundVerticalBorderShadow />
      <Container5 />
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
      <Container135 />
      <BackgroundBorder11 />
      <Footer />
    </div>
  );
}

function Margin13() {
  return (
    <div className="absolute h-[12.25px] left-[16px] top-[19.5px] w-[20.833px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8333 12.25">
        <g id="Margin">
          <path d={svgPaths.p3b404880} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#004a99] h-[53px] left-0 right-0 top-0" data-name="Background">
      <Margin13 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[calc(50%-3.49px)] not-italic text-[11px] text-center text-white top-[calc(50%-8.5px)] tracking-[0.275px] uppercase w-[306.97px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Über 100.000 zufriedene Kunden vertrauen DVV</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[calc(50%-141.61px)] not-italic text-[11px] text-center text-white top-[calc(50%+8px)] tracking-[0.275px] uppercase w-[30.73px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">RENT</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #8E8E93)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[9px] tracking-[0.45px] uppercase w-[29.66px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">HOME</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-0 right-[80%]" data-name="Link">
      <Container141 />
      <Margin14 />
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
        <g id="Container">
          <path d={svgPaths.p33083280} fill="var(--fill-0, #8E8E93)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[9px] tracking-[0.45px] uppercase w-[56.78px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">STATIONEN</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-[20%] right-[60%]" data-name="Link">
      <Container142 />
      <Margin15 />
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[21px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16.5">
        <g id="Container">
          <path d={svgPaths.p33e3c804} fill="var(--fill-0, #E30613)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#e30613] text-[9px] tracking-[0.45px] uppercase w-[53.2px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">FUHRPARK</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-[60%] right-[20%]" data-name="Link">
      <Container143 />
      <Margin16 />
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #8E8E93)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[9px] tracking-[0.45px] uppercase w-[43.95px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">LEGALES</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-[80%] right-0" data-name="Link">
      <Container144 />
      <Margin17 />
    </div>
  );
}

function Container146() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p3efec600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex items-center justify-center left-0 p-[4px] rounded-[9999px] size-[64px] top-[-32px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_4px_12px_0px_rgba(34,197,94,0.4)]" />
      <Container146 />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="h-[32px] relative shrink-0 w-[64px]" data-name="Link:margin">
      <Link4 />
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[9px] tracking-[0.45px] uppercase w-[49px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">KONTAKT</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-[40%] right-[40%]" data-name="Container">
      <LinkMargin />
      <Margin18 />
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[49.5px] max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Container145 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white bottom-[19.38px] content-stretch flex flex-col items-start left-0 pb-[32px] pt-[9px] px-[8px] right-0" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none shadow-[0px_-10px_30px_0px_rgba(0,0,0,0.08)]" />
      <Container140 />
    </div>
  );
}

export default function FuhrparkDvvRentMasterUbersicht() {
  return (
    <div className="bg-[#f2f2f7] relative size-full" data-name="Fuhrpark - DVV Rent Master Übersicht">
      <Header />
      <Main />
      <Background11 />
      <Nav />
    </div>
  );
}