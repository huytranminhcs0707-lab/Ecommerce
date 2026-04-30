import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/tracking/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [cartItems, setCartItems] = useState([]);
   const loadCart = async () => {
      const response = await axios.get('https://ecommerce-naym.onrender.com/api/cart-items?expand=product');
        setCartItems(response.data);
    };
  useEffect(() => {
      loadCart();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cartItems={cartItems} loadCart = {loadCart} />}></Route>
      <Route path="checkout" element={<CheckoutPage cartItems={cartItems} loadCart = {loadCart} />}></Route>
      <Route path="orders" element={<OrdersPage cartItems={cartItems}/>}></Route>
      <Route path="tracking" element={<TrackingPage cartItems={cartItems}/>}></Route>
    </Routes>
  )
}

export default App
