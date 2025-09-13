import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Refs for text animations
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  // GSAP animation for overlay
  useEffect(() => {
    if (!overlayRef.current || !closeButtonRef.current) return;

    const tl = gsap.timeline();

    if (isOpen) {
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
      tl.to(closeButtonRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      }).to(
        overlayRef.current,
        {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => setIsClosing(false),
        },
        "-=0.1"
      );
    }
  }, [isOpen]);

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

  const handleClose = () => {
    if (isOpen || isClosing) {
      setIsClosing(true);
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <div className="bg-[#ECE7E1] min-h-screen w-full relative overflow-hidden">
      {/* Hamburger button */}
      {!isOpen && (
        <div
          className="fixed top-6 right-6 text-3xl cursor-pointer z-50 transition-transform hover:scale-110 duration-200"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </div>
      )}

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

      {/* Overlay */}
      {(isOpen || isClosing) && (
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-full z-50 bg-black/80 backdrop-blur-sm flex flex-col"
        >
          {/* Close button */}
          <div
            ref={closeButtonRef}
            className="absolute top-6 right-6 text-3xl cursor-pointer text-white transition-transform hover:scale-110 hover:rotate-90 duration-300 z-50"
            onClick={handleClose}
          >
            <IoClose />
          </div>

          {/* NavBar */}
          <div className="flex-1 flex items-center justify-center">
            <NavBar
              isVisible={isOpen || isClosing}
              onLinkClick={handleLinkClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
