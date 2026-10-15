import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "../assets/osumarelogo.webp";
const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Call",
    value: "9890400646",
  },
  {
    icon: MessageCircle,
    label: "Whatsapp",
    value: "84598 76226",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@osumare.in",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Pune , Maharashtra",
  },
];

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Our Approach", id: "our-approach" },
  { label: "Why Osumare", id: "why-osumare" },
  { label: "Our Process", id: "our-process" },
  { label: "Our Services", id: "seoservice" },
  
  { label: "Testimonials", id: "testimonials" },
];

function FieldInput({ label, ...props }) {
  return (
    <div className="border-b border-white/20 pb-2 focus-within:border-orange-400">
      <input
        {...props}
        placeholder={label}
        aria-label={label}
        className="w-full bg-transparent text-lg text-white placeholder-white/40 font-[inter] outline-none"
      />
    </div>
  );
}

function FieldTextarea({ label, ...props }) {
  return (
    <div className="border-b border-white/20 pb-2 focus-within:border-orange-400">
      <textarea
        {...props}
        placeholder={label}
        aria-label={label}
        rows={3}
        className="w-full resize-none bg-transparent text-lg text-white placeholder-white/40  font-[inter] outline-none"
      />
    </div>
  );
}

export default function ContactFooter() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirements: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop the browser from reloading the page
    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      // TODO: wire this up to your form endpoint / API call, e.g.
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Request failed");
      console.log("Submitting", form);

      // Success: go to the thank-you page, passing the name along
      navigate("/thank-you", { state: { name: form.name } });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#121212]  px-6 py-16 sm:px-20 md:py-24">
      <div className="">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-36 h-16" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-center text-2xl font-bold text-white sm:text-3xl">
          Ready To Protect Your Online Reputation?
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            <FieldInput
              label="Name"
              name="name"
              required
              value={form.name}
              onChange={handleChange("name")}
            />
            <FieldInput
              label="Brand/ Company"
              name="company"
              value={form.company}
              onChange={handleChange("company")}
            />
            <FieldInput
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange("phone")}
            />
            <FieldInput
              label="Email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>

          <div className="mt-11">
            <FieldTextarea
              label="Requirements"
              name="requirements"
              value={form.requirements}
              onChange={handleChange("requirements")}
            />
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
              <ArrowRight size={15} />
            </button>

            {error && (
              <p role="alert" className="mt-3 text-sm text-red-400">
                {error}
              </p>
            )}
          </div>
        </form>

        {/* Contact info */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-6 sm:justify-between">
          {CONTACT_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10 text-white">
                <item.icon size={16} />
              </span>
              <div>
                <p className="text-lg font-[poppins] text-white/50">{item.label}</p>
                <p className="text-xl font-[inter] font-medium text-white">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nav links */}
       {/* Nav links */}
<nav className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-white/10">
  {NAV_LINKS.map(({ label, id }) => (
    <a
      key={id}
      href={`#${id}`}
      className="text-base text-[#E8E8EA] transition-colors hover:text-white"
    >
      {label}
    </a>
  ))}
</nav>

        {/* Copyright */}
        <p className="mt-6 text-center text-lg text-white/40">
          © 2026, Osumare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}