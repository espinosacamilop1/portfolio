import './App.css';
import Home from './Components/Home'
import Work from './Components/Work'
import About from './Components/About'
import Contact from './Components/Contact'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/work" element={<Work/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
          </Router>
      
        <div>
        </div>
      </div>
  );
}

export default App;
