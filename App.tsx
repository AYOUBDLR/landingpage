import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Shield, ExternalLink, HelpCircle, 
  ArrowUpRight, AlertCircle, Sparkles, Trophy, CheckSquare, Clock
} from 'lucide-react';
import FAQItemCard from './components/FAQItem';
import RewardFunnel from './components/RewardFunnel';
import { FAQRecord } from './types';

// Authentic Walmart Spark Logo component
const WalmartSpark = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50,50)">
      {Array.from({ length: 6 }).map((_, index) => {
        const rotation = index * 60;
        return (
          <g key={index} transform={`rotate(${rotation})`}>
            <rect
              x="-7"
              y="-42"
              width="14"
              height="28"
              rx="7"
              fill="#ffc220"
            />
          </g>
        );
      })}
      <circle cx="0" cy="0" r="5" fill="#ffc220" />
    </g>
  </svg>
);

const FAQS_DATA: FAQRecord[] = [
  {
    id: 'faq-1',
    question: 'How long do the deals take?',
    answer: 'Most sponsor-backed promotional tasks can be completed in just a few minutes. Depending on the offers you select (such as installing a free mobile app or completing a quick survey), the entire qualification process usually takes about 10-15 minutes!'
  },
  {
    id: 'faq-2',
    question: 'What are promotional deals?',
    answer: 'Deals are promotional offers sponsored by our brand partners, including free trials, game app installations, subscription services, and consumer preference questionnaires. Our sponsors cover the reward costs in exchange for your honest engagement with their services.'
  },
  {
    id: 'faq-3',
    question: 'How many deals do I have to do?',
    answer: 'To qualify for the $100 Walmart Gift Card reward, you must complete at least 3 sponsored deals. Once you finish 3 deals, our validation server registers the completions and automatically releases your voucher code.'
  },
  {
    id: 'faq-4',
    question: 'When will I receive my reward?',
    answer: 'Digital gift cards are generated instantly upon completing the required sponsor deals. Your voucher code, security PIN, and scannable barcode will be rendered in your login portal and dispatched directly to your registered email address.'
  }
];

