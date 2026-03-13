import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <AuthProvider>
      <div className='px-10 md:px-20 lg:px-50 bg-gray-200 min-h-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/products/:productId' element={<ProductDetails/>} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App