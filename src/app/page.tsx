import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BusinessCategories from "@/components/sections/BusinessCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import Fees from "@/components/sections/Fees";
import ValueProposition from "@/components/sections/ValueProposition";
import Contact from "@/components/sections/Contact";
import LegalNotice from "@/components/sections/LegalNotice";
import Scope from "@/components/sections/Scope";
import StructuredData from "@/components/seo/StructuredData";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <About />
      <BusinessCategories />
      <HowItWorks />
      <Fees />
      <ValueProposition />
      <Scope />
      <Testimonials />
      <Contact />
      <LegalNotice />
    </>
  );
}
