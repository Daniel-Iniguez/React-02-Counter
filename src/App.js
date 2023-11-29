import './App.css';
import CounterApp from './components/counter/Counter';
import NavBar from './pages/navbar/NavBar';
import { Footer } from './pages/footer/Footer';
import { Products } from './pages/products/Products';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <Products />
      <Footer></Footer>
      
    </div>
  );
}


export default App;
