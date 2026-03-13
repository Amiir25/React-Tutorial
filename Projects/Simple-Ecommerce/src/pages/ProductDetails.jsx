import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';

const ProductDetails = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const foundProduct = getProductById(productId);

        if (!foundProduct) {
            navigate("/");
            return;
        }

        setProduct(foundProduct);

    }, [productId])

    if (!product) {
        return <h1>Loading...</h1>
    }

    return (
        <section className='flex items-start gap-6 mt-10 bg-white p-4 rounded'>
            <div className='h-100 flex-1'>
                <img src={product.image} alt={product.name}
                className='w-full h-full object-cover' />
            </div>

            <div className='flex-1'>
                <h1 className='text-2xl font-semibold'>{product.name}</h1>
                <p className='text-blue-600 font-bold my-4'>${product.price}</p>
                <p>{product.description}</p>
                <button className='mt-4 bg-blue-600 text-white px-4 py-1 rounded'>
                    Add to Cart</button>
            </div>
        </section>
    )
}

export default ProductDetails