const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full pt-6 pb-20 mt-20 border-t-2 border-black md:flex-row md:justify-between gap-y-10">
            <span className="text-center text-black">
                © ASUDEG 2024 | Todos los derechos reservados
                <span aria-hidden="true" className="hidden md:inline"> | </span>
                <br aria-hidden="true" />
                <a 
                    href="https://www.facebook.com/oscarbolanoscastro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Alianza Sureña
                </a>
            </span>

            <span className="mt-4 text-center text-black md:mt-0">
                Desarrollado por 
                <a 
                    href="https://www.linkedin.com/in/v%C3%ADctor-alfonso-83046184/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 hover:underline"
                >
                    Ingeniero Victor Alfonso Delgado Bolaños
                </a>
            </span>

            <ul className="flex flex-row items-center justify-center gap-x-6">
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/oscarbolanoscastro"
                        className="inline-block transition hover:scale-125 hover:opacity-70"
                    >
                        <img
                            src="./facebook.svg"
                            alt="Logo de Facebook"
                            className="w-6 h-6"
                        />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://api.whatsapp.com/send?phone=573183773718"
                        className="inline-block transition hover:scale-125 hover:opacity-70"
                    >
                        <img
                            src="./whatsapp.svg"
                            alt="Logo de Whatsapp"
                            className="w-6 h-6"
                        />
                    </a>
                </li>
            </ul>


        </footer>
    );
};

export default Footer;
