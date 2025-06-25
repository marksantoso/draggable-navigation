import React from 'react';
import { IMenuItem } from '@/config/navigation';

interface MenuItemProps {
  item: IMenuItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  if (item.divider) {
    return <div className="w-full h-px bg-gray-200" />;
  }

  return (
    <button
      className="w-full flex items-center justify-start px-2 py-1.5 rounded-md hover:bg-gray-50 hover:cursor-pointer transition-colors duration-150"
      onClick={item.onClick}
    >
      <div className="flex items-center space-x-1.5">
        {item.icon && <item.icon className={item.color} />}
        <span className="text-gray-900 font-medium text-sm">{item.label}</span>
      </div>
    </button>
  );
};

export default MenuItem;
