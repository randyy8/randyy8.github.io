import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Insight", href: "#insight" },
  { label: "Contact", href: "#contact" },
];

export default function StickyNav() {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleModalState = () => {
      setModalOpen(document.body.classList.contains("modal-open"));
    };

    window.addEventListener("modal-state-change", handleModalState);

    return () => {
      window.removeEventListener("modal-state-change", handleModalState);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isPastHero = currentScrollY > window.innerHeight * 0.8;
      const isScrollingUp = currentScrollY < lastScrollY;

      if (isPastHero && isScrollingUp && !modalOpen) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, modalOpen]);

  return (
    <nav
      className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
        showNav && !modalOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <div className="rounded-full border border-black/10 bg-[#f3f1e8]/80 px-2 py-2 shadow-[0_12px_40px_rgba(28,42,34,0.18)] backdrop-blur-xl">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={`Go to ${item.label} section`}
              className="rounded-full px-5 py-2 font-[NeueBit] text-base tracking-[0.08em] text-[#1c2a22]/70 transition duration-300 hover:bg-[#173f2a] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}