import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UsarAuth } from '../userContext/AuthContext';


export default function NotAllowed() {
    const {usuarioActivo}:any = UsarAuth()

  const navigate = useNavigate();

  useEffect(() => {
    
    if(!usuarioActivo){
        setTimeout(() => {
            navigate('/Login')
          }, 3000);
      }
    
  }, [])
  

        return (
    <div className='notAllowedContainer'>
        <div>
            <p>Usuario no permitido o no logeado</p>
        </div>
        <div>
            <p>Redirigiendo a Login...</p>
        </div>
    </div>
    
  )
}
