import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BusinessCategories from "@/components/sections/BusinessCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import Fees from "@/components/sections/Fees";
import ValueProposition from "@/components/sections/ValueProposition";
import Contact from "@/components/sections/Contact";
import LegalNotice from "@/components/sections/LegalNotice";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BusinessCategories />
      <HowItWorks />
      <Fees />
      <ValueProposition />
      <Contact />
      <LegalNotice />
    </>
  );
}
