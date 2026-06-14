const projects = [
    {
        title: "Strona e-commerce",
        description: "Nowoczesna strona sprzedażowa zintegrowana z systemem płatności.",
        image: "/images/portfolio1.jpg",
        link: "https://www.shopify.com/",
    },
    {
        title: "Aplikacja mobilna",
        description: "Aplikacja na iOS i Android, intuicyjny interfejs i szybka nawigacja.",
        image: "/images/portfolio2.jpg",
        link: "https://www.behance.net/",
    },
    {
        title: "Platforma SaaS",
        description: "Rozbudowana platforma SaaS wspierająca zarządzanie projektami.",
        image: "/images/portfolio3.jpg",
        link: "https://www.atlassian.com/",
    },
    {
        title: "Strona dla startupu",
        description: "Landing page dla nowego startupu z pełną responsywnością.",
        image: "/images/portfolio4.jpg",
        link: "https://www.airbnb.com/",
    },
];

function Portfolio() {
    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* NAGŁÓWEK */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                        <span className="text-blue-600">Portfolio</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* PROJEKTY */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    Zobacz projekt
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
