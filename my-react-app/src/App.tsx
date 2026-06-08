import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
    return (
        <>
            <Navbar />

            <section id="hero">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="services">
                <Services />
            </section>

            <section id="portfolio">
                <Portfolio />
            </section>

            <section id="team">
                <Team />
            </section>

            <section id="gallery">
                <Gallery />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <Footer />

            <ScrollToTop />
        </>
    );
}

export default App;
