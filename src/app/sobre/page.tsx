import { MapPin, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Sobre() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            {/* Header Banner */}
            <section className="bg-slate-900 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Conheça a Cred 171</h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Somos uma Fintech focada em transformar a forma como os brasileiros acessam o crédito, com inovação e transparência.
                </p>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 max-w-5xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Nossa Missão</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            A Cred 171 nasceu da necessidade de desburocratizar o sistema financeiro tradicional. Acreditamos que o crédito deve ser um instrumento de alavancagem de sonhos e soluções, nunca uma dor de cabeça.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                                <span>Processo 100% digital e seguro</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                                <span>Análise de crédito por Inteligência Artificial</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700">
                                <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                                <span>Taxas justas e transparentes, sem surpresas</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 rounded-[2rem] p-8 relative mt-10 md:mt-0">
                        <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-emerald-500 absolute -top-8 left-8">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4 mt-6">Regulamentação</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Operamos como correspondente bancário regulamentado pelas diretrizes do Banco Central do Brasil. Garantimos total privacidade e segurança na manipulação de dados LGPD.
                        </p>
                    </div>
                </div>

                {/* Location Section */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Nossa Sede</h2>
                    <div className="bg-slate-800 rounded-[2rem] p-2 shadow-2xl overflow-hidden relative group">
                        <div className="h-[400px] w-full bg-slate-900 rounded-bl-[1.5rem] rounded-br-[1.5rem] relative overflow-hidden flex items-center justify-center group-hover:opacity-90 transition-opacity">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Sede Cred 171"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

                            <div className="z-10 absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-between mx-auto max-w-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Edifício Cred 171</h3>
                                        <p className="text-emerald-100 text-sm mt-1">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
