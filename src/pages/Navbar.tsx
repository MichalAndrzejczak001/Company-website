import { useState } from "react";

const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "O nas" },
    { id: "services", label: "Usługi" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Zespół" },
    { id: "gallery", label: "Galeria" },
    { id: "testimonials", label: "Opinie" },
    { id: "contact", label: "Kontakt" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <nav className="fixed w-full bg-white shadow z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <div
                    className="text-2xl font-bold text-blue-600 cursor-pointer"
                    onClick={() => scrollToSection("hero")}
                >
                    Software House
                </div>

                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {navLinks.map(link => (
                        <li
                            key={link.id}
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollToSection(link.id)}
                        >
                            {link.label}
                        </li>
                    ))}
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <div className="w-6 h-0.5 bg-gray-700 mb-1" />
                        <div className="w-6 h-0.5 bg-gray-700 mb-1" />
                        <div className="w-6 h-0.5 bg-gray-700" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className="md:hidden bg-white shadow-lg flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
                    {navLinks.map(link => (
                        <li
                            key={link.id}
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollToSection(link.id)}
                        >
                            {link.label}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
