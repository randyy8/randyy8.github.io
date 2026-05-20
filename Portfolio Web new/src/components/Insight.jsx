export default function Insight() {
  return (
    <section
      id="insight"
      className="relative z-10 w-full bg-[#f3f1e8] px-6 py-24 text-[#1c2a22] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center gap-4">
          <p className="font-[NeueBit] text-xl uppercase tracking-[0.2em] text-[#315c3a]">
            03 Insight
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <h2 className="font-[Mondwest] text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl">
          Notes, ideas, <br />
          and <span className="text-[#4f8a57]">perspectives.</span>
        </h2>

        <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-black/65 sm:text-lg">
          A space for sharing thoughts about technology, AI, Web3 and Crypto, Finance,
          Frontend development, and digital product design.
        </p>
      </div>
    </section>
  );
}