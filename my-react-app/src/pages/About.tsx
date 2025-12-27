import { useState } from "react";

function About() {
    const [isOpen, setIsOpen] = useState(false);

    const openVideo = () => setIsOpen(true);
    const closeVideo = () => setIsOpen(false);

    return (
        <section className="relative bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEWA STRONA – ZDJĘCIA */}
                <div className="relative">
                    {/* Główne zdjęcie (klikalne) */}
                    <img
                        src="/images/about-main.jpg"
                        alt="Nasz zespół"
                        onClick={openVideo}
                        className="w-full rounded-xl shadow-lg cursor-pointer relative z-10"
                    />

                    {/* Drugie zdjęcie (wystaje, NIE uruchamia filmu) */}
                    <img
                        src="/images/about-secondary.jpg"
                        alt=""
                        onClick={(e) => e.stopPropagation()}
                        className="absolute -right-8 -bottom-8 w-2/3 rounded-xl shadow-md opacity-90 z-20 cursor-default"
                    />
                </div>

                {/* PRAWA STRONA – TEKST */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Kim jesteśmy
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Jesteśmy software housem specjalizującym się w tworzeniu
                        nowoczesnych aplikacji webowych i systemów dedykowanych.
                        Łączymy doświadczenie, technologię i design, aby
                        dostarczać rozwiązania realnie wspierające biznes.
                    </p>

                    {/* Link do filmu */}
                    <button
                        onClick={openVideo}
                        className="text-blue-600 font-medium hover:underline"
                    >
                        ▶ Zobacz jak pracujemy
                    </button>
                </div>
            </div>

            {/* MODAL Z FILMEM */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={closeVideo}
                >
                    <div
                        className="w-full max-w-3xl aspect-video bg-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/LpNVf8sczqU"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />

                    </div>
                </div>
            )}
        </section>
    );
}

export default About;
