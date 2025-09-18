import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import NavBar from "../Components/NavBar";
import VerticalNavBar from "../Components/VerticalNavbar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  // GSAP animation for overlay open/close
  useEffect(() => {
    if (!overlayRef.current || !closeButtonRef.current) return;

    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

    if (isOpen) {
      // Open overlay animation
      gsap.set(overlayRef.current, { x: "100%" });
      gsap.set(closeButtonRef.current, { opacity: 0, y: -20 });

      tl.to(overlayRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power3.out",
      }).to(
        closeButtonRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );
    } else {
      // Close overlay animation
      tl.to(closeButtonRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      }).to(
        overlayRef.current,
        { x: "100%", duration: 0.5, ease: "power3.in" },
        "-=0.1"
      );
    }
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="relative min-h-screen">
      {/* Desktop vertical nav (left-side text-only, fixed) */}
      <VerticalNavBar />

      {/* Mobile/Tablet nav with hamburger + overlay (hidden on lg+) */}
      <div className="lg:hidden md:hidden">
        {/* Hamburger button */}
        {!isOpen && (
          <div
            aria-label="Open menu"
            className="fixed top-6 right-6 text-3xl cursor-pointer z-50 transition-transform hover:scale-110 duration-200"
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu />
          </div>
        )}

        {/* Overlay */}
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-full z-50 bg-black/80 backdrop-blur-sm flex flex-col"
          style={{ transform: "translateX(100%)" }}
        >
          {/* Close button */}
          <div
            ref={closeButtonRef}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-3xl cursor-pointer text-white transition-transform hover:scale-110 hover:rotate-90 duration-300 z-50"
            onClick={() => setIsOpen(false)}
            style={{ opacity: 0 }}
          >
            <IoClose />
          </div>

          {/* NavBar content */}
          <div className="flex-1 flex items-center justify-center">
            <NavBar isVisible={isOpen} onLinkClick={handleLinkClick} />
          </div>
        </div>
      </div>

      {/* Page content (adds left padding for desktop nav) */}
      <main className="relative z-10 lg:pl-24 pointer-events-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
