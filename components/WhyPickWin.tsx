import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import rouletteImage from './img/Roulette-wheel.svg.png';

const WhyPickWin: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Sportsbook Section */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start relative">
            {/* Decorative roulette wheel */}
            <img 
              src={rouletteImage} 
              alt="Roulette wheel" 
              className="absolute -top-6 -right-6 w-11 h-11 sm:w-14 sm:h-14 opacity-30 object-contain z-0"
              style={{ filter: 'drop-shadow(0 0 15px rgba(19,212,130,0.6))' }}
            />
            <div className="bg-gradient-to-r from-gray-900 to-gray-950 p-6 sm:p-8 rounded-2xl border-l-4 border-pickwin-green transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(19,212,130,0.6)] relative z-10 animate-slide-in-left" style={{ opacity: 0 }}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 leading-tight animate-slide-up" style={{ opacity: 0 }}>
                <span className="text-white block">{t('features.bestOdds')}</span>
                <span className="text-pickwin-green block" style={{ textShadow: '0 0 20px rgba(19,212,130,0.8), 0 0 30px rgba(168,85,247,0.6)' }}>
                  {t('features.seriousBetting')}
                </span>
              </h3>
              <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
                {t('features.sportsbookDesc')}
              </p>
              <ul className="space-y-3 mb-6">
                {[t('features.bestOddsIndustry'), t('features.hugeCoverage'), t('features.liveBetting'), t('features.fastSettlements')].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <span className="text-pickwin-green text-xl font-black">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-pickwin-green text-black font-black px-6 py-3 rounded-lg hover:bg-white transition-all"
              >
                {t('features.viewSportsbook')}
              </a>
              <p className="text-white/60 text-sm mt-2">{t('features.referCode')}</p>
            </div>
            
            {/* Odds Display */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 border-2 border-pickwin-green/40 rounded-2xl overflow-hidden shadow-2xl">
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
                                <div className={`text-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-r ${match.highlight ? 'bg-pickwin-green/20' : 'bg-gray-900/50'}`}>
                                  <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">2</div>
                                  <div className={`text-xs sm:text-sm font-black ${match.highlight ? 'text-pickwin-green' : 'text-white'}`}>
                                    {match.odds2}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className={`text-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-l ${match.highlight ? 'bg-pickwin-green/20' : 'bg-gray-900/50'}`}>
                                  <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">1</div>
                                  <div className={`text-xs sm:text-sm font-black ${match.highlight ? 'text-pickwin-green' : 'text-white'}`}>
                                    {match.odds1}
                                  </div>
                                </div>
                                <div className={`text-center px-2 sm:px-3 py-1.5 sm:py-2 ${match.highlight ? 'bg-pickwin-green/20' : 'bg-gray-900/50'}`}>
                                  <div className="text-[8px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">draw</div>
                                  <div className={`text-xs sm:text-sm font-black ${match.highlight ? 'text-pickwin-green' : 'text-white'}`}>
                                    {match.oddsX}
                                  </div>
                                </div>
                                <div className={`text-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-r ${match.highlight ? 'bg-pickwin-green/20' : 'bg-gray-900/50'}`}>
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
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pickwin-green/5 to-transparent pointer-events-none animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Casino Section */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center relative">
            <div className="group relative overflow-hidden rounded-2xl border border-pickwin-green/30 order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1518895312237-a9e23508077d?q=80&w=1600&auto=format&fit=crop"
                alt="Casino games"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="bg-gradient-to-r from-gray-900 to-gray-950 p-6 sm:p-8 rounded-2xl border-l-4 border-pickwin-green transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(19,212,130,0.6)] order-1 lg:order-2 animate-slide-in-left" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight animate-slide-up" style={{ opacity: 0 }}>
                <span className="text-white block sm:inline" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
                  {t('features.over8000')}
                </span>
                {' '}
                <span className="text-pickwin-green block sm:inline" style={{ textShadow: '0 0 20px rgba(19,212,130,0.8), 0 0 30px rgba(168,85,247,0.6)' }}>
                  {t('features.casinoGames')}
                </span>
              </h3>
              <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
                {t('features.casinoDesc')}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                {[
                  { text: t('features.worldClassSlots'), col: 1 },
                  { text: t('features.liveCasino'), col: 2 },
                  { text: t('features.tableGames'), col: 1 },
                  { text: t('features.topProviders'), col: 2 },
                  { text: t('features.highestRTP'), col: 1 },
                  { text: t('features.instantWins'), col: 2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium italic uppercase">
                    <span className="text-pickwin-green text-lg">✦</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <a 
                href="https://pwpartners.cxclick.com/visit/?bta=35339&brand=pickwin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gradient-to-b from-pickwin-green to-pickwin-green/90 text-black font-black px-8 py-4 rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(19,212,130,0.5)] uppercase"
              >
                {t('features.exploreCasino')}
              </a>
              <p className="text-white/60 text-sm mt-2">{t('features.referCode')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPickWin;
