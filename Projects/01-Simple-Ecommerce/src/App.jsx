import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'
import CartProvider from './context/CartContext'

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className='px-10 md:px-20 lg:px-50 bg-gray-200 min-h-screen'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/products/:productId' element={<ProductDetails/>} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App