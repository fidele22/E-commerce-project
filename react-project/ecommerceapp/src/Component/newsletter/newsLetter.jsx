import React from 'react'
import './newsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter