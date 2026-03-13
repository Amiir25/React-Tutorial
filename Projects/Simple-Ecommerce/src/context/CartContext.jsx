import { createContext, useContext, useState } from "react";
import { getProductById } from "../data/products";

const CartContext = createContext(null);

export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState([]);

    // Add to cart
    const addToCart = (productId) => {
        const itemExists = cartItems.find(item => item.id === productId);
        if (itemExists) {
            const currentQty = itemExists.qty;
            const updatedItems = cartItems.map(item => 
                item.id === productId
                ? { id: productId, qty: currentQty + 1 }
                : item
            )

            setCartItems(updatedItems);
        } else {
            setCartItems([
                ...cartItems,
                { id: productId, qty: 1 }
            ])
        }
    }

    // Items on cart
    const getCartItemsWithProducts = () => {
        return cartItems.map(item =>({
            ...item,
            product: getProductById(item.id),
        }))
        .filter(item => item.product);
    }

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    }

    // Update item qunatity on cart
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems(
            cartItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        )
    }

    // Get cart total
    const getCartTotal = () => {
        const total = cartItems.reduce((total, item) => {
            const product = getProductById(item.id);
            return total + (product ? product.price * item.qty : 0)
        }, 0);

        return total;
    }

    // Clear Cart
    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider
        value={{
            cartItems, addToCart, getCartItemsWithProducts,
            updateQuantity, removeFromCart, getCartTotal, clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);

    return context;
}