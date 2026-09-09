import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Countries from "@/components/Countries";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stories from "@/components/Stories";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Countries />
        <Services />
        <Process />
        <Stories />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
