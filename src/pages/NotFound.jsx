// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="h-screen flex items-center justify-center bg-black px-6">
      <div className="text-center max-w-lg">

        {/* ICON */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <AlertTriangle size={70} className="text-[#ff5a1f]" />
        </motion.div>

        {/* 404 TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white text-7xl font-extrabold drop-shadow-[0_0_40px_#ff5a1f77]"
        >
          404
        </motion.h1>

        {/* SUB TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#ff5a1f] text-xl font-semibold mt-4"
        >
          Page Not Found
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-[#b4b4b4] mt-3 leading-relaxed"
        >
          The page you're searching for doesn't exist or has been moved.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 150 }}
          className="mt-8"
        >
          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 25px #ff5a1faa",
                y: -3,
              }}
              whileTap={{ scale: 0.94 }}
              className="
                bg-[#ff5a1f] px-6 py-3 rounded-md
                text-white font-semibold flex items-center gap-2 mx-auto
              "
            >
              <ArrowLeft size={18} /> Go Back Home
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
