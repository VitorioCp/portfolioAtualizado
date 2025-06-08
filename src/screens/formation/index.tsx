import { motion } from "framer-motion";

export const Formation = () => {
  const formations = [
    {
      title: "Engenharia de Software (Bacharelado)",
      institution: "Estácio SA",
      period: "02/2023 - 12/2027",
    },
    {
      title: "Ensino Médio Faetec Programação de jogos digitais",
      institution: "Faetec",
      period: "02/2021 - 12/2023",
    },
  ];

  const certificates = [
    {
      title: "Desenvolvimento Web Completo",
      institution: "Udemy",
      period: "01/2023",
    },
    {
      title: "Certificado de Node.js",
      institution: "Dio",
      period: "03/2023",
    },
    {
      title: "Certificado de React.js",
      institution: "Dio",
      period: "03/2023",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div
      id="formation"
      className="bg-black min-h-screen flex flex-col items-center py-10"
    >
      <div className="w-full max-w-[1200px] px-5">
        <h1 className="text-white text-4xl font-bold mb-12">Formação</h1>
        <div className="relative pl-10 border-l-4 border-blue-500 mb-16">
          {formations.map((formation, i) => (
            <motion.article
              key={i}
              className="relative mb-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <span className="absolute -left-[14px] top-1/2 transform -translate-y-1/2 h-4 w-4 rounded-full bg-blue-500 border-2 border-black"></span>
              <time className="text-sm text-neutral-400 mb-1 block">
                {formation.period}
              </time>
              <h3 className="text-white text-2xl font-semibold ml-1">
                {formation.title}
              </h3>
              <p className="text-neutral-400">{formation.institution}</p>
            </motion.article>
          ))}
        </div>

        <h1 className="text-white text-4xl font-bold mb-12">Certificados</h1>
        <div className="relative pl-10 border-l-4 border-green-500">
          {certificates.map((certificate, i) => (
            <motion.article
              key={i}
              className="relative mb-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <span className="absolute -left-[14px] top-1/2 transform -translate-y-1/2 h-4 w-4 rounded-full bg-green-500 border-2 border-black"></span>
              <time className="text-sm text-neutral-400 mb-1 block">
                {certificate.period}
              </time>
              <h3 className="text-white text-2xl font-semibold ml-1">
                {certificate.title}
              </h3>
              <p className="text-neutral-400">{certificate.institution}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
