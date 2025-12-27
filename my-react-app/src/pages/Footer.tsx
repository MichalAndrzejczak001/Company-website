function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

                {/* 1. Krótki opis końcowy */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Software House</h3>
                    <p className="text-gray-400">
                        Tworzymy nowoczesne aplikacje webowe i mobilne. Łączymy design, technologie i doświadczenie, aby wspierać rozwój Twojego biznesu.
                    </p>
                </div>

                {/* 2. Linki do social mediów */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Znajdź nas</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            {/* LinkedIn SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.25c.58-.86 1.75-1.25 2.5-1.25 2.071 0 3.5 1.429 3.5 3.5v5.5z"/>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            {/* Facebook SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M22 0h-20c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10v-9h-3v-4h3v-3c0-3.07 1.893-4.746 4.655-4.746 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.762v2.314h3.587l-.467 4h-3.12v9h6.116c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                            {/* Twitter SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.932 2.208-4.932 4.932 0 .386.044.762.127 1.124-4.096-.205-7.732-2.168-10.174-5.144-.425.729-.667 1.577-.667 2.476 0 1.708.87 3.216 2.188 4.101-.807-.026-1.566-.247-2.229-.616v.062c0 2.388 1.698 4.378 3.95 4.83-.414.113-.849.174-1.296.174-.317 0-.626-.031-.927-.089.627 1.956 2.444 3.378 4.6 3.418-1.68 1.317-3.808 2.103-6.115 2.103-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.213 7.548 2.213 9.054 0 14.002-7.504 14.002-14.002 0-.213-.005-.425-.014-.637.962-.694 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* 3. Newsletter */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">Zapisz się, aby otrzymywać nowości i oferty.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Twój email"
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

            {/* Stopka dolna */}
            <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Software House. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}

export default Footer;
