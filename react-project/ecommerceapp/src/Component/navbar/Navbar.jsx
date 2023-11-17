import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'
function Navbar() {
    const [menu,setMenu] = useState('shop')
  return (
    <div className='Navbar'>
        <div className='Navbar-logo'>
            <img src={logo} alt="" style={{ width: '70px', height: '50px' }} />
            <p>SHOP</p>
        </div>
        <ul className='navbar-menu'>
            <li onClick={()=>{setMenu('home')}}><Link style={{textDecoration:'none'}}to='/'>Home</Link>{menu==='home'? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('house')}}><Link style={{textDecoration:'none'}}to='/house'>house</Link>{menu==='house'? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('land')}}><Link style={{textDecoration:'none'}}to='/land'>land</Link>{menu==='land'? <hr/>:<></>}</li>
        </ul>
       <div className='navbar-login'>
        <button><Link style={{textDecoration:'none'}} to='/signup'>Login</Link></button>
        <img src={cart} alt="" style={{ width: '60px', height: '40px' }} />
         <div className='cart-count'>0</div>
       </div>
    </div>
  )
}

export default Navbar