import svgPaths from "./svg-phrfdy15rx";
import imgImageWithFallback from "./f48dbd5261b7156e16087efc60774ebd157fcfb4.png";
import imgScreenshot20260715At72635Pm11 from "./b4fd19348a9700868f43d80d98ff460ec1f00cae.png";
import imgPhotographyItemArea2 from "./f462f35a7d39f4f80537ec829ad0cec2ff85202d.png";

function TextBlockMedium() {
  return (
    <div className="relative shrink-0" data-name="TextBlockMedium">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[2.4px] uppercase whitespace-nowrap">Product Designer</p>
      </div>
    </div>
  );
}

function SmallContainer() {
  return (
    <div className="h-[16px] relative shrink-0 w-[768px]" data-name="SmallContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <TextBlockMedium />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[91.2px] not-italic relative shrink-0 text-[#1f1f1f] text-[96px] tracking-[-2.4px] whitespace-nowrap">Sam</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[91.2px] not-italic relative shrink-0 text-[#1f1f1f] text-[96px] tracking-[-2.4px] whitespace-nowrap">Mitkin</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[279.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function HeadingOne() {
  return (
    <div className="relative shrink-0 w-[768px]" data-name="HeadingOne">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function ParagraphContainer() {
  return (
    <div className="h-[97px] relative shrink-0 w-[672px]" data-name="ParagraphContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] not-italic relative shrink-0 text-[#3b4b59] text-[20px] w-[672px]">Product Designer focused on service design, customer experience, and research-driven solutions.</p>
      </div>
    </div>
  );
}

function ParagraphContainer1() {
  return (
    <div className="h-[102px] relative shrink-0 w-[576px]" data-name="ParagraphContainer1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-[576px]">
          <p className="leading-[26px] mb-0">After more than 10 years building and running a service business,</p>
          <p className="leading-[26px]">I transitioned into Product Design to combine user research, business thinking, and problem solving into meaningful digital products.</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap">View Projects</p>
      </div>
    </div>
  );
}

function LinkIcon1() {
  return (
    <div className="absolute inset-[20.83%]" data-name="Link Icon">
      <div className="absolute inset-[-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Link Icon">
            <path d="M0.625 5H9.375" id="Vector Icon 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d="M5 0.625L9.375 5L5 9.375" id="Vector Icon 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 overflow-clip size-[15px] top-0" data-name="Icon">
      <LinkIcon1 />
    </div>
  );
}

function LinkIcon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="LinkIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function ProjectLink() {
  return (
    <div className="bg-[#3b4b59] h-[48px] relative rounded-[8px] shrink-0 w-[175.023px]" data-name="ProjectLink">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[28px] py-[14px] relative size-full">
        <Paragraph2 />
        <LinkIcon />
      </div>
    </div>
  );
}

function Container2() {
  return <div className="absolute border border-[#3b4b59] border-solid h-[50px] left-0 rounded-[8px] top-0 w-[125.828px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 px-[29px] py-[15px] top-0 w-[125.828px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3b4b59] text-[14px] tracking-[0.35px] whitespace-nowrap">About Me</p>
    </div>
  );
}

function AboutMeLink() {
  return (
    <div className="h-[50px] relative rounded-[8px] shrink-0 w-[125.828px]" data-name="AboutMeLink">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="h-[106px] relative shrink-0 w-[768px]" data-name="LinkContainer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[56px] relative size-full">
        <ProjectLink />
        <AboutMeLink />
      </div>
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="content-stretch flex flex-col h-[544px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="InnerContainer">
      <SmallContainer />
      <HeadingOne />
      <ParagraphContainer />
      <ParagraphContainer1 />
      <LinkContainer />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="ImageWithFallback">
      <InnerContainer />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[382px] relative rounded-[16px] shrink-0 w-[310px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <ImageWithFallback />
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-[1143px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] py-[128px] relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-[#f5f4ef] min-h-[862px] relative shrink-0" data-name="Hero Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center min-h-[inherit] pt-[64px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function PortfolioLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="Portfolio Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[2.4px] uppercase whitespace-nowrap">Portfolio</p>
      </div>
    </div>
  );
}

function HeadingTwo() {
  return (
    <div className="h-[76px] relative shrink-0 w-[326.594px]" data-name="Heading Two">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[60px] not-italic relative shrink-0 text-[#1f1f1f] text-[48px] tracking-[-1.2px] whitespace-nowrap">Selected Work</p>
      </div>
    </div>
  );
}

function WorkCardContainer() {
  return (
    <div className="relative shrink-0 w-[326.594px]" data-name="Work Card Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <PortfolioLabel />
        <HeadingTwo />
      </div>
    </div>
  );
}

function WorkInnerContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Work Inner Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <WorkCardContainer />
      </div>
    </div>
  );
}

function LargeLogo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Large Logo">
      <div className="h-[24px] relative shrink-0 w-[149.639px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.639 24">
          <g id="Vector">
            <path d={svgPaths.p1daab500} fill="#2769B1" />
            <path d={svgPaths.p12581e80} fill="white" />
            <path d={svgPaths.p21566900} fill="var(--fill-0, black)" />
            <path d={svgPaths.p10ee4000} fill="var(--fill-0, black)" />
            <path d={svgPaths.p15a16c80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19261e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p374cf8f0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p27bb2900} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1e3e7a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p105a200} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 w-[149.639px]" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <LargeLogo />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative shrink-0" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[153px] relative shrink-0 w-[327px]" data-name="Screenshot 2026-07-15 at 7.26.35 PM 1 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260715At72635Pm11} />
        </div>
      </div>
    </div>
  );
}

