import {
  FaShieldAlt,
  FaWifi,
  FaUtensils,
  FaTshirt,
  FaWhatsapp,
  FaCalendarAlt,
} from "react-icons/fa";

import hero from "../assets/hero.jpg";

export default function DesktopHero() {
  return (
    <section id="home" className="pt-28 pb-10 px-4 bg-[#faf7f8]">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.16)] min-h-[700px]">
        {/* Background Image */}
        <img
          src={hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Premium Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,248,250,1) 0%, rgba(255,248,250,0.97) 30%, rgba(255,248,250,0.88) 45%, rgba(255,248,250,0.65) 55%, rgba(255,248,250,0) 100%)",
          }}
        />
        {/* Decorative Pattern */}
        <div
          className="absolute left-0 top-0 w-full h-full opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/flowers.png')",
          }}
        />
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center min-h-[700px] pl-12 pr-10 lg:pl-20 lg:pr-16 max-w-[720px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold w-fit">
            ❤️ SAFE. COMFORTABLE. LIKE HOME.
          </div>
          {/* Heading */}
          <h1
            className="mt-8 leading-[0.85] tracking-[-2px] font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block text-pink-600 font-bold text-[72px] lg:text-[94px]">
              Sujatha
            </span>
            <span className="block text-gray-900 font-bold text-[56px] lg:text-[72px] mt-3.5">
              Ladies PG
            </span>
          </h1>
          {/* Description */}
          <p className="text-gray-600 text-[18px] mt-6 max-w-lg leading-[34px] max-w-[560px]">
            A safe and comfortable home away from home for students and working
            women.
          </p>
          {/* Amenities */}
          <div className="grid grid-cols-4 gap-10 mt-10 max-w-lg">
            <div className="text-center">
              <FaShieldAlt className="mx-auto text-[34px] text-pink-500" />
              <p className="text-[13px] leading-5 font-medium mt-3">
                24x7 <br /> Security
              </p>
            </div>
            <div className="text-center">
              <FaWifi className="mx-auto text-[34px] text-pink-500" />
              <p className="text-[13px] leading-5 font-medium mt-3">
                High Speed <br /> WiFi
              </p>
            </div>
            <div className="text-center">
              <FaUtensils className="mx-auto text-[34px] text-pink-500" />
              <p className="text-[13px] leading-5 font-medium mt-3">
                Homely <br /> Food
              </p>
            </div>
            <div className="text-center">
              <FaTshirt className="mx-auto text-[34px] text-pink-500" />
              <p className="text-[13px] leading-5 font-medium mt-3">
                Laundry <br /> Service
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-pink-600 hover:bg-pink-700 text-white h-14 px-8 rounded-2xl font-semibold backdrop-blur-md flex items-center gap-2 shadow-lg hover:shadow-pink-300/40 transition-all duration-300 hover:-translate-y-1">
              <FaCalendarAlt /> Book a Visit
            </button>
            <button className="border-2 border-pink-500 bg-white hover:bg-pink-50 backdrop-blur-md text-pink-600 h-14 px-8 rounded-2xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-pink-300/40 transition-all duration-300 hover:-translate-y-1">
              <FaWhatsapp /> WhatsApp Now
            </button>
          </div>
        </div>
        {/* Floating Availability Card */}
        <div className="absolute bottom-8 right-8 z-30 bg-white rounded-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.16)] p-7 w-[390px]">
          <div className="flex items-center gap-2 mb-5">
            <FaCalendarAlt className="text-pink-500" />
            <h3 className="font-bold">Current Availability</h3>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span>Single Sharing</span>
              <span className="text-green-600 font-semibold">
                2 Rooms Available
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span>Double Sharing</span>
              <span className="text-green-600 font-semibold">
                4 Beds Available
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Triple Sharing</span>
              <span className="text-green-600 font-semibold">Available</span>
            </div>
          </div>
          <button className="mt-5 w-full h-14 rounded-2xl bg-pink-600 text-white font-semibold hover:-translate-y-1 transition-all shadow-lg">
            Reserve on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
