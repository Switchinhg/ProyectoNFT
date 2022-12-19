import React, { useEffect, useState,useRef } from 'react'
import { UsarAuth } from '../userContext/AuthContext'

export default function Profile() {
    const {usuarioActivoData, cambiarNombre}:any = UsarAuth()

	const [user,setUser] = useState<any>()
	const [Form,setForm] = useState<any>(false)

	const refNombre = useRef<any>(null) 


	const abrirModal= () =>{
		setForm(!Form)
	}
	const stopprop= (e:any) =>{
		e.stopPropagation()
	}
	const cambiaraNombre = (e:any) =>{
		e.preventDefault()
			cambiarNombre(refNombre.current.value)
			setForm(false)
			
	}



  return (
    <div className='profileContainer'>
			<div>
					<p>Hola {usuarioActivoData?.username || usuarioActivoData?.email}</p>
			</div>
			{!usuarioActivoData?.username?
			<div>
				<button onClick={abrirModal} className="button">Agregar Nombre</button>

				{Form?
				<div className='CambiarNombre' onClick={abrirModal}>
					<div onClick={stopprop}>
						<form onSubmit={cambiaraNombre} >
							<p>Cambiar nombre de usuario</p>
							<p style={{fontSize:10,fontStyle:'italic'}}>no se puede volver a cambiar!</p>
							<input type="text"  ref={refNombre} minLength={6} required />
							<input type="submit" value="Cambiar Nombre"/>
						</form>
					</div>
				</div>

				: null}
			</div>
				: 
				<></>
		}
			<div>
					<button className='button'>Agregar Metamask</button>
			</div>
    </div>
  )
}
