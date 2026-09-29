import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Studio from "./components/Studio.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <Studio />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
