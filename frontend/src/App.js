import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Cardspage from './components/Cards/Cardspage';
import Details from './components/Details/Details';
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'
import Connect from './components/Dashboard/Connect';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/Signup' element={<Register />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/cards' element={<Cardspage />} />
          <Route path="/details" element={<Details />} />
          <Route path='/connect' element={<Connect /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
