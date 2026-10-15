import React from "react";
import { ArrowRight } from "lucide-react";

import increase from "../assets/increase.webp";
import local from "../assets/local.webp";
import marketing from "../assets/marketing.webp";
import visibility from "../assets/visibility.webp";
import trust from "../assets/trust.webp";
import growth from "../assets/growth.webp";
import rates from "../assets/rates.webp";
import reach from "../assets/reach.webp";
import rightcorner from "../assets/rightcorner.webp";
import leftcorner from "../assets/leftcorner.webp";
import rightbottomcorner from "../assets/rightbottomcorner.png";
const FEATURES = [
  {
    icon: increase,
    title: "Increase Website Traffic",
    body: "Attract continuous, high-volume organic visitors directly to your core service pages.",
  },
  {
    icon: visibility,
    title: "Build Brand Visibility",
    body: "Dominate top search positions to ensure prospective customers see your brand first.",
  },
  {
    icon: reach,
    title: "Reach the Right Audience",
    body: "Target hyper-specific buyer-intent keywords to capture customers ready to purchase.",
  },
  {
    icon: growth,
    title: "Get Long-Term Online Growth",
    body: "Generate compounding organic traffic and sales leads month over month.",
  },
  {
    icon: trust,
    title: "Increase Trust & Credibility",
    body: "Ranking on Google Page 1 establishes instant brand authority and user confidence.",
  },
  {
    icon: rates,
    title: "Higher Conversion Rates",
    body: "Organic search users convert at higher rates due to established search trust.",
  },
  {
    icon: marketing,
    title: "Cost-Effective Marketing",
    body: "Lower your Customer Acquisition Cost (CAC) compared to continuous pay-per-click ads.",
  },
  {
    icon: local,
    title: "Boost Local Visibility",
    body: "Capture local searches and store visits via Google Maps optimization.",
  },
];

const WhyOsumare = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F4F6]   px-6 py-16 sm:px-20 md:py-24" id="why-osumare">
     

      {/* corner a
      rtwork */}
      <img
        src={rightcorner}
        alt=""
        className="pointer-events-none absolute -right-0 -top-0 w-40 select-none sm:w-56 lg:w-64"
      />
      <img
        src={leftcorner}
        alt=""
        className="pointer-events-none absolute -left-0 -top-0 w-40 select-none sm:w-56 lg:w-64"
      />
       <img
        src={rightbottomcorner}
        alt=""
        className="pointer-events-none absolute -right-0 -bottom-0 w-40 select-none sm:w-56 lg:w-96"
      />

      <div className="relative mx-auto  text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="h-2.5 w-2.5 bg-[#E8623E]" />
          <span className="font-[Inter] text-sm font-bold uppercase tracking-wider text-[#E8623E]">
            Why Osumare
          </span>
        </div>

        <h2 className="mt-3 font-[Poppins] text-3xl !font-extrabold  text-[#1c1b19] sm:text-4xl !leading-10">
          Why Osumare Turns Marketing <br /> Strategy into Measurable <br />{" "}
          Business Growth
        </h2>

        <p className="mx-auto mt-6 max-w-2xl font-[Inter] text-base font-normal leading-relaxed text-[#1c1b19]/60">
          We go beyond campaigns to create meaningful digital experiences,
          smarter strateg ies, and lasting business impact.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon, title, body }) => (
            <div key={title} className="text-left">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                <span className="absolute left-[-8px] top-[50%] h-14 w-14 -translate-y-1/2 rounded-full border border-[#1c1b19]/70" />
                <span className="absolute right-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#1c1b19]">
                  <img src={icon} alt="" className="h-7 w-7 object-contain" />
                </span>
              </div>

              <h3 className="mt-3 font-[poppins] text-base font-bold text-black sm:text-base">
                {title}
              </h3>
              <p className="mt-2 font-[Inter] text-sm font-normal leading-relaxed text-[#828282] sm:text-sm">
                {body}
              </p>
            </div>
          ))}
        </div>

        <a
                   href="#"
                   className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#FF8056] px-4 py-3 font-[Inter] text-sm font-semibold text-white transition-colors hover:bg-[#d6532f]"
                 >
                   Claim Your Free Custom SEO Audit
                   <ArrowRight className="h-4 w-4 font-semibold" />
                 </a>
      </div>
    </section>
  );
};

export default WhyOsumare;