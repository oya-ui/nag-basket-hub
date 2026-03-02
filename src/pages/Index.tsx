import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import SNSSection from "@/components/SNSSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ActivitiesSection />
        <SNSSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
