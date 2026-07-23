import { FaFemale, FaBroom, FaRupeeSign, FaHome } from "react-icons/fa";
import useSanityQuery from "../hooks/useSanityQuery";
import { websiteQuery } from "../lib/queries";
import { urlFor } from "../lib/image";

import about from "../assets/about.jpg";

export default function About() {
  const { data: website, loading } = useSanityQuery(websiteQuery);

  if (loading || !website) return null;

  return (
    <section id="about" className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* ---------------- DESKTOP ---------------- */}

        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}

          <div>
            <img
              src={
                website?.heroImage
                  ? urlFor(website.aboutImage).width(1800).url()
                  : ""
              }
              alt={website.aboutTitle || "About"}
              className="rounded-[36px] w-full h-[650px] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition duration-500"
            />
          </div>

          {/* RIGHT */}

          <div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[2px] bg-pink-300" />

              <p className="uppercase tracking-[2px] text-pink-600 text-[16px] font-bold">
                About Us
              </p>

              <div className="w-10 h-[2px] bg-pink-300" />
            </div>

            <h2
              className="mt-3 text-6xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome to
              <br />
              Sujatha Ladies PG
            </h2>

            <p className="text-gray-500 mt-6 leading-9">
              We provide a secure, hygienic and friendly environment with modern
              amenities to make your stay comfortable and productive. Whether
              you are a student or a working professional, we ensure you feel at
              home.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <FeatureCard
                icon={<FaFemale />}
                title="Ladies Only"
                desc="Safe women-only environment."
              />

              <FeatureCard
                icon={<FaBroom />}
                title="Clean & Hygienic"
                desc="Daily cleaning and maintenance."
              />

              <FeatureCard
                icon={<FaRupeeSign />}
                title="Affordable"
                desc="Budget-friendly room options."
              />

              <FeatureCard
                icon={<FaHome />}
                title="Homely Atmosphere"
                desc="Comfort and care like home."
              />
            </div>
          </div>
        </div>

        {/* ---------------- MOBILE ---------------- */}

        <div className="block lg:hidden">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[2px] bg-pink-300" />

            <p className="uppercase tracking-[2px] text-pink-600 text-[11px] font-bold">
              About Us
            </p>

            <div className="w-10 h-[2px] bg-pink-300" />
          </div>

          <h2
            className="mt-3 text-[40px] leading-[0.95] tracking-[-1px] font-bold text-gray-900"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Welcome to
            <br />
            Sujatha Ladies PG
          </h2>

          <p className="mt-6 text-[16px] leading-7 text-gray-600">
            We provide a secure, hygienic and friendly environment with all
            modern amenities to make your stay comfortable and productive.
          </p>

          <p className="mt-6 text-[16px] leading-7 text-gray-600">
            Whether you are a student or a working professional, we ensure you
            feel at home.
          </p>

          <div className="mt-8 overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <img
              src={about}
              alt="Sujatha Ladies PG"
              className="w-full h-[240px] object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-600">100+</h3>
              <p className="text-xs text-gray-500">Residents</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-600">24×7</h3>
              <p className="text-xs text-gray-500">Security</p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-600">4.9★</h3>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-8 mt-10">
            <MobileFeature
              icon={<FaFemale />}
              line1="Ladies Only"
              line2="Environment"
            />

            <MobileFeature
              icon={<FaBroom />}
              line1="Clean &"
              line2="Hygienic"
            />

            <MobileFeature
              icon={<FaRupeeSign />}
              line1="Affordable"
              line2="Pricing"
            />

            <MobileFeature
              icon={<FaHome />}
              line1="Homely"
              line2="Atmosphere"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
      <div className="text-pink-600 text-3xl mb-3">{icon}</div>

      <h3 className="font-semibold">{title}</h3>

      <p className="text-sm text-gray-500 mt-2">{desc}</p>
    </div>
  );
}

function MobileFeature({ icon, line1, line2 }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto rounded-3xl bg-white border border-pink-100 shadow-[0_15px_35px_rgba(236,72,153,0.18)] flex items-center justify-center">
        <div className="text-pink-500 text-2xl">{icon}</div>
      </div>

      <p className="mt-3 text-[13px] font-bold leading-5">
        {line1}
        <br />
        {line2}
      </p>
    </div>
  );
}
