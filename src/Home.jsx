import React, { useEffect, useRef, useState } from "react";



import {MoveRight} from "lucide-react"
import HeroSlider from "./commen/HeroSlider";
import TrustPartners from "./commen/TrustParthners";
import OurApproach from "./commen/OurApproach";
import WhyOsumare from "./commen/WhyOsumare";
import OurProcess from "./commen/OurProcess";
import SeoServicesSlider from "./commen/SeoServicesSlider";
import ClientStoriesSection from "./commen/ClientStories";
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          
          // Animation will NOT repeat when scrolling back
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};



export default function Home() {
   

  const [holdsRef, holdsVisible] = useInView(0.2);
const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [anotherYearRef, anotherYearVisible] = useInView(0.2);

  return (
    <div className="w-full">

     <HeroSlider/>
     <TrustPartners/>
    <OurApproach/>
<WhyOsumare/>

     
<OurProcess/>
<SeoServicesSlider/>
 <ClientStoriesSection/>

    
       

     

    </div>
  );
}