import { create } from 'zustand'
import { useNavigationItems } from '@/hooks/useNavigationItems'
import { INavigationItem } from '@/config/navigation';
import { FileText } from 'lucide-react';
import { settingsMenuItems } from '@/config/settings';

interface NavigationState {
  setCurrentPage: (page: string) => void
  navigateTo: (page: string) => void,
  reorderItems: (newOrder: INavigationItem[]) => void;
  navigation: INavigationItem[],
  toggleSettings: (id: string, isSettingsActive: boolean) => void,
  addPage: (order: number) => void,
}

const useNavigationStore = create<NavigationState>((set) => {
  const initialPage = '';

  return {
    navigation: useNavigationItems(initialPage),

    setCurrentPage: (currentPage: string) => set((state) => ({
      navigation: useNavigationItems(currentPage, state.navigation)
    })),

    navigateTo: (id: string) => set((state) => ({
      navigation: useNavigationItems(id, state.navigation)
    })),

    reorderItems: (newOrder: INavigationItem[]) => set(() => ({
      navigation: newOrder
    })),

    toggleSettings: (id: string, isSettingsActive: boolean) => set((state) => {
      return {
        navigation: state.navigation.map((item) => ({
          ...item,
          isSettingsActive: item.id === id ? isSettingsActive : false
        }))
      }
    }),

    addPage: (order: number) => set((state) => {
      // Find the next available ID
      let baseId = 'new-page';
      let counter = 1;
      let newId = baseId;
      
      while (state.navigation.some(page => page.id === newId)) {
        counter++;
        newId = `${baseId}-${counter}`;
      }

      const newPage = {
        id: newId,
        name: `New page${counter > 1 ? ' ' + counter : ''}`,
        icon: FileText,
        iconColor: 'text-gray-500',
        activeIconColor: 'text-yellow-500',
        isActive: false,
        isSettingsActive: false,
        settings: settingsMenuItems
      };

      const newNavigation = [...state.navigation];
      newNavigation.splice(order, 0, newPage);

      return {
        navigation: newNavigation
      };
    })
  };
});

export { useNavigationStore };