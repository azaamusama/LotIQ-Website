
import React from 'react';
import { Aperture } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  iconSize = 24, 
  textSize = "text-xl",
  showSubtitle = false
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon: Aperture style like the logo */}
      <div 
        className="bg-primary p-1.5 rounded-lg flex items-center justify-center shrink-0"
        style={{ width: iconSize * 1.5, height: iconSize * 1.5 }}
      >
        <Aperture className="text-white" size={iconSize} />
      </div>
      
      <div className="flex flex-col leading-tight">
        <div className={`${textSize} font-bold tracking-tight flex items-center`}>
          <span className="text-slate-900">Lot</span>
          <span className="text-primary">IQ</span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
            complete property intelligence
          </span>
        )}
      </div>
    </div>
  );
};
