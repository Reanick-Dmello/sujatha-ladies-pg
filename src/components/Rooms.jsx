import {
  Bath,
  BookOpen,
  Shirt,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  BedDouble,
} from "lucide-react";
import PremiumRoomCard from "./PremiumRoomCard";
import useSanityQuery from "../hooks/useSanityQuery";
import { roomsQuery } from "../lib/queries";
import { urlFor } from "../lib/image";

export default function Rooms() {
  const { data: rooms, loading } = useSanityQuery(roomsQuery);

  if (loading) return null;

  if (!rooms?.length) return null;

  return (
    <section id="rooms" className="py-10 bg-pink-50">
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[2px] bg-pink-300" />

              <p className="uppercase tracking-[2px] text-pink-600 text-[16px] font-bold">
                Rooms
              </p>

              <div className="w-10 h-[2px] bg-pink-300" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Room Options
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose the room that suits your lifestyle and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-7">
            {rooms.map((room) => (
              <PremiumRoomCard key={room._id} room={room} />
            ))}
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[2px] bg-pink-300" />

            <p className="uppercase tracking-[2px] text-pink-600 text-[11px] font-bold">
              Rooms
            </p>

            <div className="w-10 h-[2px] bg-pink-300" />
          </div>

          <h2
            className="mt-2 text-[34px] font-bold leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Choose Your Perfect Space
          </h2>
        </div>

        <div className="mt-8 space-y-6 px-4">
          {rooms.map((room) => (
  <MobileRoomCard key={room._id} room={room} />
))}
        </div>
      </div>
    </section>
  );
}

function MobileRoomCard({ room }) {
  return (
    <div className="bg-white rounded-2xl border border-pink-100 shadow-md overflow-hidden">
      {/* Image */}

      <div className="relative">
        <img
          src={
            room.images?.length
              ? urlFor(room.images[0]).width(800).height(500).url()
              : ""
          }
          alt=""
          className="w-full h-[160px] object-cover"
        />

        {/* Room Badge */}

        <div className="absolute left-0 top-0 bg-pink-600 text-white text-xs font-semibold px-4 py-2 rounded-br-xl">
          {room.title}
        </div>
      </div>

      {/* Features */}

      <div className="grid grid-cols-4 px-4 py-5">
        <Feature icon={Bath} title1="Attached" title2="Bathroom" />

        <Feature icon={BookOpen} title1="Study" title2="Table" />

        <Feature icon={Shirt} title1="Wardrobe" title2="" />

        <Feature icon={ShieldCheck} title1="Maximum" title2="Privacy" />
      </div>

      <div className="px-4 pb-4">
        <button className="w-full h-11 rounded-xl border border-pink-400 bg-white text-pink-600 font-semibold flex items-center justify-center gap-2 transition hover:bg-pink-50">
          <MessageCircle size={16} />
          Enquire Now
        </button>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title1, title2 }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-9 h-9 rounded-full bg-pink-50 flex items-center justify-center">
        <Icon size={16} className="text-pink-500" strokeWidth={2} />
      </div>

      <p className="mt-2 text-[10px] leading-3 text-gray-600 font-medium">
        {title1}
        <br />
        {title2}
      </p>
    </div>
  );
}
