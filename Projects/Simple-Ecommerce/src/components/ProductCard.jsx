import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {

    const { cartItems, addToCart } = useCart();
    const prodcutInCart = cartItems.find(item => item.id === product.id);
    const productQuantityLabel = prodcutInCart ? `(${prodcutInCart.qty})` : "";

    return (
        <div className='bg-white'>
            <div className='h-52 mb-4'>
                <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
            </div>
            <div className='font-semibold p-2'>
                <h2>{product.name}</h2>
                <p className='text-blue-600 my-2'>${product.price}</p>
                <div className='flex items-center gap-4'>
                    <Link
                    to={`products/${product.id}`}
                    className='bg-gray-600 text-white px-2 py-1 rounded cursor-pointer'>
                        View Detail
                    </Link>
                    <button
                    onClick={() => addToCart(product.id)}
                    className='bg-blue-600 text-white px-2 py-1 rounded cursor-pointer'>
                        Add to Cart { productQuantityLabel }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard