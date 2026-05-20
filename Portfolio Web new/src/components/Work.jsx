import Projects from "./Projects";
import Experience from "./Experience";

export default function Work() {
  return (
    <section id="work" className="relative z-10 bg-[#f3f1e8]">
      <Projects />
      <Experience />
    </section>
  );
}