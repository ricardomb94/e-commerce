import React, { useState, useEffect } from 'react';
import Slider from './slider/Slider';
import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  //State : By default our product will be an empty array
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  //let's fetch products before we populate theme
  const fetchProducts = async () => {
    //We want fetch something,the response from await (we want something and that somthing is going to be a specific APi call to "commerce instance"). Once we get response we can destructure the data from the response. And this data is going to be our products.
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart( await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log('CART', cart);
  return (
    <div>
      <Navbar />
      <Slider products={products} />
      <hr />
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
};

export default App;
