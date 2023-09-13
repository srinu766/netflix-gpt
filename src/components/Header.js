import React from 'react'
import Netflix_logo from "../Asserts/Netflix_Logo.png"

const Header = () => {
  return (
    <div className='sticky top-0 z-10'>
    <img className='absolute px-8 py-2 bg-gradient-to-b from-black z-10' src={Netflix_logo} width={210}
    alt='logo'/>
      
    </div>
  )
}

export default Header;

