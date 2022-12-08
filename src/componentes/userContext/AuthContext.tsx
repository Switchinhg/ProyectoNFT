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
        setTimeout(() => {
        }, 2000);
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

  

  async function getActiveUserData(email:string){
    const { count, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('updated_at', '2022-12-08T07:44:47.652046Z')


      console.log('count')
      console.log(count)
  }

/* Funcion login */
  async function login(email:string , pass:string) {
    /* Logearse */
    const logs:any =  await supabase.auth.signInWithPassword({
      email: email ,
      password: pass,
    })
    /* Agregar email del usuario */
    await supabase
      .from('profiles')
      .update({ email: email })
      .eq('id', logs.data.user.id)

    const tas = await supabase
    .from('profiles')
    .select()
    .eq('email', 'santifonlop@hotmail.com')


    console.log('tas')
    console.log(tas)


      /* Si hay error en el logeo o no */
      if(logs.error=== null){
        // setUsuarioActivo(e.data.session.user )
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
