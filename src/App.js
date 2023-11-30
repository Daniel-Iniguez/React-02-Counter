import './App.css';
import CounterApp from './components/counter/Counter';
import NavBar from './pages/navbar/NavBar';
import { Footer } from './pages/footer/Footer';
import { Products } from './pages/products/Products';
import Home from './pages/home/home';
import { AboutUs } from './pages/about-us/AboutUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}


export default App;
