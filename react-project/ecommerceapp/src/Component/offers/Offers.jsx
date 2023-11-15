import React from 'react'
import hou from '../assets/hou.jpg'
import './Offers.css'
function Offers() {
  return (
    <div className='offers'>
   <div className="offers-left">
    <h1>execluse</h1>
    <h1>offers for you</h1>
    <p>only on the best sellers product</p>
    <button>check now</button>
   </div>
 <div className="offers-right">
    <img src={hou} alt="" style={{ width: '400px', height: '400px' }} />
 </div>
    </div>
  )
}

export default Offers