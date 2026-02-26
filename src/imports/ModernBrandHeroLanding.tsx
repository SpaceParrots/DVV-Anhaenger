import svgPaths from "./svg-zjtwpkrg9h";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[36px] text-center tracking-[-1.8px] w-[173.45px]">
        <p className="leading-[36px] whitespace-pre-wrap">DVV RENT</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 z-[2]" data-name="Container">
      <Heading />
      <div className="bg-[#e30613] h-[6px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[10px] text-center tracking-[1.5px] uppercase w-[273.72px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANHÄNGER U. TRANSPORTER-VERMIETUNG</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 z-[1]" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-center left-[24px] right-[24px] top-[104px]" data-name="Header">
      <Container />
      <Margin />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] tracking-[-0.75px] w-full">
        <p className="leading-[37.5px] whitespace-pre-wrap">Mietstationen</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Über 16 Standorte in Ihrer Nähe</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 pb-[16px] pt-[15px] px-[24px] right-0 top-[197px]" data-name="Section">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.0833">
        <g id="Container">
          <path d={svgPaths.p3644b780} fill="var(--fill-0, #0055A4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] tracking-[2.2px] uppercase w-[167.13px]">
          <p className="leading-[16.5px] whitespace-pre-wrap">Hamburg Standorte</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container5 />
      <Heading2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[149.92px]">
        <p className="leading-[28px] whitespace-pre-wrap">Hamburg / Hamm</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[191.09px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Carl-Petersen-Str. 76</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container8 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,85,164,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0055a4] text-[9px] uppercase w-[48.64px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">Zentrale</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container7 />
        <Overlay />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[32.06px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">1350kg</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[33.61px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">2700kg</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background />
        <Background1 />
        <Background2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container11 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.2),0px_4px_6px_-4px_rgba(227,6,19,0.2)]" data-name="Link:shadow" />
      <Container12 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link />
        <Link1 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container6 />
        <Container9 />
        <Container10 />
        <Link2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[165.06px]">
        <p className="leading-[28px] whitespace-pre-wrap">Hamburg / Billstedt</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[202.05px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Schiffbeker Weg 90-92</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container15 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(37,211,102,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#25d366] text-[9px] uppercase w-[68.97px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">24h Geöffnet</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container14 />
        <Overlay1 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[33.61px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">2700kg</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background3 />
        <Background4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container18 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container19 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container13 />
        <Container16 />
        <Container17 />
        <Link5 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[179.28px]">
        <p className="leading-[28px] whitespace-pre-wrap">Hamburg / Volksdorf</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[181.42px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Eulenkrugstraße 72</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container21 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[32.06px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">1350kg</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background5 />
        <Background6 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container25 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container26 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container20 />
        <Container23 />
        <Container24 />
        <Link8 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[140.83px]">
        <p className="leading-[28px] whitespace-pre-wrap">Hamburg / Sasel</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[195.06px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Saseler Chaussee 100</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading6 />
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container28 />
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[33.61px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">2700kg</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background7 />
        <Background8 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container32 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container33 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link9 />
        <Link10 />
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container27 />
        <Container30 />
        <Container31 />
        <Link11 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[178.89px]">
        <p className="leading-[28px] whitespace-pre-wrap">Hamburg / Bergstedt</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[217.41px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Bergstedter Chaussee 132</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading7 />
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container35 />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Background9 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container39 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container40 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link12 />
        <Link13 />
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container34 />
        <Container37 />
        <Container38 />
        <Link14 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[135.97px]">
        <p className="leading-[28px] whitespace-pre-wrap">Hamburg / Horn</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[201.61px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Horner Landstraße 330</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container42 />
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[32.06px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">1350kg</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background10 />
        <Background11 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container46 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link16() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container47 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link15 />
        <Link16 />
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container41 />
        <Container44 />
        <Container45 />
        <Link17 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-10 pl-[3.247px] pt-[7.674px] relative" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[160px] justify-center leading-[0] not-italic relative shrink-0 text-[160px] text-white w-[157.509px]">
        <p className="leading-[160px] whitespace-pre-wrap">attach_money</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[64px] justify-center leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.6px] w-[188.75px] whitespace-pre-wrap">
        <p className="mb-0">Standortpartner</p>
        <p>werden</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#fee2e2] text-[14px] text-center w-[189.28px] whitespace-pre-wrap">
        <p className="mb-0">Zusätzliches Einkommen für</p>
        <p>Unternehmer</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[15.625px] relative shrink-0 w-[8.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 15.625">
        <g id="Container">
          <path d={svgPaths.p18d99b20} fill="var(--fill-0, #E30613)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link18() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[56px] items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-name="Link:shadow" />
      <Container51 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e30613] text-[14px] text-center tracking-[0.7px] w-[176.2px]">
        <p className="leading-[20px] whitespace-pre-wrap">PASSIVES EINKOMMEN</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container50 />
      <Link18 />
    </div>
  );
}

function Section1() {
  return (
    <div className="relative rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(227,6,19,0.3)] shrink-0 w-full" data-name="Section" style={{ backgroundImage: "linear-gradient(143.616deg, rgb(227, 6, 19) 0%, rgb(185, 28, 28) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <div className="absolute bottom-[-62.54px] flex h-[197.433px] items-center justify-center right-[-55.61px] w-[192.105px]" style={{ "--transform-inner-width": "1183.328125", "--transform-inner-height": "22.21875" } as React.CSSProperties}>
            <div className="flex-none rotate-12">
              <Container48 />
            </div>
          </div>
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3c6f9100} fill="var(--fill-0, #0055A4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[11px] tracking-[2.2px] uppercase w-[250.16px]">
          <p className="leading-[16.5px] whitespace-pre-wrap">{`Schleswig-Holstein & Umland`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[9px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container53 />
      <Heading10 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[104.14px]">
        <p className="leading-[28px] whitespace-pre-wrap">Ahrensburg</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[179.47px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Hamburger Str. 165</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading11 />
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container55 />
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[33.61px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">2700kg</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background12 />
        <Background13 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link19() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container59 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link20() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container60 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link19 />
        <Link20 />
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container54 />
        <Container57 />
        <Container58 />
        <Link21 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[112.47px]">
        <p className="leading-[28px] whitespace-pre-wrap">Bad Oldesloe</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[168.33px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Industriestraße 5</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading12 />
      <Container63 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(37,211,102,0.1)] content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#25d366] text-[9px] uppercase w-[68.97px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">24h Geöffnet</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container62 />
        <Overlay2 />
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[32.06px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">1350kg</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background14 />
        <Background15 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link22() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container66 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link23() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container67 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link22 />
        <Link23 />
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container61 />
        <Container64 />
        <Container65 />
        <Link24 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[64.5px]">
        <p className="leading-[28px] whitespace-pre-wrap">Itzehoe</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[177.48px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Edendorfer Str. 110</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading13 />
      <Container70 />
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container69 />
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[33.61px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">2700kg</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background16 />
        <Background17 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link25() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container73 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link26() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container74 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link25 />
        <Link26 />
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container68 />
        <Container71 />
        <Container72 />
        <Link27 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[108.64px]">
        <p className="leading-[28px] whitespace-pre-wrap">Neumünster</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[184.09px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Rendsburger Str. 90</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading14 />
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container76 />
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[32.06px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">1350kg</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background18 />
        <Background19 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link28() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container80 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link29() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container81 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link28 />
        <Link29 />
      </div>
    </div>
  );
}

function Link30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container75 />
        <Container78 />
        <Container79 />
        <Link30 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[91.28px]">
        <p className="leading-[28px] whitespace-pre-wrap">Quickborn</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[150.55px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Kieler Str. 165</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading15 />
      <Container84 />
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container83 />
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Background20 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link31() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container87 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link32() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container88 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link31 />
        <Link32 />
      </div>
    </div>
  );
}

function Link33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container82 />
        <Container85 />
        <Container86 />
        <Link33 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[94.81px]">
        <p className="leading-[28px] whitespace-pre-wrap">Rendsburg</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[145.55px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Kieler Str. 70</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading16 />
      <Container91 />
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container90 />
      </div>
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[33.61px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">2700kg</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background21 />
        <Background22 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link34() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container94 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link35() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container95 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link34 />
        <Link35 />
      </div>
    </div>
  );
}

function Link36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container89 />
        <Container92 />
        <Container93 />
        <Link36 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[199.23px]">
        <p className="leading-[28px] whitespace-pre-wrap">Rendsburg-Büdelsdorf</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[162.16px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Hollerstraße 121</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading17 />
      <Container98 />
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container97 />
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Background23 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link37() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container101 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link38() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container102 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link37 />
        <Link38 />
      </div>
    </div>
  );
}

function Link39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow12() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container96 />
        <Container99 />
        <Container100 />
        <Link39 />
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[82.14px]">
        <p className="leading-[28px] whitespace-pre-wrap">Tornesch</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[179.19px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Ahrenloher Str. 102</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading18 />
      <Container105 />
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container104 />
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[32.06px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">1350kg</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background24 />
        <Background25 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link40() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container108 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link41() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container109 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link40 />
        <Link41 />
      </div>
    </div>
  );
}

function Link42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow13() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container103 />
        <Container106 />
        <Container107 />
        <Link42 />
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[83.08px]">
        <p className="leading-[28px] whitespace-pre-wrap">Witzhave</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[190.44px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Möllner Landstraße 2</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading19 />
      <Container112 />
    </div>
  );
}

function Container110() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container111 />
      </div>
    </div>
  );
}

function Background26() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background27() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[33.61px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">2700kg</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background26 />
        <Background27 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link43() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container115 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link44() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(227,6,19,0.2),0px_4px_6px_-4px_rgba(227,6,19,0.2)]" data-name="Link:shadow" />
      <Container116 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link43 />
        <Link44 />
      </div>
    </div>
  );
}

function Link45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow14() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container110 />
        <Container113 />
        <Container114 />
        <Link45 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[201.52px]">
        <p className="leading-[28px] whitespace-pre-wrap">Lichtenberg / Stralsund</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[11px] w-[185.08px]">
        <p className="leading-[16.5px] whitespace-pre-wrap">Shell Station • Am Umspannwerk 2</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading20 />
      <Container119 />
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container118 />
      </div>
    </div>
  );
}

function Background28() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[27.53px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">750kg</p>
      </div>
    </div>
  );
}

function Background29() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[32.06px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">1350kg</p>
      </div>
    </div>
  );
}

function Background30() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start px-[10px] py-[6px] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[9px] w-[33.61px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">2700kg</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <Background28 />
        <Background29 />
        <Background30 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link46() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-[1_0_0] gap-[7.99px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container122 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.22px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANRUFEN</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p26bac800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link47() {
  return (
    <div className="bg-[#e30613] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px py-[12px] relative rounded-[12px] self-stretch" data-name="Link">
      <Container123 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[56.58px]">
        <p className="leading-[15px] whitespace-pre-wrap">ANFAHRT</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start justify-center pt-[8px] relative w-full">
        <Link46 />
        <Link47 />
      </div>
    </div>
  );
}

function Link48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[9px] text-center tracking-[0.9px] uppercase w-[54.36px]">
          <p className="leading-[13.5px] whitespace-pre-wrap">{`Details >`}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow15() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[21px] relative w-full">
        <Container117 />
        <Container120 />
        <Container121 />
        <Link48 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder1 />
      <BackgroundBorderShadow6 />
      <BackgroundBorderShadow7 />
      <BackgroundBorderShadow8 />
      <BackgroundBorderShadow9 />
      <BackgroundBorderShadow10 />
      <BackgroundBorderShadow11 />
      <BackgroundBorderShadow12 />
      <BackgroundBorderShadow13 />
      <BackgroundBorderShadow14 />
      <BackgroundBorderShadow15 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-start left-0 px-[24px] right-0 top-[290.5px]" data-name="Container">
      <Container4 />
      <Section1 />
      <Container52 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-10 pl-[3.247px] pt-[7.674px] relative" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[160px] justify-center leading-[0] not-italic relative shrink-0 text-[160px] text-white w-[157.509px]">
        <p className="leading-[160px] whitespace-pre-wrap">contact_support</p>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.6px] w-[242.69px]">
        <p className="leading-[32px] whitespace-pre-wrap">Fragen zu Stationen?</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#fee2e2] text-[14px] text-center w-[268.27px]">
        <p className="leading-[20px] whitespace-pre-wrap">Unsere Zentrale hilft Ihnen gerne weiter.</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[16.417px] relative shrink-0 w-[16.396px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3958 16.4167">
        <g id="Container">
          <path d={svgPaths.p20067100} fill="var(--fill-0, #E30613)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link49() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[56px] items-center justify-center py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="Link">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-name="Link:shadow" />
      <Container127 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e30613] text-[14px] text-center tracking-[0.7px] w-[158.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">ZENTRALE ANRUFEN</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading21 />
      <Container126 />
      <Link49 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip p-[32px] right-[24px] rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(227,6,19,0.3)] top-[4592.5px]" data-name="Section" style={{ backgroundImage: "linear-gradient(149.681deg, rgb(227, 6, 19) 0%, rgb(185, 28, 28) 100%)" }}>
      <div className="absolute bottom-[-62.54px] flex h-[197.433px] items-center justify-center right-[-55.61px] w-[192.105px]" style={{ "--transform-inner-width": "1183.328125", "--transform-inner-height": "22.21875" } as React.CSSProperties}>
        <div className="flex-none rotate-12">
          <Container124 />
        </div>
      </div>
      <Container125 />
    </div>
  );
}

function Link50() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center tracking-[0.9px] uppercase w-[63.41px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">Impressum</p>
      </div>
    </div>
  );
}

function Link51() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center tracking-[0.9px] uppercase w-[78.7px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">Datenschutz</p>
      </div>
    </div>
  );
}

function Link52() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center tracking-[0.9px] uppercase w-[21.98px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">AGB</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-center left-[24px] right-[24px] top-[40px]" data-name="Container">
      <Link50 />
      <Link51 />
      <Link52 />
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[95.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9px] text-center tracking-[0.9px] uppercase w-[255.11px]">
        <p className="leading-[13.5px] whitespace-pre-wrap">© 2024 DVV RENT - MIETSTATIONEN ÜBERSICHT</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[149px] left-0 right-0 top-[4840.5px]" data-name="Footer">
      <Container128 />
      <div className="-translate-x-1/2 absolute bg-[#cbd5e1] h-[2px] left-1/2 top-[77.5px] w-[40px]" data-name="Horizontal Divider" />
      <Container129 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[5117.5px] relative shrink-0 w-full" data-name="Main">
      <Header />
      <Section />
      <Container3 />
      <Section2 />
      <Footer />
    </div>
  );
}

function Background31() {
  return (
    <div className="absolute bg-[#0055a4] content-stretch flex flex-col items-center left-0 py-[8px] right-0 top-[24px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.5px] uppercase w-[315.59px]">
        <p className="leading-[15px] whitespace-pre-wrap">+100.000 GLÜCKLICHE KUNDEN (4,9/5 STERNE ★★★★★)</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[8px] tracking-[-0.4px] uppercase w-[23.16px]">
        <p className="leading-[12px] whitespace-pre-wrap">HOME</p>
      </div>
    </div>
  );
}

function Link53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container131 />
      <Container132 />
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #E30613)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#e30613] text-[8px] tracking-[-0.4px] uppercase w-[43.27px]">
        <p className="leading-[12px] whitespace-pre-wrap">STATIONEN</p>
      </div>
    </div>
  );
}

