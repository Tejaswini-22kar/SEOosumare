import React, { useState, useEffect, useCallback } from "react";
import { Star, ArrowRight } from "lucide-react";
import growthmp from "../assets/growthmp.mp4";
import bgvideo from "../assets/bgvideo.mp4";

const SLIDES = [
  {
    headline: ["Increase Your Visibility", "Across ", "AI-Powered", " Search"],
    body: "Position your brand to be discovered and surfaced by the answer engines shaping modern search. Build a strategic AEO foundation that improves your brand's visibility across AI-powered search and answer engines.",
    stats: ["14+ Years Experience", "2,300+ Keywords Ranked on First Page", "800+ Clients Managed"],
    cta: "Claim Your Free Custom SEO Audit",
    badge: "360% Organic Growth",
    colVideo: growthmp,
  },
  {
    headline: ["Turn Rankings Into", "Revenue With ", "Smarter", " SEO"],
    body: "We don't just chase keywords, we build pipelines. Every ranking is tied to a page, a query, and a buyer intent that moves your revenue forward.",
    stats: ["120+ Active Campaigns", "3.4x Average Traffic Lift", "92% Client Retention"],
    cta: "Get Your Free Growth Plan",
    badge: "3.4x Traffic Lift",
    bgVideo: bgvideo,
  },
];

const SLIDE_DURATION = 10000;

function HeroSlide({ slide, active }) {
  return (
    <div
      aria-hidden={!active}
      className={
        // All slides share ONE grid cell (col-start-1 row-start-1), so the
        // section grows to fit the tallest slide instead of clipping content.
        "relative col-start-1 row-start-1 flex overflow-hidden transition-opacity duration-1000 ease-in-out " +
        (active ? "opacity-100" : "pointer-events-none opacity-0")
      }
    >
      {/* Full-slide background video, only for slides that define one */}
      {slide.bgVideo && (
        <>
          <video
            key={slide.bgVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src={slide.bgVideo}
          />
          <div className="absolute inset-0 bg-[#161513]/70" />
        </>
      )}

      <div
        className={
          "relative z-10 grid w-full grid-cols-1 items-center gap-10 " +
          // extra bottom padding keeps content clear of the nav dots
          "px-5 pb-24 pt-20 sm:px-10 md:px-16 lg:gap-12 lg:px-20 lg:py-16 xl:px-36 " +
          (slide.colVideo ? "lg:grid-cols-2" : "lg:grid-cols-1")
        }
      >
        {/* Left: copy */}
        <div className="w-full max-w-xl">
          <h1 className="font-[Poppins] text-[1.75rem] font-extrabold text-white !leading-[1.3] sm:text-4xl lg:text-[2.75rem] lg:!leading-[60px]">
            <span>{slide.headline[0]}</span>
            {/* Line break only from sm up; on phones the headline wraps naturally */}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span>{slide.headline[1]}</span>
            <span className="text-[#E8623E]">{slide.headline[2]}</span>
            <span>{slide.headline[3]}</span>
          </h1>

          <p className="mt-6 font-[Inter] text-sm font-light leading-relaxed text-white/60 sm:mt-9 sm:text-base">
            {slide.body}
          </p>

          <div className="mt-6 flex flex-col gap-2 font-[Inter] text-xs text-white/80 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:text-sm">
            {slide.stats.map((stat) => (
              <span key={stat} className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 shrink-0 fill-[#E8623E] text-[#E8623E]" />
                {stat}
              </span>
            ))}
          </div>

          <a
            href="#"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#E8623E] px-5 py-3.5 text-center font-[Inter] text-sm font-medium text-white transition-colors hover:bg-[#d6532f] sm:mt-9 sm:w-auto sm:px-6"
          >
            {slide.cta}
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        </div>

        {/* Right: column video, only for slides that define one */}
        {slide.colVideo && (
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <video
                key={slide.colVideo}
                autoPlay
                loop
                muted
                playsInline
                className="block h-auto w-full object-cover"
                src={slide.colVideo}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);//
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    // min-h instead of fixed h-screen: fills the viewport when content is short,
    // grows when content is tall (phones). svh avoids the mobile URL-bar jump.
    <section className="relative w-full overflow-hidden bg-[#161513]">
      {/* ambient background glow, static across slides */}2
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,98,62,0.18),transparent_55%)]" />

      <div className="relative mx-auto grid min-h-[100svh] w-full">
        {SLIDES.map((slide, i) => (
          <HeroSlide key={i} slide={slide} active={i === index} />
        ))}
      </div>

      {/* progress / navigation dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={"Go to slide " + (i + 1)}
            className="relative h-1.5 w-8 overflow-hidden rounded-full bg-white/20"
          >
            {i === index && (
              <span
                className="absolute inset-y-0 left-0 block rounded-full bg-[#E8623E]"
                style={{
                  animation: "hero-progress " + SLIDE_DURATION + "ms linear",
                }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes hero-progress {
          from { width: 0% }
          to { width: 100% }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="hero-progress"] { animation: none !important; width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;