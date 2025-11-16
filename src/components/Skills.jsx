import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 80 },
    { name: "JavaScript", percent: 70 },
    { name: "PHP", percent: 60 },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.4 }} // 👈 repeats animation when re-enters view
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-[#ff5a1f]">My Skills</h2>
        <div className="w-24 h-[3px] bg-[#ff5a1f] mt-1 rounded-full" />
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.4 }} // 👈 plays every scroll
          className="max-w-xl space-y-6"
        >
          <h3 className="text-[#ff5a1f] text-xl font-semibold">
            Skills Reflects Our Knowledge
          </h3>

          <p className="text-[#b4b4b4] leading-7 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            delectus porro nihil, veritatis, beatae incidunt maxime vel modi
            expedita qui aut, cum quos doloremque harum?
          </p>

          <div>
            <p className="text-5xl font-bold text-[#ff5a1f]">10</p>
            <p className="text-[#ff5a1f] text-sm -mt-2">Years Of Experience</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16 text-white">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ amount: 0.4 }} // 👈 REPEAT animation
              className="space-y-2"
            >
              <p className="text-[#ff5a1f] text-sm">{skill.name}</p>

              <p className="text-4xl font-bold">{skill.percent}%</p>

              <div className="w-full h-2 bg-[#1e1e1e] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ amount: 0.4 }}
                  className="h-full bg-[#ff5a1f] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
