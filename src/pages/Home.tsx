/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Shield, 
  Eye, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Car, 
  Snowflake, 
  LayoutDashboard,
  Plus
} from "lucide-react";

interface HomePageProps {
  onEnroll: () => void;
}

const DashboardPreview = () => (
  <div className="relative w-full max-w-4xl mx-auto mt-12 lg:mt-0">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
      <div className="flex items-center gap-4 px-4 py-3 bg-slate-50 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-300" />
          <div className="w-3 h-3 rounded-full bg-slate-300" />
          <div className="w-3 h-3 rounded-full bg-slate-300" />
        </div>
        <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
      </div>
      <div className="p-4 sm:p-8 flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Active Monitors</p>
              <p className="text-2xl font-bold text-slate-900">42</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Alerts (24h)</p>
              <p className="text-2xl font-bold text-emerald-600">03</p>
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl aspect-[16/9] relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1200" 
              alt="Parking monitoring" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/40" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-2 py-1 rounded bg-red-500/90 text-white text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              VIOLATION DETECTED: ZONE B
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur rounded flex items-center justify-center">
                <Plus className="text-white w-4 h-4" />
              </div>
            </div>
            {/* AI Bounding Boxes */}
            <div className="absolute top-1/4 left-1/3 w-32 h-20 border-2 border-primary/60 rounded">
              <div className="absolute -top-6 left-0 bg-primary/90 text-white text-[8px] px-1.5 py-0.5 rounded">VEHICLE_123</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-64 space-y-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live Activity</p>
          {[
            { t: '12:45', m: 'Vehicle ABC-543 Entry', c: 'slate' },
            { t: '12:42', m: 'Snow Plough Detected', s: true, c: 'blue' },
            { t: '12:30', m: 'Illegal Park: Zone B', v: true, c: 'red' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-[9px] font-mono text-slate-400 mt-0.5">{item.t}</span>
              <p className={`text-[11px] font-medium ${item.v ? 'text-red-600' : item.s ? 'text-blue-600' : 'text-slate-600'}`}>{item.m}</p>
            </div>
          ))}
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-emerald-600 w-4 h-4" />
              <p className="text-[10px] font-bold text-emerald-900">Automation Active</p>
            </div>
            <p className="text-[10px] text-emerald-700 leading-tight">Enforcing tow policy for unauthorized overnight stays.</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative Elements */}
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
    >
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <Car className="text-primary w-5 h-5" />
      </div>
      <div>
        <p className="text-xs font-bold text-slate-900">Plate Identified</p>
        <p className="text-[10px] text-slate-500">KLA-9021 • 08:34 AM</p>
      </div>
    </motion.div>
  </div>
);

