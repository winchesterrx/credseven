import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-4">
                        <Link href="/" className="flex items-center mb-6">
                            <span className="text-3xl font-black text-white tracking-tight">CRED&nbsp;</span>
                            <span className="text-3xl font-black text-emerald-500 tracking-tighter">171</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 max-w-xs">
                            Revolucionando o acesso ao crédito com tecnologia, menos burocracia e muita empatia.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-colors"><Facebook size={18} /></a>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:col-span-2"></div>

                    {/* Links */}
                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contato</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-emerald-500 flex-shrink-0" size={18} />
                                <span>0800 123 4567</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Empresa</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/sobre" className="hover:text-emerald-500 transition-colors">Sobre Nós</Link></li>
                            <li><Link href="/cadastro" className="hover:text-emerald-500 transition-colors">Simulador de Crédito</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Termos de Uso</Link></li>
                            <li><Link href="#" className="hover:text-emerald-500 transition-colors">Privacidade</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-sm flex flex-col items-center">
                    <p className="mb-4 font-medium">&copy; {new Date().getFullYear()} Cred 171 Instituição Financeira S.A. CNPJ: 00.000.000/0001-00</p>
                </div>
            </div>
        </footer>
    );
}
