import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'
// our entire store page
const cartStore = (set) => ({

  // cart state
  cart: 0,
  setCart: (cartID) => {
    set((state) => ({
      cart: cartID,
    }))
  },
  increaseCartByOne: () => set((state) => ({ cart: state.cart + 1 })),

})

const useCartStore = create(
  devtools(
    persist(cartStore, {
      name: "cart",
    })
  )
)


export default useCartStore;