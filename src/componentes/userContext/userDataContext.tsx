import React, {createContext,useContext,useState,useEffect} from 'react'

import { supabase } from '../helpers/supaClient'

const AuthContext:any = createContext([]);

export const UsarAuth = () => useContext(AuthContext);


export  default function AuthProvider({children}:any) {
  const [loading, setLoading] = useState(true)

  

  useEffect(() :any=> {/* USE EFFECT */
    setLoading(false)
  }, [])

  //AGREGAR USER WALLETS TO METAMASK
async function saveData(wallets:any, userID:any){
    await supabase
        .from('profiles')
        .update({wallets:wallets})
        .eq('id',userID)
}

/* if(dataSignup.data.user?.id){
    await supabase
    .from('profiles')
    .update({ email: email })
    .eq('id', dataSignup.data.user?.id)
  } */


  /* Data export */
  const value = {
    saveData
  }

  return (
    <AuthContext.Provider  value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
