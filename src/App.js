
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
function App() {
  
  return (
    <Router>
    <div className="App">
    
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/portfolio'  element={<Portfolio/>} />
      <Route path='/experience'  element={<Experience/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/contact'  element={<Contact/>} />
      <Route path='/socialLinks'  element={<SocialLinks/>} />
      
      </Routes>
   
    </div>
   </Router>
  );
};

export default App;
