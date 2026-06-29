import {
  FaShieldAlt,
  FaWifi,
  FaUtensils,
  FaTshirt,
  FaWhatsapp,
  FaCalendarAlt,
  FaVideo,
  FaTint,
  FaBed,
} from "react-icons/fa";

import hero from "../assets/hero.jpg";

export default function MobileHero() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f8] pt-6 md:pt-32 px-4 pb-8">
      {/* Background Blob 1 */}

      <div className="absolute -top-32 -left-20 w-[300px] h-[300px] rounded-full bg-pink-200/30 blur-[90px]" />

      {/* Background Blob 2 */}

      <div className="absolute top-40 right-[-80px] w-[240px] h-[240px] rounded-full bg-rose-200/30 blur-[80px]" />

      {/* Background Blob 3 */}

      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-pink-100/40 blur-[120px]" />
      <div className="max-w-[390px] mx-auto">
        {/* Image */}

        <div className="relative overflow-hidden rounded-t-[30px]">
          <img
            src={hero}
            alt=""
            className="w-full h-[255px] object-cover transition duration-700"
          />

          {/* White Fade */}

          <div
            className="absolute bottom-0 left-0 w-full h-28"
            style={{
              background:
                "linear-gradient(to top, #faf7f8 0%, rgba(250,247,248,0) 100%)",
            }}
          />
        </div>

        {/* White Content */}

        <div className="bg-[#faf7f8] -mt-10 relative z-20 rounded-t-[30px]  pb-5">
          {/* Badge */}

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-[11px] font-semibold tracking-[1px] uppercase mt-3">
              ❤️ SAFE. COMFORTABLE. LIKE HOME.
            </div>
          </div>

          {/* Heading */}

          <h1
            className="mt-4 leading-none px-2"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <span className="text-[56px] leading-[0.85] tracking-[-2px] font-bold text-pink-600">
              Sujatha
            </span>

            <br />

            <span className="text-[48px] leading-[0.9] tracking-[-1px] font-bold text-gray-900">
              Ladies PG
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 text-[16px] leading-7 text-gray-600 max-w-[340px] px-2">
            A safe, comfortable and homely environment for students and working
            women.
          </p>

          {/* Amenities */}

          <div className="grid grid-cols-3 gap-y-6 py-2">
            <Amenity icon={<FaShieldAlt />} title="24x7" subtitle="Security" />

            <Amenity icon={<FaWifi />} title="High Speed" subtitle="WiFi" />

            <Amenity icon={<FaUtensils />} title="Homely" subtitle="Food" />

            <Amenity icon={<FaTshirt />} title="Laundry" subtitle="Service" />

            <Amenity icon={<FaVideo />} title="CCTV" subtitle="Surveillance" />

            <Amenity icon={<FaTint />} title="RO Water" subtitle="Supply" />
          </div>

          {/* Buttons */}

          <div className="mt-8 space-y-2">
            <button className="w-full h-14 rounded-3xl bg-pink-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 transition-all shadow-lg hover:-translate-y-1 transition-all hover:bg-pink-50">
              <FaCalendarAlt />
              Book a Visit
            </button>

            <button className="w-full h-14 rounded-3xl border-2 border-pink-400 bg-white text-pink-600 font-semibold flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 transition-all hover:bg-pink-50">
              <FaWhatsapp />
              WhatsApp Now
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm">
              ⭐ 4.9 Rating
            </span>

            <span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm">
              🛡️ Ladies Only
            </span>

            <span className="bg-white px-4 py-2 rounded-full text-xs font-medium shadow-sm">
              📍 Prime Location
            </span>
          </div>

          {/* Availability Card */}

          <div className="mt-6">
            <div className="bg-white rounded-[26px] border border-pink-100 shadow-[0_25px_60px_rgba(236,72,153,0.15)] overflow-hidden">
              {/* Header */}

              <div className="px-6 pt-3 pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center">
                    <FaCalendarAlt className="text-pink-600 text-lg" />
                  </div>

                  <p className="text-sm font-bold text-gray-900">
                    Current Availability
                  </p>
                </div>
              </div>

              {/* Divider */}

              <div className="border-t border-pink-100" />

              {/* Rooms */}

              <div className="px-4 py-5 space-y-5">
                <RoomRow room="Single Sharing" status="2 Rooms" />
                <RoomRow room="Double Sharing" status="4 Beds" />
                <RoomRow room="Triple Sharing" status="Available" />
              </div>

              {/* Button */}

              <div className="px-6 pb-6">
                <button className="w-full h-14 rounded-3xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition shadow-lg hover:-translate-y-1 transition-all">
                  Reserve on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Amenity({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-14 h-14 rounded-3xl bg-pink-100 flex items-center justify-center text-pink-600 text-2xl">
        {icon}
      </div>

      <p className="text-xs font-semibold mt-2 leading-4 text-center">
        {title}

        <br />

        {subtitle}
      </p>
    </div>
  );
}

function RoomRow({ room, status }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
          <FaBed />
        </div>

        <div>
          <h4 className="font-semibold">{room}</h4>
          <p className="text-xs text-gray-500">Available</p>
        </div>
      </div>

      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
        {status}
      </div>
    </div>
  );
}
