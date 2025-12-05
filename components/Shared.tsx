import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", filled = false }) => {
  return (
    <span 
      className={`material-symbols-outlined ${filled ? 'fill' : ''} ${className}`}
    >
      {name}
    </span>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  fullWidth?: boolean;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = "", 
  icon,
  ...props 
}) => {
  const baseStyle = "flex items-center justify-center gap-2 rounded-xl h-12 px-6 font-bold text-base transition-transform active:scale-95";
  const variants = {
    primary: "bg-primary text-zinc-900 shadow-lg shadow-primary/30 hover:bg-primary/90",
    secondary: "bg-primary/20 text-primary",
    outline: "border-2 border-primary text-primary bg-transparent",
    ghost: "bg-transparent text-zinc-600 hover:bg-zinc-100"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
};

export const Header: React.FC<{
  title?: string;
  leftIcon?: string;
  rightIcon?: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  transparent?: boolean;
}> = ({ title, leftIcon = "arrow_back", rightIcon, onLeftClick, onRightClick, transparent = false }) => {
  return (
    <header className={`sticky top-0 z-20 flex items-center justify-between p-4 ${transparent ? 'bg-transparent' : 'bg-background-light/80 backdrop-blur-sm border-b border-zinc-200'}`}>
      <button onClick={onLeftClick} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5">
        <Icon name={leftIcon} />
      </button>
      {title && <h1 className="text-lg font-bold text-center flex-1">{title}</h1>}
      <div className="w-10 flex items-center justify-center">
        {rightIcon && (
          <button onClick={onRightClick} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5">
            <Icon name={rightIcon} />
          </button>
        )}
      </div>
    </header>
  );
};

export const BottomNav: React.FC<{
  activeTab: string;
  onTabChange: (tab: any) => void;
}> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'HOME', icon: 'home', label: 'Trang chủ' },
    { id: 'SCHEDULE', icon: 'calendar_today', label: 'Lịch' },
    { id: 'HEALTH', icon: 'monitor_heart', label: 'Sức khỏe' },
    { id: 'PROFILE', icon: 'person', label: 'Hồ sơ' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-sm border-t border-zinc-200 shadow-[0_-1px_10px_rgba(0,0,0,0.05)] z-30">
      <div className="flex h-full items-center justify-around px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 w-1/4 transition-colors ${isActive ? 'text-primary' : 'text-zinc-400'}`}
            >
              <Icon name={tab.icon} filled={isActive} />
              <span className={`text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
