import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import useSanityQuery from "../hooks/useSanityQuery";
import { reviewsQuery } from "../lib/queries";
import { urlFor } from "../lib/image";

export default function Reviews() {
  const { data: reviews, loading } = useSanityQuery(reviewsQuery);

  if (loading) return null;

  if (!reviews?.length) return null;

  return (
    <section id="reviews" className="py-10 bg-white">
      {/* ================= DESKTOP ================= */}

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

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
            <StatCard
              value={`${getAverageRating(reviews)}★`}
              label="Resident Rating"
            />

            <StatCard value={`${reviews.length}+`} label="Happy Residents" />

            <StatCard value="24×7" label="Security" />
          </div>

          {/* Review Cards */}

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((item) => (
              <ReviewCard key={item._id} review={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}

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

        {/* Reviews */}

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1.35}
          spaceBetween={16}
          centeredSlides={false}
          loop={reviews.length > 1}
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
            <SwiperSlide key={item._id}>
              <div className="bg-white rounded-2xl border border-pink-100 shadow-[0_10px_30px_rgba(236,72,153,0.08)] p-5 h-full">
                {/* Stars */}

                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating || 5)].map((_, i) => (
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

                  <p className="text-xs text-gray-500 mt-1">
                    {item.profession}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ================= DESKTOP REVIEW CARD ================= */

function ReviewCard({ review }) {
  return (
    <div className="bg-white border border-pink-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
      {/* Stars */}

      <div className="flex gap-1 mb-4">
        {[...Array(review.rating || 5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      {/* Review */}

      <p className="text-gray-600 leading-7">"{review.review}"</p>

      {/* User */}

      <div className="mt-6 flex items-center gap-3">
        {review.photo ? (
          <img
            src={urlFor(review.photo).width(100).height(100).url()}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">
            {review.name?.charAt(0)}
          </div>
        )}

        <div>
          <h4 className="font-bold">{review.name}</h4>

          <p className="text-gray-500 text-sm">{review.profession}</p>
        </div>
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */

function StatCard({ value, label }) {
  return (
    <div className="bg-white rounded-2xl border border-pink-100 py-8 text-center shadow-sm hover:shadow-lg transition">
      <h3 className="text-4xl font-bold text-pink-600">{value}</h3>

      <p className="mt-2 text-gray-500">{label}</p>
    </div>
  );
}

/* ================= AVERAGE RATING ================= */

function getAverageRating(reviews) {
  if (!reviews.length) return "0.0";

  const total = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);

  return (total / reviews.length).toFixed(1);
}
