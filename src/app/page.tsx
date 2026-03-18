import Simulador from "@/components/Simulador";
import { ShieldCheck, Bolt, Wallet } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Abstract/Corporate Image mask */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Premium Finance Background"
            className="w-full h-full object-cover scale-105"
          />
          {/* Deep Dark Emerald/Slate Overlay */}
          <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-emerald-950/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 items-center">

            <div className="order-2 lg:order-1 lg:col-span-6 mt-16 lg:mt-0 text-center lg:text-left">

              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,1)]"></span>
                </span>
                <span className="text-emerald-300 font-semibold text-xs tracking-widest uppercase">Crédito Pré-Aprovado</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 text-white tracking-tighter drop-shadow-2xl">
                O acesso ao crédito <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 filter drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">redesenhado.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Esqueça a burocracia bancária. Oferecemos uma experiência financeira <strong className="text-white font-semibold">premium</strong>, rápida e transparente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-4 text-white bg-slate-900/40 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-500/30">
                    <Bolt className="text-emerald-400" size={24} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-sm sm:text-base tracking-wide leading-tight">Análise <br /><span className="text-emerald-400">em 3 min</span></span>
                </div>

                <div className="flex items-center gap-4 text-white bg-slate-900/40 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-500/30">
                    <Wallet className="text-emerald-400" size={24} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-sm sm:text-base tracking-wide leading-tight">Dinheiro <br /><span className="text-emerald-400">na hora</span></span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6 w-full relative z-10 flex justify-center lg:justify-end">
              <div className="w-full max-w-md relative">
                {/* Glow behind simulador */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/30 to-teal-500/10 rounded-3xl blur-2xl z-0 pointer-events-none"></div>
                <div className="relative z-10">
                  <Simulador />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-slate-50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-xs mb-2 block">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Por que escolher a Cred 171?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Acesso ao crédito simplificado com a inteligência de uma Fintech moderna.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 text-emerald-600 group-hover:scale-110 transition-transform">
                <Bolt size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Aprovação Rápida</h3>
              <p className="text-slate-600 leading-relaxed">Nossa análise utiliza inteligência artificial para aprovar seu crédito em tempo recorde.</p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 shadow-sm relative overflow-hidden group transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/5 rounded-bl-full z-0 transition-transform group-hover:scale-125"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 text-emerald-500 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Para Negativados</h3>
                <p className="text-slate-600 leading-relaxed">Acreditamos em segundas chances para todos. Oferecemos linhas especiais de aprovação.</p>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-50 relative z-10 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                <Wallet size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Taxas Reduzidas</h3>
              <p className="text-slate-600 leading-relaxed">Operando em formato digital toda a economia é repassada para você em forma de juros menores.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
