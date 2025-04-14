

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './routes/landingPage';

function App() {


  return (
    <div className="app">
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
   
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
