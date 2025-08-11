import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const heroRef = useRef(null);
  const planetRef = useRef(null);
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
    if (planetRef.current) {
      gsap.fromTo(
        planetRef.current,
        { scale: 0.7, rotate: 0 },
        {
          scale: 1,
          rotate: 360,
          duration: 2,
          ease: 'elastic.out(1,0.5)',
          scrollTrigger: {
            trigger: planetRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent animate-glow">
                  Orbit Brands
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Launch Your Brand
                Beyond the Stars
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full text-black font-bold text-lg hover:from-cyan-400 hover:to-cyan-300 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50 flex items-center justify-center">
                Get a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-pink-400 rounded-full text-pink-400 font-bold text-lg hover:bg-pink-400 hover:text-black transition-all transform hover:scale-105">
                View Our Work
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-sm text-gray-400">Brands Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24h</div>
                <div className="text-sm text-gray-400">Quick Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central Planet with Brand Ring */}
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-spin-slow relative" ref={planetRef}>
                  <motion.div
                    className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-spin-slow relative"
                    initial={{ scale: 0.7, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 2, type: 'spring', bounce: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <motion.span
                        className="text-white font-bold text-lg drop-shadow-lg"
                        animate={{
                          scale: [1, 1.15, 1],
                          textShadow: [
                            '0 0 8px #fff, 0 0 16px #0ff',
                            '0 0 24px #fff, 0 0 32px #0ff',
                            '0 0 8px #fff, 0 0 16px #0ff'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        BRAND
                      </motion.span>
                    </div>
                    {/* Planet Ring */}
                    <div className="absolute inset-0 border-4 border-cyan-400/30 rounded-full scale-150 animate-pulse"></div>
                    <div className="absolute inset-0 border-2 border-yellow-400/20 rounded-full scale-125"></div>
                  </motion.div>
                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <Rocket className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
                {/* Floating Constellation Elements */}
                <div className="absolute top-0 right-0 opacity-60">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <div className="w-1 h-px bg-pink-400"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <div className="w-1 h-px bg-cyan-400"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 opacity-60">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="w-px h-4 bg-cyan-400"></div>
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <div className="w-px h-3 bg-pink-400"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;