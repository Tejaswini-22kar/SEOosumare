import React, { useEffect, useRef, useState } from "react";
import preeti from "../assets/preeti.webp";
import {MoveRight} from "lucide-react"
import InvitationPopup from "./InvitationPopup";
const WhatThisIsNot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preetiVisible, setPreetiVisible] = useState(false);
const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const sectionRef = useRef(null);
  const preetiSectionRef = useRef(null);

  const leftItems = [
    {
      title: "It Is Not A Trek.",
      text: "There is walking. There is no summit, no distance to cover, nothing to complete.",
    },
    {
      title: "It Is Not A Silent Retreat.",
      text: "Nobody will ask you to stop speaking, or to meditate, or to give up your coffee.",
    },
    {
      title: "And There Are Hours Where Nothing Is Planned.",
      text: "Some people find that harder than anything else in the six days. We think it is the most important part.",
    },
  ];

  const rightItems = [
    {
      title: "It Is Not Therapy.",
      text: "The work is real and it is structured, but it is a facilitated circle, not treatment. Preeti is trained in expressive movement theropy - she is not your therapist for these six days. If you are in the middle of something acute, this is not the right room, and we will say so on the call.",
    },
    {
      title: "It Is Not A Networking Room.",
      text: "People here will not be trading business cards, and the fact that nobody asks what you do is not an accident.",
    },
  ];

  
  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop observing after first animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

   
  useEffect(() => {
    const element = preetiSectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPreetiVisible(true);

          // Stop observing after first animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <>
       

    
      <div ref={sectionRef}>
        <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20">
          <div className="mx-auto">

            {/* Main Heading - LEFT → RIGHT */}
            <h2
              className={`mb-10 font-['Oswald'] text-3xl font-bold text-neutral-900 sm:mb-14 sm:text-4xl ${
                isVisible
                  ? "animate-[fromLeft_1.5s_ease-out_both]"
                  : "opacity-0"
              }`}
            >
              What This Is Not.
            </h2>

            {/* Two Columns */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

              
              <div className="flex flex-col gap-8">

                {leftItems.map((item, index) => (
                  <div
                    key={index}
                    className={
                      isVisible
                        ? "animate-[fromBottom_1.5s_ease-out_both]"
                        : "opacity-0"
                    }
                    style={{
                      animationDelay: `${0.2 + index * 0.12}s`,
                    }}
                  >
                    <h3 className="mb-2 font-semibold text-neutral-900 sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                ))}

                {/* Button - LEFT → RIGHT */}
                <button
                onClick={() => setIsInvitationOpen(true)}
  className={`group relative mt-2 flex w-fit items-center gap-2 overflow-hidden font-['syne']   rounded-full border border-neutral-900 px-6 py-3 text-base font-medium text-neutral-900 ${
    isVisible
      ? "animate-[fromLeft_1.5s_ease-out_0.5s_both]"
      : "opacity-0"
  }`}
>
   
  <span
    className="
      absolute
      left-1/2
      top-1/2
      h-full
      w-0
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-neutral-900
      opacity-40

      transition-all
      duration-1000
      ease-in-out

      group-hover:w-[150%]
      group-hover:opacity-100
    "
  />

   
  <span
    className="
      relative
      z-10
      flex
      items-center
      gap-2
      transition-colors
      duration-500
      group-hover:text-white
    "
  >
    Request An Invitation

    <span
      className="
        transition-transform
        duration-500
        group-hover:translate-x-1
      "
    >
     <MoveRight />
    </span>
  </span>
</button>
              </div>

              
              <div className="flex flex-col gap-8">

                {rightItems.map((item, index) => (
                  <div
                    key={index}
                    className={
                      isVisible
                        ? "animate-[fromBottom_1.5s_ease-out_both]"
                        : "opacity-0"
                    }
                    style={{
                      animationDelay: `${0.35 + index * 0.12}s`,
                    }}
                  >
                    <h3 className="mb-2 font-semibold text-neutral-900 sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>
      </div>

       
      <section
        ref={preetiSectionRef}
        className="w-full"
      >
        <div className="relative w-full overflow-hidden">

          {/* Background Image */}
          <img
            src={preeti}
            alt="Preeti Toraskar"
            className={`h-[420px] w-full object-cover object-[75%_30%] sm:h-[500px] md:h-[600px] lg:h-[680px] ${
              preetiVisible
                ? "animate-[slowFade_1.8s_ease-out_both]"
                : "opacity-0"
            }`}
          />

         
          <div className="absolute inset-y-0 left-0 flex items-center">

            <div
              className={`mx-4 max-w-md bg-white p-6 shadow-lg sm:ml-8 sm:p-8 md:ml-20 md:max-w-lg md:p-10 ${
                preetiVisible
                  ? "animate-[fromLeft_1.8s_ease-out_0.35s_both]"
                  : "opacity-0"
              }`}
            >
              
              <h2 className="mb-4 font-['Oswald'] text-2xl font-bold text-neutral-900 sm:text-3xl">
                Preeti Toraskar Leads This Journey.
              </h2>

              
              <div className="space-y-3 text-sm leading-relaxed text-neutral-700">

                <p>
                  Not a coach. Not a guru. Someone who knows the ground and
                  walks it beside you.
                </p>

                <p>
                  She spent eighteen years designing physical spaces -
                  offices, homes, the rooms where people spend their lives -
                  before concluding that the spaces most people needed were
                  not physical ones.
                </p>

                <p>
                  She holds a Master's in Expressive Movement Therapy, which
                  covers movement, art, music and drama, and has been a
                  certified yoga teacher since 2011. She has trained under Dr
                  Daniel Siegel, and studied at Oxford with Bessel van der
                  Kolk, Esther Perel and Richard Schwartz.
                </p>

                <p>
                  For four years, she has run these journeys privately, by
                  invitation. Nine of them. Half the people who came, came
                  back.
                </p>

                <p>
                  True North is the first one she is opening beyond that
                  circle.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <InvitationPopup
  isOpen={isInvitationOpen}
  onClose={() => setIsInvitationOpen(false)}
/>
    </>
  );
};

export default WhatThisIsNot;