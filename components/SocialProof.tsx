import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const getTestimonials = (t: (key: string) => string) => [
  {
    name: "Alex M.",
    text: t('social.testimonial1'),
    stars: 5
  },
  {
    name: "Sarah T.",
    text: t('social.testimonial2'),
    stars: 5
  },
  {
    name: "James D.",
    text: t('social.testimonial3'),
    stars: 5
  },
  {
    name: "Marco P.",
    text: t('social.testimonial4'),
    stars: 5
  },
  {
    name: "Ryan K.",
    text: t('social.testimonial5'),
    stars: 5
  },
  {
    name: "Jessica L.",
    text: t('social.testimonial6'),
    stars: 5
  },
  {
    name: "Mike R.",
    text: t('social.testimonial7'),
    stars: 5
  },
  {
    name: "David C.",
    text: t('social.testimonial8'),
    stars: 5
  },
  {
    name: "Emma W.",
    text: t('social.testimonial9'),
    stars: 5
  },
  {
    name: "Chris B.",
    text: t('social.testimonial10'),
    stars: 5
  },
  {
    name: "Lisa H.",
    text: t('social.testimonial11'),
    stars: 5
  },
  {
    name: "Tom S.",
    text: t('social.testimonial12'),
    stars: 5
  }
];

const SocialProof: React.FC = () => {
  const { t } = useLanguage();
  const testimonials = getTestimonials(t);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  // Auto-advance when not paused
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Update slider position
  useEffect(() => {
    if (sliderRef.current) {
      // Each card is calc(100vw - 3rem) wide, with 1rem gap (gap-4)
      // So we move by: card width + gap = (100vw - 3rem) + 1rem = 100vw - 2rem
      sliderRef.current.style.transform = `translateX(calc(-${currentIndex} * (100vw - 2rem)))`;
    }
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    // Resume auto-advance after 5 seconds of no interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section ref={ref} className="pt-12 sm:pt-16 md:pt-20">
      <div className="text-center mb-8 sm:mb-16 relative">
        <h2 className={`text-2xl sm:text-3xl font-black italic tracking-tighter uppercase mb-2 relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          {t('social.realPlayers')}
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm font-medium">{t('social.joinCommunity')}</p>
      </div>

      {/* Mobile: Single Card Slider with Peek */}
      <div className="md:hidden relative px-4 overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{ width: 'max-content' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-950 border border-pickwin-green/20 p-6 rounded-3xl flex flex-col justify-between hover:bg-gray-800 transition-all shadow-xl flex-shrink-0 relative overflow-hidden group" style={{ width: 'calc(100vw - 3rem)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-pickwin-green/5 via-transparent to-pickwin-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              {/* Bandana pattern overlay - more visible */}
              <div className="absolute top-2 right-2 w-8 h-8 opacity-15 pointer-events-none bandana-pattern border border-white/20"></div>
              <div>
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(t.stars)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-pickwin-green fill-current relative" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white font-medium mb-6 leading-relaxed italic">"{t.text}"</p>
              </div>
              <div>
                <p className="text-white font-black italic text-lg">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? 'w-8 h-2 bg-pickwin-green'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-950 border border-pickwin-green/20 p-6 rounded-3xl flex flex-col justify-between hover:bg-gray-800 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-pickwin-green/5 via-transparent to-pickwin-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            {/* Bandana pattern overlay - more visible */}
            <div className="absolute top-2 right-2 w-8 h-8 opacity-15 pointer-events-none bandana-pattern border border-white/20"></div>
            <div>
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(t.stars)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-pickwin-green fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-white font-medium mb-6 leading-relaxed italic">"{t.text}"</p>
            </div>
            <div>
              <p className="text-white font-black italic text-lg">{t.name}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SocialProof;
