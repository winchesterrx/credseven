"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 pointer-events-none">
            <header className="pointer-events-auto w-full max-w-6xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-3xl transition-all duration-300">
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-90 transition-opacity gap-3">
                            <div className="bg-white/10 p-1.5 rounded-xl border border-white/10 shadow-inner">
                                <img src="/logo.png" alt="Cred 171 Logo" className="h-8 w-auto object-contain" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-black text-white tracking-tight drop-shadow-md">CRED</span>
                                <span className="text-xs font-black text-emerald-400 tracking-widest drop-shadow-md">171</span>
                            </div>
                        </Link>

                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Home</Link>
                            <Link href="/sobre" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Sobre Nós</Link>
                        </nav>

                        <div className="hidden md:flex">
                            <Link href="/cadastro" className="px-6 py-2.5 rounded-full font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] hover:-translate-y-0.5 flex items-center gap-2">
                                Fazer Simulação
                            </Link>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button className="text-white hover:text-emerald-400 focus:outline-none p-2 transition-colors" aria-label="Menu">
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
