import svgPaths from "./svg-ksl0yiynh5";
import imgTonySchonbeck from "@/assets/add4571d2aebccb37cf94e05588b80245bfa0384.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[2]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#036] text-[30px] tracking-[-1.5px] w-[131.56px]">
        <p className="leading-[30px] whitespace-pre-wrap">DVV RENT</p>
      </div>
      <div className="absolute bg-[#e30613] bottom-[-4px] h-[4px] left-0 right-0" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[#036] text-[9px] tracking-[1.35px] uppercase w-[233.55px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">ANHÄNGER U. TRANSPORTER-VERMIETUNG</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col isolate items-center relative">
        <Container1 />
        <Margin />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 pb-[25px] pt-[24px] px-[24px] right-0 top-[35px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] text-center tracking-[1px] uppercase w-[104.08px]">
        <p className="leading-[15px] whitespace-pre-wrap">Tony Schönbeck</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[126.95px] pb-[12px] top-[137px]" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[24.11px] pr-[24.12px] relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[60px] justify-center leading-[30px] not-italic relative shrink-0 text-[#036] text-[24px] text-center w-[259.77px] whitespace-pre-wrap">
        <p className="mb-0">Der schnellste Weg zu</p>
        <p>Ihrem Anhänger</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] pb-[12px] top-[164px]" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 px-[13.8px] top-[234.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[#64748b] text-[14px] text-center w-[280.4px] whitespace-pre-wrap">
        <p className="mb-0">Rufen Sie für eine sofortige Buchung direkt</p>
        <p className="mb-0">Ihre Wunschstation an. So garantieren wir</p>
        <p>Ihnen die schnellste Abwicklung.</p>
      </div>
    </div>
  );
}