function CardContainer2() {
  return (
    <div className="bg-[#f5f5f5] h-[256.242px] relative shrink-0 w-[341.664px]" data-name="Card Container 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Logo />
        <App />
      </div>
    </div>
  );
}

function WorkDescriptionLabel() {
  return (
    <div className="h-[28px] relative shrink-0 w-[285.664px]" data-name="Work Description Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[1.8px] uppercase whitespace-nowrap">UX Research · UX/UI Design</p>
      </div>
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="h-[40px] relative shrink-0 w-[285.664px]" data-name="Project Title">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27.5px] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] whitespace-nowrap">MoveEase</p>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="flex-[115_0_0] min-h-px relative w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[286px]">A mobile app that helps people moving to a new home stay ahead of address updates, deadlines, and paperwork.</p>
      </div>
    </div>
  );
}

function ProjectLinkIcon() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Project Link Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Project Link Icon">
          <path d="M2.70833 6.5H10.2917" id="Vector Icon 3" stroke="var(--stroke-0, #3B4B59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p17e9b940} id="Vector Icon 4" stroke="var(--stroke-0, #3B4B59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function ProjectLink1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3b4b59] text-[14px] whitespace-nowrap">View Case Study</p>
        <ProjectLinkIcon />
      </div>
    </div>
  );
}

function TextDescription() {
  return (
    <div className="flex-[258.5_0_0] min-h-px relative w-full" data-name="Text Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[28px] relative size-full">
        <WorkDescriptionLabel />
        <ProjectTitle />
        <ParagraphMargin />
        <ProjectLink1 />
      </div>
    </div>
  );
}

function WorkItemCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Work Item Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContainer2 />
        <TextDescription />
      </div>
      <div aria-hidden className="absolute border border-[rgba(31,31,31,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AddButtonText() {
  return (
    <div className="relative shrink-0" data-name="Add Button Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(59,75,89,0.3)] text-center whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function ContainerButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[48px]" data-name="Container Button">
      <div aria-hidden className="absolute border-2 border-[rgba(59,75,89,0.3)] border-dashed inset-0 pointer-events-none" />
      <AddButtonText />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <ContainerButton />
      </div>
    </div>
  );
}

function ParagraphSection() {
  return (
    <div className="h-[28px] relative shrink-0 w-[92.914px]" data-name="Paragraph Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(59,75,89,0.4)] text-center tracking-[1.2px] uppercase whitespace-nowrap">In Progress</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[92.914px]" data-name="Container 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerMargin2 />
        <ParagraphSection />
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="bg-[#e8e7e1] h-[256.242px] relative shrink-0 w-full" data-name="Card Container 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container3 />
      </div>
    </div>
  );
}

