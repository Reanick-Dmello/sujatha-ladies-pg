import {
  FaWifi,
  FaUtensils,
  FaShieldAlt,
  FaTshirt,
  FaWater,
  FaBolt,
} from "react-icons/fa";

import {
  MdOutlineSecurity,
  MdFingerprint,
  MdCleaningServices,
} from "react-icons/md";

const amenities = [
  {
    icon: <MdOutlineSecurity />,
    title: "CCTV",
    title2: "Security",
  },
  {
    icon: <MdFingerprint />,
    title: "Biometric",
    title2: "Entry",
  },
  {
    icon: <FaWifi />,
    title: "High Speed",
    title2: "WiFi",
  },
  {
    icon: <FaBolt />,
    title: "Power",
    title2: "Backup",
  },
  {
    icon: <FaWater />,
    title: "RO",
    title2: "Drinking Water",
  },
  {
    icon: <FaTshirt />,
    title: "Laundry",
    title2: "Service",
  },
  {
    icon: <MdCleaningServices />,
    title: "Housekeeping",
    title2: "Service",
  },
  {
    icon: <FaUtensils />,
    title: "Homely",
    title2: "Food",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-10 bg-[#faf7f8]">
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[2px] bg-pink-300" />

              <p className="uppercase tracking-[2px] text-pink-600 text-[16px] font-bold">
                Amenities
              </p>

              <div className="w-10 h-[2px] bg-pink-300" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Everything You Need
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Designed to provide comfort, convenience and safety for students
              and working women.
            </p>
          </div>

          {/* Amenity Cards */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-pink-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-2xl">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mt-6">{item.title}</h3>

                <p className="text-gray-600 mt-3">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <div className="bg-pink-50 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-pink-600">100+</h3>
              <p className="text-gray-600 mt-2">Happy Residents</p>
            </div>

            <div className="bg-pink-50 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-pink-600">24×7</h3>
              <p className="text-gray-600 mt-2">Security</p>
            </div>

            <div className="bg-pink-50 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-pink-600">8+</h3>
              <p className="text-gray-600 mt-2">Premium Facilities</p>
            </div>

            <div className="bg-pink-50 rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-bold text-pink-600">5★</h3>
              <p className="text-gray-600 mt-2">Resident Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        {/* Heading */}

        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[2px] bg-pink-300" />

            <p className="uppercase tracking-[2px] text-pink-600 text-[11px] font-bold">
              Our Facilities
            </p>

            <div className="w-10 h-[2px] bg-pink-300" />
          </div>

          <h2
            className="mt-3 text-[34px] leading-none font-bold text-gray-900"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Everything You Need,
            <br />
            All Here
          </h2>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-3 gap-3 mt-8 px-4">
          {amenities.map((item) => (
            <FacilityCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ item }) {
  return (
    <div className="bg-white rounded-2xl p-2 text-center border border-pink-100 shadow-[0_10px_30px_rgba(236,72,153,0.08)] transition-all duration-300 active:scale-95">
      <div className="w-8 h-8 rounded-full bg-pink-50 mx-auto flex items-center justify-center text-pink-500 text-2xl">
        {item.icon}
      </div>

      <h3 className="mt-4 text-[13px] font-semibold leading-5">
        {item.title}
        <br />
        {item.title2}
      </h3>
    </div>
  );
}