function TonySchonbeck() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Tony Schönbeck">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="Tony Schönbeck, Inhaber von DVV RENT" className="absolute left-0 max-w-none size-full top-0" src={imgTonySchonbeck} />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[9999px] shrink-0 size-[96px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <TonySchonbeck />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.25">
        <g id="Container">
          <path d={svgPaths.p26f9d500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#e30613] bottom-[-4px] content-stretch flex items-center justify-center p-[2px] right-[-4px] rounded-[9999px] size-[24px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorder />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[131px] pb-[16px] top-[25px]" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[329.25px] relative rounded-[32px] shrink-0 w-[358px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(226,232,240,0.5),0px_8px_10px_-6px_rgba(226,232,240,0.5)]" data-name="Overlay+Shadow" />
      <Margin1 />
      <Heading1Margin />
      <Container3 />
      <Margin2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center tracking-[2px] uppercase w-[238.28px]">
        <p className="leading-[15px] whitespace-pre-wrap">DER SCHNELLE WEG ZUM ANHÄNGER</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1ed0bdc0} fill="var(--fill-0, #E30613)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[11.25px] relative shrink-0 text-[#64748b] text-[9px] text-center uppercase w-[55.02px] whitespace-pre-wrap">
        <p className="mb-0">Anhänger</p>
        <p>auswählen</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <BackgroundBorderShadow1 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p3ca41900} fill="var(--fill-0, #E30613)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[11.25px] relative shrink-0 text-[#64748b] text-[9px] text-center uppercase w-[41.36px] whitespace-pre-wrap">
        <p className="mb-0">Station</p>
        <p>anrufen</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <BackgroundBorderShadow2 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p39997480} fill="var(--fill-0, #E30613)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[11.25px] relative shrink-0 text-[#64748b] text-[9px] text-center uppercase w-[59.5px] whitespace-pre-wrap">
        <p className="mb-0">Termin</p>
        <p>reservieren</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <BackgroundBorderShadow3 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[10px] relative shrink-0 w-[19.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1667 10">
        <g id="Container">
          <path d={svgPaths.p22917200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e30613] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.3),0px_4px_6px_-4px_rgba(227,6,19,0.3)] size-[40px] top-0" data-name="Overlay+Shadow" />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[23px] justify-center leading-[11.25px] relative shrink-0 text-[#e30613] text-[9px] text-center uppercase w-[49.28px] whitespace-pre-wrap">
        <p className="mb-0">Anhänger</p>
        <p>abholen</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <Background />
      <Container18 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between px-[4px] relative w-full">
        <div className="absolute bg-[#e2e8f0] h-px left-[40px] right-[40px] top-[20px]" data-name="Horizontal Divider">
          <div aria-hidden="true" className="absolute border-[#e5e7eb] border-dashed border-t inset-0 pointer-events-none" />
        </div>
        <Container7 />
        <Container10 />
        <Container13 />
        <Container16 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] relative w-full">
        <Heading1 />
        <Container6 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center tracking-[2px] uppercase w-[194.33px]">
          <p className="leading-[15px] whitespace-pre-wrap">FRAGEN? SCHREIBEN SIE UNS</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p27c98a00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#25d366] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center py-[16px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(37,211,102,0.3),0px_4px_6px_-4px_rgba(37,211,102,0.3)]" data-name="Button:shadow" />
        <Container20 />
        <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[238.25px]">
          <p className="leading-[28px] whitespace-pre-wrap">WHATSAPP CHAT STARTEN</p>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[25px] pt-[33px] px-[25px] relative rounded-[32px] shrink-0 w-[342px]" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[8px_0_0_0] rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(226,232,240,0.6),0px_8px_10px_-6px_rgba(226,232,240,0.6)]" data-name="Overlay+Shadow" />
      <Container19 />
      <Button />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#036] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">Unsere Standorte</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Wählen Sie Ihre Station für die Buchung</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container22 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f7922c0} fill="var(--fill-0, #003366)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container25 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#036] text-[16px] w-[133.27px]">
        <p className="leading-[24px] whitespace-pre-wrap">Ahrensburg (HQ)</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[83.59px]">
        <p className="leading-[15px] whitespace-pre-wrap">Hauptzentrale</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background1 />
        <Container26 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p24f7a880} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e30613] content-stretch flex gap-[6px] items-center justify-center pl-[17.31px] pr-[17.33px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.48px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(227,6,19,0.2),0px_2px_4px_-2px_rgba(227,6,19,0.2)]" data-name="Button:shadow" />
      <Container29 />
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white uppercase w-[91.34px]">
        <p className="leading-[15px] whitespace-pre-wrap">STATION ANRUFEN</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, #003366)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[6px] items-center justify-center px-[39.84px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container30 />
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#036] text-[10px] text-center uppercase w-[46.3px]">
        <p className="leading-[15px] whitespace-pre-wrap">Anfahrt</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container24 />
        <Container28 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f7922c0} fill="var(--fill-0, #003366)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container32 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#036] text-[16px] w-[111.95px]">
        <p className="leading-[24px] whitespace-pre-wrap">HH-Wandsbek</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[72.05px]">
        <p className="leading-[15px] whitespace-pre-wrap">Hamburg Ost</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container34 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background2 />
        <Container33 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p24f7a880} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#e30613] content-stretch flex gap-[6px] items-center justify-center pl-[17.31px] pr-[17.33px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.48px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(227,6,19,0.2),0px_2px_4px_-2px_rgba(227,6,19,0.2)]" data-name="Button:shadow" />
      <Container36 />
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white uppercase w-[91.34px]">
        <p className="leading-[15px] whitespace-pre-wrap">STATION ANRUFEN</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, #003366)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[6px] items-center justify-center px-[39.84px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container37 />
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#036] text-[10px] text-center uppercase w-[46.3px]">
        <p className="leading-[15px] whitespace-pre-wrap">Anfahrt</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container31 />
        <Container35 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f7922c0} fill="var(--fill-0, #003366)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Background">
      <Container39 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#036] text-[16px] w-[93.86px]">
        <p className="leading-[24px] whitespace-pre-wrap">Lübeck-Süd</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[10px] uppercase w-[85.69px]">
        <p className="leading-[15px] whitespace-pre-wrap">Industriegebiet</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background3 />
        <Container40 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p24f7a880} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#e30613] content-stretch flex gap-[6px] items-center justify-center pl-[17.31px] pr-[17.33px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.48px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(227,6,19,0.2),0px_2px_4px_-2px_rgba(227,6,19,0.2)]" data-name="Button:shadow" />
      <Container43 />
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white uppercase w-[91.34px]">
        <p className="leading-[15px] whitespace-pre-wrap">STATION ANRUFEN</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, #003366)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex gap-[6px] items-center justify-center px-[39.84px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container44 />
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#036] text-[10px] text-center uppercase w-[46.3px]">
        <p className="leading-[15px] whitespace-pre-wrap">Anfahrt</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[21px] relative w-full">
        <Container38 />
        <Container42 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
      <BackgroundBorderShadow6 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
        <g id="Container">
          <path d={svgPaths.p286a300} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[2px] py-[18px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <Container45 />
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-center tracking-[1px] uppercase w-[176.81px]">
        <p className="leading-[15px] whitespace-pre-wrap">ALLE 16 STANDORTE ANZEIGEN</p>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[8px] relative w-full">
        <Container21 />
        <Container23 />
        <Button7 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[164.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">Worst-Case-Notfallhilfe</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[181.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">24/7 Zentrale kontaktieren</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container49 />
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#036] content-stretch flex items-center justify-between p-[16px] relative rounded-[16px] shrink-0 w-[342px]" data-name="Section">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,51,102,0.2),0px_4px_6px_-4px_rgba(0,51,102,0.2)]" data-name="Overlay+Shadow" />
      <Container46 />
      <Button8 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-0 max-w-[448px] pt-[32px] right-0 top-[135.5px]" data-name="Main">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#00539c] content-stretch flex flex-col items-center left-0 py-[10px] right-0 top-0" data-name="Background">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.5px] w-[308.94px]">
        <p className="leading-[15px] whitespace-pre-wrap">+100.000 GLÜCKLICHE KUNDEN (4,9/5 STERNE ★★★★★)</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Button">
      <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[8px] text-center tracking-[-0.2px] uppercase w-[22.75px]">
        <p className="leading-[12px] whitespace-pre-wrap">HOME</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Button">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[8px] text-center tracking-[-0.2px] uppercase w-[42.97px]">
        <p className="leading-[12px] whitespace-pre-wrap">STATIONEN</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Button">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p29ec5a00} fill="var(--fill-0, #25D366)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#25d366] text-[8px] text-center tracking-[-0.2px] uppercase w-[35.89px]">
        <p className="leading-[12px] whitespace-pre-wrap">KONTAKT</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Button">
      <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
          <path d={svgPaths.p146eb80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[8px] text-center tracking-[-0.2px] uppercase w-[40.63px]">
        <p className="leading-[12px] whitespace-pre-wrap">FUHRPARK</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px min-w-px relative" data-name="Button">
      <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[8px] text-center tracking-[-0.2px] uppercase w-[33.06px]">
        <p className="leading-[12px] whitespace-pre-wrap">LEGALES</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pr-[0.05px] relative w-full">
          <Button9 />
          <Button10 />
          <Button11 />
          <Button12 />
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 pb-[32px] pt-[13px] px-[24px] right-0" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Container50 />
    </div>
  );
}

export default function HomePremiumTrailerRental() {
  return (
    <div className="bg-[#f8f9fa] relative size-full" data-name="Home - Premium Trailer Rental">
      <Header />
      <Main />
      <Background4 />
      <Nav />
    </div>
  );
}