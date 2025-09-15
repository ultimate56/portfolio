import React, { useRef, useEffect } from "react";

const CursorDot = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (e) => {
      // Use GSAP to animate the dot position
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      // Show the dot when mouse enters the screen
      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
      });
    };

    const handleMouseLeave = () => {
      // Hide the dot when mouse leaves the screen
      gsap.to(dot, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initialize dot as hidden
    gsap.set(dot, { scale: 0, opacity: 0 });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-100">
      <div
        ref={dotRef}
        className="absolute w-2 h-2 p-2 bg-red-400 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
};

// Load GSAP from CDN
if (typeof window !== "undefined" && !window.gsap) {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
  script.async = true;
  document.head.appendChild(script);
}

export default CursorDot;
