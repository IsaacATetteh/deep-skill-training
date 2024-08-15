import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/Map";
import Cal from "@/components/Cal";
import Partnerships from "@/components/Partnerships";
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Info />
      <Testimonials />
      <Map />
      <Cal />
      <Partnerships />
    </div>
  );
}
