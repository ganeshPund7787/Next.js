import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChhoseUs from "@/components/WhyChhoseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChhoseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
    </main>
  );
}
