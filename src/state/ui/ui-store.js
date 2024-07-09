import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      vendor: null,
      orderForm: null,
      reloadCart: false,
      deleteCart: false,
      isTablet: false,
      login: (email, token) => set(() => ({ user: email, token: token })),
      store: (storeData) => set(() => ({ vendor: storeData })),
      orderFormCreated: (orderFormData) => set(() => ({ orderForm: orderFormData })),
      logout: () => set(() => ({ user: null, token: null, vendor: null, orderForm: null })),
      toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
      toggleReloadCart: () => set(state => ({ reloadCart: !state.reloadCart })),
      toggleDeleteCart: () => set(state => ({ deleteCart: !state.deleteCart })),
      divice: (dato) => set(() => ({ isTablet: dato })),
    }),
    {
      name: 'store', // nombre de la clave de almacenamiento
      storage: createJSONStorage(() => AsyncStorage), // especificar el almacenamiento que se utilizará
    }
  )
);

// Helper function to create JSON storage
function createJSONStorage(getStorage) {
  return {
    getItem: async (name) => {
      const value = await getStorage().getItem(name);
      return value ? JSON.parse(value) : null;
    },
    setItem: async (name, value) => {
      await getStorage().setItem(name, JSON.stringify(value));
    },
    removeItem: async (name) => {
      await getStorage().removeItem(name);
    },
  };
}
