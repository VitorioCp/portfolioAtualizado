export const Formation = () => {
    const formations = [
        {
            title: "Engenharia de Software (Bacharelado)",
            institution: "Estácio SA",
            period: "02/2023 - 12/2027"
        },
        {
            title: "Ensino Médio Faetec Programação de jogos digitais",
            institution: "Faetec",
            period: "02/2021 - 12/2023"
        }
        // Adicione mais formações conforme necessário
    ];

    const certificates = [
        {
            title: "Desenvolvimento Web Completo",
            institution: "Udemy",
            period: "01/2023"
        },
        {
            title: "Certificado de Node.js",
            institution: "Dio",
            period: "03/2023"
        },
        {
            title: "Certificado de Rect.js",
            institution: "Dio",
            period: "03/2023"
        },
        // Adicione mais certificados conforme necessário
    ];

    return (
        <div id="formation" className="bg-black h-screen flex flex-col items-center">
            <div className="w-full max-w-[1200px] mx-auto p-5">
                <h1 className="text-white text-4xl font-bold mb-8">Formação</h1>
                <div className="mb-8">
                    {formations.map((formation, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="text-white text-2xl font-bold">{formation.title}</h2>
                            <h3 className="text-neutral-400 text-xl">{formation.institution}</h3>
                            <span className="text-neutral-500">{formation.period}</span>
                        </div>
                    ))}
                </div>
                <h1 className="text-white text-4xl font-bold mb-8 mt-16">Certificados</h1>
                <div>
                    {certificates.map((certificate, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="text-white text-2xl font-bold">{certificate.title}</h2>
                            <h3 className="text-neutral-400 text-xl">{certificate.institution}</h3>
                            <span className="text-neutral-500">{certificate.period}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}