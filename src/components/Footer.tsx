import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-AzulForte">
            <div className="w-screen">
                <div className="min-h-20 w-screen bg-[url('/plano_de_fundo_azul_escuro.png')]"></div>
                <div className="flex mx-auto max-w-screen-xl">
                    <div className="w-2/3 min-h-full">
                        {/* cards */}
                        <div className="grid grid-cols-2 h-5/6">
                            <div className="flex flex-col h-full justify-evenly">
                                <div className="max-w-72">
                                    <Image src="/icones/logo_azul_escuro_e_nome.svg" alt="Logo Mão na Roda" width={200} height={50} />
                                </div>
                                <div className="max-w-72 text-gray-200">
                                    <p>Conectando você aos melhores profissionais para serviços rápidos e confiáveis. Seu lar em boas mãos!</p>
                                </div>
                                <div className="max-w-56 flex justify-between">
                                    <a href="#" aria-label="Facebook">
                                        <Image src="/icones/facebook_branco_circulo.svg" alt="Facebook" width={24} height={24} />
                                    </a>
                                    {/* Outros ícones */}
                                </div>
                            </div>
                            <div className="col-start-2 flex flex-col text-gray-200 h-full justify-evenly">
                                <div className="w-60 flex flex-row justify-start items-center">
                                    <Image src="/icones/icone_mail.svg" width={24} height={24} alt="Ícone de email" />
                                    <p className="ps-2">suporte@maonaroda.com</p>
                                </div>
                                <div className="w-60 flex flex-row justify-start items-center">
                                    <Image src="/icones/icone_localizacao.svg" width={24} height={24} alt="Ícone de localização" />
                                    <p className="ps-2">Pelotas, RS - Sede</p>
                                </div>
                                <div className="w-60 flex flex-row items-center">
                                    <Image src="/icones/icone_whats.svg" width={24} height={24} alt="WhatsApp" />
                                    <div className="flex flex-col text-center">
                                        <p>WhatsApp</p>
                                        <p className="ps-2">(53) 99643-0964</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* copyright */}
                        <div className="flex items-center h-1/6 text-gray-200 border-t border-t-AzulHr">
                            <p>Copyright © 2024. a senac_rs_project. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="w-1/3 h-full">
                        <Image src="/encanador_footer.png" className="max-h-96" alt="Encanador" width={300} height={400} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
