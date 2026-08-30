import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyPay from "@/components/sections/WhyPay";
import BusinessCategories from "@/components/sections/BusinessCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import Differentiation from "@/components/sections/Differentiation";
import Fees from "@/components/sections/Fees";
import ValueProposition from "@/components/sections/ValueProposition";
import Results from "@/components/sections/Results";
import Scope from "@/components/sections/Scope";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import LegalNotice from "@/components/sections/LegalNotice";
import StructuredData from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />

      <Hero />

      <About />

      <WhyPay />

      <BusinessCategories />

      <HowItWorks />

      <Differentiation />

      <Fees />

      <ValueProposition />

      <Results />

      <Scope />

      <Testimonials />

      <Contact />

      <LegalNotice />
    </>
  );
}