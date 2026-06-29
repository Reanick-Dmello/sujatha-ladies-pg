import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export default function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHero />
      </div>

      <div className="block lg:hidden">
        <MobileHero />
      </div>
    </>
  );
}