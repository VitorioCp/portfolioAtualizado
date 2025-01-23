import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Hero = () => {
    return (
        <div id="home" className="bg-black h-screen flex flex-col ">
            <div className="flex flex-col md:flex-row justify-between my-auto px-5 items-center w-full max-w-[1200px] mx-auto flex-wrap"> 
                <div className="text-center md:text-left" >
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl w-full md:w-[400px]">Olá, me chamo <br />Vitório Corrêa <br />Desenvolvedor Front End </h1>
                    <ul className="text-white flex flex-col md:flex-row gap-5 mt-8 justify-center md:justify-start">
                        <li className="flex items-center gap-2 hover:text-gray-400">
                            <a href="https://github.com/VitorioCp" className="flex items-center gap-2 hover:text-gray-400">
                                <FaGithub className="h-6 w-6" />
                                GitHub
                            </a>
                        </li>
                        <li className="flex items-center gap-2 hover:text-gray-400">
                            <a href="https://www.linkedin.com/in/vitorio-correa/" className="flex items-center gap-2 hover:text-gray-400">
                                <FaLinkedin className="h-6 w-6" />
                                Linkedin
                            </a>
                        </li>
                        <li className="flex items-center gap-2 hover:text-gray-400">
                            <a href="https://wa.me/5521969896963" className="flex items-center gap-2 hover:text-gray-400">
                                <FaWhatsapp className="h-6 w-6" />
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                    <div className="flex justify-center md:justify-start">
                        <button className="text-white border w-60 mt-8 md:mt-20 rounded-md h-10 bg-blue-500 hover:bg-blue-700 transition-colors duration-300">
                            Baixar CV
                        </button>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 hidden md:block">
                    <img className="rounded border w-60 md:w-80" src="/public/perfil.jpg" alt="Foto de Vitório" />
                </div>
            </div>
        </div>
    )
}