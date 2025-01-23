export const Header = () => {
    return (
        <div className="fixed top-0 w-full bg-black border-b-2 border-neutral-600 z-10">
            <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto h-20 p-5">
                <span className="text-white font-bold">
                    VCP DEV
                </span>

                <ul className="text-white gap-8 flex font-bold">
                    <li>
                        <a href="#home" className="hover:text-blue-500 transition-colors duration-300">Inicio</a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-blue-500 transition-colors duration-300">Skills</a>
                    </li>
                    
                    <li>
                        <a href="#project" className="hover:text-blue-500 transition-colors duration-300">Projetos</a>
                    </li>


                    <li>
                        <a href="#formation" className="hover:text-blue-500 transition-colors duration-300">Formação</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}