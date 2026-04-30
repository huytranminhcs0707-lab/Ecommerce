import { Header } from '../../components/Header';
import './HomePage.css';
import axios from 'axios'
import { useEffect, useState} from 'react';
import { Products } from './Products';
export function HomePage({cartItems, loadCart}) {
    const [products,setProducts] = useState([]);
   
    useEffect(() => {
   axios.get('https://ecommerce-naym.onrender.com/api/products')
        .then((response) => {
             setProducts(response.data);
        });
    },[]);
 
    return (
        <>
            <title>Ecommerce Project</title>
            <Header cartItems = {cartItems}/>
            <Products products = {products} loadCart = {loadCart} />
        </>
    );
}