import { create } from "zustand";

const usePaymentStore = create((set) => ({
    paymentMethod: '',
    totalPrice: null,
    setPrice: (price) => set({ totalPrice: price }),
    setPaymentMethod: (method) => set({ paymentMethod: method })
}));

export default usePaymentStore;