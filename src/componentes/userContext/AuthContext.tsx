import React, {createContext,useContext,useState,useEffect} from 'react'

import { supabase } from '../helpers/supaClient'

const AuthContext:any = createContext([]);

export const UsarAuth = () => useContext(AuthContext);


export  default function AuthProvider({children}:any) {
  const [loading, setLoading] = useState(true)
  const [usuarioActivo, setUsuarioActivo] = useState();



  async function login(email:string , pass:string) {
    return supabase.auth.signInWithPassword({
      email: email ,
      password: pass,
    })
  }
  async function register(email:string, pass:string){
    return supabase.auth.signUp({
      email: email,
      password: pass,
    
    })
  }
  async function logout(){
    return supabase.auth.signOut()
  }

  useEffect(() => {
    const user = supabase.auth.user()

    setUsuarioActivo(user)
  }, [])

  



  const value = {
    login,
    register,
    logout
  };
  return (

    <AuthContext  value={value}>
      {!loading && children}
    </AuthContext>
  )
}
