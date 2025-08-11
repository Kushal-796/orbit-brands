import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  type PortfolioItem = {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  };
  const [hoveredItem, setHoveredItem] = useState<PortfolioItem | null>(null);
  
  const categories = ['All', 'Digital Art', 'Illustrations', 'Concept Art', 'Character Design'];
  
  const portfolioItems = [
    {
      id: 1,
      title: "Nebula Dreams",
      category: "Digital Art",
      image: "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg",
      description: "A cosmic journey through swirling nebulae and distant stars"
    },
    {
      id: 2,
      title: "Galactic Warrior",
      category: "Character Design",
      image: "https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg",
      description: "Futuristic character design for sci-fi adventure game"
    },
    {
      id: 3,
      title: "Crystal Worlds",
      category: "Concept Art",
      image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
      description: "Conceptual artwork for an alien crystalline planet"
    },
    {
      id: 4,
      title: "Starship Odyssey",
      category: "Illustrations",
      image: "https://images.pexels.com/photos/23547/pexels-photo-23547.jpeg",
      description: "Epic space battle illustration with detailed spacecraft"
    },
    {
      id: 5,
      title: "Cosmic Phoenix",
      category: "Digital Art",
      image: "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg",
      description: "Mythical phoenix soaring through cosmic storms"
    },
    {
      id: 6,
      title: "Alien Flora",
      category: "Concept Art",
      image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
      description: "Exotic plant life on distant exoplanets"
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-20 px-6 bg-gradient-to-b from-transparent to-gray-800/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore a collection of digital artworks that push the boundaries of imagination and creativity
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated/3D gallery coming soon! */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 60, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 60, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.05 * idx, type: 'spring', bounce: 0.25 }}
                  className="relative group bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl shadow-lg overflow-hidden cursor-pointer flex flex-col items-center justify-center min-h-[320px]"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.img
                    layoutId={`image-${item.id}`}
                    src={item.image}
                    alt={item.title}
                    className="w-40 h-40 object-cover rounded-xl border-4 border-cyan-400/30 mb-4 shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div layout className="text-center px-4">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full">
                      {item.category}
                    </span>
                    <motion.p layout className="text-gray-400 text-sm mt-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {item.description}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    layoutId={`glow-${item.id}`}
                    className="absolute inset-0 pointer-events-none rounded-2xl group-hover:shadow-[0_0_40px_10px_rgba(34,211,238,0.15)] transition-all duration-500"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Fullscreen popup for hovered item */}
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center"
            >
              <img
                src={hoveredItem.image}
                alt={hoveredItem.title}
                className="w-64 h-64 object-cover rounded-2xl border-4 border-cyan-400/30 mb-6 shadow-lg"
              />
              <h3 className="text-3xl font-bold text-cyan-300 mb-2">{hoveredItem.title}</h3>
              <span className="px-4 py-2 text-sm bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full mb-4">
                {hoveredItem.category}
              </span>
              <p className="text-gray-200 text-lg text-center mb-4">{hoveredItem.description}</p>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-2xl font-bold focus:outline-none"
                onClick={() => setHoveredItem(null)}
                aria-label="Close"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;