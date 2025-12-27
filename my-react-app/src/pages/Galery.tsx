import { useState } from "react";

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

    const openModal = (image: string) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

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
                            alt={`Galeria ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
                            onClick={() => openModal(image)}
                        />
                    ))}
                </div>

                {/* MODAL */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        <div
                            className="max-w-3xl w-full p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
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
