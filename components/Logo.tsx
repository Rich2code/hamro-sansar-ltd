
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Roof */}
        <path d="M30 220L256 40L482 220V260L256 80L30 260V220Z" fill="#00E5D1" />
        {/* Window */}
        <rect x="216" y="190" width="36" height="36" fill="#00E5D1" />
        <rect x="260" y="190" width="36" height="36" fill="#00E5D1" />
        <rect x="216" y="234" width="36" height="36" fill="#00E5D1" />
        <rect x="260" y="234" width="36" height="36" fill="#00E5D1" />
        {/* Figures - Left */}
        <circle cx="150" cy="240" r="35" fill="#00E5D1" />
        <path d="M80 230C80 230 110 380 150 380C190 380 220 350 240 370L240 390C220 370 190 400 150 400C110 400 60 250 60 250L80 230Z" fill="#00E5D1" />
        {/* Figures - Right */}
        <circle cx="362" cy="240" r="35" fill="#00E5D1" />
        <path d="M432 230C432 230 402 380 362 380C322 380 292 350 272 370L272 390C292 370 322 400 362 400C402 400 452 250 452 250L432 230Z" fill="#00E5D1" />
        {/* Base Curve */}
        <path d="M10 420C150 380 362 380 502 420V435C362 395 150 395 10 435V420Z" fill="#00E5D1" />
      </svg>
    </div>
  );
};

export default Logo;
