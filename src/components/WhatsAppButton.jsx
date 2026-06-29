import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBed,
} from "react-icons/fa";

const items = [
  {
    icon: <FaPhoneAlt />,
    label: "Call",
    href: "tel:+919876543210",
    color: "text-pink-600",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    color: "text-green-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    href: "https://maps.google.com",
    color: "text-blue-500",
  },
  {
    icon: <FaBed />,
    label: "Rooms",
    href: "#rooms",
    color: "text-pink-500",
  },
];

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] lg:hidden">
      <div
        className="flex items-center gap-2 py-1 rounded-[28px] bg-white/90 backdrop-blur-2xl border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      >
        {items.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.label === "WhatsApp" ? "_blank" : "_self"}
            rel="noreferrer"
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -3 }}
            className="flex flex-col items-center justify-center w-[68px] h-[64px] rounded-2xl transition hover:bg-pink-50"
          >
            <div className={`${item.color} text-xl`}>
              {item.icon}
            </div>

            <span className="mt-2 text-[11px] font-semibold text-gray-600">
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}