import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/cart-items?expand=product')
      .then((response) => {
        setCartItems(response.data);
      });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cartItems={cartItems} />}></Route>
      <Route path="checkout" element={<CheckoutPage cartItems={cartItems}/>}></Route>
      <Route path="orders" element={<OrdersPage cartItems={cartItems}/>}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
    </Routes>
  )
}

export default App
