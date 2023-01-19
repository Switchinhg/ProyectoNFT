import { BrowserRouter, Routes,Route, } from 'react-router-dom'
import CheckMail from './componentes/CheckMail/CheckMail';
import Explore from './componentes/explore/Explore';

import FrontPage from './componentes/frontPage/FrontPage';
import RutasProtegidasLogin from './componentes/helpers/Verificaciones';
import Login from './componentes/login/Login';
import Navbar from './componentes/navbar/Navbar';
import Detail from './componentes/nftDetail/Detail';
import Profile from './componentes/profile/Profile';
import { UsarAuth } from './componentes/userContext/AuthContext';

function App() {



  const {usuarioActivo}:any = UsarAuth()

  return (
    <div className="bg">
      <BrowserRouter>

        <Navbar />
        <Routes>


          <Route path='/' element={<FrontPage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/CheckMail' element={<CheckMail />}/>
          <Route path='/profile' element={<RutasProtegidasLogin usuarioActivo={usuarioActivo}><Profile /></RutasProtegidasLogin> }/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/detail/:id' element={<Detail />}/>

          
          <Route path='*' element={<FrontPage/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
