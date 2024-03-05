import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import CartProvider from "./Components/store/CartProvider";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart/Cart";
function App() {
  
  return (
    <CartProvider>
      <Cart />
      <Header />
      <Main />
      <Footer/> 
    </CartProvider>  
  )
}

export default App
