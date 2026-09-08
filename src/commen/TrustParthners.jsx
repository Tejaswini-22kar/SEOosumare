import React from "react";
import { ArrowRight } from "lucide-react";

// Swap `logo: null` entries for your actual brand logo files (SVG/PNG) —
// trademarked marks aren't reproduced here, so drop in the official assets,
// e.g. logo: <img src={microsoftLogo} alt="Microsoft" className="h-6 w-auto" />
const PARTNERS = [
  { name: "Microsoft", logo: null },
  { name: "Daikin", logo: null },
  { name: "Bajaj Finserv", logo: null },
  { name: "Pitney Bowes", logo: null },
  { name: "SauceLabs", logo: null },
];

const TrustPartners = () => {
  return (
    <section className="w-full bg-[#1D1D1D] px-6 py-16 sm:px-10 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-[Poppins] text-2xl font-bold text-white sm:text-3xl">
          Trusted by Industry Giants &amp; High-Growth Enterprises
        </h2>

        <p className="mx-auto mt-4 max-w-2xl font-[Inter] text-sm font-light leading-relaxed text-white/60 sm:text-base">
          We scale organic visibility and brand dominance for top
          organizations across IT, Real Estate, Healthcare, Automobile, and
          E-Commerce.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[partners-scroll_25s_linear_infinite] items-center gap-x-8 hover:[animation-play-state:paused] sm:gap-x-10">
          {/* render the list twice back-to-back for a seamless loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <React.Fragment key={partner.name + "-" + i}>
              <div className="flex h-10 shrink-0 items-center justify-center">
                {partner.logo ? (
                  partner.logo
                ) : (
                  <span className="whitespace-nowrap font-[Inter] text-lg font-semibold tracking-tight text-white/90 sm:text-xl">
                    {partner.name}
                  </span>
                )}
              </div>

              <span className="hidden h-8 w-px shrink-0 bg-white/15 sm:block" />
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partners-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mt-10 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 font-[Inter] text-sm font-medium text-[#E8623E] transition-opacity hover:opacity-75"
        >
          See How We Boosted Organic Leads by 240% for a Big Brand
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
};

export default TrustPartners;