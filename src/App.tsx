/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components/Navbar";
import { Logo } from "./components/Logo";
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
      <Toaster position="top-center" reverseOrder={false} />
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
        <footer className="bg-slate-50 border-t border-slate-200 py-12 print:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-1">
                <Logo textSize="text-lg" showSubtitle className="mb-6" />
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
