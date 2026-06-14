import { useState } from "react";
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
        setEmail("");
    };

    return (
        <footer className="bg-gray-900 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

                <div>
                    <h3 className="text-xl font-bold mb-4">Software House</h3>
                    <p className="text-gray-400">
                        Tworzymy nowoczesne aplikacje webowe i mobilne. Łączymy design, technologie i doświadczenie, aby wspierać rozwój Twojego biznesu.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Znajdź nas</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            <FaXTwitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">Zapisz się, aby otrzymywać nowości i oferty.</p>
                    <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleNewsletter}>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Twój email"
                            required
                            className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Zapisz się
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Software House. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}

export default Footer;
