import Header from "./components/Header";
import Hero from "./homecomponents/Hero";
import About from "./homecomponents/About";
import Services from "./homecomponents/Services";
import News from "./homecomponents/News";
import Footer from "./components/Footer";
import CTA from "./homecomponents/CTA";


export default function Home() {
  return (
    <>
    <Header />
    <Hero title={<>CIGARETTE MAKEPACK MACHINERY & <br />SPARE PARTS</>} imageSrc="/herofinalfinal.webp" />
    <About />
    <Services />
    <News />
    <CTA />
    <Footer />
    </>
  );
}
