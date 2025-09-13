import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import NavBar from "../Components/NavBar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  // GSAP animation for overlay open/close
  useEffect(() => {
    if (isOpen) {
      gsap.set(overlayRef.current, { x: "100%" });
      gsap.set(closeButtonRef.current, { opacity: 0, y: -20 });

      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power3.out",
      }).to(
        closeButtonRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );
    } else if (overlayRef.current) {
      const tl = gsap.timeline();
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

  // Close overlay when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="relative min-h-screen">
      {/* Hamburger button */}
      {!isOpen && (
        <div
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
          className="absolute top-6 right-6 text-3xl cursor-pointer text-white transition-transform hover:scale-110 hover:rotate-90 duration-300 z-50"
          onClick={() => setIsOpen(false)}
          style={{ opacity: 0 }}
        >
          <IoClose />
        </div>

        {/* NavBar */}
        <div className="flex-1 flex items-center justify-center">
          <NavBar isVisible={isOpen} onLinkClick={handleLinkClick} />
        </div>
      </div>

      {/* Page content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
