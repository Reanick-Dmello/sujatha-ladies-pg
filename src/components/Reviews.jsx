import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Priya S",
    role: "Student",
    review:
      "Very safe and clean PG. Food is good and the management is supportive.",
  },
  {
    name: "Ananya R",
    role: "Software Engineer",
    review:
      "Perfect location and excellent facilities. WiFi is fast and rooms are maintained well.",
  },
  {
    name: "Shreya K",
    role: "Working Professional",
    review: "Feels like home. Security and cleanliness are excellent.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-10 bg-white">
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[2px] bg-pink-300" />

              <p className="uppercase tracking-[2px] text-pink-600 text-[16px] font-bold">
                Testimonials
              </p>

              <div className="w-10 h-[2px] bg-pink-300" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              What Residents Say
            </h2>

            <p className="text-gray-600 mt-4">
              Feedback from students and working women.
            </p>
          </div>

          {/* Rating Summary */}

          <div className="bg-pink-50 rounded-3xl p-10 text-center mb-12">
            <h3 className="text-6xl font-bold text-pink-600">4.9</h3>

            <div className="flex justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
            </div>

            <p className="text-gray-600 mt-4">Based on resident reviews</p>
          </div>

          {/* Review Cards */}

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-pink-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-7">"{item.review}"</p>

                <div className="mt-6">
                  <h4 className="font-bold">{item.name}</h4>

                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="block lg:hidden px-8">
        {/* Heading */}

        <div className="mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[2px] bg-pink-300" />

            <p className="uppercase tracking-[2px] text-pink-600 text-[11px] font-bold">
              What Our Residents Say
            </p>

            <div className="w-10 h-[2px] bg-pink-300" />
          </div>

          <h2
            className="mt-2 text-[34px] leading-tight font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Loved by Our Residents
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1.35}
          spaceBetween={16}
          centeredSlides={false}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1.25,
            },
            430: {
              slidesPerView: 1.4,
            },
          }}
          className="residentSwiper pb-12 px-4"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="bg-white rounded-2xl border border-pink-100 shadow-[0_10px_30px_rgba(236,72,153,0.08)] p-5 h-full">
                {/* Stars */}

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                {/* Review */}

                <p className="text-[14px] text-gray-600 leading-7">
                  {item.review}
                </p>

                {/* Name */}

                <div className="mt-5">
                  <h4 className="font-bold text-gray-900">— {item.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
