import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

// Only keep one ServiceType, one HorizontalScrollServices, and one Services component

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Globe, Zap, Target, Palette, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type ServiceType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

function HorizontalScrollServices({ services }: { services: ServiceType[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const totalWidth = services.length * 340; // card width + gap
  const x = useTransform(scrollYProgress, [0, 1], [0, -(totalWidth - window.innerWidth + 64)]);
  return (
    <div ref={containerRef} className="sticky top-32 h-[400px] w-full overflow-visible">
      <motion.div style={{ x }} className="flex gap-8 h-full items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="group min-w-[320px] max-w-[320px] p-8 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 relative"
          >
            {/* Glowing background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <div className="relative z-10">
              {/* Icon with planet ring effect */}
              <div className="relative mb-6">
                <div className={`text-transparent bg-gradient-to-br ${service.color} bg-clip-text group-hover:animate-pulse`}>
                  {service.icon}
                </div>
                {/* Ring effect around icon */}
                <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br ${service.color} rounded-full scale-150 opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {service.description}
              </p>
              {/* Constellation dots */}
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                <div className="flex space-x-1">
                  <div className={`w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                  <div className={`w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                  <div className={`w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  const services: ServiceType[] = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Launch Your Services",
      description: "Get your startup off the ground with a complete brand identity that propels you to success.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Cosmic Brand Identity",
      description: "Create a stellar brand that stands out in the vast universe of competitors.",
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast Design",
      description: "Rapid prototyping and design iterations to get your brand to market at light speed.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Positioning",
      description: "Navigate the market landscape with precision-targeted brand positioning.",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Visual Universe",
      description: "Complete visual systems that work across all dimensions of your business.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Growth Trajectory",
      description: "Brands designed to scale as your startup reaches for the stars.",
      color: "from-cyan-400 to-purple-500"
    }
  ];

  return (
    <section ref={servicesRef} className="relative py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to build a brand that's truly out of this world
          </p>
        </div>

        <div className="relative" style={{ height: '400px', overflow: 'hidden' }}>
          <HorizontalScrollServices services={services} />
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Launch?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Join hundreds of startups who've already launched their brands beyond the stars
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold text-lg hover:from-pink-400 hover:to-purple-400 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50">
              Start Your Journey
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Services;