function ServiceLabel() {
  return (
    <div className="h-[28px] relative shrink-0 w-[285.664px]" data-name="Service Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[1.8px] uppercase whitespace-nowrap">Case Study in Progress</p>
      </div>
    </div>
  );
}

function WorkTitleSection() {
  return (
    <div className="h-[40px] relative shrink-0 w-[285.664px]" data-name="Work Title Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27.5px] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] whitespace-nowrap">Coming Soon</p>
      </div>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="flex-[115_0_0] min-h-px relative w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[286px]">A new case study is currently in development. Check back soon for the full write-up.</p>
      </div>
    </div>
  );
}

function PlaceholderText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Placeholder Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(59,75,89,0.3)] whitespace-nowrap">Coming Soon</p>
      </div>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="flex-[258.5_0_0] min-h-px relative w-full" data-name="Card Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[28px] relative size-full">
        <ServiceLabel />
        <WorkTitleSection />
        <ParagraphMargin1 />
        <PlaceholderText />
      </div>
    </div>
  );
}

function WorkCard() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Work Card 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContainer />
        <CardDescription />
      </div>
      <div aria-hidden className="absolute border border-[rgba(31,31,31,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AddButtonText1() {
  return (
    <div className="relative shrink-0" data-name="Add Button Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(59,75,89,0.3)] text-center whitespace-nowrap">+</p>
      </div>
    </div>
  );
}

function ContainerButton1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[48px]" data-name="Container Button">
      <div aria-hidden className="absolute border-2 border-[rgba(59,75,89,0.3)] border-dashed inset-0 pointer-events-none" />
      <AddButtonText1 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <ContainerButton1 />
      </div>
    </div>
  );
}

function ParagraphSection1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[92.914px]" data-name="Paragraph Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(59,75,89,0.4)] text-center tracking-[1.2px] uppercase whitespace-nowrap">In Progress</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[92.914px]" data-name="Container 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ContainerMargin3 />
        <ParagraphSection1 />
      </div>
    </div>
  );
}

function CardContainer1() {
  return (
    <div className="bg-[#e8e7e1] h-[256.242px] relative shrink-0 w-full" data-name="Card Container 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
      </div>
    </div>
  );
}

function ServiceLabel1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[285.664px]" data-name="Service Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[1.8px] uppercase whitespace-nowrap">Case Study in Progress</p>
      </div>
    </div>
  );
}

function WorkTitleSection1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[285.664px]" data-name="Work Title Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27.5px] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] whitespace-nowrap">Coming Soon</p>
      </div>
    </div>
  );
}

function ParagraphMargin2() {
  return (
    <div className="flex-[115_0_0] min-h-px relative w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[286px]">A new case study is currently in development. Check back soon for the full write-up.</p>
      </div>
    </div>
  );
}

function PlaceholderText1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Placeholder Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(59,75,89,0.3)] whitespace-nowrap">Coming Soon</p>
      </div>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="flex-[258.5_0_0] min-h-px relative w-full" data-name="Card Description">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[28px] relative size-full">
        <ServiceLabel1 />
        <WorkTitleSection1 />
        <ParagraphMargin2 />
        <PlaceholderText1 />
      </div>
    </div>
  );
}

function WorkCard1() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Work Card 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContainer1 />
        <CardDescription1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(31,31,31,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[___343.66px_343.66px_343.66px] grid-rows-[_516.74px] h-[516.742px] relative rounded-[4px] shrink-0 w-full" data-name="Container Margin">
      <WorkItemCard />
      <WorkCard />
      <WorkCard1 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function WorkContainer() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="Work Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <WorkInnerContainer />
        <ContainerMargin />
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <div className="bg-[#f5f4ef] relative shrink-0 w-full" data-name="Work Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[144px] relative size-full">
        <WorkContainer />
      </div>
    </div>
  );
}

function PhotographyItemArea() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Photography Item Area 2">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPhotographyItemArea2} />
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
      </div>
    </div>
  );
}

function AboutLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="About Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[2.4px] uppercase whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function MainHeading() {
  return (
    <div className="h-[140px] relative shrink-0 w-[491.5px]" data-name="Main Heading">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[48px] tracking-[-1.2px] whitespace-nowrap">
          <p className="leading-[60px] mb-0">Rooted in</p>
          <p className="leading-[60px]">real experience.</p>
        </div>
      </div>
    </div>
  );
}

