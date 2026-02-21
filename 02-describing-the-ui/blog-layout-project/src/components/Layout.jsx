import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex items-start gap-10'>
        {children}
    </div>
  )
}

export default Layout