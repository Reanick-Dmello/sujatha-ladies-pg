import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import useSanityQuery from "../hooks/useSanityQuery";
import { websiteQuery } from "../lib/queries";
import { getGoogleMapsEmbedUrl } from "../lib/googleMaps";

export default function Contact() {
  const { data: website, loading } = useSanityQuery(websiteQuery);
  const mapUrl = getGoogleMapsEmbedUrl(website?.googleMaps);

  if (loading || !website) return null;

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
                value={website.phone}
                color="bg-pink-100 text-pink-600"
              />

              <ContactItem
                icon={<FaWhatsapp />}
                title="WhatsApp"
                value={website.whatsapp}
                color="bg-green-100 text-green-600"
              />

              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                value={website.address}
                color="bg-pink-100 text-pink-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <a
                href={`tel:${website.phone}`}
                className="h-14 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-semibold hover:bg-pink-700 transition"
              >
                Call Now
              </a>

              <a
                href={`https://wa.me/+91${website.whatsapp}`}
                className="h-14 rounded-2xl border border-green-500 text-green-600 flex items-center justify-center font-semibold hover:bg-green-50 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative group rounded-[32px] overflow-hidden border border-pink-100 bg-white shadow-[0_25px_70px_rgba(236,72,153,0.14)]">
            {/* Map */}
            {mapUrl && (
              <iframe
                src={mapUrl}
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Sujatha Ladies PG Location"
                className="w-full h-[400px] md:h-[500px]"
              />
            )}

            {/* Top Gradient */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent" />

            {/* Location Badge */}
            <div className="absolute top-5 left-5">
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg border border-white/60">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[1.5px] text-pink-500 font-bold">
                    Our Location
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    Sujatha Ladies PG
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Information Card */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl border border-white/70">
                <div>
                  <p className="text-xs text-gray-500">Find us easily</p>

                  <p className="font-semibold text-gray-900">
                    Convenient location for students & working women
                  </p>
                </div>

                <a
                  href={website.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaMapMarkerAlt />
                  Get Directions
                </a>
              </div>
            </div>
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
