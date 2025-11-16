import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaIcons,
  FaCamera,
  FaMobileAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Web Development", icon: FaCode },
    { title: "Graphic Design", icon: FaPaintBrush },
    { title: "Digital Marketing", icon: FaBullhorn },
    { title: "Icon Design", icon: FaIcons },
    { title: "Photography", icon: FaCamera },
    { title: "Apps Development", icon: FaMobileAlt },
  ];

  return (
    <section className="pt-20 max-w-6xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-[#ff5a1f] text-2xl font-semibold">My Services</h2>
        <div className="w-32 h-[3px] bg-[#ff5a1f] mx-auto mt-1 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
        {services.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{
                scale: 1.1,
                y: -6,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#ff5a1f] rounded-full text-black text-xl shadow-[0_0_20px_#ff5a1f55]">
                <Icon />
              </div>

              <p className="text-[#ff5a1f] font-medium">{item.title}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
