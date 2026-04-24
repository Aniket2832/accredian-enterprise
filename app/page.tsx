import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import WhyAccredian from "@/components/WhyAccredian";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <WhyAccredian />
      <Programs />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}
