import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profile from "../assets/profile2.png";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section className="pt-20" id="about">
      <div
        className="
          max-w-6xl mx-auto px-6
          flex flex-col-reverse lg:flex-row
          items-start justify-between gap-16
        "
      >
        {/* LEFT IMAGE (desktop) — BOTTOM on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[420px] flex justify-center lg:justify-start"
        >
          <div className="rounded-xl overflow-hidden shadow-[0_0_120px_#ff5a1f]">
            <img
              src={profile}
              alt="profile"
              className="w-[380px] h-[420px] object-cover rounded-xl"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT (desktop) — TOP on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <div>
            <h2 className="text-[#ff5a1f] text-2xl font-semibold">About Me</h2>
            <div className="w-24 h-[3px] bg-[#ff5a1f] rounded-full mt-1" />
          </div>

          <h3 className="text-[#ff5a1f] text-xl font-semibold">
            Designing Is My Passion
          </h3>

          <p className="text-[#b4b4b4] leading-8 text-[15px] max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aut labore saepe neque ratione explicabo quod eaque commodi quidem odit, alias sequi praesentium nemo iusto culpa voluptate quam. Minus eveniet perferendis itaque obcaecati modi tenetur fuga ullam similique? Culpa atque aut doloremque dignissimos laborum debitis vitae! Ipsam pariatur modi, sit cupiditate facere necessitatibus eius enim architecto culpa veritatis libero labore ea distinctio nihil quia quos quasi vitae dolore accusantium qui, obcaecati sint cum? A ad debitis, facilis voluptatibus fugiat soluta blanditiis
          </p>

          <NavLink to="*">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-[#ff5a1f] text-white px-8 py-3
                rounded-md font-medium flex items-center gap-2 w-fit
              "
            >
              Download CV <ArrowRight size={18} />
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}
