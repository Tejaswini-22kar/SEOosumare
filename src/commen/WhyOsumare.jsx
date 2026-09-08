import React from "react";
import {
  TrendingUp,
  Eye,
  Target,
  LineChart,
  ShieldCheck,
  Percent,
  Wallet,
  MapPin,
  ArrowRight,
} from "lucide-react";

const FEATURES = [
  {
    icon: TrendingUp,
    title: "Increase Website Traffic",
    body: "Attract continuous, high-volume organic visitors directly to your core service pages.",
  },
  {
    icon: Eye,
    title: "Build Brand Visibility",
    body: "Dominate top search positions to ensure prospective customers see your brand first.",
  },
  {
    icon: Target,
    title: "Reach the Right Audience",
    body: "Target hyper-specific buyer-intent keywords to capture customers ready to purchase.",
  },
  {
    icon: LineChart,
    title: "Get Long-Term Online Growth",
    body: "Generate compounding organic traffic and sales leads month over month.",
  },
  {
    icon: ShieldCheck,
    title: "Increase Trust & Credibility",
    body: "Ranking on Google Page 1 establishes instant brand authority and user confidence.",
  },
  {
    icon: Percent,
    title: "Higher Conversion Rates",
    body: "Organic search users convert at higher rates due to established search trust.",
  },
  {
    icon: Wallet,
    title: "Cost-Effective Marketing",
    body: "Lower your Customer Acquisition Cost (CAC) compared to continuous pay-per-click ads.",
  },
  {
    icon: MapPin,
    title: "Boost Local Visibility",
    body: "Capture local searches and store visits via Google Maps optimization.",
  },
];

const WhyOsumare = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f3f1] px-6 py-20 sm:px-10">
      {/* decorative dashed circles */}
      <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full border border-dashed border-[#1c1b19]/15" />
      <div className="pointer-events-none absolute -left-10 bottom-16 h-28 w-28 rounded-full border border-dashed border-[#1c1b19]/15" />
      <div className="pointer-events-none absolute bottom-24 right-1/3 h-24 w-24 rounded-full border border-dashed border-[#1c1b19]/15" />

      {/* diagonal corner ribbon */}
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

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 bg-[#E8623E]" />
          <span className="font-[Inter] text-xs font-semibold uppercase tracking-wider text-[#E8623E]">
            Why Osumare
          </span>
        </div>

        <h2 className="mx-auto mt-4 max-w-3xl font-[Poppins] text-2xl font-extrabold leading-tight text-[#1c1b19] sm:text-3xl md:text-[2.25rem]">
          Why Osumare Turns Marketing Strategy into Measurable Business Growth
        </h2>

        <p className="mx-auto mt-4 max-w-2xl font-[Inter] text-sm font-light leading-relaxed text-[#1c1b19]/60">
          We go beyond campaigns to create meaningful digital experiences,
          smarter strategies, and lasting business impact.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-left">

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                  <span className="absolute left-[-6] top-[48%] h-9 w-9 -translate-y-1/2 rounded-full border border-[#1c1b19]/70" />
                  <span className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#1c1b19] font-[Inter] text-xs font-semibold text-white">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                  </span>
                </div>
               
              <h3 className="mt-4 font-[Inter] text-sm font-bold text-[#1c1b19] sm:text-base">
                {title}
              </h3>
              <p className="mt-2 font-[Inter] text-xs font-light leading-relaxed text-[#1c1b19]/55 sm:text-sm">
                {body}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-14 inline-flex items-center gap-2 rounded-md bg-[#E8623E] px-6 py-3.5 font-[Inter] text-sm font-medium text-white transition-colors hover:bg-[#d6532f]"
        >
          Claim Your Free Custom SEO Audit
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default WhyOsumare;