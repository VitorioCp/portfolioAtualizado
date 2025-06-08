import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="h-16 w-16 mb-4 text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="h-16 w-16 mb-4 text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="h-16 w-16 mb-4 text-yellow-500" /> },
    { name: "React", icon: <FaReact className="h-16 w-16 mb-4 text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="h-16 w-16 mb-4 text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="h-16 w-16 mb-4 text-teal-500" /> },
    { name: "TypeScript", icon: <FaJs className="h-16 w-16 mb-4 text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-16 w-16 mb-4 text-white" /> },
  ];

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-120px" }); 

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <div
      id="skills"
      ref={ref}
      className="bg-black min-h-screen flex flex-col items-center py-20"
    >
      <div className="w-full max-w-[1200px] mx-auto p-5">
        <h1 className="text-white text-4xl font-bold mb-12 ">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-default"
              variants={skillVariants}
              initial="hidden"
              animate={controls}
              custom={index}
              whileHover={{ scale: 1.1 }}
              title={`Skill: ${skill.name}`}
            >
              {skill.icon}
              <span className="text-white text-xl">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