function ExperienceParagraph() {
  return (
    <div className="relative shrink-0 w-[491.5px]" data-name="Experience Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3b4b59] text-[16px] w-[492px]">
          <p className="leading-[26px] mb-0">I spent over a decade working directly with clients, building businesses, and improving customer experiences.</p>
          <p className="leading-[26px]">Today I bring those same skills into Product Design through research, strategy, and user-centered problem solving.</p>
        </div>
      </div>
    </div>
  );
}

function SkillsParagraph() {
  return (
    <div className="relative shrink-0 w-[491.5px]" data-name="Skills Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[40px] pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-[492px]">My background in service operations helps me see systems, people, and friction points together. I design for real constraints, not ideal conditions.</p>
      </div>
    </div>
  );
}

function LinkIconSection() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Link Icon Section">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Link Icon Section">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #3B4B59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pf23dd00} id="Vector_2" stroke="var(--stroke-0, #3B4B59)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function LinkSection() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[50px] items-center left-0 px-[29px] py-[15px] rounded-[8px] top-0" data-name="Link Section">
      <div aria-hidden className="absolute border border-[#3b4b59] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3b4b59] text-[14px] tracking-[0.35px] whitespace-nowrap">Read More</p>
      <LinkIconSection />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <LinkSection />
      </div>
    </div>
  );
}

function AboutPreviewContainer() {
  return (
    <div className="col-2 h-[474.25px] justify-self-stretch relative row-1 self-center shrink-0" data-name="About Preview Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <AboutLabel />
        <MainHeading />
        <ExperienceParagraph />
        <SkillsParagraph />
        <Container5 />
      </div>
    </div>
  );
}

function AboutInnerContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="About Inner Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[96px] gap-y-[96px] grid grid-cols-[__491.50px_491.50px] grid-rows-[_614.38px] relative size-full">
        <PhotographyItemArea />
        <AboutPreviewContainer />
      </div>
    </div>
  );
}

function AboutContainer() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="About Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <AboutInnerContainer />
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="About Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[144px] relative size-full">
        <AboutContainer />
      </div>
    </div>
  );
}

function PhilosophyTitleSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Philosophy Title Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[2.4px] uppercase whitespace-nowrap">Approach</p>
      </div>
    </div>
  );
}

function PhilosophyHeading() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1079px]" data-name="Philosophy Heading">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[60px] not-italic relative shrink-0 text-[48px] text-white tracking-[-1.2px] whitespace-nowrap">Design Principles</p>
      </div>
    </div>
  );
}

function PhilosophyInnerContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Philosophy Inner Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <PhilosophyTitleSection />
        <PhilosophyHeading />
      </div>
    </div>
  );
}

function PrincipleNumber() {
  return (
    <div className="relative shrink-0 w-full" data-name="Principle Number">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[2.4px] whitespace-nowrap">01</p>
      </div>
    </div>
  );
}

function PrincipleTitleSection() {
  return (
    <div className="h-[60px] relative shrink-0 w-[263px]" data-name="Principle Title Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27.5px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Clarity over complexity.</p>
      </div>
    </div>
  );
}

function PrincipleDescriptionSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Principle Description Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[263px]">
          <p className="leading-[22.75px] mb-0">Good design removes friction.</p>
          <p className="leading-[22.75px] mb-0">Every element earns its place.</p>
          <p className="leading-[22.75px]">When in doubt, simplify.</p>
        </div>
      </div>
    </div>
  );
}

function PrincipleInnerContainer() {
  return (
    <div className="bg-[#3b4b59] col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Principle Inner Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[48px] relative size-full">
        <PrincipleNumber />
        <PrincipleTitleSection />
        <PrincipleDescriptionSection />
      </div>
    </div>
  );
}

function PrincipleNumber1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Principle Number 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[2.4px] whitespace-nowrap">02</p>
      </div>
    </div>
  );
}

function ResearchTitleSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Research Title Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27.5px] not-italic relative shrink-0 text-[20px] text-white w-[263px]">Research before assumptions.</p>
      </div>
    </div>
  );
}

function ResearchDescriptionSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Research Description Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[263px]">Real understanding comes from listening. I build from evidence, not intuition alone.</p>
      </div>
    </div>
  );
}

function DesignContainer() {
  return (
    <div className="bg-[#3b4b59] col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Design Container 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[48px] relative size-full">
        <PrincipleNumber1 />
        <ResearchTitleSection />
        <ResearchDescriptionSection />
      </div>
    </div>
  );
}

function PrincipleNumber2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Principle Number 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[2.4px] whitespace-nowrap">03</p>
      </div>
    </div>
  );
}

function LessTitleSection() {
  return (
    <div className="h-[60px] relative shrink-0 w-[263px]" data-name="Less Title Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27.5px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Less, but better.</p>
      </div>
    </div>
  );
}

function LessDescriptionSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Less Description Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] w-[263px]">
          <p className="leading-[22.75px] mb-0">Restraint is a skill.</p>
          <p className="leading-[22.75px]">The most enduring products do one thing exceptionally well.</p>
        </div>
      </div>
    </div>
  );
}

function DesignPhilosophyContainer() {
  return (
    <div className="bg-[#3b4b59] col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Design Philosophy Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[48px] relative size-full">
        <PrincipleNumber2 />
        <LessTitleSection />
        <LessDescriptionSection />
      </div>
    </div>
  );
}

function PrincipleContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] gap-x-px gap-y-px grid grid-cols-[___359px_359px_359px] grid-rows-[_283.25px] h-[283.25px] relative shrink-0 w-full" data-name="Principle Container">
      <PrincipleInnerContainer />
      <DesignContainer />
      <DesignPhilosophyContainer />
    </div>
  );
}

function PhilosophyMarginContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Philosophy Margin Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <PrincipleContainer />
      </div>
    </div>
  );
}

function PhilosophyContainer() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="Philosophy Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <PhilosophyInnerContainer />
        <PhilosophyMarginContainer />
      </div>
    </div>
  );
}

function PhilosophySection() {
  return (
    <div className="bg-[#3b4b59] relative shrink-0 w-full" data-name="Philosophy Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[144px] relative size-full">
        <PhilosophyContainer />
      </div>
    </div>
  );
}

function ContactMainText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact Main Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#cc6324] text-[12px] tracking-[2.4px] uppercase whitespace-nowrap">Get in Touch</p>
      </div>
    </div>
  );
}

function ContactMainHeading() {
  return (
    <div className="h-[140px] relative shrink-0 w-[672px]" data-name="Contact Main Heading">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[20px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[48px] tracking-[-1.2px] whitespace-nowrap">
          <p className="leading-[60px] mb-0">{`Let's Build Better`}</p>
          <p className="leading-[60px]">Experiences.</p>
        </div>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="relative shrink-0" data-name="Footer Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3b4b59] text-[16px] w-[512px]">
          <p className="leading-[26px] mb-0">Currently seeking Product Design opportunities.</p>
          <p className="leading-[26px]">Open to full-time, contract, and freelance work.</p>
        </div>
      </div>
    </div>
  );
}

function LinkedinLogo() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LinkedinLogo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="LinkedinLogo">
          <path d={svgPaths.p1c587500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedInButton() {
  return (
    <div className="bg-[#3b4b59] h-full relative rounded-[8px] shrink-0" data-name="LinkedIn Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[28px] py-[14px] relative size-full">
          <LinkedinLogo />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap">LinkedIn</p>
        </div>
      </div>
    </div>
  );
}

function EnvelopeSimple() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="EnvelopeSimple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="EnvelopeSimple">
          <path d={svgPaths.p1beb7400} fill="var(--fill-0, #3B4B59)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EmailButton() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0" data-name="Email Button">
      <div aria-hidden className="absolute border border-[#3b4b59] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[29px] py-[15px] relative size-full">
          <EnvelopeSimple />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3b4b59] text-[14px] tracking-[0.35px] whitespace-nowrap">Email</p>
        </div>
      </div>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="h-[98px] relative shrink-0 w-[672px]" data-name="Buttons Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start pt-[48px] relative size-full">
        <LinkedInButton />
        <EmailButton />
      </div>
    </div>
  );
}

