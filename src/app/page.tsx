import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTerminal from "@/components/AboutTerminal";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Rulebook from "@/components/Rulebook";
import PrizePool from "@/components/PrizePool";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <ThreeBackground />
      <Navbar />
      <Hero />
      <AboutTerminal />
      <Tracks />
      <Timeline />
      <Rulebook />
      <PrizePool />
      <Sponsors />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
