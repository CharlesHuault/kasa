import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/index.scss'
import Home from './pages/Home';
import About from './pages/About';
import Fiche from './pages/Fiche';
import Error from './pages/Error';

const App = () => {
  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>   
    <Route path='/:id' element={<Fiche/>} />
    <Route path='*' element={<Error/>}/>
   </Routes>
  </BrowserRouter>
  );
};

export default App;