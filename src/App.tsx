import { BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import CheckMail from './componentes/CheckMail/CheckMail';

import FrontPage from './componentes/frontPage/FrontPage';
import RutasProtegidasLogin from './componentes/helpers/Verificaciones';
import Login from './componentes/login/Login';
import Navbar from './componentes/navbar/Navbar';
import Profile from './componentes/profile/Profile';
import { UsarAuth } from './componentes/userContext/AuthContext';

function App() {
  const {usuarioActivo}:any = UsarAuth()
  console.log('app')
  console.log(usuarioActivo)

  return (
    <div className="bg">
      <BrowserRouter>

        <Navbar />
        <Routes>


          <Route path='/' element={<FrontPage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/CheckMail' element={<CheckMail />}/>
          <Route path='/profile' element={<RutasProtegidasLogin usuarioActivo={usuarioActivo}><Profile /></RutasProtegidasLogin> }/>
          
          <Route path='*' element={<FrontPage/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
