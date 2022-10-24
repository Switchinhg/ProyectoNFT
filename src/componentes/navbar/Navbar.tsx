import React from 'react'
import {SlMagnifier} from 'react-icons/sl'

export default function Navbar() {
  return (
    <div className='nav'>
        <div className="logo">
            <h5>Swicho's</h5>
        </div>
        <div className="links">
            {/* PlaceHolders */}
            <p>Explore</p>
            <p>Create</p>
            <p>Feed</p>
        </div>
        <div className="search">
            <div className="input">
                <SlMagnifier />
                <input type="text"  />
            </div>
        </div>
        <div className="conectWallet">
            <button>
                <p>
                Connect Wallet
                </p>
                </button>
        </div>
        <div className="useIcon">
            {/* OnClick en la img */}
            <img src="https://picsum.photos/50/50" alt="" />
        </div>
    </div>
)}
