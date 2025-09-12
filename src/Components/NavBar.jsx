import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NavBar = () => {
  const navItemsRef = useRef([]);
  const containerRef = useRef(null);

  // Add refs to array safely
  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Reset refs on mount to avoid duplicates
    navItemsRef.current = [];

    const tl = gsap.timeline();

    // Fade in the container (overlay already slides in from Home.jsx)
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    // Animate nav items one by one
    if (navItemsRef.current.length > 0) {
      tl.fromTo(
        navItemsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.3" // overlap with container fade
      );
    }
  }, []);

  return (
    <nav
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black"
    >
      {/* Navigation Links */}
      <ul className="space-y-10">
        <li ref={addToRefs}>
          <a
            href="#home"
            aria-label="Go to Home section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li ref={addToRefs}>
          <a
            href="#about"
            aria-label="Go to About section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li ref={addToRefs}>
          <a
            href="#portfolio"
            aria-label="Go to Portfolio section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            Portfolio
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li ref={addToRefs}>
          <a
            href="#services"
            aria-label="Go to Services section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            Services
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li ref={addToRefs}>
          <a
            href="#contact"
            aria-label="Go to Contact section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      {/* Footer Info */}
      <div ref={addToRefs} className="mt-16 text-gray-400 text-lg">
        <p>hello@charlesbruyerre.com</p>
      </div>
    </nav>
  );
};

export default NavBar;
