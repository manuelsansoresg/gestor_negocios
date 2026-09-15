import Hero from "@/components/sections/Hero";
import HomeIntentChoice from "@/components/sections/HomeIntentChoice";
import About from "@/components/sections/About";
import WhyPay from "@/components/sections/WhyPay";
import BusinessCategories from "@/components/sections/BusinessCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import Differentiation from "@/components/sections/Differentiation";
import Fees from "@/components/sections/Fees";
import ValueProposition from "@/components/sections/ValueProposition";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import StructuredData from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />

      <Hero />

      <HomeIntentChoice />

      <About />

      <WhyPay />

      <BusinessCategories />

      <HowItWorks />

      <Differentiation />

      <Fees />

      <ValueProposition />

      <Results />

      <Testimonials />

      <Contact />
    </>
  );
}