function Link54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container133 />
      <Container134 />
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0 size-[25.317px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3167 25.3167">
        <g id="Container">
          <path d={svgPaths.p20a2d3e0} fill="var(--fill-0, #25D366)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#25d366] text-[8px] tracking-[-0.4px] uppercase w-[37.95px]">
        <p className="leading-[12px] whitespace-pre-wrap">KONTAKT</p>
      </div>
    </div>
  );
}

function Link55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container135 />
      <Container136 />
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p146eb80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[8px] tracking-[-0.4px] uppercase w-[40.89px]">
        <p className="leading-[12px] whitespace-pre-wrap">FUHRPARK</p>
      </div>
    </div>
  );
}

function Link56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container137 />
      <Container138 />
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[8px] tracking-[-0.4px] uppercase w-[33.47px]">
        <p className="leading-[12px] whitespace-pre-wrap">LEGALES</p>
      </div>
    </div>
  );
}

function Link57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container139 />
      <Container140 />
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[40.5px] items-center pl-[24.23px] pr-[24.3px] relative size-full">
          <Link53 />
          <Link54 />
          <Link55 />
          <Link56 />
          <Link57 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.95)] bottom-[19.5px] content-stretch flex flex-col items-start left-0 pt-px right-0" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none shadow-[0px_-4px_12px_0px_rgba(0,0,0,0.08)]" />
      <Container130 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] w-[24.64px]">
        <p className="leading-[16px] whitespace-pre-wrap">9:41</p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[8.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 9.33333">
        <g id="Container">
          <path d={svgPaths.pcec0b00} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[9.917px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9.91667">
        <g id="Container">
          <path d={svgPaths.p58eaa40} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[5.833px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 11.6667">
        <g id="Container">
          <path d={svgPaths.pbe2abc0} fill="var(--fill-0, #0F172A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Container143 />
      <Container144 />
      <Container145 />
    </div>
  );
}

function Background32() {
  return (
    <div className="absolute bg-white content-stretch flex h-[24px] items-center justify-between left-0 pt-[8px] px-[24px] right-0 top-0" data-name="Background">
      <Container141 />
      <Container142 />
    </div>
  );
}

export default function ModernBrandHeroLanding() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full" data-name="Modern Brand Hero Landing">
      <Main />
      <Background31 />
      <Nav />
      <Background32 />
    </div>
  );
}