function ContactInnerContainer() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-[672px]" data-name="Contact Inner Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <ContactMainText />
        <ContactMainHeading />
        <FooterSection />
        <ButtonsContainer />
      </div>
    </div>
  );
}

function ContactContainer() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="Contact Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <ContactInnerContainer />
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-[#f5f4ef] relative shrink-0 w-full" data-name="Contact Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[144px] relative size-full">
        <ContactContainer />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <PhilosophySection />
        <ContactSection />
      </div>
    </div>
  );
}

function PositionedLogoDisplay() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Positioned Logo Display">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[0.55%_48.75%_1.87%_0]" data-name="Positioned Vector Element">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6012 27.3231">
            <path d={svgPaths.pa10f200} fill="var(--fill-0, #F5F4EF)" id="Positioned Vector Element" />
          </svg>
        </div>
        <div className="absolute inset-[0.55%_0_0.55%_44.73%]" data-name="Positioned Secondary Vector Element">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.531 27.6923">
            <path d={svgPaths.p19ca2100} fill="var(--fill-0, #F5F4EF)" id="Positioned Secondary Vector Element" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoPositioningSection() {
  return (
    <div className="h-[28px] relative shrink-0 w-[48px]" data-name="Logo Positioning Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <PositionedLogoDisplay />
      </div>
    </div>
  );
}

function FooterCopyrightSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Copyright Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] tracking-[0.3px] whitespace-nowrap">© 2026 Sam Mitkin. All rights reserved.</p>
      </div>
    </div>
  );
}

function FooterLogoSection() {
  return (
    <div className="relative shrink-0" data-name="Footer Logo Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <LogoPositioningSection />
        <FooterCopyrightSection />
      </div>
    </div>
  );
}

function LinkedinLogo1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="LinkedinLogo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="LinkedinLogo">
          <path d={svgPaths.p1c587500} fill="var(--fill-0, #797979)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <LinkedinLogo1 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.44px] uppercase whitespace-nowrap">LinkedIn</p>
      </div>
    </div>
  );
}

function EnvelopeSimple1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="EnvelopeSimple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="EnvelopeSimple">
          <path d={svgPaths.p1beb7400} fill="var(--fill-0, #797979)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <EnvelopeSimple1 />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.44px] uppercase whitespace-nowrap">Email</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link />
        <Link1 />
      </div>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="h-[54px] max-w-[1152px] relative shrink-0 w-[1143px]" data-name="Footer Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[32px] relative size-full">
        <FooterLogoSection />
        <Container6 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[48px] relative size-full">
        <FooterContainer />
      </div>
    </div>
  );
}

function Application() {
  return (
    <div className="relative shrink-0 w-[1143px]" data-name="Application">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[862px] relative shrink-0" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Application />
      </div>
    </div>
  );
}

function PositionedLogoDisplay1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Positioned Logo Display">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[0.55%_48.75%_1.87%_0]" data-name="Positioned Vector Element">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6012 27.3231">
            <path d={svgPaths.pa10f200} fill="var(--fill-0, #3B4B59)" id="Positioned Vector Element" />
          </svg>
        </div>
        <div className="absolute inset-[0.55%_0_0.55%_44.73%]" data-name="Positioned Secondary Vector Element">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.531 27.6923">
            <path d={svgPaths.p19ca2100} fill="var(--fill-0, #3B4B59)" id="Positioned Secondary Vector Element" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoPositioningSection1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[48px]" data-name="Logo Positioning Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <PositionedLogoDisplay1 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3b4b59] text-[14px] tracking-[0.35px] whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3b4b59] text-[14px] tracking-[0.35px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#3b4b59] text-[14px] tracking-[0.35px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#3b4b59] content-stretch flex flex-col items-start px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-name="Link">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap">View Work</p>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="relative shrink-0" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[8px] relative size-full">
        <Link5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link2 />
        <Link3 />
        <Link4 />
        <LinkMargin />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[1143px]" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] relative size-full">
        <LogoPositioningSection1 />
        <Container7 />
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="bg-[#f5f4ef] content-stretch flex flex-col items-start relative size-full" data-name="Portfolio">
      <Body />
      <Nav />
    </div>
  );
}