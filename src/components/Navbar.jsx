import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
            <div>
              <h1 className="text-3xl font-bold text-pink-600">Sujatha</h1>
              <p className="text-xs tracking-[4px] text-gray-500">LADIES PG</p>
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

          <div>
            <h1
              className="text-[34px] font-bold text-pink-600 leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Sujatha
            </h1>

            <p className="text-[12px] tracking-[5px] text-gray-500 mt-2">
              LADIES PG
            </p>
          </div>

          {/* Menu */}

          <button onClick={() => setOpen(!open)} className="text-gray-800">
            {open ? <HiX size={36} /> : <HiMenu size={36} />}
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
