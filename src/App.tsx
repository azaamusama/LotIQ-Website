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
import { PrivacyPolicyPage } from "./pages/Privacy";
import { TermsPage } from "./pages/Terms";
import { FAQ } from "./pages/FAQ";
import { ContactForm } from "./ContactForm";
import { Link } from "react-router-dom";

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
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar onEnroll={() => setIsFormOpen(true)} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage onEnroll={() => setIsFormOpen(true)} />} />
            <Route path="/about" element={<AboutPage onEnroll={() => setIsFormOpen(true)} />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <AnimatePresence>
          {isFormOpen && (
            <ContactForm onClose={() => setIsFormOpen(false)} />
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
                  <li><a href="/#pricing" className="text-sm text-slate-500 hover:text-primary transition-colors">Pricing</a></li>
                  <li><a href="/#use-cases" className="text-sm text-slate-500 hover:text-primary transition-colors">Use Cases</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
                <ul className="space-y-4">
                  <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary transition-colors">About</Link></li>
                  <li>
                    <a 
                      href="https://www.linkedin.com/company/lotiq-inc/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm text-slate-500 hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
                <ul className="space-y-4">
                  <li><button onClick={() => setIsFormOpen(true)} className="text-sm text-slate-500 hover:text-primary transition-colors">Contact</button></li>
                  <li><Link to="/faq" className="text-sm text-slate-500 hover:text-primary transition-colors">FAQs</Link></li>
                  <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-sm text-slate-500 hover:text-primary transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            {/* Quick Answers Section */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h4 className="font-bold text-slate-900 mb-8 uppercase text-xs tracking-widest text-center">Quick answers</h4>
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-slate-900 mb-2">What is LotIQ?</p>
                  <p className="text-sm text-slate-500">AI-powered property monitoring and enforcement.</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-slate-900 mb-2">Do I need to install anything?</p>
                  <p className="text-sm text-slate-500">No, LotIQ handles everything.</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-slate-900 mb-2">Where is LotIQ available?</p>
                  <p className="text-sm text-slate-500">Currently operating in Massachusetts.</p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400">© 2026 LotIQ. All rights reserved.</p>
              <div className="flex gap-8 text-xs text-slate-400">
                 <a 
                   href="https://www.linkedin.com/company/lotiq-inc/" 
                   target="_blank" 
                   rel="noreferrer" 
                   className="hover:text-primary transition-colors"
                 >
                   LinkedIn
                 </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
