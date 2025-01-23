import { useState } from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target.id === 'overlay') {
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed top-0 w-full bg-black border-b-2 border-neutral-600 z-10">
            <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto h-20 p-5">
                <span className="text-white font-bold">
                    <a href="#home" aria-label="VCP DEV Home">VCP DEV</a>
                </span>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

                <ul className="hidden md:flex text-white gap-8 font-bold">
                    <li>
                        <a href="#home" className="hover:text-blue-500 transition-colors duration-300" aria-label="Inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-blue-500 transition-colors duration-300" aria-label="Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#project" className="hover:text-blue-500 transition-colors duration-300" aria-label="Projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#formation" className="hover:text-blue-500 transition-colors duration-300" aria-label="Formação">Formação</a>
                    </li>
                </ul>
            </div>

            {/* Overlay e Modal para dispositivos móveis */}
            {isOpen && (
                <div id="overlay" className="fixed inset-0 z-20 bg-black bg-opacity-50" onClick={handleOverlayClick}>
                    <div className="fixed top-0 right-0 h-full w-2/4 bg-black border-l-2 border-neutral-600 z-30 transform translate-x-0 transition-transform duration-300 md:hidden">
                        <ul className="flex flex-col text-white gap-8 font-bold p-5">
                            <li>
                                <a href="#home" className="hover:text-blue-500 transition-colors duration-300" aria-label="Inicio" onClick={() => setIsOpen(false)}>Inicio</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-blue-500 transition-colors duration-300" aria-label="Skills" onClick={() => setIsOpen(false)}>Skills</a>
                            </li>
                            <li>
                                <a href="#project" className="hover:text-blue-500 transition-colors duration-300" aria-label="Projetos" onClick={() => setIsOpen(false)}>Projetos</a>
                            </li>
                            <li>
                                <a href="#formation" className="hover:text-blue-500 transition-colors duration-300" aria-label="Formação" onClick={() => setIsOpen(false)}>Formação</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}