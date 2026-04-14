import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const Checkout = () => {

  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();

  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  const placeOrder = () => {
    alert("Order Success");
    clearCart();
  }

  return (
    <section className='mt-10'>
      
      <h1 className='text-3xl font-semibold'>Checkout</h1>

      <div className='flex items-start justify-between'>
        <div className='mt-10 bg-white w-150 min-h-80 p-4'>
          <h2 className='text-xl'>Order Summery</h2>
          
          {cartItems.map(item => (
            <div key={item.id} className='flex items-start justify-between my-4'>
              <div className='flex items-start gap-4'>
                <img src={item.product.image} alt={item.product.name}
                className='w-40' />
                <div>
                  <p className='font-semibold'>{item.product.name}</p>
                  <p className='text-sm mt-2'>${item.product.price} each</p>
                </div>
              </div>

              <div className='flex flex-col items-end'>
                <div className='flex items-center gap-4'>
                  <button
                  onClick={() => updateQuantity(item.id, item.qty - 1)}
                  className='font-semibold cursor-pointer'>
                    -
                  </button>

                  <span>{item.qty}</span>
                  
                  <button
                  onClick={() => updateQuantity(item.id, item.qty + 1)}
                  className='font-semibold cursor-pointer'>
                    +
                  </button>
                </div>
                
                <p className='text-xs mt-2 font-bold'>
                  ${ (item.product.price * item.qty).toFixed(2) } Total
                </p>

                <button 
                onClick={() => removeFromCart(item.id)}
                className='text-sm mt-2 bg-gray-600 text-white px-2 py-1
                rounded cursor-pointer'>
                  Remove
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Checkout summary */}
        <div className='mt-10 bg-white w-70 p-4'>
          <h2 className='text-xl mb-4'>Total</h2>
          <div className='flex item-center justify-between my-4'>
            <p>Subtotal:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className='flex item-center justify-between my-4 border-b pb-4'>
            <p>Total:</p>
            <p className='text-blue-600 font-semibold text-xl'>${total.toFixed(2)}</p>
          </div>
          <button
          onClick={placeOrder}
          className='bg-blue-600 text-white w-full py-2 rounded text-xl'>
            Place Order
          </button>
        </div>

      </div>

      
    </section>
  )
}

export default Checkout