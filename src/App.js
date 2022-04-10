import './style/App.css'
import Header from './components/Header';
import Home from './components/HomeComponents/Home';
import Footer from './components/Footer';
import Quarto from './components/QuartoComponents/Quarto';
import NaoExiste from './components/NaoExiste'
import FooterMobile from './components/FooterMobile';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quarto' element={<Quarto/>}/>
          <Route path='*' element={<NaoExiste/>}/>
        </Routes>
        <Footer/>
        <FooterMobile/>
      </div>
    </Router>
  );
}

export default App;
