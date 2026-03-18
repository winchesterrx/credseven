"use client";

import { useState } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";
import { CheckCircle2, User, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cadastro() {
    const [step, setStep] = useState<"form" | "loading" | "success">("form");
    const [formData, setFormData] = useState({ nome: "", whatsapp: "", email: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStep("loading");

        // Mock API call to save lead
        fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).catch(console.error);
    };

    if (step === "loading") {
        return (
            <div className="relative flex-1 flex flex-col items-center justify-center min-h-screen bg-slate-950 pt-32 pb-8">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/20 blur-[100px] rounded-full"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <LoadingAnimation onComplete={() => setStep("success")} />
                    <p className="mt-6 text-emerald-400 font-medium animate-pulse">Analisando seu perfil...</p>
                </div>
            </div>
        );
    }

    if (step === "success") {
        return (
            <div className="relative flex-1 flex flex-col items-center justify-center min-h-screen bg-slate-950 px-4 pt-40 pb-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/20 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 bg-slate-900/60 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl max-w-md w-full text-center border border-white/10">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30 shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                        <CheckCircle2 className="text-emerald-400" size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Ofertas Encontradas!</h2>
                    <p className="text-slate-300 mb-10 leading-relaxed text-lg">
                        Parabéns, <strong className="text-white">{formData.nome.split(' ')[0] || "amigo(a)"}</strong>! Encontramos excelentes condições pré-aprovadas para o seu perfil.
                    </p>
                    <a
                        href={`https://wa.me/5517997799982?text=${encodeURIComponent(`Olá, me chamo ${formData.nome} e gostaria de ver minhas ofertas de crédito com a Cred 171!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-black py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] transition-all flex items-center justify-center gap-3 group text-lg"
                    >
                        Finalizar no WhatsApp
                        <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={20} strokeWidth={3} />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex-1 flex flex-col items-center justify-start min-h-screen bg-slate-950 px-4 pt-44 pb-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 text-center mb-10 max-w-lg">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">Falta <span className="text-emerald-400">pouco!</span></h1>
                <p className="text-slate-300 text-lg">Preencha seus dados com segurança para receber a simulação detalhada.</p>
            </div>

            <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl rounded-[2rem] p-6 sm:p-10 w-full max-w-md border border-white/10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">Nome Completo</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <User className="text-emerald-500/70" size={20} />
                            </div>
                            <input
                                type="text"
                                required
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                placeholder="Seu nome"
                                className="block w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-slate-950/50 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 text-white font-medium placeholder-slate-500 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">WhatsApp</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Phone className="text-emerald-500/70" size={20} />
                            </div>
                            <input
                                type="tel"
                                required
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                placeholder="(17) 99779-9982"
                                className="block w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-slate-950/50 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 text-white font-medium placeholder-slate-500 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">E-mail</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="text-emerald-500/70" size={20} />
                            </div>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="seu.email@exemplo.com"
                                className="block w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-slate-950/50 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 text-white font-medium placeholder-slate-500 transition-all"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 font-black py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all flex items-center justify-center gap-2 group text-lg mt-8"
                    >
                        Ver Ofertas Disponíveis
                        <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={20} strokeWidth={3} />
                    </button>
                </form>
            </div>
        </div>
    );
}
