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
    const logs =  supabase.auth.signInWithPassword({
      email: email ,
      password: pass,
    }).then((e:any)=>{
      if(e.error=== null){
        setUsuarioActivo(e.data.session.user )
        return {success:true}
      }
      else{
        return e.error.message
      }
  })  
  return logs
  }
  /* Funcion register */
  async function register(email:string, pass:string){

    async function test(email:string, pass:string){

      const { data, error } = await supabase.auth.admin.listUsers()
      const isAlreadyRegistered = data.users.filter(e=>e.email === email)
      if(isAlreadyRegistered.length !== 0){
        return {error:'El email ya existe'}
      }
      return supabase.auth.signUp({
        email: email,
        password: pass,
      })
    }
    const bring =test(email, pass)
return bring
  

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
