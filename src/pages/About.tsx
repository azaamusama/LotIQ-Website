/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Zap, Target, History, Settings, Eye, Globe } from "lucide-react";

interface AboutPageProps {
  onEnroll: () => void;
}

export const AboutPage = ({ onEnroll }: AboutPageProps) => {
  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8"
            >
              Building the operating system for <span className="text-primary inline-block">physical property</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-6 font-medium leading-relaxed"
            >
              LotIQ brings real-time visibility and automated control to commercial properties — turning them into intelligent, self-managing systems.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 leading-relaxed"
            >
              No manual oversight. No guesswork. Just continuous awareness and action across your property.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. WHAT LOTIQ IS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">What is LotIQ</h2>
            <div className="space-y-6">
              <p className="text-2xl text-slate-900 font-semibold leading-relaxed">
                LotIQ is an AI-powered property intelligence platform that gives owners and managers real-time visibility and automated control over their properties.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                We turn physical environments into intelligent systems — continuously monitored, instantly responsive, and capable of taking action without manual intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Our story</h2>
            <div className="space-y-8">
              <div className="prose prose-slate prose-lg max-w-none">
                <p className="text-xl text-slate-600 leading-relaxed">
                  LotIQ started with a simple observation.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed">
                  One of our co-founders owned a small strip mall and saw the same issues repeat every day — especially around parking. Unauthorized vehicles created constant friction, and the only reliable solution was hiring a full-time guard.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed">
                  It was expensive. It didn’t scale. And it still wasn’t consistent.
                </p>
                <div className="py-4">
                  <p className="text-2xl font-bold text-slate-900 italic">
                    So he asked a different question: what would this look like if it were automated?
                  </p>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed">
                  That question became LotIQ — a system designed to monitor, understand, and manage physical properties in real time, without relying on people to chase problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-slate-100" />
      </div>

      {/* 4. WHAT WE DO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">What we do</h2>
            <div className="space-y-10">
              <p className="text-2xl text-slate-900 font-semibold leading-relaxed">
                LotIQ replaces reactive property management with always-on intelligence.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Parking violations", icon: Target },
                  { title: "Liability events", icon: ShieldAlert },
                  { title: "Service activity", icon: History },
                  { title: "On-site risks", icon: AlertTriangle }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="text-primary w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-900">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 space-y-4">
                <p className="text-xl text-slate-600 leading-relaxed">
                  Every action is backed by clear, time-stamped evidence.
                </p>
                <div className="space-y-2">
                  {["No chasing vendors.", "No relying on complaints.", "No guessing what happened."].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-900 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-12 lg:mb-0">How it works</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                At the core of LotIQ is proprietary computer vision that understands behavior, not just activity.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                By linking vehicles, people, and movement across a property, LotIQ identifies what’s actually happening — and triggers the right action automatically, from alerts to enforcement.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-slate-900 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0088FF20,transparent)] opacity-50" />
                 <Eye className="w-32 h-32 text-primary opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                 <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY IT MATTERS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Why it matters</h2>
            <div className="space-y-10">
              <p className="text-xl text-slate-600 leading-relaxed">
                Most properties are still managed the same way they were decades ago — manual, reactive, and fragmented.
              </p>
              <div className="space-y-4">
                <p className="text-2xl text-slate-900 font-bold mb-6">LotIQ brings structure and accountability to the physical world:</p>
                <ul className="space-y-6">
                  {[
                    "Fewer violations and disputes",
                    "Lower liability and fraud",
                    "Verified service delivery",
                    "Better tenant experience"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-xl text-slate-600">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xl text-slate-900 font-bold pt-4">
                All with significantly less operational effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR VISION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Our vision</h2>
            <div className="space-y-10">
              <p className="text-4xl lg:text-5xl font-bold leading-tight">
                We believe physical properties should operate like modern software — intelligent, responsive, and self-managing.
              </p>
              <p className="text-xl text-slate-400 leading-relaxed">
                LotIQ is building that operating system for the real world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLOSING CTA */}
      <section className="py-24 lg:py-40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight">The future of property management is autonomous</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Join the next generation of property operators moving from reactive management to continuous intelligence.
          </p>
          <button 
            onClick={onEnroll}
            className="bg-primary text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 mx-auto group"
          >
            Enroll your property
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

const ShieldAlert = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
);

const AlertTriangle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);
