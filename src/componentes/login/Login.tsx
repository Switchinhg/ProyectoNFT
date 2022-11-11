import React, { useState, useRef} from 'react'

export default function Login() {
  const [log,setlog] = useState(true)/* true login false register */
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)


  /* Login ref */
  const loginEmailRef = useRef<HTMLInputElement>(null!)
  const loginPassRef = useRef<HTMLInputElement>(null!)
  /* Pass Ref */
  const registerEmailRef = useRef<HTMLInputElement>(null!)
  const registerPassRef = useRef<HTMLInputElement>(null!)


  const handleLogin = async (e:any) =>{
      e.preventDefault()



      
    }

    const handleRegister = async (e:any)=>{
      e.preventDefault()

    }

  return (
    <div className='loginContainer' >

        {/* Login */}
        {
          log ===true?
            loading?
            <h1>Loading</h1>
            :

              <div className="loginFormWrapper">
                <p className='textoLogin'>Login</p>
                <form onSubmit={handleLogin} >
                  <input type="text" name="usuario" id="usuario" placeholder='Usuario' ref={loginEmailRef}/>
                  <input type="password" name="password" id="password" placeholder='Contraseña' ref={loginPassRef}/>
                  <input type="submit" value={'Login'}/>
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
            <input type="text" name="usuario" id="usuario" placeholder='Usuario' ref={registerEmailRef}/>
            <input type="password" name="password" id="password" placeholder='Contraseña' ref={registerPassRef}/>
            <input type="submit" value={'Register'}/>
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