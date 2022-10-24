import { BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'

import FrontPage from './componentes/frontPage/FrontPage';
import Navbar from './componentes/navbar/Navbar';

function App() {
  return (
    <div className="bg">
      <BrowserRouter>

        <Navbar />
      <Routes>
        {/* <Route />  Routes*/}
        <Route path='/' element={<FrontPage />}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
