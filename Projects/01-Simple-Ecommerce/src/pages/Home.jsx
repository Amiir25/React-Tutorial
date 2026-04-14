import React from 'react'
import { getProducts } from '../data/products'
import ProductCard from '../components/ProductCard';

const Home = () => {

    const products = getProducts();

  return (
    <section className='mt-20'>

        {/* Titles */}
        <div className='text-center'>
            <h1 className='text-5xl font-bold'>
                Welcome to ShopHub
            </h1>
            <p className='text-xl font-light mt-2'>
                Discover amazing products at great prices
            </p>
        </div>

        {/* Products */}
        <div className='mt-20'>
            <h1 className='text-xl font-bold mb-6'> Our Products</h1>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
                {products.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Home