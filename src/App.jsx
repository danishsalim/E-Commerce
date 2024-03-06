import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
     <CartProvider >
     
        <Header />
        <Cart />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
        </Routes>
        <Footer />
     
     </CartProvider>
    </BrowserRouter>
  )
}

export default App
