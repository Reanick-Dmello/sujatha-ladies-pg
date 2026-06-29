import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-10 bg-pink-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[2px] bg-pink-300" />

            <p className="uppercase tracking-[2px] text-pink-600 text-[16px] font-bold">
              Contact Us
            </p>

            <div className="w-10 h-[2px] bg-pink-300" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Book Your Stay Today
          </h2>

          <p className="text-gray-600 mt-4">
            Have questions? Contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}

          <div className="bg-white rounded-[32px] p-8 shadow-[0_25px_60px_rgba(236,72,153,0.12)] border border-pink-100">
            <h3
              className="text-3xl font-bold"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Contact Information
            </h3>

            <p className="text-gray-500 mt-2">
              We're here to help you find your perfect stay.
            </p>

            <div className="mt-8 space-y-5">
              <ContactItem
                icon={<FaPhoneAlt />}
                title="Call Us"
                value="+91 9876543210"
                color="bg-pink-100 text-pink-600"
              />

              <ContactItem
                icon={<FaWhatsapp />}
                title="WhatsApp"
                value="+91 9876543210"
                color="bg-green-100 text-green-600"
              />

              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Vijaya Nagar, Chikmagalur, Karnataka"
                color="bg-pink-100 text-pink-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <a
                href="tel:+919876543210"
                className="h-14 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-semibold hover:bg-pink-700 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919876543210"
                className="h-14 rounded-2xl border border-green-500 text-green-600 flex items-center justify-center font-semibold hover:bg-green-50 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(236,72,153,0.12)] border border-pink-100">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb="
              className="w-full h-[620px] lg:h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, value, color }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-pink-50/60 p-4 hover:bg-pink-50 transition">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl
        ${color}
        `}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>

        <h4 className="font-semibold">{value}</h4>
      </div>
    </div>
  );
}
