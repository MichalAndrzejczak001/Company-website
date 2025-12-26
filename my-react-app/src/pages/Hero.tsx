import { useState, useEffect } from "react";

interface Slide {
    image: string;
    title: string;
    subtitle: string;
}

const slides: Slide[] = [
    {
        image: "/images/slide1.jpg",
        title: "INNOWACJE",
        subtitle: "tworzymy nowoczesne aplikacje webowe",
    },
    {
        image: "/images/slide2.jpg",
        title: "TECHNOLOGIE",
        subtitle: "korzystamy z najnowszych frameworków i narzędzi",
    },
    {
        image: "/images/slide3.jpg",
        title: "ZESPÓŁ",
        subtitle: "doświadczeni programiści i kreatywne rozwiązania",
    },
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatyczne przełączanie
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="relative w-full h-[500px] bg-gray-800 flex items-center justify-center overflow-hidden">
            {/* Slajdy */}
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentIndex ? "opacity-80" : "opacity-0"
                    }`}
                />
            ))}

            {/* Tekst */}
            <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2 uppercase">
                    {slides[currentIndex].title}
                </h2>
                <p className="text-lg md:text-2xl">{slides[currentIndex].subtitle}</p>
            </div>

            {/* Przyciski */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-80 transition"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-3 py-2 rounded hover:bg-opacity-80 transition"
            >
                &#10095;
            </button>

            {/* Kropki */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-4 h-4 rounded-full transition-colors ${
                            index === currentIndex ? "bg-blue-400" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;
