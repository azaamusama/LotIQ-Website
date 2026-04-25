/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Shield, Scale, Info, Building, Truck, UserCheck, AlertCircle } from "lucide-react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
}

const Accordion = ({ title, children, icon: Icon }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group hover:text-primary transition-colors"
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Icon className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
          )}
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-slate-600 space-y-4 max-w-none px-12 text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HighlightBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 my-6">
    <div className="flex items-center gap-2 mb-3">
      <AlertCircle className="w-4 h-4 text-primary" />
      <span className="text-xs font-bold text-primary uppercase tracking-widest">{title}</span>
    </div>
    <div className="text-sm text-slate-600 leading-relaxed font-medium">
      {children}
    </div>
  </div>
);

export const TermsPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-32 overflow-hidden border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-none tracking-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
              Last updated: May 1, 2026
            </p>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                These Terms of Service govern your access to and use of the LotIQ platform and services. By using LotIQ, you agree to these terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK SUMMARY */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Key things to know</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { text: "LotIQ is a technology platform, not a security or enforcement provider", icon: Info },
                { text: "Property owners control rules and enforcement decisions", icon: Shield },
                { text: "AI detection may have limitations and is not guaranteed", icon: Zap },
                { text: "Towing and enforcement are handled by third parties", icon: Truck },
                { text: "Users are responsible for complying with local laws", icon: Scale }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUCTURE OVERVIEW */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How these terms are organized</h2>
            <p className="text-slate-500">We've broken our terms into clear parts based on how you interact with the platform.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-24">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Part A</span>
              <p className="text-sm font-bold text-slate-900">General terms (applies to all users)</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Part B</span>
              <p className="text-sm font-bold text-slate-900">Property owners and managers</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Part C</span>
              <p className="text-sm font-bold text-slate-900">Towing companies</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Part D</span>
              <p className="text-sm font-bold text-slate-900">Permitted vehicle users</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Part A — General Terms</h2>
            <Accordion title="About the platform" icon={Info}>
              <p>LotIQ provides an AI-powered property intelligence platform that uses cameras, computer vision, and cloud-based analytics to monitor and manage physical properties.</p>
              <p className="font-bold text-slate-900 pt-2">The platform may include:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Parking enforcement automation</li>
                <li>Incident detection</li>
                <li>Service verification</li>
                <li>Safety monitoring</li>
              </ul>
            </Accordion>

            <Accordion title="Important limitations" icon={AlertCircle}>
              <p>LotIQ is a supplemental tool only.</p>
              <HighlightBox title="Key Takeaway">
                LotIQ is not a security system, emergency response system, or a guarantee of safety.
              </HighlightBox>
              <p className="font-bold text-slate-900 pt-2">The platform:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>May miss events</li>
                <li>May generate incorrect detections</li>
                <li>Depends on hardware, environment, and connectivity</li>
              </ul>
            </Accordion>

            <Accordion title="Who makes decisions" icon={Scale}>
              <p>LotIQ does not make enforcement decisions. Property owners define rules, configure enforcement, and control towing policies. LotIQ only transmits and processes information on their behalf.</p>
            </Accordion>

            <Accordion title="Accounts and access" icon={Shield}>
              <p className="font-bold text-slate-900">You are responsible for:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Maintaining account security</li>
                <li>All activity under your account</li>
                <li>Providing accurate information</li>
              </ul>
            </Accordion>

            <Accordion title="Data and monitoring" icon={EyeIcon}>
              <p>LotIQ collects and processes video footage, event data, and property activity.</p>
              <p className="font-bold text-slate-900 pt-2">Customers are responsible for:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Posting required signage</li>
                <li>Complying with privacy laws</li>
              </ul>
            </Accordion>

            <Accordion title="System limitations" icon={Zap}>
              <p className="font-bold text-slate-900">The platform:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Does not guarantee detection</li>
                <li>Does not prevent incidents</li>
                <li>May experience downtime</li>
                <li>May not cover all areas</li>
              </ul>
            </Accordion>

            <Accordion title="Ownership and usage" icon={Scale}>
              <p className="font-bold text-slate-900">LotIQ owns:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>All platform technology</li>
                <li>AI models and outputs</li>
              </ul>
              <p className="font-bold text-slate-900 pt-2 text-primary">Users may:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Use outputs for internal purposes only</li>
              </ul>
              <p className="font-bold text-slate-900 pt-2 text-red-500">Users may not:</p>
              <ul className="space-y-2 list-disc pl-5 text-slate-500">
                <li>Reverse engineer</li>
                <li>Build competing systems</li>
                <li>Extract data at scale</li>
              </ul>
            </Accordion>

            <Accordion title="Limitation of liability" icon={Scale}>
              <p>LotIQ is not responsible for enforcement actions (including towing), errors in AI detection, actions of third parties, or business/financial losses. Maximum liability is limited based on user type.</p>
            </Accordion>

            <Accordion title="No warranties" icon={AlertCircle}>
              <p>The platform is provided "as is" and "as available". LotIQ does not guarantee accuracy, reliability, or continuous operation.</p>
            </Accordion>

            <Accordion title="User responsibility" icon={Shield}>
              <p>Users agree to indemnify LotIQ against claims arising from use of the platform, enforcement actions, or violations of law.</p>
            </Accordion>

            <div className="pt-20 pb-8">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Part B — Property Owners & Managers</h2>
            </div>
            
            <Accordion title="Responsibilities" icon={Building}>
              <p>Property owners are responsible for:</p>
              <ul>
                <li>Setting rules and policies</li>
                <li>Legal compliance (towing, signage, etc.)</li>
                <li>Contracting towing companies</li>
                <li>Managing risk and safety</li>
              </ul>
            </Accordion>

            <Accordion title="Automated enforcement" icon={Zap}>
              <p>Automated actions are based on configured rules, may contain errors, and are ultimately the responsibility of the property owner.</p>
            </Accordion>

            <div className="pt-20 pb-8">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Part C — Towing Companies</h2>
            </div>

            <Accordion title="Role" icon={Truck}>
              <p>Towing companies operate independently, are not controlled by LotIQ, and must verify legality before towing.</p>
            </Accordion>

            <div className="pt-20 pb-8">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Part D — Permitted Vehicle Users</h2>
            </div>

            <Accordion title="Parking authorization" icon={UserCheck}>
              <p>Parking rights are controlled by property owners and are not guaranteed by LotIQ. Users must keep vehicle information accurate.</p>
            </Accordion>

            <Accordion title="Disputes" icon={Scale}>
              <p>All disputes must be handled with property owners or towing companies—not LotIQ.</p>
            </Accordion>

            <div className="pt-20 pb-8 border-t border-slate-100 mt-20">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Final Sections</h2>
              <div className="grid gap-12">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">19. Governing Law</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">These terms are governed by the laws of Delaware, United States.</p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">20. Termination</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">LotIQ may suspend or terminate access at any time.</p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">21. Changes to Terms</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">Terms may be updated periodically. Continued use means acceptance.</p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">22. Contact</h3>
                  <div className="text-sm text-slate-600 leading-relaxed font-medium">
                    <p>LotIQ, Inc.</p>
                    <p>Boston, Massachusetts</p>
                    <p className="text-primary font-bold">legal@lotiq.pro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Zap = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);
