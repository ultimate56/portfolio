import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const NotFound = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
      opacity: 0,
      y: 50,
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#ECE7E1] min-h-screen flex flex-col justify-center items-center px-6 py-12 text-center"
    >
      {/* Title */}
      <h1
        ref={titleRef}
        className="text-8xl md:text-9xl font-serif text-black mb-6"
      >
        404
      </h1>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-xl md:text-2xl text-black/80 max-w-lg leading-relaxed mb-10"
      >
        Oops! The page you’re looking for doesn’t exist. Let’s get you back on
        track.
      </p>

      {/* Button */}
      <div ref={buttonRef}>
        <Link
          to="/"
          className="px-8 py-3 bg-black text-[#ECE7E1] rounded-lg font-medium hover:bg-black/80 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
