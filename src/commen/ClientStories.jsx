import React, { useEffect, useState } from "react";
import { Play, X, ArrowRight } from "lucide-react";
import clientbg from "../assets/clientbg.webp";
import clientimg from "../assets/clientimg.webp";


const TESTIMONIALS = [
  {
    name: "Anushka Chavan",
    role: "VP Marketing",
    company: "Premium Real Estate Enterprise",
    thumbnail: clientimg,
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Anushka Chavan",
    role: "VP Marketing",
    company: "Premium Real Estate Enterprise",
    thumbnail: clientimg,
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Anushka Chavan",
    role: "VP Marketing",
    company: "Premium Real Estate Enterprise",
    thumbnail: clientimg,
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Anushka Chavan",
    role: "VP Marketing",
    company: "Premium Real Estate Enterprise",
    thumbnail: clientimg,
    videoId: "dQw4w9WgXcQ",
  },
];

function TestimonialCard({ item, onPlay }) {
  return (
    <button
      onClick={() => onPlay(item.videoId)}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-md text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
    >
      <img
        src={item.thumbnail}
        alt={`${item.name} video testimonial`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Play button */}
      <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 text-white transition-colors group-hover:bg-white group-hover:text-slate-900">
        <Play size={14} fill="currentColor" className="ml-0.5" />
      </span>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-semibold text-white">
          {item.name}{" "}
          <span className="ml-1 text-xs font-normal text-white/60">
            {item.role}
          </span>
        </p>
        <p className="mt-0.5 text-xs font-medium text-orange-400">
          {item.company}
        </p>
      </div>
    </button>
  );
}

function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-slate-900"
        >
          <X size={18} />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-md bg-black shadow-2xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Client story video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function ClientStoriesSection() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <>
      <section
        className="  overflow-hidden  bg-cover bg-center px-6 py-16 sm:px-20 md:py-24" id="testimonials"
        style={{ backgroundImage: `url(${clientbg})` }}
      >
        {/* Dark overlay so text/cards stay readable over the background photo */}

        <div className="relative mx-auto  ">
          {/* Header */}
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-2.5 w-2.5 bg-orange-500" />
              <span className="font-[Inter] text-sm font-bold uppercase tracking-wider text-[#E8623E]">
                Client Stories
              </span>
            </div>
            <h2 className="mt-3 font-[Poppins] text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Real Success Stories. Proven Ranking Growth.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-[Inter] text-sm font-light leading-relaxed text-[#B9B9C1]">
              Read how our tailored SEO solutions drove real growth for leaders
              across industries.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((item, i) => (
              <TestimonialCard key={i} item={item} onPlay={setActiveVideoId} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href="#"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#FF8056] px-4 py-3 font-[Inter] text-sm font-semibold text-white transition-colors hover:bg-[#d6532f]"
            >
              Claim Your Free Custom SEO Audit
              <ArrowRight className="h-4 w-4 font-semibold" />
            </a>
          </div>
        </div>

        {activeVideoId && (
          <VideoModal
            videoId={activeVideoId}
            onClose={() => setActiveVideoId(null)}
          />
        )}
      </section>

      <section className="bg-black px-20 py-28">
        <h1 className="text-white text-center font-[poppins] text-2xl font-bold">
          Ready to Rank #1 on Google? Get a free, comprehensive SEO audit and
          competitive roadmap for your <br /> website today.
        </h1>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#FF8056] px-4 py-3 font-[Inter] text-sm font-semibold text-white transition-colors hover:bg-[#d6532f]"
          >
            Claim Your Free Custom SEO Audit
            <ArrowRight className="h-4 w-4 font-semibold" />
          </a>
        </div>
      </section>
    </>
  );
}
