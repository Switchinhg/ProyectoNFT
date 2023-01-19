import React, { useEffect, useState } from 'react'
import { getFetch } from '../helper/Fetch'
// import { Link, useParams } from 'react-router-dom'
import ExploreList from './ExploreList'


export default function Explore() {
    const [nfts, setNfts ] = useState()
    /**
     * TODO: buscar los nfts en el smart contract 
     **/


    useEffect(() =>  {
       getFetch().then(nftData=>{
        setNfts(nftData)
       })
    }, [])
    
    
if(!nfts) return <h2 style={{color:'white'}}>CARGANDO</h2>

  return (
    <section className='container'>

        <div>
            TITULO ETC
        </div>

        <div className='filtrogridwrap'>
            <div className='filtros'> 
                Filtros
                {/* TODO: HACER FILTROS BUSCAR POR NFT O COLLECTION */}
            </div>
            <div className='nftGrid'>
                {/* 
                    TODO: PONER LOS NFT DEL SMART CONTRACT, 
                    LINK AL DETAIL DEL NFT,
                    HACERLO MAS BONITO
                */}


                {/* MAP */}
                <ExploreList data={nfts} />

            </div>
        </div>

    </section>
  )
}
