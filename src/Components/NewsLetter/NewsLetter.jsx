import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusuive Offers On Your Email</h1>
        <p>Snbscribe to our newsletter and stay updated</p>

        <div>
            <input type="email" placeholder='your email id ' />
            <button>Snbscribe</button>
        
        
        
        </div>
    </div>
  )
}

export default NewsLetter;
