import { useState } from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // tu docelowo wysyłka do API
        console.log("Nowa wiadomość:", form);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* FORMULARZ KONTAKTOWY */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
                        Skontaktuj się z nami
                    </h2>

                    {sent ? (
                        <div className="py-4">
                            <p className="text-green-600 font-medium mb-4">Wiadomość wysłana! Odezwiemy się wkrótce.</p>
                            <button
                                onClick={() => setSent(false)}
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Wyślij kolejną wiadomość
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 mb-1">Imię i nazwisko</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Twoje imię"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Twój email"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Wiadomość</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Twoja wiadomość"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                            >
                                Wyślij wiadomość
                            </button>
                        </form>
                    )}
                </div>

                {/* DANE KONTAKTOWE */}
                <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Nasze biuro
                    </h2>

                    <p className="text-gray-700">
                        <span className="font-semibold">Adres:</span> ul. Przykładowa 12, 00-123 Warszawa, Polska
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Email:</span> kontakt@twojafirma.pl
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Telefon:</span> +48 123 456 789
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Godziny pracy:</span> Pon – Pt: 9:00 – 17:00
                    </p>

                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="w-full h-48 rounded-md overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.244248398513!2d21.01222931603756!3d52.22967597978857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccde14c3fda1%3A0x47b8c7ef09c2b3ed!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1698162029994!5m2!1sen!2sus"
                            className="w-full h-full border-0"
                            loading="lazy"
                            title="Mapa biura"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;
