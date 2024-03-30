import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import {Routes, Route , } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/ProductPage/ProductDetail";
import { AuthContextProvider } from "./Components/store/AuthContext";
import AuthForm from "./Components/Auth/AuthForm";

function App() {
  return (
    <AuthContextProvider>
     <CartProvider >
      <Header />
      <Cart />
        <Routes>
              <Route path='/' element={<Home />} />  
              <Route path="/Products" element={<Products />}  />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/About" element={<About /> } />
              <Route path="/Auth" element={<AuthForm /> } />
              <Route path="/Contact" element={<Contact /> } /> 
              <Route path="ProductDetail" element={<ProductDetail />} />
              <Route path="*" element={<Home/>} />
        </Routes>
      <Footer />
     </CartProvider>
     </AuthContextProvider>
  )
}

export default App
