import { useMemo, useState } from "react";
import { galleryImages } from "../../data/galleryData";
import FeaturedGallery from "./FeaturedGallery";
import ThumbnailGrid from "./ThumbnailGrid";
import GalleryFilter from "./GalleryFilter";
import LightboxViewer from "./LightboxViewer";

const categories = ["All", "Rooms", "Food", "Amenities", "Exterior"];

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const filteredImages = useMemo(() => {
    if (category === "All") return galleryImages;

    return galleryImages.filter((item) => item.category === category);
  }, [category]);

  const featured =
    filteredImages.find((img) => img.featured) || filteredImages[0];

  const thumbnails = filteredImages.filter((img) => img.id !== featured.id);

  const openGallery = (image) => {
    const index = filteredImages.findIndex((item) => item.id === image.id);

    setSelectedImage(index);
    setOpen(true);
  };

  return (
    <section id="gallery" className="py-10 bg-[#faf7f8]">
      <div className="max-w-7xl mx-auto px-">
        {/* Heading */}

        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[2px] bg-pink-300" />

            <p className="uppercase tracking-[2px] text-pink-600 text-[16px] font-bold">
              Gallery
            </p>

            <div className="w-10 h-[2px] bg-pink-300" />
          </div>

          <h2
            className="mt-4 text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Explore Our Spaces
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Discover our comfortable rooms, delicious food and welcoming
            environment.
          </p>
        </div>

        {/* Filter */}

        <div className="mt-10">
          <GalleryFilter
            category={category}
            setCategory={setCategory}
            categories={categories}
            images={galleryImages}
          />
        </div>

        {/* Gallery */}

        <div className="mt-10">
          <FeaturedGallery
            image={featured}
            onClick={() => openGallery(featured)}
          />

          <div className="mt-5">
            <ThumbnailGrid
              images={thumbnails}
              onClick={(image) => openGallery(image)}
            />
          </div>
        </div>

        {/* CTA */}

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-300/40"
          >
            View Complete Gallery
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>

      <LightboxViewer
        open={open}
        close={() => setOpen(false)}
        photos={filteredImages}
        index={selectedImage}
      />
    </section>
  );
}
