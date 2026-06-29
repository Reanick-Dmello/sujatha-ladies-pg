import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa";

export default function ThumbnailGrid({ images, onClick }) {
  const visibleImages = images.slice(0, 3);
  const remaining = images.length - 3;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
      {visibleImages.map((image, index) => {
        const isLast = index === 2 && remaining > 0;

        return (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
            }}
            onClick={() => onClick(image)}
            className="group relative cursor-pointer overflow-hidden rounded-[28px] shadow-[0_18px_45px_rgba(236,72,153,0.12)] hover:shadow-[0_28px_60px_rgba(236,72,153,0.22)] transition-all duration-500"
          >
            <img
              src={image.image}
              alt={image.title}
              loading="lazy"
              className="w-full h-36 sm:h-44 lg:h-64 object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Title */}

            <div className="absolute left-5 bottom-5 text-white">
              <h3 className="font-semibold text-lg">{image.title}</h3>

              <p className="text-sm opacity-80">{image.category}</p>
            </div>

            {/* More Photos */}

            {isLast && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white">
                <FaImages className="text-3xl mb-3" />

                <h2 className="text-3xl font-bold">+{remaining}</h2>

                <p className="mt-2">More Photos</p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
