
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<Shopcategory category="men"/>}/>
          <Route path="/womens" element={<Shopcategory category="women"/>}/>
          <Route path="/kids" element={<Shopcategory category="kids"/>}/>
          <Route path="/product" element={<Product/>}>
             <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Login" element={<LoginSignup/>}/>
          
          
         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
