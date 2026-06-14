import { useState, useRef, useEffect } from "react";
import { useKeyboardClose } from "../hooks/useKeyboardClose";

const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const triggerRef = useRef<HTMLElement | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const openModal = (image: string, e: React.MouseEvent<HTMLImageElement>) => {
        triggerRef.current = e.currentTarget;
        setSelectedImage(image);
    };
    const closeModal = () => setSelectedImage(null);

    useKeyboardClose(!!selectedImage, closeModal);

    useEffect(() => {
        if (selectedImage) {
            closeButtonRef.current?.focus();
        } else {
            (triggerRef.current as HTMLElement | null)?.focus();
        }
    }, [selectedImage]);

    useEffect(() => {
        if (!selectedImage) return;
        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;
            e.preventDefault();
            closeButtonRef.current?.focus();
        };
        document.addEventListener("keydown", handleTab);
        return () => document.removeEventListener("keydown", handleTab);
    }, [selectedImage]);

    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* NAGŁÓWEK */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                        Galeria <span className="text-blue-600">Zdjęć</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* SIATKA ZDJĘĆ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Zdjęcie z galerii ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
                            onClick={(e) => openModal(image, e)}
                        />
                    ))}
                </div>

                {/* MODAL */}
                {selectedImage && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Podgląd zdjęcia"
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        <div
                            className="max-w-3xl w-full p-4 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                ref={closeButtonRef}
                                onClick={closeModal}
                                aria-label="Zamknij podgląd"
                                className="absolute top-0 right-0 m-2 text-white bg-gray-800/70 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition text-xl leading-none"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedImage}
                                alt="Wybrane zdjęcie"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Gallery;
