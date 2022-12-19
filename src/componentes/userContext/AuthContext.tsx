import React, {createContext,useContext,useState,useEffect} from 'react'

import { supabase } from '../helpers/supaClient'

const AuthContext:any = createContext([]);

export const UsarAuth = () => useContext(AuthContext);


export  default function AuthProvider({children}:any) {
  const [loading, setLoading] = useState(true)
  const [usuarioActivo, setUsuarioActivo] = useState<any>();
  const [usuarioActivoData, setusuarioActivoData] = useState<any>();


/* hacer que al logearse y registrarse se pueda mostrar la info del usuario, hay que cambiar y/o arreglar la funcion de 
buscar session, login y registro */
/* Creo que OK */
  

  useEffect(() :any=> {/* USE EFFECT */

  /* Agarrar la session activa */
  supabase.auth.getSession().then(({data:{session}})=>{
    setUsuarioActivo(session?.user)
    if(session?.user){
      getActiveUserData(session.user.id)
    }
    setLoading(false)
  })

    /* Si el usuario se desconecta se borra usuario activo */
    supabase.auth.onAuthStateChange((event, _session) => {
      console.log(event)
      if (event === 'SIGNED_OUT') {
        setUsuarioActivo(null)
      }
    })
  }, [])

/* Funcion agarrar datos del usuario */
  async function getActiveUserData(id:String){
    const data = await supabase
    .from('profiles')
    .select()
    .eq('id', id) 
    setusuarioActivoData(data.data![0])
  }

 

/* Funcion login */
  async function login(email:string , pass:string) {
    /* Logearse */
    const logs:any =  await supabase.auth.signInWithPassword({
      email: email ,
      password: pass,
    })

      /* Si hay error en el logeo o no */
      if(logs.error === null){
        setUsuarioActivo(logs.data.session.user )
        getActiveUserData(logs.data.session.user.id)
        return {success:true}
      }
      else{
        return logs.error.message
      }
  }
  /* Funcion register */
  async function register(email:string, pass:string){

      const { data, error } = await supabase.auth.admin.listUsers()
      const isAlreadyRegistered = data.users.filter(e=>e.email === email)
      if(isAlreadyRegistered.length !== 0){
        return {error:'El email ya existe'}
      }
      const dataSignup = await supabase.auth.signUp({
        email: email,
        password: pass,
      })

      /* Agregar email del usuario */
      if(dataSignup.data.user?.id){
        await supabase
        .from('profiles')
        .update({ email: email })
        .eq('id', dataSignup.data.user?.id)
      }
  
      return dataSignup
  }
  /* Funcion cambiar nombre */
  async function cambiarNombre(usern:any){
    const { error } = await supabase
      .from('profiles')
      .update({ username:  usern})
      .eq('id', usuarioActivoData.id)

        usuarioActivoData.username=usern
        
  }

/* Funcion logout */
  async function logout(){
    setusuarioActivoData('')
    return supabase.auth.signOut()
  }



  /* Data export */
  const value = {
    usuarioActivo,
    usuarioActivoData,
    login,
    register,
    cambiarNombre,
    logout,
  }

  return (
    <AuthContext.Provider  value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
