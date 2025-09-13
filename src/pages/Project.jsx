import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Projects = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const projectsRef = useRef([]);
  const filterRef = useRef(null);

  // Add refs to array safely
  const addToProjectRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, filterRef.current], {
      opacity: 0,
      y: 50,
    });
    gsap.set(projectsRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.9,
    });

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
        filterRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .to(
        projectsRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.3"
      );
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with React, Node.js, and Stripe integration",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      year: "2024",
      slug: "e-commerce-platform",
    },
    {
      id: 2,
      title: "Brand Identity System",
      description:
        "Complete brand identity design for a tech startup including logo, guidelines, and assets",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      category: "Design",
      year: "2024",
      slug: "brand-identity-system",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "Web Development",
      year: "2023",
      slug: "task-management-app",
    },
    {
      id: 4,
      title: "Restaurant Website",
      description:
        "Elegant restaurant website with online ordering system and reservation management",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      technologies: ["React", "Next.js", "Sanity CMS"],
      category: "Web Development",
      year: "2023",
      slug: "restaurant-website",
    },
    {
      id: 5,
      title: "Mobile App UI/UX",
      description:
        "User interface and experience design for a fitness tracking mobile application",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["Figma", "Principle", "Sketch"],
      category: "UI/UX Design",
      year: "2023",
      slug: "mobile-app-ui-ux",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A creative portfolio website for a photographer with custom animations and galleries",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "GSAP", "Three.js"],
      category: "Web Development",
      year: "2023",
      slug: "portfolio-website",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#ECE7E1] min-h-screen w-full px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl font-serif text-black mb-6"
          >
            My Projects
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed"
          >
            A collection of my recent work in web development, design, and
            creative projects. Each project represents a unique challenge and
            solution.
          </p>
        </div>

        {/* Filter Section */}
        <div ref={filterRef} className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {["All", "Web Development", "Design", "UI/UX Design"].map(
              (filter) => (
                <button
                  key={filter}
                  className="px-6 py-2 bg-white/60 text-black border border-black/20 rounded-full hover:bg-black hover:text-[#ECE7E1] transition-all duration-300 font-medium"
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={addToProjectRefs}
              className="group bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-black/80 text-[#ECE7E1] px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-black/60 bg-black/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-black mb-3 group-hover:text-black/80 transition-colors">
                  {project.title}
                </h3>

                <p className="text-black/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-black/5 text-black/70 px-2 py-1 rounded border border-black/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center text-black font-medium group-hover:text-black/80 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-black/70 mb-8">
            Interested in working together?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-black text-[#ECE7E1] px-8 py-4 rounded-lg font-medium hover:bg-black/80 transition-colors duration-300 text-lg"
          >
            Let's Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
