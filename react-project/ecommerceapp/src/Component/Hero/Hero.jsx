import React from 'react'
import hand from '../assets/hand.png'
// Example import statement in Hero.jsx
import LandImage from '../assets/land.jpg';

import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>new product</h2>
            <div>
                <div className='hand-icon'>
                    <p>hand</p>
                    <img src={hand} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
            </div>
        </div>
        <div className='hero-right'>     
       <img src={LandImage} alt="" style={{ width: '400px', height: '400px' }}/>
        </div>
        
    </div>
  )
}

export default Hero