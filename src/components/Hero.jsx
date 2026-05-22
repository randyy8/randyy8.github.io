import { useEffect, useState } from "react";

const greetings = [
  {
    text: "Hi, I'm",
    hold: 2800,
    fontClass: "font-[Mondwest]",
    sizeClass: "text-[clamp(2.8rem,7.5vw,6rem)]",
  },
  {
    text: "Halo, saya",
    hold: 2800,
    fontClass: "font-[Mondwest]",
    sizeClass: "text-[clamp(2.8rem,7.5vw,6rem)]",
  },
  {
    text: "你好，我是",
    hold: 3000,
    fontClass: "font-sans",
    sizeClass: "text-[clamp(2rem,5.5vw,4.6rem)]",
  },
  {
    text: "こんにちは、私は",
    hold: 3000,
    fontClass: "font-sans",
    sizeClass: "text-[clamp(2rem,5.5vw,4.6rem)]",
  },
  {
    text: "안녕하세요, 저는",
    hold: 3000,
    fontClass: "font-sans",
    sizeClass: "text-[clamp(2rem,5.5vw,4.6rem)]",
  },
];

const navItems = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Work", href: "#work" },
  { number: "03", label: "Insight", href: "#insight" },
  { number: "04", label: "Contact", href: "#contact" },
];

function useTypewriter(items, typingSpeed = 130, deletingSpeed = 65) {
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentItem = items[itemIndex];
  const currentText = currentItem.text;
  const displayedText = currentText.slice(0, charIndex);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, currentItem.hold);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setItemIndex((prev) => (prev + 1) % items.length);
      }, 250);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    itemIndex,
    currentText,
    currentItem.hold,
    items.length,
    typingSpeed,
    deletingSpeed,
  ]);

  return {
    displayedText,
    currentItem,
  };
}

export default function Hero() {
  const { displayedText, currentItem } = useTypewriter(greetings);

  return (
    <section className="fixed inset-0 z-0 min-h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-video.mp4"
        poster="/image/hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <div className="mx-auto mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 font-[NeueBit] text-sm tracking-[0.08em] text-white/80 backdrop-blur-md sm:text-base">
            Building calm, clean, and meaningful digital experiences.
          </div>

          <h1 className="mb-5 text-white" aria-label="Hi, I'm Randy Salim">
            <span className="mx-auto flex h-[78px] max-w-[920px] items-center justify-center overflow-hidden whitespace-nowrap sm:h-[92px] md:h-[104px]">
              <span
                className={`block font-normal leading-none tracking-tight ${currentItem.fontClass} ${currentItem.sizeClass}`}
              >
                {displayedText}
                <span className="ml-1 animate-pulse text-white/80">|</span>
              </span>
            </span>

            <span className="mt-1 block font-[Mondwest] text-5xl font-normal leading-none tracking-tight sm:mt-2 sm:text-6xl md:text-7xl lg:text-8xl">
              Randy Salim
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl font-sans text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            A Computer Science student who enjoys creating modern interfaces,
            interactive web experiences, and simple products with thoughtful
            design.
          </p>

          <div className="mx-auto grid w-fit grid-cols-2 gap-3 md:flex md:items-center md:justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={`Go to ${item.label} section`}
                className="group flex h-10 w-[122px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 font-[NeueBit] text-sm tracking-[0.08em] text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black md:w-[128px]"
              >
                <span className="inline-flex translate-y-[1px] items-center text-sm leading-none text-white/55 transition group-hover:text-black/50">
                  {item.number}
                </span>

                <span className="inline-flex translate-y-[1px] items-center text-sm leading-none">
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className="inline-flex translate-y-[1px] items-center text-sm leading-none transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
