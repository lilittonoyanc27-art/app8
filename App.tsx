/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Volume2, 
  Lightbulb,
  Hash,
  ArrowRight,
  Info
} from 'lucide-react';

/// --- Types ---

interface NumberItem {
  num: string;
  spanish: string;
  armenian: string;
}

interface NumberSection {
  title: string;
  description: string;
  items: NumberItem[];
}

// --- Data ---

const NUMBER_SECTIONS: NumberSection[] = [
  {
    title: "1. Հիմնական թվերը (0-10)",
    description: "Սրանք այն հիմնական թվերն են, որոնց վրա կառուցվում է մնացած ամեն ինչ։",
    items: [
      { num: "0", spanish: "Cero", armenian: "Զրո" },
      { num: "1", spanish: "Uno", armenian: "Մեկ" },
      { num: "2", spanish: "Dos", armenian: "Երկու" },
      { num: "3", spanish: "Tres", armenian: "Երեք" },
      { num: "4", spanish: "Cuatro", armenian: "Չորս" },
      { num: "5", spanish: "Cinco", armenian: "Հինգ" },
      { num: "6", spanish: "Seis", armenian: "Վեց" },
      { num: "7", spanish: "Siete", armenian: "Յոթ" },
      { num: "8", spanish: "Ocho", armenian: "Ութ" },
      { num: "9", spanish: "Nueve", armenian: "Ինը" },
      { num: "10", spanish: "Diez", armenian: "Տասը" },
    ]
  },
  {
    title: "2. Թվերը 11-ից 15",
    description: "Այս թվերն ունեն յուրահատուկ ձևեր, որոնք պետք է հիշել։",
    items: [
      { num: "11", spanish: "Once", armenian: "Տասնմեկ" },
      { num: "12", spanish: "Doce", armenian: "Տասներկու" },
      { num: "13", spanish: "Trece", armenian: "Տասներեք" },
      { num: "14", spanish: "Catorce", armenian: "Տասնչորս" },
      { num: "15", spanish: "Quince", armenian: "Տասնհինգ" },
    ]
  },
  {
    title: "3. Թվերը 16-ից 19",
    description: "Այս թվերը կազմվում են «տասը և ...» տրամաբանությամբ և գրվում են մեկ բառով։",
    items: [
      { num: "16", spanish: "Dieciséis", armenian: "Տասնվեց" },
      { num: "17", spanish: "Diecisiete", armenian: "Տասնյոթ" },
      { num: "18", spanish: "Dieciocho", armenian: "Տասնութ" },
      { num: "19", spanish: "Diecinueve", armenian: "Տասնինը" },
    ]
  },
  {
    title: "4. Տասնյակները (20-100)",
    description: "Իսպաներենում տասնյակները հիմնականում ունեն կանոնավոր վերջավորություններ։",
    items: [
      { num: "20", spanish: "Veinte", armenian: "Քսան" },
      { num: "30", spanish: "Treinta", armenian: "Երեսուն" },
      { num: "40", spanish: "Cuarenta", armenian: "Քառասուն" },
      { num: "50", spanish: "Cincuenta", armenian: "Հիսուն" },
      { num: "60", spanish: "Sesenta", armenian: "Վաթսուն" },
      { num: "70", spanish: "Setenta", armenian: "Յոթանասուն" },
      { num: "80", spanish: "Ochenta", armenian: "Ութսուն" },
      { num: "90", spanish: "Noventa", armenian: "Իննսուն" },
      { num: "100", spanish: "Cien", armenian: "Հարյուր" },
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#38bdf8] bg-gradient-to-b from-[#7dd3fc] to-[#38bdf8] flex flex-col font-sans text-white overflow-y-auto custom-scrollbar">
      {/* Header */}
      <header className="p-8 pb-4 max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 border border-white/30"
        >
          <Hash className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-widest">Իսպաներենի Թվերը</span>
        </motion.div>
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl font-black mb-4 drop-shadow-lg"
        >
          Սովորենք Թվերը
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          className="text-lg max-w-xl mx-auto font-medium"
        >
          Բացահայտեք իսպաներենի թվերի աշխարհը՝ հիմնական միավորներից մինչև տասնյակներ։
        </motion.p>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8 space-y-12">
        {NUMBER_SECTIONS.map((section, sIdx) => (
          <motion.section 
            key={sIdx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Section Header */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Hash className="w-24 h-24" />
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="bg-white p-4 rounded-2xl text-[#1e40af] shadow-xl shrink-0">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-black mb-3 tracking-tight">{section.title}</h2>
                  <div className="h-1 w-12 bg-white/30 mb-4 rounded-full" />
                  <p className="text-white/90 leading-relaxed font-medium text-lg">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.items.map((item, iIdx) => (
                <motion.div
                  key={iIdx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg border-b-4 border-gray-200 group cursor-pointer"
                >
                  <div className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-tighter">Թիվ</div>
                  <div className="text-4xl font-black text-[#1e40af] mb-1 group-hover:scale-110 transition-transform">
                    {item.num}
                  </div>
                  <div className="text-xs font-bold text-gray-400 mb-3 uppercase">{item.armenian}</div>
                  <div className="h-px w-8 bg-gray-100 mb-3" />
                  <div className="text-xl font-bold text-gray-800 text-center">
                    {item.spanish}
                  </div>
                  <button className="mt-4 p-2 bg-gray-50 rounded-full text-gray-400 hover:text-[#1e40af] hover:bg-[#1e40af]/10 transition-all">
                    <Volume2 className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Pro Tip / Conclusion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#1e40af] rounded-[40px] p-10 text-center shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
          <Info className="w-12 h-12 mx-auto mb-6 text-white/50" />
          <h3 className="text-3xl font-bold mb-4">Հիշեք կանոնները</h3>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Իսպաներենում թվերը սովորելը հեշտ է, երբ հասկանում եք տրամաբանությունը։ 
            Շարունակեք կրկնել և շուտով կկարողանաք հաշվել մինչև հազար։
          </p>
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-8 inline-flex items-center gap-2 font-bold text-white/60 uppercase tracking-widest text-sm"
          >
            Սկսեք կիրառել հիմա <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center text-white/50 text-sm font-medium">
        © 2024 Իսպաներենի Ուսուցում • Թվերի Դաս
      </footer>
    </div>
  );
}
