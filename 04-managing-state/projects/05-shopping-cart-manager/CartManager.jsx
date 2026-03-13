import React, { useReducer } from 'react'
import { cartReducer, initialState } from './cartReducer';

const items = [
    {id: 1, name: "Phone", price: 22500, qty: 25},
    {id: 2, name: "PC", price: 45000, qty: 14},
    {id: 3, name: "AirPod", price: 2000, qty: 30},
    {id: 4, name: "Camera", price: 150000, qty: 4},
];

const CartManager = () => {

    const [state, dispatch] = useReducer(cartReducer, initialState);
    const itemsOnCart = state.itemsOnCart;

    console.log(state);

    return (
        <section className='w-200 mx-auto my-20'>

            <h1 className='text-7xl text-center font-semibold'>
                Shopping
            </h1>

            {/* --- */}
            <div className='flex items-center justify-between'>
                <div className='text-righ mt-10'>
                    <p>Items on Cart : <span className='font-bold ml-2'>{itemsOnCart.length}</span></p>
                    <button 
                    onClick={() => dispatch({type: "clear_cart"})}
                    className='text-xs bg-rose-900 text-white px-2 py-0.5 rounded'>
                        Clear
                    </button>
                </div>
            </div>

            {/* --- */}
            <div className='flex items-center justify-center gap-10 flex-wrap mt-20'>
                {items.map(item => {
                    const onCart = itemsOnCart.filter(i => i.id === item.id);

                    return (
                        <div key={item.id} className='relative bg-gray-200 w-80 px-4 py-1 rounded'>
                            
                            <h2 className='text-4xl font-bold'>{item.name}</h2>
                            
                            <div className='mt-2 text-sm'>
                                <p>Price: <span className='font-bold'>{item.price}</span> </p>
                                <p>Qty: <span className='font-bold'>{item.qty}</span> </p>
                            </div>

                            <div className='absolute top-0 right-4'>
                                <p className='text-xs mt-1'>{onCart.length} item(s) on Cart</p>
                                <div className='flex justify-end gap-1'>
                                    <button 
                                    disabled={onCart.length === 0}
                                    onClick={() => dispatch({type: "add_item", item: item})}
                                    className='bg-emerald-500 w-6 text-center text-xl rounded disabled:opacity-30'>
                                        +
                                    </button>
                                    <button
                                    disabled={onCart.length === 0}
                                    onClick={() => dispatch({type: "delete_item", itemId: item.id})}
                                    className='bg-emerald-500 w-6 text-center text-xl rounded disabled:opacity-30'>
                                        -
                                    </button>
                                </div>
                            </div>

                            
                            <div className='mt-8 flex items-center justify-between'>
                                <button
                                onClick={() => dispatch({type: "add_item", item: item})}
                                className='mx-1 text-sm bg-gray-900 text-white px-2 py-1 rounded disabled:opacity-50'
                                disabled={onCart.length > 0}>
                                    Add to Cart
                                </button>
                                
                                <button
                                onClick={() => dispatch({type: "remove_item", itemId: item.id})}
                                className='mt-2 mx-1 text-xs bg-rose-500 text-white px-2 py-1 rounded disabled:opacity-50'
                                disabled={onCart.length === 0}>
                                    Remove From Cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default CartManager