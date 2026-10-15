import React from "react";
import { ArrowRight } from "lucide-react";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";

const PARTNERS = [
  { name: "Microsoft", logo: logo1 },
  { name: "Daikin", logo: logo2 },
  { name: "Bajaj Finserv", logo: logo3 },
  { name: "Pitney Bowes", logo: logo4 },
  { name: "SauceLabs", logo: logo5 },
];

const TrustPartners = () => {
  return (
    <section className="w-full bg-[#1D1D1D] px-6 py-16 sm:px-20 md:py-36">
      <div className="mx-auto   text-center">
        <h2 className="font-[Poppins] text-3xl font-bold text-white sm:text-4xl">
          Trusted by Industry Giants & High-Growth Enterprises
        </h2>

        <p className="mx-auto mt-6 max-w-2xl font-[Inter] text-base font-light leading-relaxed text-white sm:text-base">
          We                                             ythpk.lpppppppp scale organic visibility and brand dominance for top
          organizations across IT, Real Estate, Healthcare, Automobile, and
          E-Commerce.
        </p>
      </div>

      <div className="relative mx-auto mt-8   overflow-hidden ">
        <div className="flex w-max animate-[partners-scroll_25s_linear_infinite] items-center gap-x-8 hover:[animation-play-state:paused] sm:gap-x-10">
          {/* render the list twice back-to-back for a seamless loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <React.Fragment key={partner.name + "-" + i}>
              <div className="flex  shrink-0 items-center justify-center">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto object-contain   transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-20"
                  />
                ) : (
                  <span className="whitespace-nowrap font-[Inter] text-lg font-semibold tracking-tight text-white/90 sm:text-xl">
                    {partner.name}
                  </span>
                )}
              </div>

              <span className="hidden h-20 w-px shrink-0 bg-white/15 sm:block" />
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

      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 font-[Inter] text-sm font-medium text-[#FF8056] "
        >
          See How We Boosted Organic Leads by 240% for a Big Brand
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
};

export default TrustPartners;