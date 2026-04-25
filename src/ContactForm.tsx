/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Home, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Wrench, 
  Clock2,
  AlertCircle
} from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

export const ContactForm = ({ onClose }: ContactFormProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm shadow-[0_0_100px_rgba(0,0,0,0.2)]"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white w-full max-w-4xl rounded-[32px] shadow-2xl overflow-hidden relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors z-30"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Info Panel (Desktop Only) */}
          <div className="lg:w-[40%] bg-slate-50 p-10 lg:p-12 border-r border-slate-100 hidden lg:flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Get started with LotIQ</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Join top property managers across Massachusetts using AI-driven property intelligence.
              </p>
              
              <div className="bg-blue-100/50 border border-blue-200/50 rounded-2xl p-5 mb-10 flex items-start gap-4">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-xs text-blue-900 font-bold leading-relaxed uppercase tracking-wide">
                  Massachusetts Operations Only
                </p>
              </div>

              <div className="space-y-6">
                <TrustItem icon={ShieldCheck} text="No commitment required" isVertical />
                <TrustItem icon={Wrench} text="Setup handled by LotIQ" isVertical />
                <TrustItem icon={Clock2} text="No hardware management" isVertical />
              </div>
            </div>

            <div className="relative z-10 pt-12">
              <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">© 2026 LotIQ. All rights reserved.</p>
            </div>
          </div>

          {/* Form Panel */}
          <div className="flex-1 p-8 sm:p-10 lg:p-14 overflow-y-auto max-h-[90vh]">
            {/* Mobile Header Elements */}
            <div className="lg:hidden mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Get started</h2>
              <p className="text-slate-500 text-sm">Tell us about your properties.</p>
              
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mt-4 flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-primary" />
                <p className="text-[11px] text-blue-900 font-bold uppercase tracking-wider">MA only</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <InputGroup label="Full Name" placeholder="John Smith" icon={User} />
                <InputGroup label="Work Email" type="email" placeholder="john@company.com" icon={Mail} />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <InputGroup label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" icon={Phone} />
                <InputGroup label="Company Name" placeholder="Company Name" icon={Building2} />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Number of Properties</label>
                  <div className="relative">
                    <select className="appearance-none w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium">
                      <option>1 property</option>
                      <option>2–5 properties</option>
                      <option>6–20 properties</option>
                      <option>20+ properties</option>
                    </select>
                    <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Property Type</label>
                  <div className="relative">
                    <select className="appearance-none w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium">
                      <option>Retail / Strip Mall</option>
                      <option>Commercial Building</option>
                      <option>Mixed-use</option>
                      <option>Other</option>
                    </select>
                    <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Message (Optional)</label>
                <div className="relative">
                  <textarea 
                    placeholder="Tell us about your requirements"
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-300 resize-none font-medium"
                  />
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-300" />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:bg-blue-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                >
                  Send
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-5 font-bold uppercase tracking-wider">
                  Fast response within 24 hours
                </p>
              </div>
            </form>

            {/* Mobile Trust Line */}
            <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-2 lg:hidden">
              <TrustItem icon={ShieldCheck} text="No commitment" />
              <TrustItem icon={Wrench} text="Full setup" />
              <TrustItem icon={Clock2} text="No hardware" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const InputGroup = ({ label, placeholder, type = "text", icon: Icon }: { label: string, placeholder: string, type?: string, icon: any }) => (
  <div className="space-y-2">
    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">{label}</label>
    <div className="relative group">
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-300 font-medium"
      />
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
    </div>
  </div>
);

const TrustItem = ({ icon: Icon, text, isVertical }: { icon: any, text: string, isVertical?: boolean }) => (
  <div className={`flex items-center gap-4 ${isVertical ? 'flex-row' : 'flex-col text-center'}`}>
    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <span className={`text-[10px] sm:text-[11px] font-bold text-slate-600 uppercase tracking-tight ${isVertical ? '' : 'leading-tight'}`}>
      {text}
    </span>
  </div>
);
