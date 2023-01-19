import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helper/Fetch'

export default function Detail() {
  const [nft,setNFT] = useState<any>()
  const {id} = useParams()

  useEffect(() => {
    getFetch(id).then(nft=>{
      setNFT(nft[0])
    })
  
  }, [id])
  if(!nft) return <h2 style={{color:'white'}}>CARGANDO</h2>



  return (
    <div className="nftDetailContainer">
      <div className="image">
        <img src={"."+nft.img} alt="" />
      </div>
      <div className="info">
        <div className="nombreyduenio">
          <h4>{nft.name} by {nft.owner}</h4>
        </div>
        <div className="description">
          <p>{nft.desc}</p>
        </div>
        <div className="precioycomprar">
          <p>{nft.price}</p>
          <button>Comprar</button>
        </div>
      </div>

    </div>
  )
}
