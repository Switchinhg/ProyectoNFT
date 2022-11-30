import React, {createContext,useContext,useState,useEffect} from 'react'

import { supabase } from '../helpers/supaClient'

const AuthContext:any = createContext([]);

export const UsarAuth = () => useContext(AuthContext);


export  default function AuthProvider({children}:any) {
  const [loading, setLoading] = useState(false)
  const [usuarioActivo, setUsuarioActivo] = useState<any>();


  useEffect(() :any=> {

    /* Agarrar la session activa */
    async function buscarSession() {
      const session:any = await supabase.auth.getSession()
      if(session.data.session){

        setUsuarioActivo(session.data.session.user)
      }
        setLoading(false);
    }
    buscarSession()

    /* Si el usuario se desconecta se borra usuario activo */
    supabase.auth.onAuthStateChange((event, _session) => {
      if (event === 'SIGNED_OUT') {
        setUsuarioActivo(null)
      }
    })

  
  }, [])


/* Funcion login */
  async function login(email:string , pass:string) {
      supabase.auth.signInWithPassword({
      email: email ,
      password: pass,
    }).then((e:any)=>setUsuarioActivo(e.data?.session.user )
    )

  }
  /* Funcion register */
  async function register(email:string, pass:string){
    return supabase.auth.signUp({
      email: email,
      password: pass,
    })
  }

/* Funcion logout */
  async function logout(){
    return supabase.auth.signOut()
  
  }



  /* Data export */
  const value = {
    usuarioActivo,
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider  value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
