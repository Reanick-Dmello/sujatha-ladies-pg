import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxViewer({ open, close, photos, index }) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Lightbox
            open={open}
            close={close}
            index={index}
            plugins={[Zoom, Thumbnails]}
            slides={photos.map((photo) => ({
              src: photo.image,
              title: photo.title,
              description: photo.category,
            }))}
            carousel={{
              finite: false,
            }}
            zoom={{
              maxZoomPixelRatio: 5,
              scrollToZoom: true,
              wheelZoomDistanceFactor: 100,
            }}
            thumbnails={{
              position: "bottom",
              width: 90,
              height: 70,
              border: 2,
              borderRadius: 14,
              padding: 6,
              gap: 10,
            }}
            controller={{
              closeOnBackdropClick: true,
            }}
            styles={{
              container: {
                backgroundColor: "rgba(10,10,10,.92)",
                backdropFilter: "blur(22px)",
              },

              image: {
                borderRadius: "22px",
                boxShadow: "0 40px 90px rgba(0,0,0,.45)",
              },
            }}
            animation={{
              fade: 350,
              swipe: 450,
            }}
 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
