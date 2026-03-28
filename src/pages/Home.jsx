import Hero from "../sections/Hero";
import WhyChoose from "../sections/WhyChoose";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import QRCodeSection from "../components/QRCodeSection.jsx";

function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />

      {/* 🔥 QR SECTION ADDED HERE */}
      <QRCodeSection />
      <SectionDivider />

      <WhyChoose />
      <SectionDivider />

      <CTA />
      <SectionDivider />

      <Footer />
    </>
  );
}

export default Home;