import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Box } from "lucide-react";

const STEPS = [
  {
    label: "Understand",
    heading: "A Process Built To Deliver Measurable Growth",
    body: "We start by mapping your business, audience, and competitive landscape to uncover where the real search opportunities are.",
    checklist: [
      "Understand your business, audience, competitors, and search opportunities.",
      "Audit your current organic footprint against industry benchmarks.",
      "Identify quick-win keywords and long-term ranking targets.",
    ],
  },
  {
    label: "Optimize",
    heading: "Optimization Built On Technical & Content Fundamentals",
    body: "Every page is tuned for both search engines and the humans reading it, so rankings translate into real engagement.",
    checklist: [
      "Strengthen your website, content, technical SEO, and search performance.",
      "Fix crawl, indexing, and core web vitals issues holding you back.",
      "Rewrite and structure content around E-E-A-T best practices.",
    ],
  },
  {
    label: "Build Authority",
    heading: "Authority That Compounds Over Time",
    body: "We earn the signals that convince both search engines and buyers that your brand is the trusted choice.",
    checklist: [
      "Establish credibility through relevant content, backlinks, and brand signals.",
      "Secure digital PR placements on high-authority publications.",
      "Grow branded search demand through consistent visibility.",
    ],
  },
  {
    label: "Expand Visibility",
    heading: "Visibility Across Every Surface That Matters",
    body: "Your brand shows up everywhere your customers are searching, from classic search to AI answer engines.",
    checklist: [
      "Grow your presence over Google, Local Search, AEO and AI-powered search.",
      "Optimize Google Business Profile and hyper-local listings.",
      "Get surfaced and cited inside AI-generated answers.",
    ],
  },
  {
    label: "Measure & Grow",
    heading: "Reporting That Ties SEO To Real Revenue",
    body: "We track the metrics that matter to your business, not just rankings, so you always know what's working.",
    checklist: [
      "Track organic traffic, leads, and revenue in one dashboard.",
      "Run monthly reviews to double down on what's converting.",
      "Continuously refine strategy as algorithms and markets shift.",
    ],
  },
];

// Replace with your own team photography.
const TEAM_PHOTO = "https://picsum.photos/seed/osumare-team/700/560";

const OurProcess = () => {
  const [active, setActive] = useState(0);
  const current = STEPS[active];

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-10 md:py-20">
      {/* diagonal corner ribbon, top-right */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 overflow-hidden">
        <div
          className="absolute h-24 w-[220%] rotate-45 bg-[#1c1b19]"
          style={{ top: "38%", left: "-20%" }}
        />
        <div
          className="absolute h-10 w-[220%] rotate-45 bg-[#E8623E]"
          style={{ top: "58%", left: "-20%" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#E8623E]" />
            <span className="font-[Inter] text-xs font-semibold uppercase tracking-wider text-[#E8623E]">
              Our Process
            </span>
          </div>

          <h2 className="mt-3 font-[Poppins] text-2xl font-extrabold leading-tight text-[#1c1b19] sm:text-3xl">
            Osumare: Leading SEO Experts in Pune, India
          </h2>

          <p className="mt-3 font-[Inter] text-sm font-light text-[#1c1b19]/60">
            Rank Your Website on Google's First Page with Future-Ready AI SEO
            Strategies
          </p>
        </div>

        {/* arrow stepper / tabs */}
        <div className="mt-8 flex w-full flex-wrap justify-center">
          {STEPS.map((step, i) => {
            const isActive = i === active;
            const isFirst = i === 0;
            const depth = "14px";
            const clip = `polygon(0 0, calc(100% - ${depth}) 0, 100% 50%, calc(100% - ${depth}) 100%, 0 100%, ${depth} 50%)`;

            return (
              <div
                key={step.label}
                style={{ clipPath: clip, marginLeft: isFirst ? 0 : `-${depth}` }}
                className="h-11 min-w-[140px] flex-1 bg-white p-[0.5px]"
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  style={{ clipPath: clip }}
                  className={
                    "flex h-full w-full items-center justify-center px-6 font-[Inter] text-xs font-semibold text-white transition-colors sm:text-sm " +
                    (isActive ? "bg-[#E8623E]" : "bg-[#1c1b19] hover:bg-[#2a2926]")
                  }
                >
                  {step.label}
                </button>
              </div>
            );
          })}
        </div>

        {/* body */}
        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left: copy + checklist, swaps with the active tab */}
          <div>
            <h3 className="font-[Poppins] text-xl font-bold text-[#1c1b19] sm:text-2xl">
              {current.heading}
            </h3>
            <p className="mt-3 max-w-md font-[Inter] text-sm font-light leading-relaxed text-[#1c1b19]/60">
              {current.body}
            </p>

            <ul className="mt-7 flex flex-col gap-4">
              {current.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E8623E]" />
                  <span className="font-[Inter] text-sm font-medium text-[#1c1b19]/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#E8623E] px-6 py-3.5 font-[Inter] text-sm font-medium text-white transition-colors hover:bg-[#d6532f]"
            >
              Claim Your Free Custom SEO Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* right: framed photo */}
          <div className="relative mx-auto w-full max-w-md pb-6 pr-6 pt-6 lg:max-w-none">
            {/* outline frame behind the photo */}
            <div className="absolute right-0 top-0 h-full w-full rounded-md border border-[#1c1b19]/15" />

            <div className="relative overflow-hidden rounded-md shadow-xl">
              <img
                src={TEAM_PHOTO}
                alt="Osumare team at work"
                className="h-full w-full object-cover grayscale"
              />
            </div>

            {/* decorative black box with cube icon */}
            <div className="absolute -bottom-2 left-4 flex h-16 w-16 items-center justify-center rounded-md bg-[#1c1b19] shadow-lg">
              <Box className="h-7 w-7 text-white" strokeWidth={1.5} />
            </div>

            {/* small orange corner accent */}
            <span className="absolute bottom-0 right-0 h-4 w-4 bg-[#E8623E]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;