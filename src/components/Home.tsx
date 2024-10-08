import React from 'react';
import Link from 'next/link'; // Uso de Link do Next.js
import { Header } from '../components/Header'; // Importando o Header

const Home: React.FC = () => {
  return (
    <>

      {/* Seção Hero */}
      <section className="bg-blue-900 py-16 text-white text-center relative">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Conectando <span className="text-yellow-400">clientes</span> a profissionais
          </h1>
          <p className="text-lg mb-8">
            Tenha mais confiança e rapidez na sua reforma, reparo, pintura ou muito mais
          </p>
          <button className="bg-yellow-500 text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-600">
            SAIBA MAIS
          </button>
        </div>

        {/* Imagem do Profissional */}
        <div className="absolute right-10 bottom-0">
          <img
            src="./homeimg/home1.png"
            alt="Profissional"
            style={{ width: '210px', height: 'auto' }}
            className="object-cover"
          />
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Conheça os serviços que oferecemos a você!</h2>

        {/* Container da grade */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card de Serviço 1 */}
          <div className="border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-4">Serviço de Encanamento</h3>
            <p className="text-gray-600 mb-4">texto texto</p>
            <img src="./homeimg/1.png" alt="Icone de Encanamento" className="w-12 h-12 mx-auto mb-4" />
          </div>

          {/* Card de Serviço 2 */}
          <div className="border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-4">Serviços de Limpeza</h3>
            <p className="text-gray-600 mb-4">texto texto</p>
            <img src="./homeimg/2.png" alt="Icone de Limpeza" className="w-16 h-16 mx-auto mb-4" />
          </div>

          {/* Card de Serviço 3 */}
          <div className="border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-4">Serviço de Pintura</h3>
            <p className="text-gray-600 mb-4">texto texto</p>
            <img src="./homeimg/3.png" alt="Icone de Pintura" className="w-16 h-16 mx-auto mb-4" />
          </div>

          {/* Card de Serviço 4 */}
          <div className="border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-4">Serviço de Manutenção</h3>
            <p className="text-gray-600 mb-4">texto texto</p>
            <img src="./homeimg/4.png" alt="Icone de Manutenção" className="w-16 h-16 mx-auto mb-4" />
          </div>

          {/* Card de Serviço 5 */}
          <div className="border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-4">Serviço de Manutenção</h3>
            <p className="text-gray-600 mb-4">texto texto</p>
            <img src="./homeimg/4.png" alt="Icone de Manutenção" className="w-16 h-16 mx-auto mb-4" />
          </div>

          {/* Card de Serviço 6 */}
          <div className="border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-4">Serviço de Manutenção</h3>
            <p className="text-gray-600 mb-4">texto texto</p>
            <img src="./homeimg/4.png" alt="Icone de Manutenção" className="w-16 h-16 mx-auto mb-4" />
          </div>

          {/* Card de Serviço 7 */}
          <div className="border p-8 rounded-lg shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-4">Serviço de Manutenção</h3>
            <p className="text-gray-600 mb-4">texto texto</p>
            <img src="./homeimg/4.png" alt="Icone de Manutenção" className="w-16 h-16 mx-auto mb-4" />
          </div>

          {/* Card especial */}
          <div className="border p-8 rounded-lg bg-yellow-500 text-white shadow-md h-full">
            <h3 className="text-2xl font-semibold mb-4">Não encontrou o que procurava?</h3>
            <Link href="/services">
              <button className="bg-blue-600 py-2 px-6 rounded-lg hover:bg-blue-700">
                TODOS SERVIÇOS
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
