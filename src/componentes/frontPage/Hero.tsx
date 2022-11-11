import { useEffect } from 'react'
import Stars from '../stars/Stars'

export default function Hero() {

  return (
    <div className="heroWrapper">
      <Stars />
      <div className="cta">

        <h2>Explore the NFT world, collect and sell your artwork</h2>
        <p className="micro">Trade with Simpler and Smarter NFT World</p>
        <div className="buttons">

          <button className='buttonPrimary'>EXPLORE MORE</button>
          <button className='buttonSecondary'>Create</button>
        </div>
      </div>
      <div className="img">
        <img src="./imgs/world.png" alt="" />
      </div>
    </div>
  )
}
