
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const sportsbookRef = useRef<HTMLDivElement>(null);
  const casinoRef = useRef<HTMLDivElement>(null);
  const [sportsbookVisible, setSportsbookVisible] = useState(false);
  const [casinoVisible, setCasinoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sportsbookRef.current && !sportsbookVisible) {
              setSportsbookVisible(true);
            } else if (entry.target === casinoRef.current && !casinoVisible) {
              setCasinoVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sportsbookRef.current) observer.observe(sportsbookRef.current);
    if (casinoRef.current) observer.observe(casinoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [sportsbookVisible, casinoVisible]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Sportsbook */}
      <section className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center" ref={sportsbookRef}>
        <div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 tracking-tighter leading-tight sm:leading-none uppercase relative ${sportsbookVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {t('features.bestOdds')} <br />
            <span className="text-pickwin-green italic relative inline-block">
              {t('features.seriousBetting')}
              <span className="absolute inset-0 blur-sm -z-10" style={{ color: 'rgba(232, 121, 249, 0.4)', textShadow: '0 0 10px rgba(232, 121, 249, 0.6)' }}>{t('features.seriousBetting')}</span>
              {/* Card suit accent - purple-pink glow */}
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-3xl hidden lg:inline-block" style={{ color: 'rgba(232, 121, 249, 0.7)', textShadow: '0 0 15px rgba(232, 121, 249, 0.8), 0 0 30px rgba(217, 70, 239, 0.5)' }}>♠</span>
            </span>
            {/* Silver medallion accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full border-2 border-white/60 shadow-md hidden lg:block"></div>
          </h2>
          <div className={`${sportsbookVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: sportsbookVisible ? '0.3s' : '0s' }}>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            {t('features.sportsbookDesc')}
          </p>
          <ul className="space-y-2.5 mb-4 sm:mb-6">
            {[t('features.bestOddsIndustry'), t('features.hugeCoverage'), t('features.liveBetting'), t('features.fastSettlements')].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-medium">
                {/* Silver medallion style checkmark */}
                <div className="w-5 h-5 bg-gradient-to-br from-gray-300/20 to-gray-500/20 border border-white/20 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-pickwin-green/20 rounded-full"></div>
                  <svg className="w-3 h-3 text-pickwin-green relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start">
            <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-pickwin-green transition-all shadow-xl uppercase italic text-sm sm:text-base w-full sm:w-auto relative overflow-hidden group inline-block text-center">
              <span className="relative z-10">VIEW SPORTSBOOK</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Card suit accent on button */}
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-black/20 text-lg hidden sm:inline-block">♠</span>
            </a>
            <p className="text-gray-400 text-xs mt-2 italic">refer code : M0st</p>
          </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-pickwin-green/10 rounded-[32px] blur-2xl group-hover:bg-pickwin-green/20 transition-all" />
          <div className="absolute -inset-4 bg-purple-600/5 rounded-[32px] blur-2xl group-hover:bg-purple-600/10 transition-all" style={{ animationDelay: '1s' }}></div>
          <div className="relative bg-black border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
            {/* Ace of Spades card accent - more visible */}
            <div className="absolute -top-4 -left-4 w-16 h-22 bg-white/95 border-2 border-purple-400/40 rounded-md rotate-[-15deg] shadow-2xl hidden lg:block z-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-md"></div>
              <div className="relative p-2 h-full flex flex-col justify-between">
                <div className="text-black text-sm font-black leading-none">A</div>
                <div className="text-center flex-1 flex items-center justify-center">
                  <span className="text-black text-3xl">♠</span>
                </div>
                <div className="text-black text-sm font-black leading-none rotate-180">A</div>
              </div>
              {/* Purple glow */}
              <div className="absolute inset-0 bg-purple-500/20 rounded-md blur-md -z-10"></div>
            </div>
            {/* Football Matches Odds Grid */}
            <div className="relative bg-pickwin-bg overflow-hidden">
              <div className="space-y-0 relative z-10">
                {[
                  { 
                    league: 'Spain ▸ Supercopa', 
                    homeTeam: 'Atletico Madrid', 
                    awayTeam: 'Real Madrid',
                    odds1: '3.05',
                    oddsX: '3.70',
                    odds2: '2.30',
                    highlight: true,
                    type: 'football'
                  },
                  { 
                    league: 'USA NBA', 
                    homeTeam: 'Minnesota Timberwolves', 
                    awayTeam: 'Cleveland Cavaliers',
                    odds1: '1.72',
                    oddsX: null,
                    odds2: '2.12',
                    highlight: true,
                    type: 'nba'
                  },
                  { 
                    league: 'USA NBA', 
                    homeTeam: 'Chicago Bulls', 
                    awayTeam: 'Miami Heat',
                    odds1: '3.10',
                    oddsX: null,
                    odds2: '1.37',
                    highlight: false,
                    type: 'nba'
                  },
                  { 
                    league: 'USA NHL', 
                    homeTeam: 'Winnipeg Jets', 
                    awayTeam: 'Edmonton Oilers',
                    odds1: '2.52',
                    oddsX: '4.20',
                    odds2: '2.34',
                    highlight: true,
                    type: 'nhl'
                  },
                ].map((match, i) => (
                  <div 
                    key={i} 
                    className={`p-3 sm:p-4 border-b border-white/5 transition-all ${
                      match.highlight 
                        ? 'bg-pickwin-green/5 border-l-2 border-l-pickwin-green' 
                        : 'bg-black/30'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2 sm:mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg">{match.type === 'nba' ? '🏀' : match.type === 'nhl' ? '🏒' : '⚽'}</span>
                        <span className="text-[10px] sm:text-xs text-gray-400 font-medium">{match.league}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pickwin-green/20 rounded flex items-center justify-center">
                            <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-pickwin-green" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                          </div>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pickwin-green/20 rounded flex items-center justify-center">
                            <span className="text-[7px] sm:text-[8px] text-pickwin-green font-black">P</span>
                          </div>
                        </div>
                        {match.type === 'nhl' && (
                          <span className="text-[10px] sm:text-xs text-gray-400 font-medium">1x2</span>
                        )}
                        {match.type === 'nba' && (
                          <span className="text-[9px] sm:text-xs text-gray-400 font-medium hidden sm:inline">Winner (incl. overtime)</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                      <div className="flex-1 space-y-1 sm:space-y-2 relative min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm text-white font-medium truncate">{match.homeTeam}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm text-white font-medium truncate">{match.awayTeam}</span>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 hidden sm:block">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        {match.type === 'nba' ? (
                          <>
                            <div className={`text-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-l ${match.highlight ? 'bg-pickwin-green/20' : 'bg-black/50'}`}>
                              <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">1</div>
                              <div className={`text-xs sm:text-sm font-black ${match.highlight ? 'text-pickwin-green' : 'text-white'}`}>
                                {match.odds1}
                              </div>
                            </div>
                            <div className={`text-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-r ${match.highlight ? 'bg-pickwin-green/20' : 'bg-pickwin-surface/50'}`}>
                              <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">2</div>
                              <div className={`text-xs sm:text-sm font-black ${match.highlight ? 'text-pickwin-green' : 'text-white'}`}>
                                {match.odds2}
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`text-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-l ${match.highlight ? 'bg-pickwin-green/20' : 'bg-black/50'}`}>
                              <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">1</div>
                              <div className={`text-xs sm:text-sm font-black ${match.highlight ? 'text-pickwin-green' : 'text-white'}`}>
                                {match.odds1}
                              </div>
                            </div>
                            <div className={`text-center px-2 sm:px-3 py-1.5 sm:py-2 ${match.highlight ? 'bg-pickwin-green/20' : 'bg-black/50'}`}>
                              <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">draw</div>
                              <div className={`text-xs sm:text-sm font-black ${match.highlight ? 'text-pickwin-green' : 'text-white'}`}>
                                {match.oddsX}
                              </div>
                            </div>
                            <div className={`text-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-r ${match.highlight ? 'bg-pickwin-green/20' : 'bg-black/50'}`}>
                              <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">2</div>
                              <div className={`text-xs sm:text-sm font-black ${match.highlight ? 'text-pickwin-green' : 'text-white'}`}>
                                {match.odds2}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                </div>
                  </div>
                ))}
                </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pickwin-green/5 to-transparent pointer-events-none animate-pulse"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Casino */}
      <section className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center" ref={casinoRef}>
        <div className="lg:order-2">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 tracking-tighter leading-tight sm:leading-none uppercase relative ${casinoVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {t('features.over8000')} <br />
            <span className="text-pickwin-green italic relative inline-block">
              {t('features.casinoGames')}
              <span className="absolute inset-0 blur-sm -z-10" style={{ color: 'rgba(232, 121, 249, 0.4)', textShadow: '0 0 10px rgba(232, 121, 249, 0.6)' }}>{t('features.casinoGames')}</span>
              {/* Card suit accent - purple-pink glow */}
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-3xl hidden lg:inline-block" style={{ color: 'rgba(232, 121, 249, 0.7)', textShadow: '0 0 15px rgba(232, 121, 249, 0.8), 0 0 30px rgba(217, 70, 239, 0.5)' }}>♠</span>
            </span>
            {/* Silver medallion accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full border-2 border-white/60 shadow-md hidden lg:block"></div>
          </h2>
          <div className={`${casinoVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: casinoVisible ? '0.3s' : '0s' }}>
          <p className="text-gray-400 text-base sm:text-lg mb-3 sm:mb-4 leading-relaxed">
            {t('features.casinoDesc')}
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            {[t('features.worldClassSlots'), t('features.liveCasino'), t('features.tableGames'), t('features.topProviders'), t('features.highestRTP'), t('features.instantWins')].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-black text-gray-300 italic uppercase">
                <span className="text-pickwin-green">✦</span> {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start">
            <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-pickwin-green text-black font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white transition-all shadow-xl uppercase italic text-sm sm:text-base w-full sm:w-auto relative overflow-hidden group inline-block text-center">
              <span className="relative z-10">{t('features.exploreCasino')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Card suit accent on button */}
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-black/20 text-lg hidden sm:inline-block">♠</span>
            </a>
            <p className="text-gray-400 text-xs mt-2 italic">refer code : M0st</p>
          </div>
          </div>
        </div>
        <div className="relative group lg:order-1">
          <div className="absolute -inset-4 bg-pickwin-green/10 rounded-[32px] blur-2xl group-hover:bg-pickwin-green/20 transition-all" />
          <div className="absolute -inset-4 bg-blue-600/5 rounded-[32px] blur-2xl group-hover:bg-blue-600/10 transition-all" style={{ animationDelay: '1s' }}></div>
          <div className="relative bg-pickwin-surface border border-white/10 rounded-[32px] overflow-hidden shadow-2xl aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1000&auto=format&fit=crop" 
              alt="Casino" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
