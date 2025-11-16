import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full py-4
        bg-[#7a1b14]/80
        text-center text-white text-sm
      "
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex justify-center items-center gap-2"
      >
        <span>Created By</span>
        <span className="text-[#ffb8a8] font-semibold">ayesha.is.coding</span>

        <Heart size={14} className="text-[#ff5a1f]" />

        <span>| © 2024 All Rights Reserved</span>
      </motion.div>
    </motion.footer>
  );
}
