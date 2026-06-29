import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600">
      <div className="max-w-7xl mx-auto px-5 py-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Copyright */}

          <p className="text-white text-xs md:text-sm text-center md:text-left">
            © 2026 Sujatha Ladies PG. All Rights Reserved.
          </p>

          {/* Social Icons */}

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaFacebook size={16} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/90 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
