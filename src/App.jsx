import { useContext } from "react";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Routes, Route , } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/ProductPage/ProductDetail";
import AuthContext from "./Components/store/AuthContext";
import { AuthContextProvider } from "./Components/store/AuthContext";
import AuthForm from "./Components/Auth/AuthForm";

function App() {
  const authctx = useContext(AuthContext)
  return (
    <BrowserRouter>
    <AuthContextProvider>
     <CartProvider >
      <Header />
      <Cart />
        <Routes>
              <Route path='/products' element={<Products />}  exact/>
              <Route path='/:id' element={<ProductDetail />} />
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About /> } />
              <Route path='/auth' element={<AuthForm /> } />
              <Route path='/contact' element={<Contact /> } /> 
              <Route path="/productDetail" element={<ProductDetail />} />
        </Routes>
      <Footer />
     </CartProvider>
     </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
