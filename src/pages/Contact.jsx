import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom"; // Import Link

const Contact = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        formRef.current,
        contactInfoRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    // Animate elements in sequence
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
        formRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .to(
        contactInfoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#ECE7E1] min-h-screen w-full flex flex-col justify-center items-center px-6 py-12"
    >
      <div className="max-w-4xl w-full">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-serif text-black mb-4">
            Get in Touch
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="text-center mb-16">
          <p className="text-xl text-black/80 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="space-y-6">
            <h2 className="text-3xl font-serif text-black mb-8">
              Send a Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/60 border border-black/20 rounded-lg focus:outline-none focus:border-black/50 transition-colors text-black placeholder-black/50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/60 border border-black/20 rounded-lg focus:outline-none focus:border-black/50 transition-colors text-black placeholder-black/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/60 border border-black/20 rounded-lg focus:outline-none focus:border-black/50 transition-colors text-black placeholder-black/50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 bg-white/60 border border-black/20 rounded-lg focus:outline-none focus:border-black/50 transition-colors text-black placeholder-black/50 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-[#ECE7E1] font-medium rounded-lg hover:bg-black/80 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <h2 className="text-3xl font-serif text-black mb-8">
              Let's Connect
            </h2>

            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-medium text-black">Email</h3>
                <a
                  href="mailto:hello@charlesbruyerre.com"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  hello@charlesbruyerre.com
                </a>
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-medium text-black">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-black/70 hover:text-black transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-medium text-black">Location</h3>
                <p className="text-black/70">
                  Based in New York, NY
                  <br />
                  Available worldwide
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-medium text-black">Social Media</h3>
                <div className="flex space-x-4">
                  {/* Use Link for internal pages, keep a tags for external */}
                  <Link
                    to="/linkedin"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    to="/github"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link
                    to="/twitter"
                    className="text-black/70 hover:text-black transition-colors"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-black/20">
              <p className="text-black/60 text-sm leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries, feel
                free to call me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
