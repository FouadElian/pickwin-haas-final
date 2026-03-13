import React from 'react';
const ImageShowcase: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Large Image */}
          <div className="group relative overflow-hidden rounded-2xl border border-pickwin-green/30">
            <img
              src="https://images.unsplash.com/photo-1518895312237-a9e23508077d?q=80&w=1600&auto=format&fit=crop"
              alt="Sportsbook odds board"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Stacked Images */}
          <div className="grid gap-6 sm:gap-8">
            <div className="group relative overflow-hidden rounded-2xl border border-pickwin-green/30">
              <img
                src="https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1200&auto=format&fit=crop"
                alt="Casino roulette table"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-pickwin-green/30">
              <img
                src="https://images.unsplash.com/photo-1516274626895-055a99214f08?q=80&w=1200&auto=format&fit=crop"
                alt="Sports betting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
