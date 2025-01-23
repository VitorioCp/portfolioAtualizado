import { useState } from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='mt-20 '>
            <div className="fixed top-0 w-full bg-black border-b-2 border-neutral-600 z-10 ">
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

                    <ul className={`text-white gap-8 flex font-bold ${isOpen ? 'block' : 'hidden'} md:flex`}>
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
            </div>
        </div>
    );
}