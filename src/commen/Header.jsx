import React, { useState, useEffect } from "react";
import logo from "../assets/osumarelogo.webp";

// Each nav item points to the `id` of a section on the page.
// IMPORTANT: change the `id` values below to match the ids you added.
// (Only "seoservice" was known from your old code; the rest are guesses.)
const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Our Approach", id: "our-approach" },
  { label: "Why Osumare", id: "why-osumare" },
  { label: "Our Process", id: "our-process" },
  { label: "Our Services", id: "seoservice" },
  
  { label: "Testimonials", id: "testimonials" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);

  // Highlight the nav link of whichever section is crossing the middle of the
  // screen. Ids that don't exist on the page are simply skipped.
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveId(id);
    setMenuOpen(false); // close the mobile menu after tapping a link
  };

  return (
    <header className="w-full bg-[#161513] px-4 py-3 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <img src={logo} alt="Osumare" className="w-36 h-16" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-12">
          {NAV_ITEMS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleNavClick(id)}
              className={
                "whitespace-nowrap font-[Inter] text-base font-medium transition-opacity hover:opacity-70 " +
                (activeId === id ? "text-[#FF8056]" : "text-[#E8E8EA]")
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <a
          href="#"
          className="hidden shrink-0 whitespace-nowrap rounded-sm border border-[#FF8056] px-4 py-3 font-[Inter] text-sm font-medium text-[#FF8056] transition-colors hover:bg-[#E8623E] hover:text-white lg:block"
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
          {NAV_ITEMS.map(({ label, id }) => (
            <a
              key={id + "-mobile"}
              href={`#${id}`}
              onClick={() => handleNavClick(id)}
              className={
                "w-full py-2 font-[Inter] text-base transition-opacity hover:opacity-70 " +
                (activeId === id
                  ? "font-medium text-[#E8623E]"
                  : "font-normal text-white")
              }
            >
              {label}
            </a>
          ))}

          <a
            href="#"
            className="mt-3 w-full rounded-sm border border-[#FF8056] px-4 py-3 text-center font-[Inter] text-sm font-medium text-[#FF8056] transition-colors hover:bg-[#E8623E] hover:text-white"
          >
            Get&nbsp;&nbsp;Free SEO Audit
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;