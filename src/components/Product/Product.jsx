import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
//   console.log(props);
  const { img, name, price, ratings, seller, shipping } = props.product;
  const  productAdd  = props.productAdd;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price : {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button onClick={() => productAdd(props.product)} className="btn-cart">
        Add to cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
