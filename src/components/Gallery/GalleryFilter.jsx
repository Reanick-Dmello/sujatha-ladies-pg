import { motion } from "framer-motion";

export default function GalleryFilter({
  category,
  setCategory,
  categories,
  images,
}) {
  const getCount = (item) => {
    if (item === "All") return images.length;

    return images.filter((img) => img.category === item).length;
  };

  return (
    <div className="flex justify-center">
      <div
        className="
  flex
  gap-3
  overflow-x-auto
  lg:overflow-visible
  no-scrollbar
  pb-2
  justify-start
  lg:justify-center
  "
      >
        {categories.map((item) => {
          const active = category === item;

          return (
            <motion.button
              key={item}
              layout
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onClick={() => setCategory(item)}
              className={`relative flex items-center gap-2 px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300

                ${
                  active
                    ? "text-white"
                    : "bg-white text-gray-700 border border-pink-100 hover:border-pink-300"
                }
              `}
            >
              {active && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-pink-600"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{item}</span>

              <span
                className={`relative z-10 text-xs px-2 py-0.5 rounded-full

                ${active ? "bg-white/20" : "bg-pink-100 text-pink-600"}
                `}
              >
                {getCount(item)}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
