import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const Skills = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 className="h-16 w-16 mb-4 text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="h-16 w-16 mb-4 text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="h-16 w-16 mb-4 text-yellow-500" /> },
        { name: "React", icon: <FaReact className="h-16 w-16 mb-4 text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="h-16 w-16 mb-4 text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="h-16 w-16 mb-4 text-teal-500" /> },
        { name: "TypeScript", icon: <FaJs className="h-16 w-16 mb-4 text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs  className="h-16 w-16 mb-4 text-white" /> },
    ];

    return (
        <div id="skills" className="bg-black h-screen flex flex-col items-center">
            <div className="w-full max-w-[1200px] mx-auto p-5">
                <h1 className="text-white text-4xl font-bold mb-8">Skills</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-20">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
                            {skill.icon}
                            <span className="text-white text-xl">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}