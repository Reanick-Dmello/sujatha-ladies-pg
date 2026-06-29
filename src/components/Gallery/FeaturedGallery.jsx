import { motion } from "framer-motion";
import { FaExpandAlt } from "react-icons/fa";

export default function FeaturedGallery({ image, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
    >
      {/* Image */}

      <img
        src={image.image}
        alt={image.title}
        loading="lazy"
        className="w-full h-[260px] md:h-[420px] lg:h-[520px] object-cover transition-all duration-700 group-hover:scale-105"
      />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* Category */}

      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-semibold uppercase tracking-widest">
        {image.category}
      </div>

      {/* Bottom Content */}

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-end justify-between">
        <div>
          <h2
            className="text-white text-3xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {image.title}
          </h2>

          <p className="text-white/80 mt-3 max-w-lg">
            Experience a clean, spacious and comfortable stay designed
            especially for students and working women.
          </p>
        </div>

        {/* View Button */}

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl items-center justify-center text-white"
        >
          <FaExpandAlt size={20} />
        </motion.div>
      </div>

      {/* Mobile Button */}

      <button className="md:hidden absolute bottom-5 right-5 w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg text-white flex items-center justify-center">
        <FaExpandAlt />
      </button>
    </motion.div>
  );
}
