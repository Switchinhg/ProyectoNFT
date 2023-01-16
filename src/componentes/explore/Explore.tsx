import React from 'react'
import { Link } from 'react-router-dom'


export default function Explore() {
/**
 * TODO: buscar los nfts en el smart contract 
 **/
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
                <Link to={`/detail/${/* NFT */1}`} className='nft' >
                    <img src="./imgs/cup.png" alt="" />
                    <div className='info'>
                        <p>NFT N°1</p>
                        <p>HECHO POR SWICHO OBVIO</p>
                        <p>200ETH</p>
                    </div>
                </Link>
            </div>
        </div>

    </section>
  )
}
