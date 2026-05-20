import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "BINUS Blockchain and Crypto Club",
    location: "Jakarta, Indonesia",
    period: "Dec 2025 — Present",
    duration: "6 months",
    roles: [
      {
        title: "Activist — Education",
        description:
          "Supported the development of structured learning resources to help students understand blockchain, cryptocurrency fundamentals, and decentralized technologies.",
        skills: ["Blockchain", "Crypto", "Research", "Critical Thinking"],
      },
      {
        title: "FLOQ Connect Committee",
        description:
          "Contributed as a committee member by maintaining communication among participants and supporting discussions around Web3, blockchain, and crypto topics.",
        skills: ["Communication", "Event Support", "Community"],
      },
    ],
  },
  {
    company: "Blockdev.id",
    location: "Jakarta, Indonesia",
    period: "Nov 2025 — Dec 2025",
    duration: "2 months",
    roles: [
      {
        title: "Event Operations — Registration",
        description:
          "Worked as registration staff for KELAS RUTIN, supporting participant registration, verification, coordination, and on-site event operations.",
        skills: ["Data Validation", "Operational Support", "Event Management"],
      },
    ],
  },
  {
    company: "BINUS University",
    location: "Jakarta, Indonesia",
    period: "Aug 2025 — Dec 2025",
    duration: "5 months",
    roles: [
      {
        title: "Freshmen Partner",
        description:
          "Supported new students during their transition into university life by helping them feel welcomed, connected, and ready to begin their academic journey.",
        skills: ["Mentoring", "Communication", "Team Support"],
      },
      {
        title: "Freshmen Leader",
        description:
          "Guided first-year students through orientation activities while developing leadership, empathy, collaboration, and communication skills.",
        skills: ["Leadership", "Team Management", "Public Speaking"],
      },
    ],
  },
  {
    company: "Sekolah Djuwita International",
    location: "Batam, Riau Islands, Indonesia",
    period: "Mar 2021 — Mar 2024",
    duration: "3 yrs 1 mo",
    roles: [
      {
        title: "Student Council President",
        description:
          "Led and coordinated multiple school-wide events focused on student engagement, leadership development, and community building.",
        skills: ["Leadership", "Event Planning", "Team Leadership"],
      },
      {
        title: "Student Council — Head of Religion Division",
        description:
          "Helped create a positive and inclusive spiritual environment by organizing religious activities and supporting community values at school.",
        skills: ["Community Building", "Organization", "Responsibility"],
      },
      {
        title: "Student Council — Sports Division",
        description:
          "Promoted sportsmanship, teamwork, and a healthy lifestyle by helping organize school-wide sports events and competitions.",
        skills: ["Teamwork", "Sportsmanship", "Event Support"],
      },
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleExperience = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#f3f1e8] px-6 py-24 text-[#1c2a22] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center gap-4">
          <p className="font-[NeueBit] text-xl uppercase tracking-[0.2em] text-[#315c3a]">
            Experience
          </p>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <div className="mb-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <h2 className="font-[Mondwest] text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl">
            Where growth <br />
            became <span className="text-[#4f8a57]">experience.</span>
          </h2>

          <p className="max-w-xl self-center font-sans text-base leading-8 text-black/65 sm:text-lg">
            My experiences range from blockchain education, event operations,
            university mentoring, and student leadership. Click each experience
            to view the details.
          </p>
        </div>

        <div className="border border-black/10">
          {experiences.map((group, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={group.company}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.25 }}
                className="border-b border-black/10 last:border-b-0"
              >
                <button
                  onClick={() => toggleExperience(index)}
                  className="group grid w-full gap-6 px-5 py-8 text-left transition duration-300 hover:bg-white/40 lg:grid-cols-[1.1fr_0.7fr_0.5fr_0.2fr] lg:px-6"
                >
                  <div>
                    <h3 className="font-[Mondwest] text-3xl leading-tight text-[#315c3a] sm:text-4xl">
                      {group.company}
                    </h3>

                    <p className="mt-2 font-sans text-sm text-black/50">
                      {group.location}
                    </p>
                  </div>

                  <div>
                    <p className="font-[NeueBit] text-xl tracking-[0.08em] text-black/55">
                      {group.period}
                    </p>
                  </div>

                  <div>
                    <p className="font-[NeueBit] text-xl tracking-[0.08em] text-black/40">
                      {group.duration}
                    </p>
                  </div>

                  <div className="flex justify-start lg:justify-end">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#173f2a] font-sans text-white transition duration-300 ${
                        isOpen ? "rotate-45" : "group-hover:rotate-45"
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-black/10 bg-white/25 px-5 py-8 lg:px-6">
                        <div className="relative ml-2 border-l border-black/15 pl-8">
                          {group.roles.map((role, roleIndex) => (
                            <div
                              key={role.title}
                              className="relative pb-10 last:pb-0"
                            >
                              <span className="absolute -left-[39px] top-2 h-3 w-3 rounded-full border border-black/20 bg-[#315c3a]" />

                              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                                <div>
                                  <h4 className="font-[NeueBit] text-3xl tracking-[0.04em] text-[#1c2a22]">
                                    {role.title}
                                  </h4>

                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {role.skills.map((skill) => (
                                      <span
                                        key={skill}
                                        className="border border-black/10 bg-[#f3f1e8]/70 px-3 py-1 font-[NeueBit] text-sm uppercase tracking-[0.12em] text-black/60"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <p className="max-w-2xl font-sans text-sm leading-7 text-black/65 sm:text-base">
                                  {role.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}