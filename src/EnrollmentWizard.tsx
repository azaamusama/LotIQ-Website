/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Hotel, 
  Building2, 
  Layout, 
  Car, 
  ShieldAlert, 
  Snowflake, 
  Activity,
  CreditCard,
  Calendar,
  Lock,
  ArrowRight,
  Info
} from "lucide-react";
import { useState } from "react";

interface EnrollmentWizardProps {
  onClose: () => void;
}

export const EnrollmentWizard = ({ onClose }: EnrollmentWizardProps) => {
  const [step, setStep] = useState(1);
  const totalSteps = 9;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const progress = (step / totalSteps) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header with Progress */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-20">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Step {step} of {totalSteps} — {getStepName(step)}
            </span>
            <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep(step, nextStep)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <button 
            onClick={prevStep}
            disabled={step === 1 || step === totalSteps}
            className={`flex items-center gap-2 text-sm font-bold transition-all ${step === 1 || step === totalSteps ? 'opacity-0 pointer-events-none' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          
          <div className="flex gap-3">
             {step === 5 && (
               <button onClick={nextStep} className="text-sm font-bold text-slate-500 hover:text-slate-900 px-4">Skip for now</button>
             )}
             {step < totalSteps && (
               <button 
                 onClick={nextStep}
                 className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all flex items-center gap-2"
               >
                 {step === 8 ? 'Schedule installation' : 'Continue'}
                 <ChevronRight className="w-4 h-4" />
               </button>
             )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const getStepName = (step: number) => {
  switch (step) {
    case 1: return "Create Account";
    case 2: return "Property Basics";
    case 3: return "Services & Coverage";
    case 4: return "Property Mapping";
    case 5: return "Tow Partner";
    case 6: return "Pricing Estimate";
    case 7: return "Payment";
    case 8: return "Schedule Installation";
    case 9: return "Confirmation";
    default: return "";
  }
};

const renderStep = (step: number, onNext: () => void) => {
  switch (step) {
    case 1: return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Create your account</h2>
          <p className="text-slate-500">Get started with LotIQ in minutes.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <InputGroup label="Full Name" placeholder="Jane Doe" sublabel="We'll use this for your profile" />
          <InputGroup label="Company Name" placeholder="Acme Property Mgmt" />
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Role</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
              <option>Property Manager</option>
              <option>Landlord</option>
              <option>Operator</option>
            </select>
          </div>
          <InputGroup label="Work Email" placeholder="jane@company.com" type="email" />
          <InputGroup label="Phone Number" placeholder="+1 (555) 000-0000" />
          <InputGroup label="Password" type="password" placeholder="••••••••" />
          <InputGroup label="Confirm Password" type="password" placeholder="••••••••" />
        </div>
        <p className="text-[11px] text-slate-400 text-center">
          Already have an account? <span className="text-primary font-bold cursor-pointer">Log in</span>
        </p>
      </div>
    );
    case 2: return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Property basics</h2>
          <p className="text-slate-500">Tell us about your property.</p>
        </div>
        <div className="space-y-4">
          <InputGroup label="Property Name" placeholder="The Grand Plaza" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Property Type</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm">
                <option>Retail</option>
                <option>Commercial</option>
                <option>Mixed-use</option>
                <option>Residential</option>
              </select>
            </div>
            <InputGroup label="Country / Region" placeholder="United States" />
          </div>
          <InputGroup label="Address" placeholder="123 Monitoring Way, Tech City" />
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-3">
             <Info className="text-primary w-5 h-5 mt-0.5" />
             <p className="text-xs text-blue-900 leading-relaxed font-medium">This helps us configure monitoring and enforcement correctly. You can change this later.</p>
          </div>
        </div>
      </div>
    );
    case 3: return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What would you like to automate?</h2>
          <p className="text-slate-500">Select the services you need. You can adjust later.</p>
        </div>
        <div className="grid gap-4">
          <SelectionCard 
            title="Full Property Intelligence" 
            price="Starting at $149/month" 
            badge="Recommended"
            items={["Parking enforcement", "Slip & fall detection", "Service monitoring", "Property operations visibility"]}
            selected={true}
          />
          <SelectionCard 
            title="Parking Enforcement Only" 
            items={["Unauthorized vehicle detection", "Tow automation", "Rule-based enforcement"]}
          />
        </div>
        <div className="space-y-4 pt-4 border-t border-slate-100">
           <Toggle label="Indoor Monitoring" sublabel="Does your property have covered/indoor sections?" />
           <Toggle label="Trash Monitoring" sublabel="Detect bin overflows and improper disposal." />
        </div>
      </div>
    );
    case 4: return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Define your property</h2>
          <p className="text-slate-500">Help us understand your layout.</p>
        </div>
        <div className="aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800')] bg-cover" />
           <div className="z-10 text-center">
             <Layout className="w-12 h-12 text-slate-400 mx-auto mb-4" />
             <p className="text-sm font-bold text-slate-400">Map Drawing Interface</p>
             <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Select your property boundaries</p>
           </div>
        </div>
        <InputGroup label="Number of parking spots" placeholder="e.g. 150" type="number" />
        <p className="text-xs text-slate-400 text-center italic">Don’t worry — our team will validate and finalize this during setup.</p>
      </div>
    );
    case 5: return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Tow partner (optional)</h2>
          <p className="text-slate-500">Enable automated towing dispatch.</p>
        </div>
        <div className="space-y-4">
          <InputGroup label="Company Name" placeholder="City Wide Towing" />
          <InputGroup label="Contact Number" placeholder="+1 (555) 123-4567" />
          <label className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
            <span className="text-sm font-medium text-slate-700">I have an existing agreement with this partner</span>
          </label>
        </div>
        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
           <p className="text-xs text-emerald-900 leading-relaxed font-medium">Adding a tow partner allows LotIQ to automatically dispatch towing when violations occur.</p>
        </div>
      </div>
    );
    case 6: return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Your estimated plan</h2>
          <p className="text-slate-500">Transparent pricing. Finalized after property review.</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl w-fit mx-auto mb-8">
           <button className="px-4 py-2 text-xs font-bold text-slate-500">Monthly</button>
           <button className="px-4 py-2 text-xs font-bold bg-white text-primary rounded-lg shadow-sm">Quarterly</button>
           <button className="px-4 py-2 text-xs font-bold text-slate-500">Annual (Save 15%)</button>
        </div>
        <div className="p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl" />
           <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">MANAGED SERVICE</p>
           <div className="flex items-baseline gap-2 mb-6">
             <span className="text-5xl font-black">$149</span>
             <span className="text-slate-400 font-medium">/month</span>
           </div>
           <ul className="space-y-4 mb-8">
             {["Hardware included", "Professional installation", "24/7 AI-powered monitoring", "Automated enforcement workflows"].map((item, i) => (
               <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                 {item}
               </li>
             ))}
           </ul>
        </div>
        <p className="text-[10px] text-slate-400 text-center italic">Final pricing confirmed after on-site review. We handle everything.</p>
      </div>
    );
    case 7: return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Payment method</h2>
          <p className="text-slate-500">Secure your setup and schedule installation.</p>
        </div>
        <div className="grid gap-3">
           <div className="p-4 border-2 border-primary bg-primary/5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Building2 className="text-primary w-5 h-5" />
                <span className="text-sm font-bold">ACH / Bank Transfer</span>
              </div>
              <span className="text-[10px] font-bold text-primary uppercase">Recommended</span>
           </div>
           <div className="p-4 border border-slate-200 rounded-xl flex items-center gap-3 opacity-60">
              <CreditCard className="text-slate-400 w-5 h-5" />
              <span className="text-sm font-bold text-slate-900">Monthly Push to Account</span>
           </div>
        </div>
        <div className="space-y-4">
           <InputGroup label="Name on Account" placeholder="LotIQ Properties LLC" />
           <div className="grid sm:grid-cols-2 gap-4">
             <InputGroup label="Routing Number" placeholder="000000000" />
             <InputGroup label="Account Number" placeholder="000000000000" />
           </div>
           <InputGroup label="Invoice Email" placeholder="billing@lotiq.com" sublabel="Where should we send invoices?" />
        </div>
        <div className="flex items-center gap-2 justify-center py-2">
           <Lock className="w-3 h-3 text-slate-400" />
           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">Encrypted & Secure Transaction</span>
        </div>
      </div>
    );
    case 8: return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Schedule installation</h2>
          <p className="text-slate-500">Pick a convenient time for setup.</p>
        </div>
        <div className="grid gap-6">
           <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <p className="text-sm font-bold text-slate-900 mb-1">Pick a date</p>
              <div className="grid grid-cols-7 gap-2 mt-4">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className={`h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all cursor-pointer ${i === 3 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-slate-200 text-slate-600'}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
           </div>
           <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-bold text-slate-900 mb-4">Available Slots</p>
              <div className="grid grid-cols-2 gap-2">
                 {["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"].map((t, i) => (
                   <div key={i} className={`p-2.5 rounded-lg border text-center text-xs font-bold cursor-pointer transition-all ${i === 0 ? 'bg-primary border-primary text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-primary'}`}>
                     {t}
                   </div>
                 ))}
              </div>
           </div>
        </div>
        <p className="text-[10px] text-slate-400 text-center leading-relaxed">
          Installation typically takes 2–4 hours depending on property size.<br />
          Our professional team handles everything on-site.
        </p>
      </div>
    );
    case 9: return (
      <div className="space-y-8 py-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-emerald-600 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">You're all set</h2>
          <p className="text-slate-500">Your property setup is in progress.</p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-slate-200/60">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Summary</span>
             <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">PENDING REVIEW</span>
          </div>
          <div className="space-y-3">
             <SummaryRow label="Property" value="The Grand Plaza" />
             <SummaryRow label="Plan" value="Full Property Intelligence" />
             <SummaryRow label="Installation" value="May 24, 2026 • 09:00 AM" />
             <SummaryRow label="Pricing" value="$149.00 / month" />
          </div>
        </div>

        <div className="space-y-3">
           <p className="text-xs font-bold text-slate-900 uppercase tracking-widest text-center px-4">What happens next</p>
           <div className="grid gap-2">
              {[
                "We review your property details",
                "Confirm camera placement remotely",
                "Finalize pricing breakdown",
                "Complete installation on scheduled date"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                   <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400">{i+1}</div>
                   <p className="text-sm text-slate-600 font-medium">{text}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    );
  }
};

const InputGroup = ({ label, placeholder, type = "text", sublabel }: { label: string, placeholder: string, type?: string, sublabel?: string }) => (
  <div>
    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-300"
    />
    {sublabel && <p className="text-[10px] text-slate-400 mt-1.5">{sublabel}</p>}
  </div>
);

const SelectionCard = ({ title, price, badge, items, selected = false }: { title: string, price?: string, badge?: string, items: string[], selected?: boolean }) => (
  <div className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative ${selected ? 'bg-primary/5 border-primary' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
    {badge && <span className="absolute top-4 right-4 text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">{badge}</span>}
    <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
    {price && <p className="text-xs font-bold text-primary mb-4">{price}</p>}
    <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <CheckCircle2 className={`w-3.5 h-3.5 ${selected ? 'text-primary' : 'text-slate-300'}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Toggle = ({ label, sublabel }: { label: string, sublabel: string }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-bold text-slate-900">{label}</p>
      <p className="text-[11px] text-slate-500">{sublabel}</p>
    </div>
    <div className="w-10 h-6 bg-slate-200 rounded-full relative cursor-pointer hover:bg-slate-300 transition-all">
       <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all" />
    </div>
  </div>
);

const SummaryRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-xs text-slate-500 font-medium">{label}</span>
    <span className="text-xs font-bold text-slate-900">{value}</span>
  </div>
);
