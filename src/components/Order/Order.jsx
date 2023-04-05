import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../ReviewItem/Review';
import { removeFromDb } from '../../utilities/fakedb';


const Order = () => {
   const product = useLoaderData()
   const [cart, setCart] = useState(product);
   const handleRemoveCart = (id) =>{
    const remaining = cart.filter(c => c.id !== id)
    setCart(remaining)
    removeFromDb(id)
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
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    );
};

export default Order;