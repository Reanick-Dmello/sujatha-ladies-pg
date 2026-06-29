import { motion } from "framer-motion";

import {
  Bath,
  BookOpen,
  Shirt,
  Wifi,
  ArrowRight,
  MessageCircle,
  Star,
} from "lucide-react";

const iconMap = {
  "Attached Bathroom": Bath,
  "Study Table": BookOpen,
  Wardrobe: Shirt,
  "High-Speed WiFi": Wifi,
};

export default function PremiumRoomCard({ room }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-[30px] bg-white border border-pink-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_45px_90px_rgba(236,72,153,0.28)] transition-all duration-500 hover:border-pink-300"
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden h-[200px]">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

        {/* Most Popular */}

        {room.featured && (
          <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl flex items-center gap-2 border border-white/40">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-semibold">Most Popular</span>
          </div>
        )}
      </div>

      {/* CONTENT */}

      <div className="px-5 py-3">
        {/* PRICE */}

        <div className="flex items-end gap-2">
          <h2 className="text-2xl font-bold text-pink-600">{room.price}</h2>

          <span className="text-gray-400 mb-1">/month</span>
        </div>

        {/* TITLE */}

        <h3
          className="text-[25px] font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {room.title}
        </h3>

        {/* FEATURES */}

        <div className="grid grid-cols-2 gap-3 mt-3">
          {room.features.map((item) => {
            const Icon = iconMap[item];

            return (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-br from-pink-50 to-white px-4 py-2 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <Icon size={18} className="text-pink-600" />

                <span className="text-sm font-medium">{item}</span>
              </div>
            );
          })}
        </div>

        {/* Divider */}

        <div className="my-2 border-t border-gray-100" />

        {/* CTA */}

        <motion.a
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 h-14 rounded-2xl text-white font-semibold transition bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-pink-300/50"
        >
          <MessageCircle size={20} />
          Enquire on WhatsApp
          <motion.div
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
}
