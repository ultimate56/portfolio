import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
  // Refs for text animations
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  // GSAP animation for heading (from left) and subheading (from right)
  useEffect(() => {
    if (!headingRef.current || !subheadingRef.current) return;

    // Start positions
    gsap.set(headingRef.current, { x: -150, opacity: 0 });
    gsap.set(subheadingRef.current, { x: 150, opacity: 0 });

    // Animate in
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(headingRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
    }).to(
      subheadingRef.current,
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.6"
    );
  }, []);

  return (
    <div className="bg-[#ECE7E1] min-h-screen w-full relative overflow-hidden">
      {/* Page Content */}
      <div className="flex justify-center items-center h-screen relative z-10">
        <div className="text-center px-4">
          <h1 ref={headingRef} className="text-6xl font-serif">
            Hey, I'm Elizabeth Olsen <br /> I am a full stack web developer.
          </h1>
          <h3 ref={subheadingRef} className="mt-6 text-lg">
            I'm a graphic designer, UX/UI designer & <br />
            front-end and full stack Web Developer.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
