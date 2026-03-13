import React from 'react';

const ChallengeHeader: React.FC = () => {
  return (
    <section className="relative bg-black border-b border-pickwin-green/20 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          {/* Challenge Title */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              SURVIVRE EN PARIANT
            </h2>
          </div>
          
          {/* Day Counter */}
          <div className="bg-pickwin-green text-black font-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xl sm:text-2xl md:text-3xl">
            JOUR 170
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeHeader;
