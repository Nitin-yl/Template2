import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <section className="py-15 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-[#ff5a1f] text-2xl font-semibold">Contact Me</h2>

        <div className="w-32 h-[3px] bg-[#ff5a1f] mx-auto mt-1 rounded-full" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-[#ff5a1f] text-lg mb-8"
      >
        Have Any Project?
      </motion.p>

      <NavLink to="*">
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 25px #ff5a1faa",
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
          className="
          bg-[#ff5a1f] text-white px-8 py-3 rounded-md
          font-medium flex items-center gap-2 mx-auto shadow-lg
        "
        >
          <FaPaperPlane /> Let's Chat
        </motion.button>
      </NavLink>
    </section>
  );
}
