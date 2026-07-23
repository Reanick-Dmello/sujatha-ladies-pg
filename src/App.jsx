import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Rooms />
          <Facilities />
          <Gallery />
          <Reviews />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}

export default App;
