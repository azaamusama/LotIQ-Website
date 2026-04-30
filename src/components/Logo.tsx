
import React from 'react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  iconSize = 32, 
  textSize = "text-xl",
  showSubtitle = false
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://raw.githubusercontent.com/azaamusama/LotIQ-Website/4da0b171bc1b97a4ca0f618a61e63be0401de8f6/logo-lot.svg"
        alt="LotIQ Logo"
        style={{ height: iconSize }}
        className="w-auto h-auto shrink-0"
      />
    </div>
  );
};
