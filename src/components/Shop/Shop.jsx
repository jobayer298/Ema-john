import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useNavigation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigation()
  if(navigate.state === 'loading'){
    return <Spinner></Spinner>
  }
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let savedCart = [];
    const storedCart = getShoppingCart();
    for (const id in storedCart) {
      const addedCard = products.find((product) => product.id === id);
      if (addedCard) {
        const quantity = storedCart[id];
        addedCard.quantity = quantity;
        savedCart.push(addedCard);
      }
      console.log(addedCard);
    }
    setCart(savedCart);
  }, [products]);

  const productAdd = (product) => {
    //   console.log(product);
    const newCart = [...cart, product];
    // const exist = cart.find((pd) => pd.id === product.id);
    // if (!exist) {
    //   product.quantity = 1;
    //   newCart = [...cart, product];
    // } else {
    //   exist.quantity = exist.quantity + 1;
    //   const remaining = cart.filter((pd) => pd.id !== product.id);
    //   newCart = [...remaining, exist];
    // }

    setCart(newCart);
    addToDb(product.id);
  };
  const removeAll = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            productAdd={productAdd}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart removeAll={removeAll} cart={cart}>
          <div>
            <Link to="/order">
              <button className="order-btn">Order Review</button>
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
