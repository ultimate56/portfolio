import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "../assets/images/profile.jpg";
import { Link } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);
  const imageRef = useRef(null);

  // Add refs to array safely
  const addToSectionRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Initial animations
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    // Animate content sections on scroll
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scroller: contentRef.current,
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#ECE7E1] lg:overflow-hidden lg:flex lg:h-screen">
      {/* Left Side - Fixed Image (Desktop) / Top Image (Mobile) */}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:w-2/5 lg:h-full relative">
        <img
          ref={imageRef}
          src={profile}
          alt="Profile"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Right Side - Scrollable Content */}
      <div
        ref={contentRef}
        className="w-full lg:w-3/5 lg:h-full lg:overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-transparent"
      >
        {/* Header Section */}
        <div ref={addToSectionRefs} className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-4 lg:mb-6">
            About Me
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-black/70 leading-relaxed">
            I'm Elizabeth Olsen, a passionate full-stack web developer and
            designer who creates digital experiences that matter.
          </p>
        </div>

        {/* Introduction Section */}
        <div ref={addToSectionRefs} className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-black mb-4 lg:mb-6">
            My Story
          </h2>
          <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-4 lg:mb-6">
            With over 5 years of experience in web development and design, I
            specialize in creating beautiful, functional, and user-centered
            digital solutions. My journey began with a fascination for how
            design and technology intersect to create meaningful experiences.
          </p>
          <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-4 lg:mb-6">
            I believe that great design is not just about how something looks,
            but how it works. Every project I undertake is an opportunity to
            solve real problems through thoughtful design and robust
            development.
          </p>
          <p className="text-sm sm:text-base text-black/80 leading-relaxed">
            When I'm not coding or designing, you can find me exploring new
            technologies, reading about user psychology, or enjoying a good cup
            of coffee while sketching new ideas.
          </p>
          <p className="text-sm sm:text-base text-black/80 leading-relaxed mt-4">
            My name is Elizabeth Olsen, and I am passionate about creating
            digital experiences that make a difference.
          </p>
        </div>

        {/* Skills Section */}
        <div ref={addToSectionRefs} className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-black mb-4 lg:mb-6">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-3 lg:mb-4">
                Frontend Development
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {[
                  "React & Next.js",
                  "JavaScript/TypeScript",
                  "HTML5 & CSS3",
                  "Tailwind CSS",
                  "GSAP Animations",
                ].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-black/80">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-3 lg:mb-4">
                Backend & Tools
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {[
                  "Node.js & Express",
                  "MongoDB & PostgreSQL",
                  "Git & Version Control",
                  "Figma & Design Tools",
                  "SEO & Performance",
                ].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-black/80">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-black/80 mt-4 lg:mt-6">
            Elizabeth Olsen is a versatile full-stack developer with expertise
            in creating interactive, user-friendly web applications. She
            combines technical skills with design sensibility to deliver
            seamless digital experiences.
          </p>
        </div>

        {/* Experience Section */}
        <div ref={addToSectionRefs} className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-black mb-4 lg:mb-6">
            Experience
          </h2>

          <div className="space-y-6 lg:space-y-8">
            <div className="border-l-2 border-black/20 pl-4 lg:pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg sm:text-xl font-medium text-black">
                  Senior Full-Stack Developer
                </h3>
                <span className="text-sm sm:text-base text-black/60 mt-1 sm:mt-0">
                  2022 - Present
                </span>
              </div>
              <p className="text-sm sm:text-base text-black/70 mb-2">
                Innovatech Labs
              </p>
              <p className="text-sm sm:text-base text-black/80">
                Leading development of modern web applications using React,
                Node.js, and TypeScript, focusing on seamless user experiences
                and scalable solutions.
              </p>
            </div>

            <div className="border-l-2 border-black/20 pl-4 lg:pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg sm:text-xl font-medium text-black">
                  Frontend Developer
                </h3>
                <span className="text-sm sm:text-base text-black/60 mt-1 sm:mt-0">
                  2020 - 2022
                </span>
              </div>
              <p className="text-sm sm:text-base text-black/70 mb-2">
                Creative Web Agency
              </p>
              <p className="text-sm sm:text-base text-black/80">
                Developed responsive and interactive web interfaces,
                collaborating closely with designers to achieve pixel-perfect
                layouts and smooth animations.
              </p>
            </div>

            <div className="border-l-2 border-black/20 pl-4 lg:pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg sm:text-xl font-medium text-black">
                  Junior Web Developer
                </h3>
                <span className="text-sm sm:text-base text-black/60 mt-1 sm:mt-0">
                  2018 - 2020
                </span>
              </div>
              <p className="text-sm sm:text-base text-black/70 mb-2">
                Startup Hub
              </p>
              <p className="text-sm sm:text-base text-black/80">
                Assisted in building client-facing websites, optimized
                performance, and contributed to front-end development using
                modern frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div ref={addToSectionRefs} className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-black mb-4 lg:mb-6">
            My Approach
          </h2>
          <blockquote className="text-base sm:text-lg lg:text-xl text-black/80 italic leading-relaxed border-l-4 border-black/30 pl-4 lg:pl-6">
            "Design should feel effortless, and development should empower
            users. Every detail matters in creating memorable digital
            experiences."
          </blockquote>
          <p className="text-sm sm:text-base text-black/80 mt-4 lg:mt-6 leading-relaxed">
            I approach each project with curiosity and precision, focusing on
            crafting interfaces that are both beautiful and intuitive. My goal
            is to merge creativity with functionality for impactful,
            user-centered solutions.
          </p>
        </div>

        {/* Contact CTA + Resume Button */}
        <div ref={addToSectionRefs} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif text-black mb-4 lg:mb-6">
            Let's Collaborate
          </h2>
          <p className="text-sm sm:text-base text-black/80 mb-4 lg:mb-6 leading-relaxed">
            I'm always excited to explore new creative projects and
            collaborations. Whether it's a web experience, design challenge, or
            just exchanging ideas, I'd love to connect and make something
            meaningful together.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              to="/Contact"
              className="inline-block bg-black text-[#ECE7E1] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-black/80 transition-colors duration-300 text-center"
            >
              Get In Touch
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-[#ECE7E1] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300 text-center"
            >
              Get Full Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
