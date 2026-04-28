import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQAccordionItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC<{ title: string; items: FAQItemProps[] }> = ({ title, items }) => (
  <div className="mb-16 last:mb-0">
    <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-100 pb-4">
      {title}
    </h3>
    <div className="bg-white rounded-3xl px-8 shadow-sm border border-slate-50">
      {items.map((item, index) => (
        <FAQAccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  </div>
);

export const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const faqData = [
    {
      title: "General",
      items: [
        {
          question: "What is LotIQ?",
          answer: "LotIQ is an AI-powered property intelligence platform that gives property managers real-time visibility and automated enforcement across parking, liability, and operations — without requiring on-site staff."
        },
        {
          question: "Who is LotIQ for?",
          answer: "LotIQ is designed for commercial property managers, landlords, retail centers, strip malls, and mixed-use properties."
        },
        {
          question: "What problems does LotIQ solve?",
          answer: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Unauthorized parking</li>
              <li>Risk and liability issues</li>
              <li>Lack of service verification</li>
              <li>No real-time visibility</li>
            </ul>
          )
        }
      ]
    },
    {
      title: "Parking Enforcement",
      items: [
        {
          question: "How is LotIQ different from traditional parking enforcement?",
          answer: "LotIQ understands behavior, not just time or location. It can detect actions like park-and-exit, misuse of reserved spaces, and EV violations — something traditional systems cannot do."
        },
        {
          question: "How does LotIQ detect violations?",
          answer: "Rules are defined by the property manager. LotIQ applies those rules using AI-powered camera systems."
        },
        {
          question: "What happens when a violation is detected?",
          answer: "A tow request can be automatically triggered based on your configured policies."
        },
        {
          question: "Is enforcement accurate?",
          answer: "LotIQ uses multiple signals and advanced AI to ensure high accuracy, with evidence-backed detection."
        }
      ]
    },
    {
      title: "Liability & Risk",
      items: [
        {
          question: "How does LotIQ help with slip-and-fall claims?",
          answer: "LotIQ stores time-stamped video footage (up to 3 years) that can be used to verify claims."
        },
        {
          question: "Can LotIQ monitor vendor services like snow ploughing?",
          answer: "Yes. LotIQ verifies when and where services occur and provides proof."
        },
        {
          question: "Does it detect hazardous conditions?",
          answer: "Yes. LotIQ continuously monitors for risks like ice and unsafe conditions and can alert you."
        }
      ]
    },
    {
      title: "Setup & Operations",
      items: [
        {
          question: "Do I need to install or manage anything?",
          answer: <span className="font-bold text-primary">No. LotIQ handles installation, configuration, and ongoing operations.</span>
        },
        {
          question: "How long does it take to get started?",
          answer: "Most properties are installed within 2 weeks and go live immediately after."
        },
        {
          question: "Do I need on-site staff?",
          answer: "No. LotIQ eliminates the need for manual monitoring."
        }
      ]
    },
    {
      title: "Privacy & Compliance",
      items: [
        {
          question: "Does LotIQ use facial recognition?",
          answer: "No. LotIQ does not store biometric data or use facial recognition."
        },
        {
          question: "Is the system privacy compliant?",
          answer: "Yes. LotIQ is designed to meet modern privacy standards."
        }
      ]
    },
    {
      title: "Pricing",
      items: [
        {
          question: "How is LotIQ priced?",
          answer: "Pricing depends on property size, with a monthly subscription and a one-time installation fee."
        },
        {
          question: "Do I need to buy cameras?",
          answer: <span className="font-bold text-primary">No. Hardware and installation are included.</span>
        },
        {
          question: "Is there a contract?",
          answer: "Yes. LotIQ typically requires a 1-year service agreement."
        }
      ]
    }
  ];

  const filteredFaqData = faqData.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto"
          >
            Everything you need to know about LotIQ
          </motion.p>
        </div>

        <div className="mb-12 relative">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-12">
          {filteredFaqData.map((section, index) => (
            <FAQSection key={index} title={section.title} items={section.items} />
          ))}
          {filteredFaqData.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-400 text-lg">No results found for "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary text-white p-12 rounded-[40px] shadow-2xl shadow-primary/20">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-white/80 mb-10 max-w-lg mx-auto">
              We’re happy to help you understand how LotIQ works for your property.
            </p>
            <button 
              onClick={() => navigate('/#enroll')}
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors inline-flex items-center gap-2 group"
            >
              Contact us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
