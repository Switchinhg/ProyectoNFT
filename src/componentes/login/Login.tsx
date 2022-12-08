import React, { useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UsarAuth } from '../userContext/AuthContext'

interface Return {
  
}
export default function Login() {
  const navigate = useNavigate();
    const { login,register, Logged }:any = UsarAuth()

  const [log,setlog] = useState(true)/* true login false register */
  const [error,setError] = useState('')
  const [loading,setLoading] = useState<Boolean>(false)

  /* TEst de boton register */

  const [into,setinto] = useState<any>('Register')
  const [intoLogin,setintoLogin] = useState<any>('Login')


  /* Login ref */
  const loginEmailRef = useRef<HTMLInputElement>(null!)
  const loginPassRef = useRef<HTMLInputElement>(null!)
  /* Pass Ref */
  const registerEmailRef = useRef<HTMLInputElement>(null!)
  const registerPassRef = useRef<HTMLInputElement>(null!)


  /* Funcion para manejar el login */
  const handleLogin = async (e:any) =>{
    setLoading(true)
      e.preventDefault()

      await login(loginEmailRef.current.value, loginPassRef.current.value)
      .then((e:any)=>{
        if(e.success){
          navigate('/Profile')
        }
        else{
          setError(e)
          setTimeout(() => {
            setLoading(false)
            setError('')
          }, 2000)
        }
      })
    }

    const handleRegister = async (e:any) => {
      setLoading(true)
      e.preventDefault()
      try{
        await register(registerEmailRef.current.value, registerPassRef.current.value)
          .then((e:any)=>{
            if(e.error){
              setError(e.error)
              setTimeout(() => {
                setError('')
              }, 3000);
            }else{
              navigate('/CheckMail')
            }
          })
          .finally(
            setTimeout(() => {
              setLoading(false)
            }, 3000))
      }catch(error:any){
        setError(error)
      }


    }
    useEffect(() => {

      if(loading===true && log===false){
        setinto('Cargando...')
      }else{
        setinto('Register')
      }
      if(loading=== true && log===true){
        setintoLogin('Cargando...')
      }
      else{
        setintoLogin('Login')

      }

    
    }, [loading])
    


  return (
    

    <div className='loginContainer' >

        {/* Login */}
        {
          log ===true?


              <div className="loginFormWrapper">
                <p className='textoLogin'>Login</p>
                <form onSubmit={handleLogin}  >
                  <input type="text" name="usuario" id="usuario" placeholder='Email' ref={loginEmailRef}/>
                  <input type="password" name="password" id="password" placeholder='Contraseña' required minLength={6} ref={loginPassRef}/>
                  <input type="submit" value={intoLogin} />
                </form>
                {/* error */}
                  <div className="loginError">
                  <p className='error'>{error}</p>
                  </div>

                  <p className='link' onClick={()=>setlog(!log)}>No estas registrado?</p>
              </div>

      :

      /* Registro */
        <div className="loginFormWrapper">
          <p className='textoLogin'>Register</p>
          <form onSubmit={handleRegister} >
            <input type="text" name="usuario" id="usuario" placeholder='Email' required ref={registerEmailRef}/>
            <input type="password" name="password" id="password" placeholder='Contraseña' required minLength={6} ref={registerPassRef}/>
            <input type="submit"  value={into} />
          </form>
          {/* error */}
            <div className="loginError">
            <p className='error'>{error}</p>
            </div>
          <p className='link' onClick={()=>setlog(!log)}>Ya estas registrado?</p>

        </div>

        }
    </div>
    
  )

}