
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
      {/* Sportsbook - Vertical Layout */}
      <section className="space-y-6 sm:space-y-8" ref={sportsbookRef}>
        <div className="text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tighter leading-tight uppercase relative ${sportsbookVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <span className="text-white">{t('features.bestOdds')}</span>
            <br />
            <span className="text-pickwin-green italic relative inline-block">
              {t('features.seriousBetting')}
            </span>
          </h2>
          <div className={`max-w-3xl mx-auto ${sportsbookVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: sportsbookVisible ? '0.3s' : '0s' }}>
          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-center">
            {t('features.sportsbookDesc')}
          </p>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
            {[t('features.bestOddsIndustry'), t('features.hugeCoverage'), t('features.liveBetting'), t('features.fastSettlements')].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white font-medium text-base sm:text-lg">
                <span className="text-pickwin-green font-bold text-xl mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center">
            <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-pickwin-green text-black font-black px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-white transition-all shadow-xl uppercase text-base sm:text-lg w-full sm:w-auto text-center">
              VIEW SPORTSBOOK
            </a>
            <p className="text-white text-sm mt-3 italic font-bold">refer code : Haas</p>
          </div>
          </div>
        </div>
        
        {/* Odds Display - Full Width Below */}
        <div className="relative group mt-8">
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 border-2 border-pickwin-green/40 rounded-2xl overflow-hidden shadow-2xl">
            {/* Football Matches Odds Grid */}
            <div className="relative bg-gradient-to-b from-gray-950 to-black overflow-hidden">
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
                        : 'bg-gray-900/30'
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
                            <div className={`text-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-l ${match.highlight ? 'bg-pickwin-green/20' : 'bg-gray-900/50'}`}>
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

      {/* Casino - Vertical Layout */}
      <section className="space-y-6 sm:space-y-8" ref={casinoRef}>
        <div className="text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tighter leading-tight uppercase relative ${casinoVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <span className="text-white">{t('features.over8000')}</span>
            <br />
            <span className="text-pickwin-green italic relative inline-block">
              {t('features.casinoGames')}
            </span>
          </h2>
          <div className={`max-w-3xl mx-auto ${casinoVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: casinoVisible ? '0.3s' : '0s' }}>
          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-center">
            {t('features.casinoDesc')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[t('features.worldClassSlots'), t('features.liveCasino'), t('features.tableGames'), t('features.topProviders'), t('features.highestRTP'), t('features.instantWins')].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-pickwin-green/30 rounded-lg p-3 text-center text-sm font-bold text-white uppercase">
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <a href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" target="_blank" rel="noopener noreferrer" className="bg-pickwin-green text-black font-black px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-white transition-all shadow-xl uppercase text-base sm:text-lg w-full sm:w-auto text-center">
              {t('features.exploreCasino')}
            </a>
            <p className="text-white text-sm mt-3 italic font-bold">refer code : Haas</p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
