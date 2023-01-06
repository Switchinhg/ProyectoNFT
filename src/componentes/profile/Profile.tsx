import React, { useEffect, useState,useRef } from 'react'
import { UsarAuth } from '../userContext/AuthContext'
import Web3 from 'web3';


export default function Profile() {
    const {usuarioActivoData, cambiarNombre}:any = UsarAuth()

	const [user,setUser] = useState<any>()
	const [Form,setForm] = useState<any>(false)
	const web3 = new Web3((window as any).ethereum);

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

	if(!usuarioActivoData){
		return <h1>Cargando...</h1>
	}

	async function addMeta(){
		/* chequeamos por metamask */
		if(meta){
			await (window as any).ethereum.request({method:'eth_requestAccounts'})
			const accounts = await web3.eth.getAccounts()

			
		}
	}
	async function removeMeta(){
		await (window as any).ethereum.on('accountsChanged', async () =>{
			console.log()
		})
	}

	let meta = (window as any).ethereum



  return (
    <div className='profileContainer'>
			<div>
				{usuarioActivoData.username?
					<p>Hola {usuarioActivoData.username}</p>
					:
					<p>Bienvenido!</p>	
			}
					{/* <p>Hola {usuarioActivoData?.username || usuarioActivoData?.email}</p> */}
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
					<button className='button' onClick={addMeta}>Agregar Metamask</button>
					<button className='button' onClick={removeMeta}>Sacar Metamask</button>
			</div>
    </div>
  )
}
