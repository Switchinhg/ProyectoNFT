import React from 'react'
import { UsarAuth } from '../userContext/AuthContext'

export default function Profile() {
    const {usuarioActivo}:any = UsarAuth()

  return (
    <div className='profileContainer'>
			<div>
					<p>Hola Usuario!</p>
			</div>
			{!usuarioActivo?
			<div><button className="button">Agregar Nombre</button></div>
				: 
				<></>
		}
			<div>
					<button className='button'>Agregar Metamask</button>
			</div>
    </div>
  )
}
