/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  onEnroll: () => void;
}

export const Navbar = ({ onEnroll }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">LotIQ</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
            >
              About
            </Link>
            <a href="/#use-cases" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Use Cases</a>
            <a href="/#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Features</a>
            <a href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">How it Works</a>
            <button 
              onClick={onEnroll}
              className="bg-primary text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all shadow-sm"
            >
              Enroll your property
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
        >
          <Link 
            to="/about" 
            className={`block text-base font-medium ${isActive('/about') ? 'text-primary' : 'text-slate-600'}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <a href="/#use-cases" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Use Cases</a>
          <a href="/#features" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>Features</a>
          <a href="/#how-it-works" className="block text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>How it Works</a>
          <button 
            onClick={() => { onEnroll(); setIsOpen(false); }}
            className="w-full bg-primary text-white px-5 py-3 rounded-xl text-base font-semibold"
          >
            Enroll your property
          </button>
        </motion.div>
      )}
    </nav>
  );
};
