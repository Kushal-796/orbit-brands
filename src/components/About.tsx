import { motion } from 'framer-motion';
import { Palette, Zap, Heart } from 'lucide-react';
import FloatingPlanet from './FloatingPlanet';

const About = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Vision",
      description: "Transforming abstract concepts into vibrant digital masterpieces"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Tech",
      description: "Using the latest digital tools to push artistic boundaries"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion-Driven",
      description: "Every piece is crafted with love and attention to detail"
    }
  ];

  return (
    <section id="about" className="relative py-20 px-6">
      <FloatingPlanet 
        size="w-20 h-20" 
        color="bg-gradient-to-br from-green-400 to-cyan-500" 
        position="top-10 right-10"
        animationDelay="1s"
      />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About the Artist
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to a universe where creativity knows no bounds. As a digital artist and illustrator, 
              I specialize in bringing fantastical worlds to life through vibrant colors, dynamic compositions, 
              and imaginative storytelling.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 5 years of experience in digital art, I've collaborated with clients across various 
              industries, from indie game developers to major publishing houses, creating artwork that 
              captures the essence of their vision and elevates their projects to new heights.
            </p>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="text-6xl">🎨</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated/3D features will be added here with GSAP/Framer Motion. */}
        <div className="flex flex-wrap justify-center gap-12 mt-12">
          {/* Example: Animated floating icons using Framer Motion */}
          {features.map((feature, idx) => (
            <div key={idx} className="relative w-32 h-32 flex flex-col items-center justify-center">
              <motion.div
                initial={{ y: 40, opacity: 0, rotate: -10 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 * idx }}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 shadow-lg mb-2"
              >
                {feature.icon}
              </motion.div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;