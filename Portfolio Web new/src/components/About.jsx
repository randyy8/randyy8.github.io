import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen w-full bg-[#f3f1e8] px-6 py-24 text-[#1c2a22] sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/10" />

          <p className="font-[NeueBit] text-xl uppercase tracking-[0.2em] text-[#315c3a]">
            01 About Me
          </p>

          <div className="h-px flex-1 bg-black/10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-20 text-center"
        >
          <h2 className="font-[Mondwest] text-5xl font-normal leading-tight tracking-tight sm:text-6xl md:text-7xl">
            The person <br />
            <span className="text-[#4f8a57]">behind the interface.</span>
          </h2>
        </motion.div>

        {/* Row 1: Photo + About Text */}
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="overflow-hidden rounded-md border border-black/10"
          >
            <motion.img
              src="/image/profile.jpg"
              alt="Randy profile portrait"
              width="700"
              height="900"
              loading="lazy"
              className="h-[460px] w-full object-cover object-center"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.35 }}
            className="pt-2"
          >
            <h3 className="mb-8 font-[Mondwest] text-4xl font-normal leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Building interfaces <br />
              with clarity and purpose. <br />
            </h3>

            <div className="max-w-2xl space-y-6 font-sans text-base leading-8 text-black/70 sm:text-lg">
              <p>
                Hi! I'm Randy, a Computer Science student interested in building modern web
                interfaces, AI-related products, Web3 and Crypto and digital experiences
                that feel simple, useful, and enjoyable to use.
              </p>

              <p>
                I enjoy combining visual design, frontend development, and thoughtful interaction
                to turn complex ideas into digital experiences that feel clear, accessible, and meaningful.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Profile + Landmarks */}
        <div className="mt-14 grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Profile Cards */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="border-t border-black/10 pt-8"
          >
            <p className="mb-6 font-[NeueBit] text-xl uppercase tracking-[0.2em] text-black/40">
              Profile
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="min-h-[132px] border border-black/10 bg-white/30 p-5 backdrop-blur-sm">
                <p className="font-[NeueBit] text-3xl tracking-[0.04em] text-[#1c2a22]">
                  CS Student
                </p>

                <p className="mt-2 font-sans text-sm leading-6 text-black/55">
                  Focused on AI, Web3 and Crypto.
                </p>
              </div>

              <div className="min-h-[132px] border border-black/10 bg-white/30 p-5 backdrop-blur-sm">
                <p className="font-[NeueBit] text-3xl tracking-[0.04em] text-[#1c2a22]">
                  Creative Dev
                </p>

                <p className="mt-2 font-sans text-sm leading-6 text-black/55">
                  Building clean and meaningful interfaces.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Landmarks Cards */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.35 }}
            className="border-t border-black/10 pt-8"
          >
            <p className="mb-6 font-[NeueBit] text-xl uppercase tracking-[0.2em] text-black/40">
              Landmarks
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="min-h-[132px] border border-black/10 bg-white/30 p-5 backdrop-blur-sm">
                <h4 className="font-[NeueBit] text-3xl font-normal tracking-[0.04em]">
                  Frontend
                </h4>

                <p className="mt-2 font-sans text-sm leading-6 text-black/55">
                  React, Tailwind, UI Design
                </p>
              </div>

              <div className="min-h-[132px] border border-black/10 bg-white/30 p-5 backdrop-blur-sm">
                <h4 className="font-[NeueBit] text-3xl font-normal tracking-[0.04em]">
                  AI
                </h4>

                <p className="mt-2 font-sans text-sm leading-6 text-black/55">
                  Intelligent Systems
                </p>
              </div>

              <div className="min-h-[132px] border border-black/10 bg-white/30 p-5 backdrop-blur-sm">
                <h4 className="font-[NeueBit] text-3xl font-normal tracking-[0.04em]">
                  Creative
                </h4>

                <p className="mt-2 font-sans text-sm leading-6 text-black/55">
                  Portfolio & Web Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}