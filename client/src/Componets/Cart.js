// import React from 'react';

// export default function Cart({ cart, setCart }) {
//   const getTotalSum = () => {
//     return cart.reduce(
//       (sum, { cost, quantity }) => sum + cost * quantity,
//       0
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const setQuantity = (product, amount) => {
//     const newCart = [...cart];
//     newCart.find(
//       (item) => item.name === product.name
//     ).quantity = amount;
//     setCart(newCart);
//   };

//   const removeFromCart = (productToRemove) => {
//     setCart(
//       cart.filter((product) => product !== productToRemove)
//     );
//   };

//   return (
//     <>
//       <h1>Cart</h1>
//       {cart.length > 0 && (
//         <button onClick={clearCart}>Clear Cart</button>
//       )}
//       <div className="products">
//         {cart.map((product, idx) => (
//           <div className="product" key={idx}>
//             <h3>{product.name}</h3>
//             <h4>${product.cost}</h4>
//             <input
//               value={product.quantity}
//               onChange={(e) =>
//                 setQuantity(
//                   product,
//                   parseInt(e.target.value)
//                 )
//               }
//             />
//             <img src={product.image} alt={product.name} />
//             <button onClick={() => removeFromCart(product)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div>Total Cost: ${getTotalSum()}</div>
//     </>
//   );
// }








import React from 'react'
import ItemCard from "./ItemCard";
import { useContext } from 'react';
import { ItemsContext } from '../context/ItemsProvider';





function Cart({ onRemovefromCart, OnAddToCart }) {
  const { items, setItems } = useContext(ItemsContext)
  const inCart = items?.filter((item) => item.cart)

  console.log(items)
  const allItems = inCart?.map((item) => (
    <ItemCard key={item.id} item={item} onRemoveFromCart={onRemovefromCart} onAddToCart={OnAddToCart} />
  ))



  return (
    <div>
      <h1 className=' cartTitle'>Items In Cart</h1>
      <div className='itemsInCart'>{allItems}</div>
    </div>
  )
}




export default Cart