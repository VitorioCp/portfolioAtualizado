export const Project = () => {
    const projects = [
        {
            title: "Boa Conexão",
            image: "/boaConexao.png",
            siteLink: "https://boaconexao.com.br",
            githubLink: "https://github.com/VitorioCp/boa-conexao"
        },
        {
            title: "Ancorar",
            image: "/siteAncorar.png",
            siteLink: "https://ancorarpsi.com",
            githubLink: "https://github.com/VitorioCp/psicologia"
        },
        {
            title: "Finans",
            image: "/siteFinans.png",
            siteLink: "https://finans-tau.vercel.app",
            githubLink: "https://github.com/VitorioCp/Finans"
        },
        {
            title: "Todoou",
            image: "/todoou.png",
            siteLink: "https://frontend-todoou.vercel.app",
            githubLink: "https://github.com/VitorioCp/psicologia"
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
                        <div
                            key={index}
                            className="bg-neutral-800 p-5 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {project.siteLink ? (
                                <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
                                    <img className="rounded mb-4 cursor-pointer" src={project.image} alt={`Imagem do ${project.title}`} />
                                </a>
                            ) : (
                                <img className="rounded mb-4" src={project.image} alt={`Imagem do ${project.title}`} />
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
