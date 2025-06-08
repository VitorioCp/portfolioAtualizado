import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div id="home" className="bg-black h-screen flex flex-col">
      <div className="flex flex-col md:flex-row justify-between my-auto px-5 items-center w-full max-w-[1200px] mx-auto flex-wrap">

        <div className="text-center md:text-left">
          {/* Título animado */}
          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl w-full md:w-[400px] leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vitório Corrêa <br />
            Desenvolvedor Front-End
          </motion.h1>



          {/* Introdução animada */}
          <motion.p
            className="text-gray-300 text-lg mt-6 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Desenvolvedor Web com sede de evolução. Domino o front-end e back-end com
            <span className="text-white font-semibold"> JavaScript</span>,
            <span className="text-white font-semibold"> Node.js</span> e
            <span className="text-white font-semibold"> React</span>. Pronto para encarar
            desafios e entregar <span className="text-white font-semibold">resultados de verdade</span>, seja em equipe ou como freelancer remoto.
          </motion.p>

          {/* Redes sociais animadas - fade e slide, um a um */}
          <motion.ul
            className="text-white flex flex-col md:flex-row gap-5 mt-8 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                href: "https://github.com/VitorioCp",
                icon: <FaGithub className="h-6 w-6" />,
                label: "GitHub",
                hover: "hover:text-gray-400",
              },
              {
                href: "https://www.linkedin.com/in/vitorio-correa/",
                icon: <FaLinkedin className="h-6 w-6" />,
                label: "Linkedin",
                hover: "hover:text-blue-500",
              },
              {
                href: "https://wa.me/5521969896963",
                icon: <FaWhatsapp className="h-6 w-6" />,
                label: "WhatsApp",
                hover: "hover:text-green-500",
              },
            ].map(({ href, icon, label, hover }) => (
              <motion.li
                key={label}
                className={`flex items-center gap-2 ${hover}`}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <a href={href} className="flex items-center gap-2">
                  {icon}
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Botão animado com pulso */}
          <motion.div className="flex justify-center md:justify-start">
            <motion.button
              className="text-white border w-60 mt-8 md:mt-20 rounded-md h-10 bg-blue-500 hover:bg-blue-700 transition-colors duration-300"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              Baixar CV
            </motion.button>
          </motion.div>
        </div>

        {/* Imagem animada */}
        <motion.div
          className="mt-8 md:mt-0 hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            className="rounded border w-60 md:w-80"
            src="/perfil.jpg"
            alt="Foto de Vitório"
          />
        </motion.div>
      </div>
    </div>
  );
};
