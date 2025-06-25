import { Info, FileText, CheckCircle } from 'lucide-react';
import { settingsMenuItems } from './settings';

export interface IMenuItem {
  id: string;
  label: string;
  icon: typeof Info | null;
  color?: string;
  divider?: boolean;
  onClick?: () => void;
}

export interface INavigationItem {
  id: string;
  name: string;
  icon: typeof Info | typeof FileText | typeof CheckCircle;
  iconColor: string;
  activeIconColor: string;
  isActive: boolean;
  isSettingsActive: boolean;
  settings: IMenuItem[];
}

// Define navigation items separately for better maintainability
const navigationConfig: INavigationItem[] = [
    {
      id: 'info',
      name: 'Info',
      icon: Info,
      iconColor: 'text-gray-500',
      activeIconColor: 'text-yellow-500',
      isActive: false,
      isSettingsActive: false,
      settings: [...settingsMenuItems]
    },
    {
      id: 'details',
      name: 'Details',
      icon: FileText,
      iconColor: 'text-gray-500',
      activeIconColor: 'text-yellow-500',
      isActive: false,
      isSettingsActive: false,
      settings: [...settingsMenuItems]
    },
    {
      id: 'other',
      name: 'Other',
      icon: FileText,
      iconColor: 'text-gray-500',
      activeIconColor: 'text-yellow-500',
      isActive: false,
      isSettingsActive: false,
      settings: [...settingsMenuItems]
    },
    {
      id: 'ending',
      name: 'Ending',
      icon: CheckCircle,
      iconColor: 'text-gray-500',
      activeIconColor: 'text-yellow-500',
      isActive: false,
      isSettingsActive: false,
      settings: [...settingsMenuItems]
    },
  ]


  export { navigationConfig };