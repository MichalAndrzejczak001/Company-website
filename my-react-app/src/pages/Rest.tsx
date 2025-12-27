import { FaArrowUp } from "react-icons/fa6"; // lub "react-icons/fa6" jeśli używasz nowszej wersji


function Rest() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // płynne przewijanie
        });
    };

    return (
        <section className="py-12 flex justify-center">
            <button
                onClick={scrollToTop}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
                <FaArrowUp />
                Na górę
            </button>
        </section>
    );
}

export default Rest;
