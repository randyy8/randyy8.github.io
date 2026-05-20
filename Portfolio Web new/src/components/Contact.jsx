import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const icons = {
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.78c0 .27.18.6.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),

  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v14H.35V8Zm7.05 0h4.12v1.91h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.17 2.87 5.17 6.6V22h-4.3v-6.83c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V22H7.4V8Z" />
    </svg>
  ),

  Instagram: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),

  Discord: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.32 4.37A19.8 19.8 0 0 0 15.36 3c-.21.37-.45.87-.62 1.27a18.4 18.4 0 0 0-5.49 0A12.5 12.5 0 0 0 8.62 3a19.7 19.7 0 0 0-4.95 1.38C.54 9.05-.32 13.6.1 18.08A19.9 19.9 0 0 0 6.18 21.1c.49-.66.92-1.36 1.3-2.1-.71-.27-1.38-.6-2.02-.98.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.08 0l.5.4c-.64.38-1.32.72-2.03.98.38.74.82 1.44 1.3 2.1a19.85 19.85 0 0 0 6.09-3.02c.5-5.2-.84-9.7-3.58-13.71ZM8.02 15.34c-1.18 0-2.15-1.08-2.15-2.4s.95-2.4 2.15-2.4c1.2 0 2.17 1.09 2.15 2.4 0 1.32-.95 2.4-2.15 2.4Zm7.96 0c-1.18 0-2.15-1.08-2.15-2.4s.95-2.4 2.15-2.4c1.2 0 2.17 1.09 2.15 2.4 0 1.32-.95 2.4-2.15 2.4Z" />
    </svg>
  ),
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/randyy18",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/randysalim18",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/randy_salimm",
  },
  {
    label: "Discord",
    href: "https://discord.com/users/asiaboi",
  },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (isFormOpen) {
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
  }, [isFormOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeForm = () => {
    if (submitStatus === "loading") return;

    setIsFormOpen(false);
    setSubmitStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const botcheck = form.elements.botcheck?.checked;

    if (botcheck) {
      setFormData(initialFormData);
      setSubmitStatus("success");
      setTimeout(() => {
        setIsFormOpen(false);
        setSubmitStatus("idle");
      }, 900);
      return;
    }

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setSubmitStatus("error");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("Missing VITE_WEB3FORMS_ACCESS_KEY. Add it to .env.local before building.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Message from ${cleanName}`,
          from_name: cleanName,
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
          botcheck,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData(initialFormData);

        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitStatus("idle");
        }, 1200);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form submit failed:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen w-full overflow-hidden bg-[#f3f1e8] px-6 py-24 text-[#1c2a22] sm:px-10 lg:px-20"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#4f8a57]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#173f2a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex items-center gap-4">
          <p className="font-[NeueBit] text-xl uppercase tracking-[0.2em] text-[#315c3a]">
            04 Contact
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <div className="grid min-h-[70vh] items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="font-[Mondwest] text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl">
              Let&apos;s build <br />
              something <span className="text-[#4f8a57]">meaningful.</span>
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-black/65 sm:text-lg">
              Feel free to reach out for collaborations and opportunities. I am
              open to discussing AI, crypto, Web3, finance, and ideas related to
              technology and design. Looking forward to connecting with you!
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#173f2a] px-6 py-3 font-[NeueBit] text-lg tracking-[0.08em] text-white transition duration-300 hover:scale-[1.03]"
              >
                Send Message ↗
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="border border-black/10 bg-white/25 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          >
            <p className="mb-8 font-[NeueBit] text-2xl uppercase tracking-[0.14em] text-black/40">
              Link in Profile
            </p>

            <div className="grid gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open Randy's ${item.label}`}
                  className="group flex items-center justify-between rounded-full border border-black/10 bg-[#f3f1e8]/70 px-5 py-4 transition duration-300 hover:bg-[#173f2a] hover:text-white"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/40 text-[#1c2a22] transition duration-300 group-hover:border-white/10 group-hover:bg-white/10 group-hover:text-white">
                      {icons[item.label]}
                    </span>

                    <span className="font-[NeueBit] text-2xl tracking-[0.08em]">
                      {item.label}
                    </span>
                  </div>

                  <span className="font-sans transition duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 border border-black/10 bg-[#f3f1e8]/60 p-5">
              <p className="font-[NeueBit] text-xl tracking-[0.1em] text-black/45">
                Available for:
              </p>

              <p className="mt-3 font-sans text-sm leading-7 text-black/60">
                Frontend projects, portfolio websites, and collaborations
                related to Web3, crypto, finance, and AI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]/70 px-4 py-6 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeForm}
            >
              <motion.div
                className="relative w-full max-w-xl border border-black/10 bg-[#f3f1e8] text-[#1c2a22] shadow-2xl"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 25, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between border-b border-black/10 px-5 py-4 sm:px-7">
                  <div>
                    <h3 className="font-[Mondwest] text-4xl leading-none text-[#1c2a22] sm:text-5xl">
                      Message
                    </h3>
                    <p className="mt-2 font-[NeueBit] text-sm uppercase tracking-[0.18em] text-black/40">
                      Send a direct message
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeForm}
                    disabled={submitStatus === "loading"}
                    className="rounded-full border border-black/10 bg-white/30 px-3 py-2 font-[NeueBit] text-lg transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Close
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="px-5 py-6 sm:px-7">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-[NeueBit] text-sm uppercase tracking-[0.16em] text-black/45"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={80}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        autoComplete="name"
                        className="w-full border border-black/10 bg-white/40 px-4 py-3 font-sans text-sm text-[#1c2a22] outline-none transition placeholder:text-black/30 focus:border-[#173f2a]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-[NeueBit] text-sm uppercase tracking-[0.16em] text-black/45"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={120}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        autoComplete="email"
                        className="w-full border border-black/10 bg-white/40 px-4 py-3 font-sans text-sm text-[#1c2a22] outline-none transition placeholder:text-black/30 focus:border-[#173f2a]"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="message"
                      className="mb-2 block font-[NeueBit] text-sm uppercase tracking-[0.16em] text-black/45"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      minLength={10}
                      maxLength={1000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello! I’d like to discuss..."
                      className="w-full resize-none border border-black/10 bg-white/40 px-4 py-3 font-sans text-sm leading-7 text-[#1c2a22] outline-none transition placeholder:text-black/30 focus:border-[#173f2a]"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <p className="mt-4 border border-[#173f2a]/20 bg-[#173f2a]/10 px-4 py-3 font-sans text-sm text-[#173f2a]">
                      Message sent successfully. Thank you!
                    </p>
                  )}

                  {submitStatus === "error" && (
                    <p className="mt-4 border border-red-500/20 bg-red-500/10 px-4 py-3 font-sans text-sm text-red-700">
                      Failed to send message. Please check your access key or try
                      again later.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === "loading" || !WEB3FORMS_ACCESS_KEY}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#173f2a] px-5 py-3 font-[NeueBit] text-lg tracking-[0.08em] text-white transition duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitStatus === "loading"
                      ? "Sending..."
                      : "Send Message ↗"}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
