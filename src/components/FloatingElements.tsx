import React from 'react';

const FloatingElements = () => {
  const elements = [
    { id: 1, type: 'star', size: 'w-2 h-2', color: 'bg-yellow-400', position: 'top-20 left-10', delay: '0s' },
    { id: 2, type: 'line', size: 'w-8 h-px', color: 'bg-cyan-400', position: 'top-40 right-20', delay: '1s' },
    { id: 3, type: 'dot', size: 'w-3 h-3', color: 'bg-pink-400', position: 'top-60 left-1/4', delay: '2s' },
    { id: 4, type: 'star', size: 'w-1 h-1', color: 'bg-purple-400', position: 'bottom-40 right-10', delay: '3s' },
    { id: 5, type: 'line', size: 'w-6 h-px', color: 'bg-yellow-400', position: 'bottom-60 left-20', delay: '4s' },
    { id: 6, type: 'dot', size: 'w-2 h-2', color: 'bg-cyan-400', position: 'top-32 right-1/3', delay: '5s' },
    { id: 7, type: 'organic', size: 'w-4 h-6', color: 'bg-pink-400', position: 'bottom-32 left-1/3', delay: '6s' },
    { id: 8, type: 'star', size: 'w-1.5 h-1.5', color: 'bg-green-400', position: 'top-1/2 left-5', delay: '7s' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} ${element.color} ${element.position} animate-float opacity-40`}
          style={{
            animationDelay: element.delay,
            animationDuration: '8s',
            borderRadius: element.type === 'star' ? '50%' : element.type === 'organic' ? '50% 20% 80% 30%' : '0'
          }}
        />
      ))}
      
      {/* Constellation patterns */}
      <div className="absolute top-1/4 right-1/4 opacity-30 animate-pulse" style={{ animationDelay: '2s' }}>
        <svg width="60" height="40" viewBox="0 0 60 40" className="text-cyan-400">
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="30" cy="5" r="1.5" fill="currentColor" />
          <circle cx="50" cy="15" r="2" fill="currentColor" />
          <circle cx="20" cy="30" r="1" fill="currentColor" />
          <line x1="10" y1="10" x2="30" y2="5" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="30" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="10" y1="10" x2="20" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-1/4 opacity-30 animate-pulse" style={{ animationDelay: '4s' }}>
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-pink-400">
          <circle cx="25" cy="10" r="1.5" fill="currentColor" />
          <circle cx="10" cy="25" r="2" fill="currentColor" />
          <circle cx="40" cy="25" r="1" fill="currentColor" />
          <circle cx="25" cy="40" r="1.5" fill="currentColor" />
          <line x1="25" y1="10" x2="10" y2="25" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="10" y1="25" x2="25" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="25" y1="40" x2="40" y2="25" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="40" y1="25" x2="25" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default FloatingElements;