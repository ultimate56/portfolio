import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const NavBar = ({ isVisible = false, onLinkClick }) => {
  const navItemsRef = useRef([]);
  const containerRef = useRef(null);
  const location = useLocation();

  // Close overlay when route changes
  useEffect(() => {
    if (onLinkClick) onLinkClick();
  }, [location.pathname]);

  // GSAP animation
  useEffect(() => {
    if (isVisible) {
      // Set initial states
      gsap.set(containerRef.current, { opacity: 0 });
      gsap.set(navItemsRef.current, { opacity: 0, y: 50 });

      const tl = gsap.timeline();
      tl.to(containerRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }).to(
        navItemsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.4"
      );
    }
  }, [isVisible]);

  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      ref={containerRef}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <ul className="space-y-10 text-center">
        {links.map((link, idx) => (
          <li key={idx} ref={addToRefs}>
            <Link
              to={link.path}
              onClick={onLinkClick}
              className="text-white text-5xl md:text-6xl font-light tracking-wide hover:text-gray-400 transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div ref={addToRefs} className="mt-16 text-gray-400 text-lg">
        <p>hello@charlesbruyerre.com</p>
      </div>
    </nav>
  );
};

export default NavBar;
