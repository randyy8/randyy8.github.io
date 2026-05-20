import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web", "Programming", "Data", "AI / Machine Learning"];

const projects = [
  {
    title: "Cucumber Game",
    course: "Object-Oriented Programming",
    shortCourse: "OOP",
    category: "Programming",
    year: "2026",
    date: "Dec 2025 — Jan 2026",
    image: "/image/cucumber.png",
    description:
      "Developed a simple 2D Java Swing game where players collect cucumbers across multiple rooms while avoiding AI-controlled guards.",
    detail:
      "Hide My Cucumber is a 2D Java Swing game created as part of an Object-Oriented Programming project. The game challenges players to collect cucumbers across multiple rooms while avoiding AI-controlled guards. This project helped me practice object-oriented programming concepts, Java Swing interface development, game logic, and database integration.",
    stack: ["Java", "Database", "OOP", "Java Swing"],
    link: "https://github.com/randyy18/OOP-Cucumber-Game",
  },
  {
    title: "Coffee Website",
    course: "Human Computer Interaction",
    shortCourse: "HCI",
    category: "Web",
    year: "2025",
    date: "Jun 2025 — Jun 2025",
    image: "/image/Coffee.png",
    description:
      "Developed a responsive and user-friendly coffee shop website with intuitive UI/UX, smooth navigation, and clean visual structure.",
    detail:
      "Coffee Website is a responsive and user-friendly website created as part of a Human Computer Interaction course project. The project focused on intuitive UI/UX design, smooth navigation, readable content structure, engaging visuals, and a polished frontend experience.",
    stack: ["Figma", "HTML", "CSS", "JavaScript"],
    link: "https://website-coffee-rust.vercel.app/index.html",
  },
  {
    title: "Production Growth Analysis",
    course: "Scientific Computing",
    shortCourse: "Scientific Computing",
    category: "Data",
    year: "2025",
    date: "May 2025 — Jun 2025",
    image: "/image/scicomp.png",
    description:
      "Used Python to model production growth, predict future output, and analyze warehouse capacity through numerical methods and visualization.",
    detail:
      "Production Growth Analysis is a scientific computing project that uses Python to model production growth, predict future output, and analyze warehouse capacity. The project combines curve fitting, numerical methods, and data visualization to support practical decision-making.",
    stack: ["Python", "Numerical Method", "Data Visualization"],
    link: "https://github.com/randyy18/Scientific-Computing",
  },
  // {
  //   title: "Diabetes Classification",
  //   course: "Machine Learning",
  //   shortCourse: "ML",
  //   category: "AI / Machine Learning",
  //   year: "2025",
  //   date: "May 2025 — Jun 2025",
  //   image: "/image/diabetes.png",
  //   description:
  //     "Built a machine learning model to classify diabetes risk using patient health data and evaluation metrics.",
  //   detail:
  //     "Diabetes Classification is a machine learning project focused on preprocessing health data, training classification models, and evaluating performance using accuracy, precision, recall, and F1-score.",
  //   stack: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
  //   link: "#",
  // },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    window.dispatchEvent(new Event("modal-state-change"));

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
      window.dispatchEvent(new Event("modal-state-change"));
    };
  }, [selectedProject]);

  return (
    <section className="relative w-full bg-[#f3f1e8] px-6 py-24 text-[#1c2a22] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center gap-4">
          <p className="font-[NeueBit] text-xl uppercase tracking-[0.2em] text-[#315c3a]">
            02 Work
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <h2 className="font-[Mondwest] text-6xl leading-none tracking-tight text-[#1c2a22] sm:text-7xl md:text-8xl">
            From concept <br />
            to working <span className="text-[#4f8a57]">product.</span>
          </h2>

          <p className="max-w-xl self-end font-sans text-base leading-8 text-black/65 sm:text-lg">
            A collection of academic and technical projects I have built,
            focusing on programming, interface design, problem solving, and
            practical implementation.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 font-[NeueBit] text-base tracking-[0.08em] transition duration-300 ${
                activeCategory === category
                  ? "border-[#173f2a] bg-[#173f2a] text-white"
                  : "border-black/10 bg-white/30 text-[#1c2a22]/70 hover:bg-[#173f2a] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="border border-black/10">
          <div className="hidden grid-cols-[1fr_2fr_1.2fr_0.65fr] border-b border-black/10 px-6 py-4 font-[NeueBit] text-lg uppercase tracking-[0.18em] text-black/45 lg:grid">
            <p>Projects</p>
            <p>Details</p>
            <p>Stack</p>
            <p className="text-right">Year</p>
          </div>

          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group grid w-full items-start gap-6 border-b border-black/10 px-5 py-8 text-left transition duration-300 last:border-b-0 hover:bg-white/40 lg:grid-cols-[1fr_2fr_1.2fr_0.65fr] lg:px-6"
              >
                <div className="self-start overflow-hidden border border-black/10 bg-[#f3f1e8]">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-[150px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03] sm:h-[170px] lg:h-[145px]"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                <div>
                  <p className="mb-2 font-[NeueBit] text-lg uppercase tracking-[0.12em] text-black/40">
                    {project.date}
                  </p>

                  <h3 className="font-[Mondwest] text-3xl text-[#315c3a] sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-1 font-[NeueBit] text-2xl tracking-[0.04em] text-black/70">
                    {project.course}
                  </p>

                  <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-black/65 sm:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-black/10 bg-white/30 px-3 py-1 font-[NeueBit] text-sm uppercase tracking-[0.12em] text-black/65"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-8 lg:flex-col lg:items-end lg:justify-start lg:gap-6">
                  <span className="font-[NeueBit] text-xl tracking-[0.08em] text-black/55">
                    {project.year}
                  </span>

                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#173f2a] font-sans text-white transition duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </div>
              </button>
            ))
          ) : (
            <div className="px-6 py-12">
              <p className="font-sans text-base text-black/55">
                No projects available in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]/90 px-4 py-6 backdrop-blur-md sm:px-5 sm:py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden border border-black/10 bg-[#f3f1e8] text-[#1c2a22] shadow-2xl"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 z-30 flex items-center justify-between border-b border-black/10 bg-[#f3f1e8]/90 px-5 py-4 backdrop-blur-xl sm:px-8">
                  <div>
                    <p className="font-[NeueBit] text-sm uppercase tracking-[0.2em] text-black/40">
                      Course
                    </p>

                    <h4 className="font-[NeueBit] text-2xl tracking-[0.06em] text-[#1c2a22]">
                      {selectedProject.shortCourse}
                    </h4>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full border border-black/10 bg-white/30 px-4 py-2 font-[NeueBit] text-lg tracking-[0.06em] transition hover:bg-black hover:text-white"
                  >
                    Close
                  </button>
                </div>

                <div className="max-h-[calc(88vh-82px)] overflow-y-auto px-5 py-6 sm:px-8">
                  <div className="mb-8 overflow-hidden border border-black/10 bg-white/30">
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} detail`}
                      className="aspect-[16/9] w-full object-cover object-center"
                    />
                  </div>

                  <p className="mb-3 font-[NeueBit] text-xl uppercase tracking-[0.2em] text-black/40">
                    Project Detail
                  </p>

                  <h3 className="font-[Mondwest] text-5xl leading-tight text-[#315c3a] sm:text-6xl">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-3 font-[NeueBit] text-2xl tracking-[0.04em] text-black/60">
                    {selectedProject.course}
                  </p>

                  <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-black/70">
                    {selectedProject.detail}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {selectedProject.stack.map((item) => (
                      <span
                        key={item}
                        className="border border-black/10 bg-white/40 px-3 py-1 font-[NeueBit] text-sm uppercase tracking-[0.12em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173f2a] px-5 py-3 font-[NeueBit] text-lg tracking-[0.08em] text-white transition hover:scale-[1.03]"
                  >
                    View Project ↗
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}