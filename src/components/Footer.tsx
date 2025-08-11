import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  return (
    <footer ref={footerRef} className="relative py-16 px-6 border-t border-gray-800/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="w-8 h-8 text-cyan-400 animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cosmic Brands
              </span>
            </div>
            <p className="text-gray-400">
              Launching startups beyond the stars with stellar branding that reaches new galaxies of success.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Brand Identity</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Logo Design</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Visual Systems</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Brand Strategy</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Our Work</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>hello@cosmicbrands.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Cosmic Brands. All rights reserved. 
            <span className="ml-2 text-cyan-400">Made with ❤️ in the galaxy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;