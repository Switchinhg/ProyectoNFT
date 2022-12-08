import React from 'react'
import NotAllowed from './NotAllowed';


export default function RutasProtegidasLogin({children,  usuarioActivo}:any) {
  if(!usuarioActivo){
    return <NotAllowed/>
  }
  return (
    <>
        {children}
    </>
)
}
