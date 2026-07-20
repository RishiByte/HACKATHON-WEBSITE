import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTerminal from "@/components/AboutTerminal";
import WhyParticipate from "@/components/WhyParticipate";
import Tracks from "@/components/Tracks";
import WhatYouBuild from "@/components/WhatYouBuild";
import Mentors from "@/components/Mentors";
import Timeline from "@/components/Timeline";
import Rulebook from "@/components/Rulebook";
import JudgingCriteria from "@/components/JudgingCriteria";
import PrizePool from "@/components/PrizePool";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import PartnerWithUs from "@/components/PartnerWithUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DiscordBanner from "@/components/DiscordBanner";

export default function Home() {
  return (
    <main>
      <ThreeBackground />
      <Navbar />
      <Hero />
      <AboutTerminal />
      <WhyParticipate />
      <Tracks />
      <WhatYouBuild />
      <DiscordBanner />
      <Mentors />
      <Timeline />
      <Rulebook />
      <JudgingCriteria />
      <PrizePool />
      <Sponsors />
      <FAQ />
      <PartnerWithUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}
