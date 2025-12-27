import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false); // zamknięcie menu mobilnego po kliknięciu
    };

    return (
        <nav className="fixed w-full bg-white shadow z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <div className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => scrollToSection("hero")}>
                    Software House
                </div>

                {/* Menu desktop */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("hero")}>Home</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("about")}>O nas</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("services")}>Usługi</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("portfolio")}>Portfolio</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("team")}>Zespół</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("gallery")}>Galeria</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("testimonials")}>Opinie</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("contact")}>Kontakt</li>
                </ul>

                {/* Hamburger menu mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-700"></div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <ul className="md:hidden bg-white shadow-lg flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("hero")}>Home</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("about")}>O nas</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("services")}>Usługi</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("portfolio")}>Portfolio</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("team")}>Zespół</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("gallery")}>Galeria</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("testimonials")}>Opinie</li>
                    <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("contact")}>Kontakt</li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
