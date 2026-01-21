
import React, { useEffect, useRef, useState } from 'react';
import interacLogo from './img/interac-yellow-vector-logo-free-download-11574103307xabgqcjzgi.png';

const FinanceSection: React.FC = () => {
  const depositsRef = useRef<HTMLDivElement>(null);
  const withdrawalsRef = useRef<HTMLDivElement>(null);
  const [depositsVisible, setDepositsVisible] = useState(false);
  const [withdrawalsVisible, setWithdrawalsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === depositsRef.current && !depositsVisible) {
              setDepositsVisible(true);
            } else if (entry.target === withdrawalsRef.current && !withdrawalsVisible) {
              setWithdrawalsVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (depositsRef.current) observer.observe(depositsRef.current);
    if (withdrawalsRef.current) observer.observe(withdrawalsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [depositsVisible, withdrawalsVisible]);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Deposits */}
      <section className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center" ref={depositsRef}>
        <div className={`flex flex-col justify-center ${depositsVisible ? 'md:opacity-100 animate-slide-in' : 'md:opacity-100 opacity-0'}`}>
          <h2 className={`text-2xl sm:text-3xl font-black mb-2 italic tracking-tight uppercase relative ${depositsVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            FAST AND FLEXIBLE DEPOSITS
            {/* Card suit accent - more visible */}
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl hidden lg:inline-block" style={{ color: 'rgba(232, 121, 249, 0.6)', textShadow: '0 0 15px rgba(232, 121, 249, 0.8)' }}>♠</span>
            {/* Silver medallion accent - more visible */}
            <div className="absolute top-0 left-0 -translate-y-2 w-3 h-3 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full border-2 border-white/50 shadow-md hidden lg:block"></div>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
            Funding your account should be instant and stress free. PickWin supports trusted payment methods with low minimums, fast processing, and no unnecessary delays.
            </p>
          </div>
          
        <div className="relative group">
          <div className="absolute -inset-4 bg-pickwin-green/10 rounded-[32px] blur-2xl group-hover:bg-pickwin-green/20 transition-all" />
          <div className="absolute -inset-4 bg-purple-600/5 rounded-[32px] blur-2xl group-hover:bg-purple-600/10 transition-all"></div>
          <div className="relative bg-black border border-white/10 rounded-[32px] overflow-hidden shadow-2xl p-6">
            {/* Payment Methods Card */}
            <div className="bg-pickwin-bg rounded-xl p-4 sm:p-6 border border-white/5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Interac */}
                <div className="bg-black/50 rounded-xl p-4 border border-white/10 hover:border-pickwin-green/30 transition-all relative overflow-hidden group">
                  {/* Bandana pattern overlay - more visible */}
                  <div className="absolute top-1 right-1 w-6 h-6 opacity-15 pointer-events-none bandana-pattern border border-white/20"></div>
                  <div className="flex flex-col items-center text-center mb-3 relative z-10">
                    <img src={interacLogo} alt="Interac e-Transfer" className="h-12 object-contain mb-3" />
                    <div className="text-xs font-black text-white mb-2">Interac</div>
                    <div className="space-y-1">
                      <div className="text-[10px] text-gray-400 font-medium">Instant deposits</div>
                      <div className="text-[10px] text-gray-400 font-medium">Canadian friendly</div>
              </div>
            </div>
                  <div className="text-[9px] text-pickwin-green font-black text-center mt-2">Deposits credited instantly</div>
              </div>

                {/* Crypto */}
                <div className="bg-black/50 rounded-xl p-4 border border-white/10 hover:border-pickwin-green/30 transition-all relative overflow-hidden group">
                  {/* Bandana pattern overlay - more visible */}
                  <div className="absolute top-1 right-1 w-6 h-6 opacity-15 pointer-events-none bandana-pattern border border-white/20"></div>
                  <div className="flex flex-col items-center text-center mb-3 relative z-10">
                    <div className="w-16 h-16 bg-pickwin-gold/10 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-3xl text-pickwin-gold">₿</span>
            </div>
                    <div className="text-xs font-black text-white mb-2">Crypto</div>
                    <div className="space-y-1">
                      <div className="text-[10px] text-gray-400 font-medium">Fast and private</div>
                      <div className="text-[10px] text-gray-400 font-medium">No restrictions</div>
          </div>
        </div>
                  <div className="text-[9px] text-pickwin-green font-black text-center mt-2">Crypto processed within minutes</div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Withdrawals */}
      <section className="bg-black border border-white/10 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] p-5 sm:p-6 md:p-8 relative overflow-hidden shadow-2xl" ref={withdrawalsRef}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pickwin-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          <div className="relative group lg:order-2">
            <div className="absolute -inset-4 bg-pickwin-green/10 rounded-[32px] blur-2xl group-hover:bg-pickwin-green/20 transition-all" />
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[32px] blur-2xl group-hover:bg-blue-600/10 transition-all"></div>
            <div className="relative bg-black border border-white/10 rounded-[32px] overflow-hidden shadow-2xl p-4">
              <div className="relative bg-pickwin-bg rounded-2xl overflow-hidden border border-white/5 opacity-80">
                {/* Contextual Label */}
                <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[9px] text-gray-300 font-medium">
                  Actual withdrawal from PickWin
                </div>
                
                {/* CSS Replica of Withdrawal Interface */}
                <div className="relative bg-pickwin-bg">
                  {/* Left Navigation Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600/30"></div>
                  
                  <div className="pl-3 sm:pl-4 pr-4 sm:pr-6 py-4 sm:py-6">
                    {/* Transaction Details - Row Layout */}
                    <div className="space-y-0">
                      {/* ID Row */}
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">ID</span>
                        <span className="text-[10px] sm:text-[11px] text-white font-semibold">12043936</span>
                      </div>
                      
                      {/* Date Row */}
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Date</span>
                        <span className="text-[10px] sm:text-[11px] text-white font-semibold break-all text-right ml-2">2025-12-27 10:58:29</span>
                      </div>
                      
                      {/* Type Row */}
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Type</span>
                        <span className="text-[10px] sm:text-[11px] text-white font-semibold">Withdraw</span>
                      </div>
                      
                      {/* Initiator Row */}
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Initiator</span>
                        <span className="text-[10px] sm:text-[11px] text-white font-semibold break-all text-right ml-2">Crypto Payment</span>
                      </div>
                      
                      {/* Amount Row */}
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Amount</span>
                        <span className="text-[10px] sm:text-[11px] text-white font-semibold">
                          126269.66 <span className="text-red-500">C$</span>
                        </span>
                      </div>
                      
                      {/* Status Row */}
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Status</span>
                        <span className="text-[10px] sm:text-[11px] text-pickwin-green font-semibold">Success</span>
                      </div>
                      
                      {/* Notes Row */}
                      <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/5">
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Notes</span>
                        <span className="text-[10px] sm:text-[11px] text-gray-500 font-semibold">—</span>
                      </div>
                      
                      {/* Transaction ID Row */}
                      <div className="flex justify-between items-center py-2 sm:py-3">
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Transaction ID</span>
                        <span className="text-[10px] sm:text-[11px] text-gray-500 font-semibold">—</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pickwin-bg/20 pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 lg:order-1 ${withdrawalsVisible ? 'md:opacity-100 animate-slide-in' : 'md:opacity-100 opacity-0'}`}>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black italic tracking-tighter leading-tight sm:leading-none uppercase mb-2 sm:mb-0 relative ${withdrawalsVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              NO-LIMIT WITHDRAWALS. <br />
              <span className="text-pickwin-green relative">
                FAST PAYOUTS.
                <span className="absolute inset-0 text-blue-400/20 blur-sm -z-10">FAST PAYOUTS.</span>
                {/* Card suit accent - more visible */}
                <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-3xl hidden lg:inline-block" style={{ color: 'rgba(217, 70, 239, 0.6)', textShadow: '0 0 15px rgba(217, 70, 239, 0.8)' }}>♠</span>
              </span>
            </h2>
            <div className="space-y-1.5 sm:space-y-2">
              {[
                'Withdrawals processed in under 6 hours',
                'Zero limits on withdrawal amounts',
                'Full user control over funds',
                'No verification delays for verified accounts'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-bold text-gray-300 italic">
                  {/* Silver medallion style checkmark */}
                  <div className="w-5 h-5 bg-gradient-to-br from-gray-300/20 to-gray-500/20 border border-white/20 rounded-full flex items-center justify-center relative flex-shrink-0">
                    <div className="absolute inset-0 bg-pickwin-green/20 rounded-full"></div>
                    <span className="text-pickwin-green text-sm relative z-10">✓</span>
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceSection;
