import Hero from "./Hero";
import Features from "./Features";
import DownloadSection from "./DownloadSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";

const Main = () => {
  return (
    <main className=" flex-grow">
      <Hero />
      <Features />
      <DownloadSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}

export default Main;