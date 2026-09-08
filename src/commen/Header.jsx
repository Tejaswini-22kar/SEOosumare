import React, { useState } from "react";

const NAV_ITEMS = [
  "Home",
  "Why Osumare",
  "Our Approach",
  "Our Services",
  "SEO Challenges",
  "Testimonials",
];

const LogoMark = () => (
  <svg viewBox="0 0 44 44" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10">
    <defs>
      <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5C242" />
        <stop offset="30%" stopColor="#E8544A" />
        <stop offset="60%" stopColor="#6B5FA8" />
        <stop offset="100%" stopColor="#3EC6C6" />
      </linearGradient>
    </defs>
    <circle
      cx="22"
      cy="22"
      r="17"
      fill="none"
      stroke="url(#ring-grad)"
      strokeWidth="6"
      strokeDasharray="88 20"
      strokeLinecap="round"
      transform="rotate(-90 22 22)"
    />
    <circle cx="22" cy="22" r="9" fill="#EFC64A" opacity="0.9" />
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#161513] px-4 py-3 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <LogoMark />
          <span className="flex flex-col leading-none">
            <span className="font-[Poppins] text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Osumare
            </span>
            <span className="mt-0.5 font-[Inter] text-[10px] font-light tracking-wide text-white/50">
              Converge, Collaborate, Change
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item}
              href="#"
              className={
                "whitespace-nowrap font-[Inter] text-[15px] transition-opacity hover:opacity-70 " +
                (index === 0
                  ? "font-medium text-[#E8623E]"
                  : "font-normal text-white")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <a
          href="#"
          className="hidden shrink-0 whitespace-nowrap rounded-md border border-[#E8623E] px-5 py-2.5 font-[Inter] text-sm font-medium text-[#E8623E] transition-colors hover:bg-[#E8623E] hover:text-white lg:block"
        >
          Get&nbsp;&nbsp;Free SEO Audit
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={
              "block h-0.5 w-6 bg-white transition-transform duration-300 " +
              (menuOpen ? "translate-y-2 rotate-45" : "")
            }
          />
          <span
            className={
              "block h-0.5 w-6 bg-white transition-opacity duration-300 " +
              (menuOpen ? "opacity-0" : "opacity-100")
            }
          />
          <span
            className={
              "block h-0.5 w-6 bg-white transition-transform duration-300 " +
              (menuOpen ? "-translate-y-2 -rotate-45" : "")
            }
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={
          "overflow-hidden transition-all duration-300 ease-in-out lg:hidden " +
          (menuOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav className="flex flex-col items-start gap-1 rounded-2xl border border-white/10 bg-black/30 px-6 py-6">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item + "-mobile"}
              href="#"
              className={
                "w-full py-2 font-[Inter] text-base transition-opacity hover:opacity-70 " +
                (index === 0
                  ? "font-medium text-[#E8623E]"
                  : "font-normal text-white")
              }
            >
              {item}
            </a>
          ))}

          <a
            href="#"
            className="mt-3 w-full rounded-md border border-[#E8623E] px-5 py-2.5 text-center font-[Inter] text-sm font-medium text-[#E8623E] transition-colors hover:bg-[#E8623E] hover:text-white"
          >
            Get&nbsp;&nbsp;Free SEO Audit
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;