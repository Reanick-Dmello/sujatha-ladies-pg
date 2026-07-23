import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Rooms",
    "Facilities",
    "Gallery",
    "Reviews",
    "Contact",
  ];

  return (
    <div>
      <nav className="hidden md:block glass-nav fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <div className="px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Sujatha Ladies PG"
                className="w-16 h-16 object-contain flex-shrink-0"
              />

              <div>
                <h1
                  className="text-[38px] font-bold leading-none text-pink-600"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Sujatha
                </h1>

                <p className="mt-1 text-[11px] tracking-[5px] font-semibold text-gray-500">
                  LADIES PG
                </p>
              </div>
            </div>

            <div className="hidden md:flex gap-8">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium hover:text-pink-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="tel:+919876543210"
              className="hidden md:flex bg-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-pink-700"
            >
              Call Now
            </a>

            <button
              className="md:hidden text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block p-4 border-b"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <nav className="block md:hidden">
        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-6 h-20 flex items-center justify-between">
          {/* Logo */}

          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="Sujatha Ladies PG"
              className="w-14 h-14 object-contain flex-shrink-0"
            />

            <div>
              <h1
                className="text-[24px] font-bold leading-none text-pink-600"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Sujatha
              </h1>

              <p className="mt-1 text-[11px] tracking-[5px] font-semibold text-gray-500">
                LADIES PG
              </p>
            </div>
          </a>

          {/* Menu */}

          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 flex items-center justify-center rounded-xl hover:bg-pink-50 transition-colors duration-300"
          >
            {open ? (
              <HiX size={32} className="text-pink-600" />
            ) : (
              <HiMenu size={32} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="bg-white shadow-xl border-t border-pink-100">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b border-pink-50 text-gray-700 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
