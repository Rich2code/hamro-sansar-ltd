
import React from 'react';

const Logo: React.FC<{ className?: string; hideText?: boolean; size?: 'sm' | 'md' | 'lg' }> = ({ 
  className = "", 
  hideText = false,
  size = 'md'
}) => {
  const iconSize = size === 'sm' ? 'w-12 h-12' : size === 'lg' ? 'w-24 h-24' : 'w-16 h-16';
  const titleSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-5xl' : 'text-3xl';
  const taglineSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[14px]' : 'text-[11px]';

  return (
    <div className={`flex items-center space-x-3 sm:space-x-5 ${className}`}>
      {/* Icon portion - Scalable SVG matching the image */}
      <div className={`${iconSize} flex-shrink-0`}>
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Roof Structure */}
          <path d="M30 220L256 40L482 220V265L256 85L30 265V220Z" fill="#00E5D1" />
          
          {/* Window in the middle */}
          <g fill="#00E5D1">
            <rect x="218" y="195" width="34" height="34" />
            <rect x="260" y="195" width="34" height="34" />
            <rect x="218" y="237" width="34" height="34" />
            <rect x="260" y="237" width="34" height="34" />
          </g>

          {/* Figure 1 - Left side (Raising arms) */}
          <g fill="#00E5D1">
            <circle cx="150" cy="245" r="38" />
            <path d="M75 240C75 240 105 390 150 390C195 390 225 360 245 380L245 400C225 380 195 410 150 410C105 410 55 260 55 260L75 240Z" />
          </g>

          {/* Figure 2 - Right side (Raising arms) */}
          <g fill="#00E5D1">
            <circle cx="362" cy="245" r="38" />
            <path d="M437 240C437 240 407 390 362 390C317 390 287 360 267 380L267 400C287 380 317 410 362 410C407 410 457 260 457 260L437 240Z" />
          </g>

          {/* Curved Base */}
          <path d="M10 425C150 385 362 385 502 425V440C362 400 150 400 10 440V425Z" fill="#00E5D1" />
        </svg>
      </div>

      {!hideText && (
        <div className="flex flex-col justify-center">
          <h1 className={`${titleSize} font-bold tracking-tight text-[#4B87C1] leading-none`}>
            Hamro Sansar Ltd
          </h1>
          <p className={`${taglineSize} font-medium text-[#4B5320] mt-1 whitespace-nowrap opacity-85 italic font-sans`}>
            Helping Hands For Better Future...
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
