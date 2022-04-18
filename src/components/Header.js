import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <>
    <div><Link to='home'>HOME</Link></div>
    <div><Link to='about'>ABOUT</Link></div>
    <div><Link to='contact'>Contact</Link></div>

    
    
    </>

  )
}

export default Header