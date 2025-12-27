import { useState, useRef } from "react";

const teamMembers = [
    { name: "Włodzmierz Kołodziejczyk", role: "CEO & Founder", image: "/images/team1.jpg", linkedin: "https://www.linkedin.com/in/wlodzimierz-kolodziejczyk/" },
    { name: "Anna Kowalska", role: "Frontend Developer", image: "/images/team2.jpg", linkedin: "https://www.linkedin.com/in/anna-kowalska/" },
    { name: "Piotr Nowak", role: "Backend Developer", image: "/images/team3.jpg", linkedin: "https://www.linkedin.com/in/piotr-nowak/" },
    { name: "Katarzyna Wiśniewska", role: "UI/UX Designer", image: "/images/team4.jpg", linkedin: "https://www.linkedin.com/in/katarzyna-wisniewska/" },
    { name: "Łukasz Zieliński", role: "DevOps Engineer", image: "/images/team5.jpg", linkedin: "https://www.linkedin.com/in/lukasz-zielinski/" },
    { name: "Magdalena Kaczmarek", role: "QA Specialist", image: "/images/team6.jpg", linkedin: "https://www.linkedin.com/in/magdalena-kaczmarek/" },
    { name: "Tomasz Wiśniewski", role: "Mobile Developer", image: "/images/team7.jpg", linkedin: "https://www.linkedin.com/in/tomasz-wisniewski/" },
    { name: "Joanna Nowicka", role: "Project Manager", image: "/images/team8.jpg", linkedin: "https://www.linkedin.com/in/joanna-nowicka/" },
];

function Team() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLUListElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll do aktualnego członka zespołu po zmianie currentIndex
    const scrollToMember = (index: number) => {
        setCurrentIndex(index);
        const ul = scrollRef.current;
        if (ul) {
            const child = ul.children[index] as HTMLElement;
            child.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
    };

    return (
        <section ref={sectionRef} className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* NAGŁÓWEK */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                        Nasz <span className="text-blue-600">Zespół</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* LISTA CZŁONKÓW ZESPOŁU */}
                <div className="overflow-x-hidden">
                    <ul
                        ref={scrollRef}
                        className="flex space-x-8 py-4 snap-x snap-mandatory scroll-smooth"
                    >
                        {teamMembers.map((member, index) => (
                            <li
                                key={index}
                                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md overflow-hidden relative group snap-center transform transition duration-500 hover:scale-105"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>

                                {/* Overlay z LinkedIn */}
                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-2xl hover:text-blue-400"
                                        title="LinkedIn"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.25c.58-.86 1.75-1.25 2.5-1.25 2.071 0 3.5 1.429 3.5 3.5v5.5z"/>
                                        </svg>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* KÓŁECZKA */}
                <div className="flex justify-center mt-6 space-x-3">
                    {teamMembers.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToMember(index)}
                            className={`w-4 h-4 rounded-full transition-colors ${
                                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
