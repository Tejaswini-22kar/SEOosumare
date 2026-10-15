import React from "react";
import { ArrowRight } from "lucide-react";
import aprrochimage from "../assets/Approach.webp";

const STEPS = [
  { number: "01", title: "E-E-A-T Driven Content Strategy" },
  { number: "02", title: "Semantic & Entity Optimization" },
  { number: "03", title: "AI Search Engine Optimization (AEO & GEO)" },
  { number: "04", title: "Digital PR & High-Authority Backlink Building" },
  { number: "05", title: "Google Business Profile & Hyper-Local Listings" },
];

const OurApproach = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-20 md:py-24" id="our-approach">
      <div className="mx-auto grid  grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[#E8623E]" />
            <span className="font-[Inter] text-sm font-bold uppercase tracking-wider text-[#E8623E]">
              Our Approach
            </span>
          </div>

          <h2 className="mt-4 font-[Poppins] text-3xl font-extrabold leading-tight text-[#1c1b19] sm:text-4xl">
            The Osumare Next-Gen SEO Framework
          </h2>

          <p className="mt-4 max-w-md font-[Inter] text-base font-light leading-relaxed text-[#1c1b19]/60">
            A multi-layered strategy engineered to adapt to algorithm changes
            and capture market share.
          </p>

          <ol className="mt-9 flex flex-col gap-6">
            {STEPS.map((step) => (
              <li key={step.number} className="flex items-center gap-8">
                {/* ring badge: border-only span sits behind the filled number span */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                  <span className="absolute left-[-8px] top-[50%] h-12 w-12 -translate-y-1/2 rounded-full border border-[#1c1b19]/70" />
                  <span className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#1c1b19] font-[Inter] text-base font-semibold text-white">
                    {step.number}
                  </span>
                </div>
                <span className="font-[poppins] text-sm font-semibold text-[#1c1b19] sm:text-xl">
                  {step.title}
                </span>
              </li>
            ))}
          </ol>

          <a
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#FF8056] px-4 py-3 font-[Inter] text-sm font-semibold text-white transition-colors hover:bg-[#d6532f]"
          >
            Claim Your Free Custom SEO Audit
            <ArrowRight className="h-4 w-4 font-semibold" />
          </a>
        </div>

        {/* Right: approach image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* years-experience badge */}
          <div className="absolute -top-5 right-6 z-20 flex py-4 px-5  flex-col items-center justify-center rounded-md bg-[#E8623E] text-center shadow-lg sm:right-32">
            <span className="font-[Poppins] text-xl font-extrabold text-white">
              14+
            </span>
            <span className="px-1 font-[Inter] text-[9px] font-medium leading-tight text-white/90">
              Years Experience
            </span>
          </div>

          <div className="overflow-hidden ">
            <img
              src={aprrochimage}
              alt="Our approach"
              className="h-full  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;