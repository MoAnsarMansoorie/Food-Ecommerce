import React from 'react'
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className='fixed shadow-md h-16 w-full px-2 md:px-2'>
        {/* Desktop */}

        <div className=''>
            <div className='h-12'>
                <img src={logo} alt='LOGO' className='h-full'/>
            </div>
        </div>
    </header>
  )
}

export default Header
