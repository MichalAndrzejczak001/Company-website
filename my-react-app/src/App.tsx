import Navbar from "./pages/Navbar.tsx";
import Hero from "./pages/Hero.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Team from "./pages/Team.tsx";
import Gallery from "./pages/Galery.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./pages/Footer.tsx";
import Rest from "./pages/Rest.tsx";

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

            <Rest />
        </>
    );
}

export default App;
