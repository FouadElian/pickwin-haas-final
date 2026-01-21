import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero
    'hero.vip': 'VIP access',
    'hero.highestRTP': 'highest RTP',
    'hero.joinNow': 'Join now for exclusive',
    'hero.or': 'or',
    'hero.instant': 'instantly',
    'hero.10x': '10X your betting experience',
    'hero.withSecurity': 'with the real security of a trusted sportsbook.',
    'hero.joinButton': 'Join PickWin Now',
    
    // StatsBar
    'stats.withdrawals': 'Withdrawals',
    'stats.noLimit': 'No-Limit',
    'stats.cashback': 'Cashback',
    'stats.upTo22': 'Up to 22%',
    'stats.casinoGames': 'Casino Games',
    'stats.8000Games': '8,000+',
    'stats.odds': 'Odds',
    'stats.bestMarket': 'Best Market',
    'stats.rtp': 'RTP',
    'stats.highest': 'Highest',
    'stats.support': 'Support',
    'stats.24_7': '24/7 Live',
    
    // Features
    'features.bestOdds': 'BEST ODDS.',
    'features.seriousBetting': 'Serious Betting.',
    'features.sportsbookDesc': 'Experience a professional-grade sportsbook designed for those who know the game. We offer the tightest margins and widest market coverage in the industry.',
    'features.bestOddsIndustry': 'Best odds in the industry',
    'features.hugeCoverage': 'Huge global market coverage',
    'features.liveBetting': 'Live betting with instant execution',
    'features.fastSettlements': 'Automated fast settlements',
    'features.casino': 'CASINO',
    'features.over8000': 'OVER 8,000+',
    'features.casinoGames': 'Casino Games.',
    'features.casinoDesc': 'From the world\'s most popular slots to immersive live dealer experiences, PickWin brings the Las Vegas floor to your screen.',
    'features.worldClassSlots': 'World-Class Slots',
    'features.liveCasino': 'Live Casino',
    'features.tableGames': 'Table Games',
    'features.topProviders': 'Top Providers',
    'features.highestRTP': 'Highest RTP',
    'features.instantWins': 'Instant Wins',
    'features.learnMore': 'Learn More',
    'features.exploreCasino': 'EXPLORE CASINO',
    
    // Benefits
    'benefits.rewards': 'REWARDS & FINANCE',
    'benefits.weeklyReward': 'Gambling Elite Status',
    'benefits.cashback': '22% Cashback',
    'benefits.cashbackDesc': 'Get 12% cashback on your daily losses, automatically credited at the end of each day. Plus an additional 10% bonus, guaranteeing you at least 22% cashback every month. No conditions attached. Every Monday, claim 10% on top of every deposit.',
    'benefits.fastDeposits': 'Fast Deposits',
    'benefits.depositsDesc': 'Instant Interac & Crypto deposits. No delays.',
    'benefits.noLimit': 'No-Limit Withdrawals',
    'benefits.fastPayouts': 'Fast Payouts',
    'benefits.withdrawalsDesc': 'Zero limits. Processed in under 6 hours.',
    
    // Onboarding
    'onboarding.getStarted': 'Get Started in 3 Easy Steps',
    'onboarding.step1': '01',
    'onboarding.step1Title': 'Create Account',
    'onboarding.step1Desc': 'Sign up in seconds. No lengthy forms or unnecessary delays.',
    'onboarding.step2': '02',
    'onboarding.step2Title': 'Make Deposit',
    'onboarding.step2Desc': 'Fund your wallet instantly using Interac or your favorite Crypto.',
    'onboarding.step3': '03',
    'onboarding.step3Title': 'Win & Withdraw',
    'onboarding.step3Desc': 'Start betting on your terms and cash out whenever you want.',
    'onboarding.joinButton': 'JOIN PICKWIN NOW',
    
    // SocialProof
    'social.realPlayers': 'Real Players. Real Payouts.',
    'social.joinCommunity': 'Join a community of thousands who have switched to PickWin.',
    'social.testimonial1': "Finally a book that doesn't limit me after a hot streak. Withdrawals are actually as fast as they say.",
    'social.testimonial2': "The 8,000+ games selection is insane. I hit a massive jackpot on the slots and had the money in my crypto wallet in under 3 hours.",
    'social.testimonial3': "Been following M0st Want9d for years. He was right about PickWin—it's the only place I play now. Trust is everything.",
    'social.testimonial4': "The daily cashback is a game changer. Getting that cashback every day keeps me in the action.",
    'social.testimonial5': "Best odds I've found anywhere. I line shop constantly and PickWin consistently beats the competition. This is where serious bettors should be.",
    'social.testimonial6': "Customer service actually responds and helps. No bots, no runaround. They treat you like a person, not a number.",
    'social.testimonial7': "Live betting execution is instant. No delays, no rejections. When I see value, I can get it down immediately.",
    'social.testimonial8': "No withdrawal limits. I pulled out $50K last week and it was processed in 4 hours. This is what real books do.",
    'social.testimonial9': "The live dealer games are incredible. Real dealers, real atmosphere. Feels like I'm in Vegas without leaving home.",
    'social.testimonial10': "I bet heavy volume and PickWin handles it. No restrictions, no questions. They respect winners here.",
    'social.testimonial11': "Interac deposits hit instantly. Crypto withdrawals are even faster. This is how it should work everywhere.",
    'social.testimonial12': "Following M0st Want9d's plays here has been profitable. The platform handles everything smoothly, no issues.",
  },
  fr: {
    // Hero
    'hero.vip': 'accès VIP',
    'hero.highestRTP': 'RTP le plus élevé',
    'hero.joinNow': 'Rejoignez maintenant pour un',
    'hero.or': 'ou',
    'hero.instant': 'multipliez instantanément',
    'hero.10x': 'par 10 votre expérience de paris',
    'hero.withSecurity': 'avec la vraie sécurité d\'un bookmaker de confiance.',
    'hero.joinButton': 'Rejoignez PickWin Maintenant',
    
    // StatsBar
    'stats.withdrawals': 'Retraits',
    'stats.noLimit': 'Sans Limite',
    'stats.cashback': 'Cashback',
    'stats.upTo22': 'Jusqu\'à 22%',
    'stats.casinoGames': 'Jeux de Casino',
    'stats.8000Games': '8,000+',
    'stats.odds': 'Cotes',
    'stats.bestMarket': 'Meilleur Marché',
    'stats.rtp': 'RTP',
    'stats.highest': 'Le Plus Élevé',
    'stats.support': 'Support',
    'stats.24_7': '24/7 en Direct',
    
    // Features
    'features.bestOdds': 'MEILLEURES COTES.',
    'features.seriousBetting': 'Paris Sérieux.',
    'features.sportsbookDesc': 'Découvrez un bookmaker de niveau professionnel conçu pour ceux qui connaissent le jeu. Nous offrons les marges les plus serrées et la couverture de marché la plus large de l\'industrie.',
    'features.bestOddsIndustry': 'Meilleures cotes de l\'industrie',
    'features.hugeCoverage': 'Énorme couverture de marché mondiale',
    'features.liveBetting': 'Paris en direct avec exécution instantanée',
    'features.fastSettlements': 'Règlements rapides automatisés',
    'features.casino': 'CASINO',
    'features.over8000': 'PLUS DE 8,000+',
    'features.casinoGames': 'Jeux de Casino.',
    'features.casinoDesc': 'Des machines à sous les plus populaires au monde aux expériences immersives de croupiers en direct, PickWin apporte le sol de Las Vegas à votre écran.',
    'features.worldClassSlots': 'Machines à Sous de Classe Mondiale',
    'features.liveCasino': 'Casino en Direct',
    'features.tableGames': 'Jeux de Table',
    'features.topProviders': 'Meilleurs Fournisseurs',
    'features.highestRTP': 'RTP le Plus Élevé',
    'features.instantWins': 'Gains Instantanés',
    'features.learnMore': 'En Savoir Plus',
    'features.exploreCasino': 'EXPLORER LE CASINO',
    
    // Benefits
    'benefits.rewards': 'RÉCOMPENSES & FINANCE',
    'benefits.weeklyReward': 'Statut Gambling Elite',
    'benefits.cashback': '22% de Cashback',
    'benefits.cashbackDesc': 'Recevez 12% de cashback sur vos pertes quotidiennes, crédité automatiquement en fin de journée. Plus un bonus supplémentaire de 10%, vous garantissant au minimum 22% de cashback chaque mois. Aucune condition. Chaque lundi, réclamez 10% en plus sur chaque dépôt.',
    'benefits.fastDeposits': 'Dépôts Rapides',
    'benefits.depositsDesc': 'Dépôts Interac & Crypto instantanés. Pas de délais.',
    'benefits.noLimit': 'Retraits Sans Limite',
    'benefits.fastPayouts': 'Paiements Rapides',
    'benefits.withdrawalsDesc': 'Zéro limite. Traités en moins de 6 heures.',
    
    // Onboarding
    'onboarding.getStarted': 'Commencez en 3 Étapes Simples',
    'onboarding.step1': '01',
    'onboarding.step1Title': 'Créer un Compte',
    'onboarding.step1Desc': 'Inscrivez-vous en quelques secondes. Pas de formulaires longs ou de délais inutiles.',
    'onboarding.step2': '02',
    'onboarding.step2Title': 'Faire un Dépôt',
    'onboarding.step2Desc': 'Alimentez votre portefeuille instantanément en utilisant Interac ou votre Crypto préférée.',
    'onboarding.step3': '03',
    'onboarding.step3Title': 'Gagner & Retirer',
    'onboarding.step3Desc': 'Commencez à parier selon vos conditions et encaissez quand vous voulez.',
    'onboarding.joinButton': 'REJOIGNEZ PICKWIN MAINTENANT',
    
    // SocialProof
    'social.realPlayers': 'Vrais Joueurs. Vrais Paiements.',
    'social.joinCommunity': 'Rejoignez une communauté de milliers de personnes qui sont passées à PickWin.',
    'social.testimonial1': "Enfin un bookmaker qui ne me limite pas après une série gagnante. Les retraits sont vraiment aussi rapides qu'ils le disent.",
    'social.testimonial2': "La sélection de plus de 8,000 jeux est folle. J'ai touché un jackpot énorme sur les machines à sous et j'ai eu l'argent dans mon portefeuille crypto en moins de 3 heures.",
    'social.testimonial3': "Je suis M0st Want9d depuis des années. Il avait raison sur PickWin—c'est le seul endroit où je joue maintenant. La confiance est tout.",
    'social.testimonial4': "Le cashback quotidien change la donne. Recevoir ce cashback chaque jour me garde dans l'action.",
    'social.testimonial5': "Meilleures cotes que j'ai trouvées n'importe où. Je compare constamment et PickWin bat systématiquement la concurrence. C'est là que les parieurs sérieux devraient être.",
    'social.testimonial6': "Le service client répond vraiment et aide. Pas de robots, pas de détours. Ils vous traitent comme une personne, pas comme un numéro.",
    'social.testimonial7': "L'exécution des paris en direct est instantanée. Pas de délais, pas de rejets. Quand je vois de la valeur, je peux la placer immédiatement.",
    'social.testimonial8': "Pas de limites de retrait. J'ai retiré 50 000 $ la semaine dernière et c'était traité en 4 heures. C'est ce que font les vrais bookmakers.",
    'social.testimonial9': "Les jeux de croupiers en direct sont incroyables. De vrais croupiers, une vraie atmosphère. On se croirait à Vegas sans quitter la maison.",
    'social.testimonial10': "Je parie de gros volumes et PickWin gère. Pas de restrictions, pas de questions. Ils respectent les gagnants ici.",
    'social.testimonial11': "Les dépôts Interac arrivent instantanément. Les retraits crypto sont encore plus rapides. C'est comme ça que ça devrait fonctionner partout.",
    'social.testimonial12': "Suivre les paris de M0st Want9d ici a été rentable. La plateforme gère tout en douceur, sans problèmes.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
