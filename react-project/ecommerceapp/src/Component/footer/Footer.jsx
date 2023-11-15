import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src="" alt="" />
            <p>Shop</p>
        </div>
        <ul className='footer-links'>
            <li>company</li>
            <li>company</li>
            <li>company</li>
            <li>company</li>
        </ul>
     <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src="" alt="" />
        </div>
        <div className="footer-icon-container">
            <img src="" alt="" />
        </div>
        <div className="footer-icon-container">
            <img src="" alt="" />
        </div>
        <div className="footer-icon-container">
            <img src="" alt="" />
        </div>
     </div>
     <div className="footer-copyright">
        <hr />
        <p>Copyright@2023 | All right reserved</p>
     </div>
    </div>
  )
}

export default Footer