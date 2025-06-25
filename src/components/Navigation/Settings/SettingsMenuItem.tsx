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
      <div className="flex items-center gap-x-2">
        {item.icon && <item.icon className={`${item.color} h-[16px] w-[16px]`} fill={item?.fill || 'none'} />}
        <span className={`${item.color} font-medium text-sm mt-[1px]`}>{item.label}</span>
      </div>
    </button>
  );
};

export default MenuItem;
