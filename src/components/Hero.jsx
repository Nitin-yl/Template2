import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";
import profile from "../assets/profile.png";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-32">
      <div
        className="
          max-w-6xl mx-auto px-6
          flex flex-col md:flex-row
          items-center md:items-start
          justify-between
          gap-16 md:gap-20
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left max-w-lg"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-[3px] bg-[#ff5a1f] rounded-full mx-auto md:mx-0"
          />

          <p className="text-[#b4b4b4] text-lg">Hello,</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            I'm <span className="text-[#ff5a1f]">Ayesha</span>
          </h1>

          <p className="text-[#ff5a1f] text-lg font-semibold">UI/UX Designer</p>
          <p className="text-[#b4b4b4]">From India</p>

          <p className="text-[#b4b4b4] leading-relaxed text-base sm:text-lg">
            I create elegant, user-friendly interfaces with a strong focus on
            clean aesthetics and smooth interactions.
          </p>

          <motion.div
            whileHover={{ scale: 1.08, boxShadow: "0 0 15px #ff5a1f55" }}
            className="
              flex items-center gap-2 bg-[#1a1a1a]
              border border-[#ff5a1f]
              text-[#ff5a1f] px-4 py-2
              rounded-full w-fit text-sm cursor-pointer
              mx-auto md:mx-0
            "
          >
            <Star size={16} /> 3+ Years Experience
          </motion.div>

          <NavLink to="*">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px #ff5a1faa",
                rotate: -1.5,
              }}
              whileTap={{ scale: 0.93 }}
              className="
              bg-[#ff5a1f] mt-4 px-8 py-3 rounded-md
              text-white font-medium flex items-center
              justify-center md:justify-start
              gap-2 shadow-lg transition-all
              mx-auto md:mx-0
            "
            >
              Hire Me <ArrowRight size={20} />
            </motion.button>
          </NavLink>

          <div
            className="
              flex items-center gap-6 text-[#ff5a1f] pt-4
              justify-center md:justify-start
            "
          >
            {[FaLinkedin, FaGithub, FaFigma].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.3,
                  y: -4,
                  color: "#ffffff",
                  rotate: 3,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="cursor-pointer text-2xl"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[420px] flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 260px #ff5a1faa",
            }}
            transition={{ type: "spring", stiffness: 150 }}
            className="rounded-xl overflow-hidden shadow-[0_0_200px_#ff5a1f]"
          >
            <img
              src={profile}
              alt="profile"
              className="
                w-[280px] h-[380px]
                sm:w-[320px] sm:h-[450px]
                md:w-[380px] md:h-[520px]
                object-cover rounded-xl
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
