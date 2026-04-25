/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  Shield, 
  Eye, 
  Lock, 
  Camera, 
  Info, 
  AlertCircle, 
  Database, 
  Share2, 
  UserPlus, 
  RefreshCcw,
  Scale
} from "lucide-react";

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
        className="w-full py-6 flex items-center justify-between text-left group hover:text-primary transition-colors focus:outline-none"
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

const HighlightBox = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 my-6">
    <div className="flex items-center gap-2 mb-3">
      <AlertCircle className="w-4 h-4 text-primary" />
      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{title || "Important Note"}</span>
    </div>
    <div className="text-sm text-slate-700 leading-relaxed font-medium">
      {children}
    </div>
  </div>
);

export const PrivacyPolicyPage = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-32 overflow-hidden border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-none tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
              Last updated: May 1, 2026
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500 leading-relaxed">
                This Privacy Policy explains how LotIQ collects, uses, and protects information through its property intelligence platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK SUMMARY */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] text-center">What you should know</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { text: "LotIQ uses camera-based monitoring (no audio)", icon: Camera },
                { text: "We do not collect names or emails via cameras", icon: Shield },
                { text: "Data is used only for property operations", icon: Database },
                { text: "We do not sell or use data for advertising", icon: Lock },
                { text: "Property owners control how monitoring is applied", icon: Scale }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SECTIONS */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <Accordion title="Who controls the data" icon={Info}>
              <p>LotIQ operates as a service provider. Property owners and managers decide why monitoring is used and define rules and enforcement policies. LotIQ processes data on their behalf.</p>
            </Accordion>

            <Accordion title="What we collect" icon={Camera}>
              <p>We collect a limited set of information through on-site cameras and our website.</p>
              
              <div className="pt-4 space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Camera Data</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Video footage (no audio)</li>
                    <li>Images of vehicles and individuals</li>
                    <li>Vehicle details (make, model, color, license plate where visible)</li>
                    <li>Movement tracking on property (non-identifiable)</li>
                    <li>Vehicle location during enforcement</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Website Data</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>IP address</li>
                    <li>Browser and device info</li>
                    <li>Pages visited</li>
                  </ul>
                </div>

                <HighlightBox>
                  <p className="font-bold text-slate-900 mb-2">We do NOT collect:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>Names</li>
                    <li>Email addresses</li>
                    <li>Phone numbers</li>
                    <li>Financial data</li>
                    <li>Biometric data (no facial recognition)</li>
                  </ul>
                </HighlightBox>
              </div>
            </Accordion>

            <Accordion title="How your data is used" icon={RefreshCcw}>
              <p>We use data strictly for property operations:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Parking enforcement</li>
                <li>Property monitoring</li>
                <li>Risk and liability protection</li>
                <li>Service verification</li>
                <li>Platform improvement (aggregated data only)</li>
              </ul>
              
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mt-6">
                <p className="text-xs font-bold text-emerald-900 uppercase tracking-widest mb-2">Key Principle</p>
                <p className="text-sm text-emerald-800 font-medium">We do NOT sell data, use it for advertising, or profile individuals.</p>
              </div>
            </Accordion>

            <Accordion title="Who we share data with" icon={Share2}>
              <p>We only share data when necessary:</p>
              <div className="grid gap-6 pt-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Property Clients</h4>
                  <p>Access footage related to their property</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Towing Companies</h4>
                  <p>Receive vehicle details (not video) for enforcement</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Legal Requirements</h4>
                  <p>Shared only when required by law</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Service Providers</h4>
                  <p>Secure infrastructure partners (hosting, storage)</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Business Transfers</h4>
                  <p>In case of acquisition or restructuring</p>
                </div>
              </div>
            </Accordion>

            <Accordion title="How AI is used" icon={Eye}>
              <p>LotIQ uses computer vision to analyze activity on properties. It detects vehicles and behavior to identify potential violations.</p>
              <HighlightBox title="Important">
                AI supports decisions, but final enforcement depends on property rules and human oversight.
              </HighlightBox>
            </Accordion>

            <Accordion title="How long we keep data" icon={Database}>
              <ul className="list-disc pl-5 space-y-1">
                <li>Video footage: Up to 3 years</li>
                <li>Enforcement-related data: Stored as needed</li>
                <li>Website data: Retained per standard practices</li>
              </ul>
              <p className="text-xs text-slate-400 italic pt-2">Data is deleted or anonymized after retention periods.</p>
            </Accordion>

            <Accordion title="How we protect data" icon={Lock}>
              <p>We use industry-standard safeguards:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access controls</li>
                <li>Encryption in transit</li>
                <li>Secure storage systems</li>
              </ul>
              <p className="text-xs text-slate-400">Disclaimer: No system is 100% secure.</p>
            </Accordion>

            <Accordion title="Your rights and choices" icon={UserPlus}>
              <p>Depending on your location, you may have the right to access your data, request deletion, request corrections, or opt out of data sharing.</p>
              <p className="text-xs text-slate-400">Note: Because we do not collect direct identity data, verification may require additional information.</p>
            </Accordion>

            <Accordion title="Additional privacy rights" icon={Scale}>
              <p>Users in certain states (e.g., California, Virginia, Texas) may have additional rights under local laws.</p>
            </Accordion>

            <Accordion title="Biometric data" icon={Shield}>
              <p>LotIQ does NOT use facial recognition, collect biometric identifiers, or store biometric data.</p>
            </Accordion>

            <Accordion title="Children’s data" icon={UserPlus}>
              <p>LotIQ does not knowingly collect personal data from children under 13.</p>
            </Accordion>

            <Accordion title="Changes to this policy" icon={RefreshCcw}>
              <p>We may update this Privacy Policy from time to time. Continued use of the platform means acceptance of updates.</p>
            </Accordion>

            <div className="pt-20">
              <h3 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">Contact Us</h3>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
                <p className="text-sm font-bold text-slate-900">LotIQ, Inc.</p>
                <p className="text-sm text-slate-600">Boston, Massachusetts</p>
                <p className="text-sm font-bold text-primary">legal@lotiq.pro</p>
                <p className="text-xs text-slate-400 mt-2">Website: lotiq.pro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
