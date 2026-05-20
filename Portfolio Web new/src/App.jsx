import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Insight from "./components/Insight";
import Contact from "./components/Contact";
import StickyNav from "./components/StickyNav";

export default function App() {
  return (
    <main className="relative bg-black">
      <Hero />

      <div className="h-screen" aria-hidden="true" />

      <About />
      <Work />
      <Insight />
      <Contact />

      <StickyNav />
    </main>
  );
}