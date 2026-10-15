import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import seoimage from "../assets/seoimage.webp";
import backlinkseo from "../assets/backlinkseo.webp";
import citationseo from "../assets/citationseo.webp";
import competitorseo from "../assets/competitorseo.webp";
import contentseo from "../assets/contentseo.webp";
import imageseo from "../assets/imageseo.webp";
import corewebvital from "../assets/corewebvital.webp";
import googleprofile from "../assets/googleprofile.webp";
import ecomseo from "../assets/ecomseo.webp";
import internalseo from "../assets/internalseo.webp";
import interpriseseo from "../assets/interpriseseo.webp";
import keywordresearch from "../assets/keywordreserach.webp";
import linkseo from "../assets/linkseo.webp";
import localseo from "../assets/localseo.webp";
import offpageseo from "../assets/offpageseo.webp";
import onpageseo from "../assets/onpageseo.webp";
import reputationseo from "../assets/reputationseo.webp";
import schemamarckup from "../assets/schemamarckup.webp";
import videoseo from "../assets/videoseo.webp";
import websiteseo from "../assets/websiteseo.webp";
import technicalseo from "../assets/technicalseo.webp";
import voiceseo from "../assets/voiceseo.webp";
import auditseo from "../assets/auditseo.webp";
import contentsrtategy from "../assets/contentsrtategy.webp";
import mobileseo from "../assets/mobileseo.webp";

const PAGE_ONE = [
  { icon: auditseo, label: "SEO Audit & Analysis" },
  { icon: technicalseo, label: "Technical SEO" },
  { icon: onpageseo, label: "On-Page SEO" },
  { icon: offpageseo, label: "Off-Page SEO" },
  { icon: localseo, label: "Local SEO" },
  { icon: ecomseo, label: "E-Commerce SEO" },
  { icon: interpriseseo, label: "Enterprise SEO" },
  { icon: contentsrtategy, label: "SEO Content Strategy" },
  { icon: internalseo, label: "International SEO" },
  { icon: keywordresearch, label: "Keyword Research" },
  { icon: competitorseo, label: "Competitor SEO Analysis" },
  { icon: contentseo, label: "Content SEO" },
];

const PAGE_TWO = [
  { icon: linkseo, label: "Link Building" },
  { icon: backlinkseo, label: "Backlink Analysis" },
  { icon: imageseo, label: "Image SEO" },
  { icon: videoseo, label: "Video SEO" },
  { icon: voiceseo, label: "Voice Search SEO" },
  { icon: mobileseo, label: "Mobile" },
  { icon: corewebvital, label: "Core Web Vitals Optimization" },
  { icon: websiteseo, label: "Website SEO Optimization" },
  { icon: googleprofile, label: "Google Business Profile Optimization" },
  { icon: citationseo, label: "Citation & Directory Management" },
  { icon: reputationseo, label: "Online Reputation SEO" },

  { icon: schemamarckup, label: "Schema Markup" },
];

const PAGES = [PAGE_ONE, PAGE_TWO];
const INTERVAL_MS = 4000;
const FADE_MS = 1400;

function ServiceItem({ icon, label }) {
  // Webp imports come through as strings (a URL path). Lucide icons come
  // through as components (functions). Render each one appropriately.
  const isImageIcon = typeof icon === "string";
  return (
    <div className="  items-start gap-3">
      <div className="flex h-10 w-10 flex-none items-center justify-center  ">
        {isImageIcon ? (
          <img src={icon} alt="" className=" object-contain" />
        ) : (
          React.createElement(icon, { size: 20, strokeWidth: 1.75 })
        )}
      </div>
      <span className="block pt-2.5 text-sm font-[poppins] font-semibold leading-snug text-slate-800 sm:text-base">
        {label}
      </span>
    </div>
  );
}

export default function SeoServicesSlider() {
  // Both layers stay mounted and cross-fade by opacity.
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((p) => (p + 1) % PAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f3f2f0] px-5 py-12 sm:px-8 md:px-12 md:py-20 lg:px-20 lg:py-24" id="seoservice">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-orange-500" />
            <span className="font-[Inter] text-xs font-bold uppercase tracking-wider text-[#E8623E] sm:text-sm">
              Next-Gen SEO
            </span>
          </div>

          <h2 className="mt-4 font-[Poppins] text-[1.75rem] font-extrabold leading-tight text-[#1c1b19] sm:text-4xl">
            Smarter SEO. Stronger Visibility.
            <br />
            Bigger Growth.
          </h2>

          <p className="mt-4 max-w-md font-[Inter] text-sm font-light leading-relaxed text-[#1c1b19]/60 sm:text-base">
            Rank your website on Google's first page with future-ready AI SEO
            strategies.
          </p>

          <a
            href="hnj#"
            className ="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF8056] px-4 py-3 text-center font-[Inter] text-sm font-semibold text-white transition-colors hover:bg-[#d6532f] sm:mt-9 sm:w-auto"
          >
            Claim Your Free Custom SEO Audit
            <ArrowRight className="h-4 w-4 shrink-0 font-semibold" />
          </a>

          {/* Slider area: both pages share ONE grid cell, so the container
              is always as tall as the taller page. No fixed min-h needed,
              which means nothing gets clipped or leaves a gap on any screen. */}
          <div className="mt-8 grid sm:mt-10">
            {PAGES.map((page, pageIndex) => (
              <div
                key={pageIndex}
                aria-hidden={activeIndex !== pageIndex}
                className="col-start-1 row-start-1 grid grid-cols-2 content-start gap-x-4 gap-y-6 transition-opacity ease-in-out sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:grid-cols-3"
                style={{
                  opacity: activeIndex === pageIndex ? 1 : 0,
                  transitionDuration: `${FADE_MS}ms`,
                  pointerEvents: activeIndex === pageIndex ? "auto" : "none",
                }}
              >
                {page.map((item, i) => (
                  <ServiceItem key={i} icon={item.icon} label={item.label} />
                ))}
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex gap-2">
            {PAGES.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === activeIndex ? "w-8 bg-orange-500" : "w-4 bg-orange-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right column: image */}
        <div className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
          <img
            src={seoimage}
            alt="Professional reviewing SEO strategy"
            className="relative block h-auto w-full object-cover lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}