"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Simulador() {
    const router = useRouter();
    const [valor, setValor] = useState<number>(5000);
    const [parcelas, setParcelas] = useState<number>(24);

    const formatCurrency = (val: number) => {
        return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const calculateInstallment = () => {
        // Simple mock calculation: Interest rate of 2% per month
        const interestRate = 0.02;
        const finalValor = valor * Math.pow(1 + interestRate, parcelas);
        return formatCurrency(finalValor / parcelas);
    };

    const handleSimulate = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/cadastro?valor=${valor}&parcelas=${parcelas}`);
    };

    return (
        <div className="glass rounded-[2rem] p-6 sm:p-8 relative overflow-hidden w-full max-w-[440px] mx-auto">
            <div className="absolute -top-1 -right-1 bg-slate-800 text-emerald-500 text-[10px] font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                Simulação Grátis
            </div>

            <div className="mb-8 mt-2 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Faça sua simulação</h3>
                <p className="text-slate-500 text-sm">Descubra em instantes o seu limite</p>
            </div>

            <form onSubmit={handleSimulate} className="space-y-6">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                        <label className="text-sm font-semibold text-slate-600">De quanto precisa?</label>
                        <span className="text-2xl font-bold text-slate-800 tracking-tight">{formatCurrency(valor)}</span>
                    </div>
                    <input
                        type="range"
                        min="500"
                        max="50000"
                        step="500"
                        value={valor}
                        onChange={(e) => setValor(Number(e.target.value))}
                        className="w-full accent-emerald-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <style jsx>{`
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: 24px;
              width: 24px;
              border-radius: 50%;
              background: #10B981;
              cursor: pointer;
              box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
              border: 2px solid white;
            }
          `}</style>
                    <div className="flex justify-between text-xs font-medium text-slate-400 mt-3 px-1">
                        <span>R$ 500</span>
                        <span>R$ 50.000</span>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Em quantas vezes quer pagar?</label>
                    <div className="relative group">
                        <select
                            value={parcelas}
                            onChange={(e) => setParcelas(Number(e.target.value))}
                            className="block w-full appearance-none bg-white border border-gray-200 text-slate-700 py-3.5 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer shadow-sm group-hover:border-gray-300 font-medium"
                        >
                            {[12, 24, 36, 48].map((opt) => (
                                <option key={opt} value={opt}>{opt}x Parcelas fixas</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>

                <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 flex justify-between items-center">
                    <span className="text-sm text-slate-600 font-medium">Parcelas estimadas de:</span>
                    <span className="text-lg font-bold text-emerald-600">{calculateInstallment()}</span>
                </div>

                <button
                    type="submit"
                    className="w-full bg-slate-800 hover:bg-slate-900 text-emerald-500 font-bold py-4 px-6 rounded-xl shadow-xl shadow-slate-800/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group text-lg mt-4 border border-slate-700"
                >
                    Consultar Crédito
                    <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={18} />
                </button>
            </form>
        </div>
    );
}
