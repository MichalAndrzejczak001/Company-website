import { useState, useEffect } from "react";

const testimonials = [
    {
        name: "Roman Wiejczuk",
        role: "CEO, TechCorp",
        image: "/images/testimonial1.jpg",
        text: "Współpraca z tym software housem była rewelacyjna! Projekt został dostarczony na czas, a jakość była na najwyższym poziomie.",
    },
    {
        name: "Anna Kowalska",
        role: "Product Manager, WebSolutions",
        image: "/images/testimonial2.jpg",
        text: "Profesjonalizm i szybka komunikacja. Zespół zrozumiał nasze potrzeby i zaproponował doskonałe rozwiązania.",
    },
    {
        name: "Piotr Nowak",
        role: "CTO, MobileApps",
        image: "/images/testimonial3.jpg",
        text: "Techniczne kompetencje i kreatywność zespołu są na bardzo wysokim poziomie. Polecamy każdemu, kto szuka solidnego partnera IT.",
    },
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatyczne przełączanie opinii co 5 sekund
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">

                {/* NAGŁÓWEK */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
                    Opinie <span className="text-blue-600">Klientów</span>
                </h2>

                {/* TESTIMONIAL */}
                <div className="bg-white rounded-xl shadow-lg p-8 transition duration-500">
                    <p className="text-gray-700 text-lg md:text-xl italic mb-6">
                        "{testimonials[currentIndex].text}"
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-left">
                            <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                            <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                        </div>
                    </div>
                </div>

                {/* KROPKI DO NAWIGACJI */}
                <div className="flex justify-center mt-6 space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-4 h-4 rounded-full transition-colors ${
                                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
