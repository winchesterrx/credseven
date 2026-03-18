"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingProps {
    onComplete: () => void;
}

const messages = [
    "Analisando perfil...",
    "Consultando parceiros...",
    "Verificando melhores taxas...",
    "Quase pronto!"
];

export default function LoadingAnimation({ onComplete }: LoadingProps) {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const totalDuration = 7000;
        const intervalDuration = totalDuration / messages.length;

        const interval = setInterval(() => {
            setMessageIndex((prev) => {
                if (prev < messages.length - 1) return prev + 1;
                return prev;
            });
        }, intervalDuration);

        const timeout = setTimeout(() => {
            onComplete();
        }, totalDuration);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onComplete]);

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-8"
            >
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-emerald-50 relative z-10">
                    <Loader2 className="animate-spin text-emerald-500" size={40} />
                </div>
            </motion.div>

            <div className="h-8 relative w-full max-w-xs mx-auto overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={messageIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg font-semibold text-slate-700 absolute"
                    >
                        {messages[messageIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>

            <div className="w-full max-w-xs mx-auto mt-6 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="h-full bg-emerald-500 rounded-full"
                />
            </div>
        </div>
    );
}
