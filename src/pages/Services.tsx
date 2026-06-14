const services = [
    {
        icon: "/icons/web.jpg",
        title: "Aplikacje webowe",
        description: "Nowoczesne i skalowalne aplikacje dopasowane do potrzeb biznesu.",
    },
    {
        icon: "/icons/mobile.jpg",
        title: "Aplikacje mobilne",
        description: "Tworzymy aplikacje iOS i Android w oparciu o sprawdzone technologie.",
    },
    {
        icon: "/icons/uiux.jpg",
        title: "UI / UX Design",
        description: "Projektujemy intuicyjne interfejsy skupione na użytkowniku.",
    },
    {
        icon: "/icons/backend.jpg",
        title: "Backend & API",
        description: "Stabilne i bezpieczne serwisy, mikroserwisy i integracje.",
    },
    {
        icon: "/icons/cloud.jpg",
        title: "Cloud & DevOps",
        description: "Automatyzacja, CI/CD i wdrożenia w chmurze.",
    },
    {
        icon: "/icons/consulting.jpg",
        title: "Konsulting IT",
        description: "Doradzamy technologicznie i pomagamy skalować produkty.",
    },
];

function Services() {
    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* NAGŁÓWEK */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Nasze <span className="text-blue-600">usługi</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* SIATKA USŁUG */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition"
                        >
                            <img
                                src={service.icon}
                                alt={service.title}
                                className="w-24 h-24 mx-auto mb-6"
                            />

                            <h3 className="text-xl font-semibold mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
