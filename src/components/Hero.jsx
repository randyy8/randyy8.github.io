const navItems = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Work", href: "#work" },
  { number: "03", label: "Insight", href: "#insight" },
  { number: "04", label: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="fixed inset-0 z-0 min-h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <div className="mx-auto mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 font-[NeueBit] text-sm tracking-[0.08em] text-white/80 backdrop-blur-md sm:text-base">
            Building calm, clean, and meaningful digital experiences.
          </div>

          <h1 className="mb-5 font-[Mondwest] text-5xl font-normal tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Hi! I'm Randy Salim
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
