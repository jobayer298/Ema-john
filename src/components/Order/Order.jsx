import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Review from '../ReviewItem/Review';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Order.css'
import Spinner from '../Spinner/Spinner';


const Order = () => {
   const navigate = useNavigation();
   if (navigate.state === "loading") {
     return <Spinner></Spinner>
   }
   const product = useLoaderData()
   const [cart, setCart] = useState(product);
   const handleRemoveCart = (id) =>{
    const remaining = cart.filter(c => c.id !== id)
    setCart(remaining)
    removeFromDb(id)
   }
   const removeAll = () =>{
    setCart([])
    deleteShoppingCart()
   }
  //  console.log(product);
    return (
      <div>
        <div className="shop-container">
          <div className="single-container">
            {cart.map((pd) => (
              <Review
                key={pd.id}
                pd={pd}
                handleRemoveCart={handleRemoveCart}
              ></Review>
            ))}
          </div>
          <div className="cart-container">
            <Cart removeAll={removeAll} cart={cart}>
              <div>
                <Link to="/checkout">
                  <button className='check-btn'>Checkout</button>
                </Link>
              </div>
            </Cart>
          </div>
        </div>
      </div>
    );
};

export default Order;