const UseCaseCard = ({ title, description, icon: Icon, image, reverse = false }) => (
  <div className={`flex flex-col lg:flex-row gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className="flex-1 space-y-6">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
        <Icon className="text-primary w-6 h-6" />
      </div>
      <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
      <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
    <div className="flex-1 w-full">
      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </div>
);

export const HomePage = ({ onEnroll }: HomePageProps) => {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_40%,#0088FF0a,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
                Turn Your Property Into a <span className="text-primary inline-block">Self-Managing</span> Asset
              </h1>
              <p className="text-xl text-slate-600 mb-4 font-medium">
                LotIQ provides 24/7 AI-powered monitoring that detects parking violations, safety incidents, and service activity — and automatically takes action.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
                No manual oversight. No guesswork. Just real-time visibility and automated enforcement across your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={onEnroll}
                  className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                >
                  Enroll your property
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Use Cases */}
      <section id="use-cases" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Use Cases</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Intelligence that works across every part of your property
            </p>
          </div>
          
          <div className="space-y-20">
            <UseCaseCard 
              title="Parking Enforcement"
              description="Automatically detect unauthorized vehicles and enforce parking rules without manual intervention. Tow requests are triggered instantly with full evidence."
              icon={Car}
              image="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=1200"
            />
            <UseCaseCard 
              title="Risk & Liability"
              description="Detect slip-and-fall incidents and hazardous conditions in real time. Every event is backed by time-stamped video to reduce disputes and fraud."
              icon={Shield}
              image="https://images.pexels.com/photos/35861604/pexels-photo-35861604.jpeg?_gl=1*1ut9fdu*_ga*MjgwNTU0ODU2LjE3NzcxMTI2NjU.*_ga_8JE65Q40S6*czE3NzcxMTI2NjQkbzEkZzEkdDE3NzcxMTM0NDMkajI4JGwwJGgw"
              reverse
            />
            <UseCaseCard 
              title="Service Monitoring"
              description="Verify snow ploughing, salting, and vendor activity as it happens. No more relying on invoices without proof."
              icon={Snowflake}
              image="https://images.pexels.com/photos/35030432/pexels-photo-35030432.jpeg?_gl=1*11hxaiw*_ga*MjgwNTU0ODU2LjE3NzcxMTI2NjU.*_ga_8JE65Q40S6*czE3NzcxMTI2NjQkbzEkZzEkdDE3NzcxMTM2MDEkajIzJGwwJGgw"
            />
            <UseCaseCard 
              title="Property Operations"
              description="Get a unified view of everything happening on-site — from occupancy trends to safety alerts — all in one dashboard."
              icon={LayoutDashboard}
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
              reverse
            />
          </div>
        </div>
      </section>

      {/* Section 4: Value Proposition */}
      <section id="features" className="py-16 lg:py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 max-w-3xl leading-tight">
            LotIQ doesn’t just monitor — <span className="text-primary">it understands and acts.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Behavior-Based Intelligence',
                desc: 'Our AI understands context — distinguishing between normal activity and violations with high accuracy.',
                icon: Eye
              },
              {
                title: 'Automated Enforcement',
                desc: 'Trigger towing, alerts, and workflows automatically without human intervention.',
                icon: Zap
              },
              {
                title: 'Multi-Signal Accuracy',
                desc: 'We combine visual data with contextual signals to ensure reliable, evidence-backed decisions.',
                icon: Activity
              }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <feature.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section id="how-it-works" className="pt-16 pb-8 lg:pt-24 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">How It Works</h2>
            <p className="text-xl text-slate-500">From setup to automation in four simple steps</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Property Setup', desc: 'Tell us about your property. We handle hardware, installation, and configuration.' },
              { step: '02', title: 'Installation', desc: 'Cameras are installed and calibrated to cover key areas and enforcement zones.' },
              { step: '03', title: 'Live Intelligence', desc: 'LotIQ continuously monitors your property and detects events in real time.' },
              { step: '04', title: 'Automated Actions', desc: 'Violations trigger enforcement. Incidents generate alerts. Everything is logged with evidence.' }
            ].map((step, i) => (
              <div key={i} className="relative group p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                <div className="text-4xl font-black text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">{step.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Pricing */}
      <section id="pricing" className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-[-12deg] translate-x-1/4 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 block">Pricing Plans</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              Pricing plans
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 max-w-2xl mx-auto mb-10"
            >
              Simple packages based on property size, with a clear path from smaller pilots to larger rollouts.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-3">
              {['No hardware costs', 'One-time install fee', 'Scales by camera count'].map((pill, i) => (
                <div key={i} className="px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                  {pill}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Small Property",
                subtitle: "2–3 Cameras",
                price: "$299–$339*",
                install: "$200–$250",
                desc: "Ideal for smaller lots and pilot deployments."
              },
              {
                title: "Medium Property",
                subtitle: "4–6 Cameras",
                price: "$379–$449*",
                install: "$300–$400",
                desc: "Best for growing commercial properties with higher activity."
              },
              {
                title: "Large Property",
                subtitle: "7–8 Cameras",
                price: "$474–$499*",
                install: "$450–$550",
                desc: "Designed for high-traffic properties and multi-zone coverage."
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 lg:p-10 transition-all hover:translate-y-[-4px] overflow-hidden"
              >
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.title}</h3>
                  <p className="text-sm font-medium text-slate-400">{plan.subtitle}</p>
                </div>

                <div className="bg-blue-50/50 rounded-3xl p-8 mb-8 border border-blue-100/20">
                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Monthly</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Install</p>
                    <span className="text-xl font-bold text-slate-900">{plan.install}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {plan.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Everything handled for you</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    'Hardware included',
                    'Installation handled',
                    'Monitoring managed',
                    'No on-site staff required'
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 font-bold text-sm tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center md:text-left">
                <button 
                  onClick={onEnroll}
                  className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/30 hover:bg-blue-600 transition-all flex items-center justify-center gap-3 group w-full sm:w-auto"
                >
                  Enroll your property
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-4 text-xs font-medium text-slate-400">
                  * Monthly fees are plus sales tax where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

const Activity = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
