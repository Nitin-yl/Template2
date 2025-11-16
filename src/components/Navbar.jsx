import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-black/95 backdrop-blur-sm shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl font-semibold text-white tracking-wide"
        >
          Portfolio<span className="text-[#ff5a1f]">.</span>
        </motion.h1>

        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#ff5a1f] opacity-90"
        >
          {["Home", "About", "Skills", "Services", "Contact"].map(
            (item, index) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            )
          )}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex items-center gap-5 text-[#ff5a1f] opacity-90"
        >
          {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer"
            >
              <Icon size={16} />
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#ff5a1f]"
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-black/95 px-6 py-6"
          >
            <ul className="flex flex-col gap-4 text-[#ff5a1f] text-base">
              {["Home", "About", "Skills", "Services", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>

            <div className="flex items-center gap-6 mt-6 text-[#ff5a1f]">
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  className="cursor-pointer"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
