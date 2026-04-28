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
  Scale,
  Download
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
    <div className="pt-20 pb-12 bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="py-12 lg:py-20 overflow-hidden border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-none tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center justify-center gap-8 relative">
              <span>Effective May 1, 2026</span>
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 text-primary hover:text-blue-600 transition-colors print:hidden"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500 leading-relaxed">
                This Privacy Policy explains how LotIQ collects, uses, stores, and shares information through its property intelligence platform and website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK SUMMARY */}
      <section className="py-12 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] text-center">Key things to know</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { text: "LotIQ uses video monitoring (no audio)", icon: Camera },
                { text: "No names, emails, or identity data via cameras", icon: Shield },
                { text: "No facial recognition or biometric tracking", icon: Eye },
                { text: "Data used only for operations, enforcement, and safety", icon: Database },
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <Accordion title="Service provider role" icon={Info}>
              <p>LotIQ provides its platform to property owners and managers under contractual agreements.</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><strong>Property Clients</strong> decide why and how monitoring is used</li>
                <li><strong>LotIQ</strong> processes data on their behalf and at their direction</li>
              </ul>
              <p className="mt-4">For questions about a specific property, users should contact the property owner or manager directly.</p>
            </Accordion>

            <Accordion title="What we collect" icon={Camera}>
              <p>We collect a limited set of information through cameras and our website.</p>
              
              <div className="pt-6 grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-primary" />
                    Camera Data
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Video footage (no audio)</li>
                    <li>• Images of vehicles and individuals</li>
                    <li>• Vehicle details (make, model, color, license plate)</li>
                    <li>• Movement tracking (non-identifiable)</li>
                    <li>• Vehicle location during enforcement</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    Website Data
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• IP address</li>
                    <li>• Browser and device information</li>
                    <li>• Pages visited and usage data</li>
                  </ul>
                </div>
              </div>

              <HighlightBox title="Important">
                <p className="font-bold mb-3">We do NOT collect:</p>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <span>• Names or contact details</span>
                  <span>• Financial information</span>
                  <span>• Government IDs</span>
                  <span>• Biometric data</span>
                </div>
              </HighlightBox>
            </Accordion>

            <Accordion title="How information is used" icon={RefreshCcw}>
              <p>We use data strictly for operational purposes:</p>
              <ul className="list-disc pl-5 space-y-1 mt-4">
                <li>Parking enforcement (vehicle identification only)</li>
                <li>Property monitoring and safety</li>
                <li>Risk and liability protection</li>
                <li>Service verification (e.g. snow, maintenance)</li>
                <li>Platform improvement (aggregated, de-identified data only)</li>
              </ul>
              
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mt-8">
                <p className="text-xs font-bold text-emerald-900 uppercase tracking-widest mb-3">Key Principle</p>
                <p className="text-emerald-800 font-bold">We do NOT sell personal information or use data for advertising or profiling.</p>
              </div>
            </Accordion>

            <Accordion title="When information is shared" icon={Share2}>
              <p>We only share data in limited scenarios:</p>
              <div className="space-y-6 mt-6">
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-primary/20 rounded-full shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Property Clients</h4>
                    <p className="text-sm">Access data related to their property. They do not have unrestricted access to full archives.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-primary/20 rounded-full shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Towing Companies</h4>
                    <p className="text-sm">Receive limited vehicle details for identifying and locating vehicles. No direct video access.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-primary/20 rounded-full shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Legal Requirements</h4>
                    <p className="text-sm">Shared only when required by law. We attempt to notify property clients when possible.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-primary/20 rounded-full shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Service Providers</h4>
                    <p className="text-sm">Secure cloud and infrastructure partners bound by confidentiality obligations.</p>
                  </div>
                </div>
              </div>
            </Accordion>

            <Accordion title="How AI is used" icon={Eye}>
              <p>LotIQ uses computer vision to monitor activity and detect events, identifying vehicles and behavior patterns to support enforcement workflows.</p>
              <HighlightBox title="Important">
                LotIQ does NOT make fully automated decisions with legal impact without property client configuration and human involvement or review.
              </HighlightBox>
            </Accordion>

            <Accordion title="How long we keep data" icon={Database}>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span className="font-bold text-slate-900">Video footage</span>
                  <span className="text-primary font-bold">Typically 3 years</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span className="font-bold text-slate-900">Enforcement data</span>
                  <span className="text-primary font-bold">As needed</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span className="font-bold text-slate-900">Website data</span>
                  <span className="text-primary font-bold">Standard retention</span>
                </div>
                <p className="text-xs text-slate-400 italic">Data is deleted or anonymized when no longer needed.</p>
              </div>
            </Accordion>

            <Accordion title="How we protect data" icon={Lock}>
              <p>We implement industry-leading safeguards including access controls, encryption in transit, and secure storage systems.</p>
              <p className="text-xs text-slate-400 mt-4">Disclaimer: No system is completely secure.</p>
            </Accordion>

            <Accordion title="Your rights and choices" icon={UserPlus}>
              <p>Depending on your location, you may have rights to access, delete, or correct your data, or opt out of certain uses.</p>
              <HighlightBox title="Important Note">
                Because LotIQ does not collect direct identity data, we may not always be able to match requests to specific records.
              </HighlightBox>
            </Accordion>

            <Accordion title="Additional legal rights" icon={Scale}>
              <p>Residents of states like California, Virginia, Colorado, and Texas may have additional rights under applicable privacy laws. Requests and appeals can be submitted via email.</p>
            </Accordion>

            <Accordion title="Biometric data" icon={Shield}>
              <p>LotIQ does NOT use facial recognition, collect biometric identifiers, or store facial or fingerprint data.</p>
            </Accordion>

            <Accordion title="Children’s privacy" icon={UserPlus}>
              <p>LotIQ does not knowingly collect personal data from children under 13.</p>
            </Accordion>

            <Accordion title="Contact us" icon={Info}>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col gap-3">
                <p className="font-bold text-slate-900">LotIQ, Inc.</p>
                <p className="text-slate-600">6 Liberty Square PMB #408</p>
                <p className="text-slate-600">Boston, MA 02109</p>
                <div className="pt-2">
                  <p className="text-sm font-bold text-primary">legal@lotiq.pro</p>
                  <p className="text-xs text-slate-400 mt-1">Website: lotiq.pro</p>
                </div>
              </div>
            </Accordion>

            <Accordion title="Changes to this policy" icon={RefreshCcw}>
              <p>We may update this Privacy Policy periodically. Updates will be posted with a revised effective date.</p>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