export default function App() {
  const [funnelOpen, setFunnelOpen] = useState<boolean>(false);
  const [openFAQIndex, setOpenFAQIndex] = useState<string | null>(null);
  const [legalModal, setLegalModal] = useState<'agreement' | 'privacy' | null>(null);

  const handleToggleFAQ = (id: string) => {
    setOpenFAQIndex(prev => (prev === id ? null : id));
  };

  const claimUrl = "https://saveapp.store/sl/me25j";

  return (
    <div className="min-h-screen bg-[#edf0f5] text-[#2d3748] font-sans relative pb-16">
      
      {/* Decorative top ambient bar */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-[#0071dc]" />

      <main className="max-w-[500px] mx-auto px-4 pt-12 md:pt-16 pb-8 flex flex-col items-center">
        
        {/* Dynamic Logo Block (Link-wrapped) */}
        <a 
          href={claimUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-7 outline-none"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-14 h-14 bg-[#0071dc] rounded-xl flex items-center justify-center shadow-lg relative group cursor-pointer"
            title="Claim Portal Launcher"
          >
            {/* Pulsing light effect */}
            <div className="absolute inset-0 rounded-xl bg-white/5 opacity-50 group-hover:scale-105 transition-transform" />
            <WalmartSpark className="w-9 h-9" />
          </motion.div>
        </a>

        {/* Central White Registration Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: 'spring', damping: 25 }}
          className="w-full bg-white rounded-[24px] shadow-sm border border-[#e5e9f0] p-6 sm:p-8 flex flex-col items-stretch text-center"
        >
          {/* Animated welcome badge */}
          <div className="mx-auto bg-amber-500/10 border border-amber-500/20 text-[#0071dc] px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5 self-center">
            <Trophy size={13} className="text-amber-500 animate-bounce" />
            Seasonal Reward Program
          </div>

          <h2 className="text-[25px] sm:text-[28px] font-black text-slate-900 tracking-tight leading-tight">
            Complete Your Registration
          </h2>

          <p className="text-[13px] md:text-[14px] text-slate-500 font-medium px-4 mt-2 mb-6 leading-relaxed">
            Follow these simple steps to{' '}
            <a
              href={claimUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0071dc] font-bold underline hover:text-[#0050a0] cursor-pointer decoration-2 underline-offset-2"
            >
              claim your Walmart gift card reward
            </a>
          </p>

          {/* Stepper items (1 to 4) */}
          <div className="space-y-3 mb-6">
            {[
              { id: 1, text: 'Click on "Claim Now"', icon: <Clock size={16} /> },
              { id: 2, text: 'Enter your email and basic info', icon: <CheckSquare size={16} /> },
              { id: 3, text: 'Complete 3-5 sponsored deals', icon: <Sparkles size={16} /> },
              { id: 4, text: 'Enjoy your Walmart gift card reward!', icon: <Trophy size={16} /> }
            ].map((step) => (
              <motion.div
                key={step.id}
                whileHover={{ x: 2, backgroundColor: '#fcfdfe' }}
                className="w-full p-4 bg-[#f8fafd] border border-slate-100 rounded-2xl flex items-center gap-4 transition-colors text-left"
              >
                <div className="w-7 h-7 bg-[#0071dc] text-white flex items-center justify-center rounded-full font-extrabold text-xs shrink-0 select-none">
                  {step.id}
                </div>
                <span className="font-bold text-slate-700 text-sm sm:text-[15px] tracking-tight leading-normal">
                  {step.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Claim Action Button */}
          <div className="space-y-3.5">
            <a
              id="claim-now-btn"
              href={claimUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#0071dc] hover:bg-[#0050a0] text-white rounded-xl text-sm sm:text-base font-black tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer block text-center"
            >
              CLAIM NOW
            </a>

            <p className="text-[10.5px] text-slate-400 font-medium leading-relaxed max-w-sm mx-auto px-1.5">
              By clicking "Claim Now", you agree to complete the required steps to receive your gift card.
            </p>
          </div>

        </motion.div>

        {/* Frequently Asked Questions Header */}
        <div className="w-full mt-10 mb-5 text-left">
          <h3 className="font-black text-xl sm:text-[22px] text-slate-900 tracking-tight pl-1 flex items-center gap-2">
            <HelpCircle size={22} className="text-[#0071dc]" />
            Frequently Asked Questions
          </h3>
        </div>

        {/* Accordions */}
        <div className="w-full space-y-3">
          {FAQS_DATA.map((faq) => (
            <FAQItemCard
              key={faq.id}
              item={faq}
              isOpen={openFAQIndex === faq.id}
              onToggle={() => handleToggleFAQ(faq.id)}
            />
          ))}
        </div>

        {/* Footer Navigation bar */}
        <footer className="w-full mt-12 pt-6 border-t border-slate-300/40 flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1.5 text-xs font-bold text-[#0071dc]">
          <button 
            onClick={() => setLegalModal('agreement')}
            className="hover:underline transition-colors focus:outline-none cursor-pointer"
          >
            User Agreement
          </button>
          <span className="text-slate-300">•</span>
          <button 
            onClick={() => setLegalModal('privacy')}
            className="hover:underline transition-colors focus:outline-none cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-slate-300">•</span>
          <a 
            href="https://www.walmart.com" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:underline transition-colors flex items-center gap-0.5"
          >
            Walmart.com
            <ArrowUpRight size={12} strokeWidth={2.5} />
          </a>
        </footer>

      </main>

      {/* Interactive Portal Funnel Overlay (Available as Fallback / Detail Option if needed) */}
      <RewardFunnel 
        isOpen={funnelOpen} 
        onClose={() => setFunnelOpen(false)} 
      />

      {/* Legal terms Modals */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col max-h-[85vh]"
            >
              <div className="bg-[#0071dc] text-white py-4 px-6 flex items-center justify-between">
                <h4 className="font-bold uppercase text-xs tracking-wider flex items-center gap-2">
                  {legalModal === 'agreement' ? <FileText size={16} /> : <Shield size={16} />}
                  {legalModal === 'agreement' ? 'Official User Agreement' : 'Privacy Policies'}
                </h4>
                <button 
                  onClick={() => setLegalModal(null)} 
                  className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto text-xs text-slate-600 leading-relaxed space-y-4">
                {legalModal === 'agreement' ? (
                  <>
                    <h5 className="font-bold text-slate-800 text-sm">1. Acceptance of Terms</h5>
                    <p>By engaging with this reward registration site and opting to complete designated marketing offers, you declare that you represent a valid United States household residency and accept full liability for your actions connected with sponsor resources.</p>
                    
                    <h5 className="font-bold text-[#0071dc] text-sm mt-4">2. Offer Credits Affirmation</h5>
                    <p>Qualifying values are assigned to you representing real advertising fees sponsored by external corporate entities. Only after receiving absolute confirmation parameters concerning 3 complete tasks will rewards be calculated as active and generated.</p>

                    <h5 className="font-bold text-slate-800 text-sm mt-4">3. Fraud Limits Policy</h5>
                    <p>Our security engine employs advanced cookie cross-referencing, IP address tracing, and cellular network telemetry constraints. Any malicious attempts utilizing virtual private networks (VPNs), duplicate registration metrics, or synthetic identity logs will trigger permanent IP-ban mechanisms.</p>

                    <p className="text-[10px] text-slate-400 mt-4 italic">Updated as of June 2026. Void where prohibited by jurisdictional laws.</p>
                  </>
                ) : (
                  <>
                    <h5 className="font-bold text-slate-800 text-sm">1. Information Accumalation</h5>
                    <p>To safely dispatch gift vouchers, this portal registers simple personal keys consisting of full name coordinates, e-mail addresses, and postal zip codes. All inputs are packaged natively using fully compliant end-to-end symmetric Transport Layer Security (TLS).</p>

                    <h5 className="font-bold text-[#0071dc] text-sm mt-4">2. Cookie Policy</h5>
                    <p>We deploy critical, stateless session storage parameters locally to ensure deal progress can be accurately restored. Partners use standard webhook links with anonymized pixel identifiers to log deal verified states without compromising details.</p>

                    <h5 className="font-bold text-slate-800 text-sm mt-4">3. Consumer Rights & Security Opt-outs</h5>
                    <p>At any time, registers are clear to submit simple clearance requests to vacate information directories. We pledge never to trade personal parameters or database structures to independent marketing firms without direct authorization parameters.</p>

                    <p className="text-[10px] text-slate-400 mt-4 italic">Updated as of June 2026. Fully CCPA & GDPR aligned.</p>
                  </>
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="px-4 py-2 bg-[#0071dc] hover:bg-[#0050a0] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// X inline icon component missing from standard imports but required
const X = ({ size = 16, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
