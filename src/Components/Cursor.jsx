import gsap from "gsap";
import React, { useRef, useEffect, useState } from "react";

const CursorDot = () => {
  const dotRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check initial screen width
    const checkScreen = () => setIsDesktop(window.innerWidth > 1024); // desktop >1024px
    checkScreen();

    // Update on window resize
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Don't run GSAP on mobile/tablet

    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2, ease: "power2.in" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    gsap.set(dot, { scale: 0, opacity: 0 });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop]);

  if (!isDesktop) return null; // Don't render on mobile/tablet

  return (
    <div className="fixed inset-0 pointer-events-none z-100">
      <div
        ref={dotRef}
        className="absolute w-2 h-2 p-2 bg-red-400 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      />
    </div>
  );
};

export default CursorDot;
