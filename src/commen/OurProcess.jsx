import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import processimg from "../assets/processimg.webp";
import check from "../assets/check.webp";
import rightcorenr from "../assets/processrightcorner.png";
import leftcorenr from "../assets/proseccleftcorner.png"

const STEPS = [
  {
    label: "Understand",
    heading: "Every stage is strategically planned, continuously optimized, and aligned with your business objectives.",
    body: "Every stage is strategically planned, continuously optimized, and aligned with your business objectives.",
    checklist: [
      "Understand your business, audience, competitors, and search opportunities.",
      "Strengthen your website, content, technical SEO, and search performance.",
      "Establish credibility through relevant content, backlinks, and brand signals.",
      "Grow your presence Over Google, Local Search, AEO and AI-powered search.",
    ],
  },
  {
    label: "Build Authority",
    heading: "Authority That Compounds Over Time",
    body: "Every stage is strategically planned, continuously optimized, and aligned with your business objectives.",
    checklist: [
      "Improve website content, and page experience for stronger search performance.",
      "Targeting keywords and optimize pages to attract qualified organic traffic.",
      "Fix technical issues that impact crawling, indexing, rankings, and user experience.",
      "Iterating SEO strategies based on search trends and performance insights.",
    ],
  },
  {
    label: "Build Authority",
    heading: "Authority That Compounds Over Time",
    body: "Every stage is strategically planned, continuously optimized, and aligned with your business objectives.",
    checklist: [
      "Create valuable, expert-led content that establishes your brand as a trusted industry voice.",
      "Create valuable, expert-led content that establishes your brand as a trusted industry voice.",
      "Strengthen signals through expertise, credibility, reviews, and brand mentions.",
      "Build topical authority by covering the subjects your audience searches for most.",
    ],
  },
  {
    label: "Expand Visibility",
    heading: "Visibility Across Every Surface That Matters",
    body: "Every stage is strategically planned, continuously optimized, and aligned with your business objectives.",
    checklist: [
      "Increase your presence on Google, Local Search, AI Search, and answer engines.",
      "Optimize content for featured snippets, voice search, and generative search results.",
      "Strengthen local visibility through optimized business profiles and location pages.",
      "Expand your reach across new keywords, audiences, platforms, and search opportunities.",
    ],
  },
  {
    label: "Measure & Grow",
    heading: "Reporting That Ties SEO To Real Revenue",
    body: "We track the metrics that matter to your business, not just rankings, so you always know what's working.",
    checklist: [
      "Track rankings, organic traffic, leads, conversions, and revenue to measure SEO impact.",
      "Analyze performance data to identify opportunities and eliminate what isn't working.",
      "Continuously test, optimize, and adapt strategies to changing search algorithms.",
      "Scale successful SEO initiatives to drive sustainable, long-term business growth.",
    ],
  },
];

const buttonColors = ["#282828", "#1D1D1D", "#282828", "#343434", "#403F3F"];

const OurProcess = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const current = STEPS[active];

  const scrollerRef = useRef(null);
  const tabRefs = useRef([]);

  // On phones the tabs scroll sideways. Keep the active tab centered.
  // (Scrolls only the tab strip, never the page.)
  useEffect(() => {
    const scroller = scrollerRef.current;
    const tab = tabRefs.current[active];
    if (!scroller || !tab) return;
    scroller.scrollTo({
      left: tab.offsetLeft - (scroller.clientWidth - tab.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-12 sm:px-8 md:px-12 md:py-20 lg:px-20 lg:py-24" id="our-process">
      {/* diagonal corner ribbon, top-right (smaller on phones so it never covers text) */}
     <img src={rightcorenr} alt="" aria-hidden="true" className="pointer-events-none absolute right-0 top-0 w-16 select-none sm:w-24 md:w-32 lg:w-56" />
<img src={leftcorenr} alt="" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 w-16 select-none sm:w-24 md:w-32 lg:w-44" />

      <div className="relative mx-auto">
        {/* header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#E8623E]" />
            <span className="font-[Inter] text-xs font-bold uppercase tracking-wider text-[#E8623E] sm:text-sm">
              Our Process
            </span>
          </div>

          <h2 className="mt-[10px] font-[Poppins] text-2xl !font-extrabold text-[#1c1b19] !leading-[1.3] sm:text-3xl md:text-4xl md:!leading-10">
            Osumare: <br /> Leading SEO Experts in Pune, India
          </h2>

          <p className="mx-auto mt-[10px] max-w-2xl font-[Inter] text-sm font-light leading-relaxed text-[#1c1b19]/60 sm:text-base">
            Rank Your Website on Google's First Page with Future-Ready AI SEO
            Strategies
          </p>
        </div>

        {/* arrow stepper / tabs
            < md : single row that scrolls sideways (chevrons stay intact)
            >= md: tabs share the full width */}
        <div
          ref={scrollerRef}
          className="relative mt-6 flex w-full snap-x overflow-x-auto md:mt-5 md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {STEPS.map((step, i) => {
            const isActive = i === active;
            const isHovered = i === hovered;
            const isFirst = i === 0;
            const depth = "14px";
            const clip = `polygon(0 0, calc(100% - ${depth}) 0, 100% 50%, calc(100% - ${depth}) 100%, 0 100%, ${depth} 50%)`;

            const bg = isActive || isHovered ? "#E8623E" : buttonColors[i];

            return (
              <div
                key={i}
                ref={(el) => (tabRefs.current[i] = el)}
                style={{
                  clipPath: clip,
                  marginLeft: isFirst ? 0 : `-${depth}`,
                }}
                className="h-12 min-w-[150px] flex-none snap-center bg-white p-[0.5px] sm:h-14 md:h-16 md:flex-1"
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    clipPath: clip,
                    backgroundColor: bg,
                  }}
                  className="flex h-full w-full items-center justify-center whitespace-nowrap px-5 font-[Inter] text-sm font-semibold text-white transition-colors duration-200 md:px-6 md:text-base"
                >
                  {step.label}
                </button>
              </div>
            );
          })}
        </div>

        {/* body */}
        <div className="mt-8 grid grid-cols-1 items-center gap-10 sm:mt-10 lg:grid-cols-12 lg:gap-12">
          {/* left: copy + checklist, swaps with the active tab */}
          <div className="lg:col-span-7">
            <h3 className="font-[Poppins] text-xl font-semibold text-[#1c1b19] sm:text-2xl">
              A Process Built to Deliver Measurable Growth
            </h3>
            <p className="mt-3 font-[Inter] text-sm font-normal leading-relaxed text-[#1c1b19]/60 sm:text-base">
              {current.body}
            </p>

            <ul className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-4">
              {current.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img
                    src={check}
                    alt=""
                    className="mt-0.5 w-6 shrink-0 sm:mt-0 sm:w-8"
                  />
                  <span className="font-[Inter] text-sm font-semibold text-black sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF8056] px-4 py-3 text-center font-[Inter] text-sm font-semibold text-white transition-colors hover:bg-[#d6532f] sm:mt-9 sm:w-auto"
            >
              Claim Your Free Custom SEO Audit
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
          </div>

          {/* right: photo */}
          <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:col-span-5 lg:max-w-none">
            <img
              src={processimg}
              alt="Osumare team at work"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;