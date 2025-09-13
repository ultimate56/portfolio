import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const NavBar = ({ isVisible }) => {
  const navItemsRef = useRef([]);
  const containerRef = useRef(null);

  // Add refs to array safely
  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Only animate when becoming visible
    if (isVisible) {
      // Reset refs on mount to avoid duplicates
      navItemsRef.current = [];

      // Set initial states
      gsap.set(containerRef.current, { opacity: 0 });
      gsap.set(navItemsRef.current, { opacity: 0, y: 50 });

      const tl = gsap.timeline({ delay: 0.3 }); // Small delay to let overlay slide in

      // Fade in the container
      tl.to(containerRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      // Animate nav items one by one
      tl.to(
        navItemsRef.current,
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
  }, [isVisible]);

  return (
    <nav
      ref={containerRef}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      {/* Navigation Links */}
      <ul className="space-y-10">
        <li ref={addToRefs}>
          <Link
            to="/"
            aria-label="Go to Home section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li ref={addToRefs}>
          <Link
            to="/about"
            aria-label="Go to About section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li ref={addToRefs}>
          <Link
            to="/projects"
            aria-label="Go to Projects section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        <li ref={addToRefs}>
          <Link
            to="/contact"
            aria-label="Go to Contact section"
            className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
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
