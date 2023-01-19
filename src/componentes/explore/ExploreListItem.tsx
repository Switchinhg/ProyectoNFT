import React from 'react'
import { Link } from 'react-router-dom'


export default function ExploreListItem({data}:any) {
  return (
    data.map((e: { id: string, name:string, desc:string, price:string, img:string })=>
    <Link  key={e.id} to={`/detail/${e.id}`} className='nft' >
        <img src={e.img} alt="" />
        <div className='info'>
            <p>{e.name}</p>
            <p>{e.desc}</p>
            <p>{e.price}</p>
        </div>
    </Link>
      
      )
  )
}
