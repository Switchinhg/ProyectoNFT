import {SlMagnifier} from 'react-icons/sl'
import { NavLink, useNavigate } from 'react-router-dom'
import { UsarAuth } from '../userContext/AuthContext'



export default function Navbar() {
const navigate = useNavigate();
const { logout , usuarioActivo}:any = UsarAuth()


const logouts=()=>{
    logout()
    navigate('/Login')
}
  return (
    <div className='nav'>
        <div className="logo">
            <NavLink to='/'>Swicho's</NavLink>
        </div>
        <div className="links">
            {/* PlaceHolders */}
            <NavLink to='/explore'>Explore</NavLink>
            <p>Create</p>
            <p>Feed</p>
            <NavLink to={'/Profile'}>Perfil</NavLink>
        </div>
        <div className="search">


            <div className="input">
                <SlMagnifier />
                <input type="text"/>
            </div>
        </div>
        {/* Si no esta logeado que salga conectarse por ahora no lo esta*/}

        
        {/* <div className="conectWallet">
            <button>
                <p>
                Connect Wallet
                </p>
                </button>
        </div>
        <div className="useIcon">
            * OnClick en la img *
            <img src="https://picsum.photos/50/50" alt="" />
        </div>  */}

        {/* <div onClick={} style={{color:'white'}}>logout</div> */}


        {usuarioActivo?
        <div className='login' onClick={logouts}>
            <p>LOGOUT</p>
        </div>
        :
        <div className='login'>
            <NavLink to='/login' >LOGIN</NavLink>
        </div>
        
        }
            


            

        
    </div>
)}
