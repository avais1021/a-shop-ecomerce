
import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import Home from "./pages/home/Home"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import Contact from "./pages/contact/Contact"
const App = () => {
  return (
  
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App



// import { dummydata } from "./dummydata"
  // <div>
    //   <h1>{dummydata[0].name}</h1>
    //   <img src={dummydata[0].image} alt="" />
    // </div>