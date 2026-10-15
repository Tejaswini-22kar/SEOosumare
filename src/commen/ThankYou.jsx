import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Check, ArrowRight, Mail, Phone } from "lucide-react";
import logo from "../assets/osumarelogo.webp";

export default function ThankYou() {
  const { state } = useLocation();
  // Name is passed from the contact form via router state.
  // If someone opens /thank-you directly, we just show a generic message.
  const name = state?.name?.trim();

  // The footer form sits at the bottom of the page, so the new page would
  // otherwise open scrolled down. Start at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#121212] px-5 py-16 text-center sm:px-8">
      <Link to="/" aria-label="Osumare home">
        <img src={logo} alt="Osumare" className="h-12 w-auto sm:h-16" />
      </Link>

      <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8623E] sm:h-20 sm:w-20">
        <Check className="h-8 w-8 text-white sm:h-10 sm:w-10" strokeWidth={3} />
      </div>

      <h1 className="mt-8 font-[Poppins] text-3xl font-extrabold text-white sm:text-4xl">
        {name ? `Thank you, ${name}!` : "Thank you!"}
      </h1>

      <p className="mt-4 max-w-md font-[Inter] text-base font-light leading-relaxed text-white/60 sm:text-lg">
        We've received your message. Our team will review your requirements and
        get back to you shortly.
      </p>

      <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-[Inter] text-sm font-semibold text-white transition-colors hover:bg-orange-600"
        >
          Back to Home
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 font-[Inter] text-sm text-white/60 sm:flex-row sm:gap-8">
        <span className="flex items-center gap-2">
          <Mail size={16} className="text-[#E8623E]" />
          <a
            href="mailto:hello@osumare.in"
            className="transition-colors hover:text-white"
          >
            hello@osumare.in
          </a>
        </span>
        <span className="flex items-center gap-2">
          <Phone size={16} className="text-[#E8623E]" />
          <a
            href="tel:9890400646"
            className="transition-colors hover:text-white"
          >
            9890400646
          </a>
        </span>
      </div>

      <p className="mt-10 font-[Inter] text-sm text-white/40">
        © 2026, Osumare. All rights reserved.
      </p>
    </main>
  );
}