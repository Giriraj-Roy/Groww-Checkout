// stores/exampleStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    paymentMethods: [],
    fetchData: (data) => {
        set({ cart: data.products });
        set({ paymentMethods: data.paymentMethods });
    }
}));

export default useCartStore;
