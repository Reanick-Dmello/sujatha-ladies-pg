import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-[#faf7f8] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.96,
            filter: "blur(8px)",
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
        >
          {/* Background Glow */}

          <motion.div
            animate={{
              scale: [0.9, 1.3, 0.9],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-72 h-72 rounded-full bg-pink-300/30 blur-[90px]"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}

            <motion.div
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src={logo}
                alt=""
                className="w-40"
                initial={{
                  scale: 0.4,
                  opacity: 0,
                  filter: "blur(12px)",
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                }}
              />
            </motion.div>

            {/* Title */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <motion.h1
                className="text-5xl font-bold text-pink-600"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                }}
              >
                Sujatha
              </motion.h1>

              <motion.p
                className="w-full text-center mt-2 text-[13px] font-semibold tracking-[6px] uppercase text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                LADIES PG
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
