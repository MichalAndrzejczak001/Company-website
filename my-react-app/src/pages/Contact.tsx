function Contact() {
    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* FORMULARZ KONTAKTOWY */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
                        Skontaktuj się z nami
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Imię i nazwisko</label>
                            <input
                                type="text"
                                placeholder="Twoje imię"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Twój email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Wiadomość</label>
                            <textarea
                                placeholder="Twoja wiadomość"
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
                </div>

                {/* DANE KONTAKTOWE */}
                <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Nasze biuro
                    </h2>

                    {/* Adres */}
                    <p className="text-gray-700">
                        <span className="font-semibold">Adres:</span> ul. Przykładowa 12, 00-123 Warszawa, Polska
                    </p>

                    {/* Email */}
                    <p className="text-gray-700">
                        <span className="font-semibold">Email:</span> kontakt@twojafirma.pl
                    </p>

                    {/* Telefon */}
                    <p className="text-gray-700">
                        <span className="font-semibold">Telefon:</span> +48 123 456 789
                    </p>

                    {/* Godziny pracy */}
                    <p className="text-gray-700">
                        <span className="font-semibold">Godziny pracy:</span> Pon – Pt: 9:00 – 17:00
                    </p>

                    {/* Media społecznościowe */}
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.25c.58-.86 1.75-1.25 2.5-1.25 2.071 0 3.5 1.429 3.5 3.5v5.5z"/>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M22 0h-20c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10v-9h-3v-4h3v-3c0-3.07 1.893-4.746 4.655-4.746 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.762v2.314h3.587l-.467 4h-3.12v9h6.116c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2z"/>
                            </svg>
                        </a>
                    </div>

                    {/* Mapa */}
                    <div className="w-full h-48 rounded-md overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.244248398513!2d21.01222931603756!3d52.22967597978857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccde14c3fda1%3A0x47b8c7ef09c2b3ed!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1698162029994!5m2!1sen!2sus"
                            className="w-full h-full"
                            loading="lazy"
                            title="Mapa biura"
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;
