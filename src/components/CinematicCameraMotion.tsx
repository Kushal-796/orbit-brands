import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const CinematicCameraMotion = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Animation sequence: slow zoom out + drift, pulse, then resume
    const sequence = async () => {
      await controls.start({
        scale: 1,
        x: 0,
        y: 0,
        transition: { duration: 0, ease: 'linear' }
      });
      await controls.start({
        scale: 0.93,
        x: 40,
        y: -30,
        transition: { duration: 2, ease: 'linear' }
      });
      // Pulse (rapid zoom/push)
      await controls.start({
        scale: 0.89,
        x: 60,
        y: -50,
        transition: { duration: 0.25, ease: 'easeInOut' }
      });
      // Resume slow zoom out and drift
      await controls.start({
        scale: 0.85,
        x: 80,
        y: -70,
        transition: { duration: 2.5, ease: 'linear' }
      });
      // Continue drifting out
      await controls.start({
        scale: 0.8,
        x: 120,
        y: -100,
        transition: { duration: 2.5, ease: 'linear' }
      });
    };
    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ scale: 1, x: 0, y: 0 }}
      animate={controls}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    />
  );
};

export default CinematicCameraMotion;
