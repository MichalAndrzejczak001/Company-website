import { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import type { TeamMember } from "../types";

const teamMembers: TeamMember[] = [
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

    const scrollToMember = (index: number) => {
        setCurrentIndex(index);
        const ul = scrollRef.current;
        if (ul) {
            const child = ul.children[index] as HTMLElement;
            const left = child.offsetLeft - ul.clientWidth / 2 + child.clientWidth / 2;
            ul.scrollTo({ left, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                        Nasz <span className="text-blue-600">Zespół</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                <div className="overflow-x-hidden">
                    <ul
                        ref={scrollRef}
                        style={{ scrollbarWidth: "none" }}
                        className="flex space-x-8 py-4 snap-x snap-mandatory scroll-smooth overflow-x-auto"
                    >
                        {teamMembers.map((member) => (
                            <li
                                key={member.name}
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

                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-blue-400"
                                        aria-label={`LinkedIn – ${member.name}`}
                                    >
                                        <FaLinkedin className="w-10 h-10" />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center mt-6 space-x-3">
                    {teamMembers.map((member, index) => (
                        <button
                            key={index}
                            aria-label={`Przejdź do: ${member.name}`}
                            aria-pressed={index === currentIndex}
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
