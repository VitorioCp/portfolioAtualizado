import { motion } from "framer-motion";

export const Project = () => {
  const projects = [
    {
      title: "Boa Conexão",
      image: "/boaConexao.png",
      siteLink: "https://boaconexao.com.br",
      githubLink: "https://github.com/VitorioCp/boa-conexao",
    },
    {
      title: "Ancorar",
      image: "/siteAncorar.png",
      siteLink: "https://ancorarpsi.com",
      githubLink: "https://github.com/VitorioCp/psicologia",
    },
    {
      title: "Finans",
      image: "/siteFinans.png",
      siteLink: "https://finans-tau.vercel.app",
      githubLink: "https://github.com/VitorioCp/Finans",
    },
    {
      title: "Todoou",
      image: "/todoou.png",
      siteLink: "https://frontend-todoou.vercel.app",
      githubLink: "https://github.com/VitorioCp/psicologia",
    },
    {
      title: "ShelfSpace",
      image: "/ShelfSpace.png",
      siteLink: "https://shelf-space-online-readings.vercel.app/",
      // githubLink ausente
    },
  ];

  return (
    <div id="project" className="bg-black h-auto flex flex-col items-center">
      <div className="w-full max-w-[1200px] mx-auto p-5">
        <h1 className="text-white text-4xl font-bold mb-8">Projetos</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-neutral-800 p-5 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.3)" }}
            >
              {project.siteLink ? (
                <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
                  <img
                    className="rounded mb-4 w-full h-48 object-cover"
                    src={project.image}
                    alt={`Imagem do ${project.title}`}
                  />
                </a>
              ) : (
                <img
                  className="rounded mb-4 w-full h-48 object-cover"
                  src={project.image}
                  alt={`Imagem do ${project.title}`}
                />
              )}

              <h2 className="text-white text-2xl font-bold mb-2">{project.title}</h2>
              <div className="flex justify-between">
                {project.siteLink && (
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300 transition-colors duration-300"
                  >
                    Site
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-300 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
