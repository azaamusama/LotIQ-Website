/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Zap } from "lucide-react";

import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { EnrollmentWizard } from "./EnrollmentWizard";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar onEnroll={() => setIsWizardOpen(true)} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage onEnroll={() => setIsWizardOpen(true)} />} />
            <Route path="/about" element={<AboutPage onEnroll={() => setIsWizardOpen(true)} />} />
          </Routes>
        </main>

        <AnimatePresence>
          {isWizardOpen && (
            <EnrollmentWizard onClose={() => setIsWizardOpen(false)} />
          )}
        </AnimatePresence>

        {/* Global Footer */}
        <footer className="bg-slate-50 border-t border-slate-200 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <Zap className="text-white w-4 h-4 fill-current" />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-slate-900">LotIQ</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The world's leading platform for automated property intelligence and enforcement.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Product</h4>
                <ul className="space-y-4">
                  {['Features', 'Pricing', 'Case Studies'].map((item) => (
                    <li key={item}><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
                <ul className="space-y-4">
                  {['About', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                    <li key={item}><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Connect</h4>
                <ul className="space-y-4">
                  {['LinkedIn', 'Twitter', 'Instagram'].map((item) => (
                    <li key={item}><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400">© 2026 LotIQ. All rights reserved.</p>
              <div className="flex gap-8 text-xs text-slate-400">
                 <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                 <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
