import { BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import CheckMail from './componentes/CheckMail/CheckMail';

import FrontPage from './componentes/frontPage/FrontPage';
import Login from './componentes/login/Login';
import Navbar from './componentes/navbar/Navbar';

function App() {
  return (
    <div className="bg">
      <BrowserRouter>

        <Navbar />
        <Routes>
        {/* <Route />  Routes*/}
        <Route path='/' element={<FrontPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/CheckMail' element={<CheckMail />}/>
        
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
