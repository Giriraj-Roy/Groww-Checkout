// stores/exampleStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'cart', // name of the item in the storage (must be unique)
    //   storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

const useCartStore = create((set) => ({
    cart: [],
    paymentMethods: [],
    fetchData: (data) => {
        set({ cart: data.products });
        set({ paymentMethods: data.paymentMethods });
    }
}));

export default useCartStore;
