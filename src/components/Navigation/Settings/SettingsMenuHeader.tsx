import React from 'react';

interface MenuHeaderProps {
  title?: string;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ title = "Settings" }) => {
  return (
    <div className="w-full h-10 bg-gray-100 border-b rounded-t-lg border-gray-300 flex items-center px-3">
      <span className="text-gray-900 font-medium text-lg" style={{ letterSpacing: '-0.4px' }}>
        {title}
      </span>
    </div>
  );
};

export default MenuHeader;
