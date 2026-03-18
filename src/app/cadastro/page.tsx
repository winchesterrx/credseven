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
            <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
                <LoadingAnimation onComplete={() => setStep("success")} />
            </div>
        );
    }

    if (step === "success") {
        return (
            <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4">
                <div className="bg-white p-8 rounded-[2rem] shadow-xl max-w-md w-full text-center border border-emerald-100">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="text-emerald-500" size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">Ofertas Encontradas!</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Parabéns, {formData.nome.split(' ')[0] || "amigo(a)"}! Encontramos excelentes condições pré-aprovadas para o seu perfil.
                    </p>
                    <a
                        href={`https://wa.me/5517997799982?text=${encodeURIComponent(`Olá, me chamo ${formData.nome} e gostaria de ver minhas ofertas de crédito com a Cred 171!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group text-lg"
                    >
                        Finalizar no WhatsApp
                        <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={18} />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 py-12">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Falta pouco!</h1>
                <p className="text-slate-600">Preencha seus dados para receber a simulação detalhada.</p>
            </div>

            <div className="glass rounded-[2rem] p-6 sm:p-8 w-full max-w-md relative border border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <User className="text-slate-400" size={18} />
                            </div>
                            <input
                                type="text"
                                required
                                value={formData.nome}
                                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                placeholder="Seu nome"
                                className="block w-full pl-11 pr-3 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-700 font-medium"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Phone className="text-slate-400" size={18} />
                            </div>
                            <input
                                type="tel"
                                required
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                placeholder="(17) 99779-9982"
                                className="block w-full pl-11 pr-3 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-700 font-medium"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="text-slate-400" size={18} />
                            </div>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="seu.email@exemplo.com"
                                className="block w-full pl-11 pr-3 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-700 font-medium"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-800 hover:bg-slate-900 text-emerald-500 font-bold py-4 px-6 rounded-xl shadow-xl shadow-slate-800/20 transition-all flex items-center justify-center gap-2 group text-lg mt-6"
                    >
                        Ver Ofertas Disponíveis
                        <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
}
