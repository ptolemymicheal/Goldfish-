

import './App.css';
import Home from './home';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Contact from './contact';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>

  );
}

export default App; 
