import { navigationConfig, INavigationItem } from '@/config/navigation';

export const useNavigationItems = (activePageId: string, navigation: INavigationItem[] = navigationConfig): INavigationItem[] => {
 
  return navigation.map((item) => {
    const navItem = navigation.find(nav => nav.id === item.id)!;
    const { icon: Icon, iconColor, activeIconColor } = navItem;

    return {
      id: item.id,
      name: item.name,
      icon: Icon || null,
      iconColor: iconColor,
      activeIconColor: activeIconColor,
      isActive: item.id === activePageId,
      isSettingsActive: item.isSettingsActive,
      settings: item.settings,
    }
  });
};