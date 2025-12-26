import Navbar from "./pages/Navbar.tsx";
import Hero from "./pages/Hero.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Team from "./pages/Team.tsx";
import Gallery from "./pages/Gallery.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./pages/Footer.tsx";
import Rest from "./pages/Rest.tsx";

function App() {
    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Team />
                <Gallery />
                <Testimonials />
                <Contact />
                <Footer />
                <Rest />
            </div>
        </>
    )
}

export default App;

