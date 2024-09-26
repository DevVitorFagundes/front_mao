import Link from "next/link";

export function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-AzulForte w-[100vw] flex items-center justify-center mx-auto p-4">
        <div className="container max-w-screen-xl mx-auto flex justify-end">
          <div className="flex max-w-44 container justify-between">
            <a className="px-2" href="#" aria-label="Facebook">
              <img src="./icones/facebook_branco.svg" alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="./icones/twitter_branco.svg" alt="Twitter" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="./icones/youtube_branco.svg" alt="YouTube" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="./icones/instagram_branco.svg" alt="Instagram" />
            </a>
            <a className="px-2" href="#" aria-label="LinkedIn">
              <img src="./icones/linkedin_branco.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white border-gray-200 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center rtl:space-x-reverse">
            <img src="./icones/logo_azul_e_cinzas_e_nome.svg" alt="Logo" />
            <span className="text-3xl font-semibold whitespace-nowrap dark:text-black"></span>
          </Link>

          {/* Login, Cadastro e WhatsApp */}
          <div className="flex max-w-xl justify-between container items-center">
            <img src="./icones/whatsapp_azul.svg" alt="WhatsApp" />
            <div className="flex flex-col text-center w-fit">
              <span className="text-gray-500">DISPONÍVEL NO WHATS-APP</span>
              <span className="text-black font-bold">(53) 99643 - 0964</span>
            </div>
            <Link href="/buy" className="bg-white-400 text-black font-bold text-base hover:text-blue-700 py-2 px-4 rounded-lg">
              LOGIN
            </Link>
            <Link href="/buy" className="bg-Amarelo w-44 px-0 rounded-full hover:text-blue-700 text-black text-xl text-center font-bold py-2">
              Cadastre-se
            </Link>
          </div>
        </div>
      </nav>

      {/* Navigation Menu */}
      <div className="w-screen bg-gray-100">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <ul className="flex justify-center space-x-8 py-4">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-700">
                Principal
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-700">
                Suporte
              </Link>
            </li>
            <li>
              <Link href="/pages" className="text-gray-700 hover:text-blue-700">
                Serviços
              </Link>
            </li>
          </ul>

          <form className="max-w-xl container rounded-full">
            <div className="relative">
              <input
                type="search"
                className="block w-full max-h-10 py-4 rounded-full ps-4 text-sm text-gray-900 border border-gray-300 italic bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Pesquisar"
                required
              />
              <button
                type="submit"
                className="text-white max-w-10 h-10 absolute bg-gray-50 border-t border-b end-0 border-gray-300 bottom-0 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-s-none rounded-e-full text-sm px-4"
              ></button>
              <button
                type="submit"
                className="text-white max-w-10 h-6 absolute bg-gray-50 border-s end-0 border-gray-300 bottom-2 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-s-none rounded-e-full text-sm px-4"
              >
                <svg
                  className="w-4 h-4 text-gray-500 relative end-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
