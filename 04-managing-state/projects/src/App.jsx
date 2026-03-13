import React from 'react'
import SignUpPage from '../01-signup-form/SignUpPage'
import UserDirectory from '../02-live-user-directory/UserDirectory'
import CartManager from '../05-shopping-cart-manager/CartManager'
import ThemeSwitcher from '../06-theme-switcher-dashboard/ThemeSwitcher'


const App = () => {
  return (
    <div>
      {/* <SignUpPage/>
      <UserDirectory/>
      <CartManager/> */}
      <ThemeSwitcher/>
    </div>
  )
}

export default App