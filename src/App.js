import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Footer from './Components/Home/Footer';
import {Routes, Route} from 'react-router-dom';
import Product from './Components/Products/Product';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/login';
import Register from './Components/Register/Register';
import Service from './Components/Service/Service'
import About from './Components/About/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
