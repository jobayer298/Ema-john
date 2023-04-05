import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Review = ({ pd, handleRemoveCart }) => {
  console.log(pd);
  const { id, name, img, price, quantity, shipping } = pd;
  return (
    <div className="review-container">
      <div className="info">
        <img src={img} alt="" />
        <div className="review-details">
          <p>{name}</p>
          <p>Price: {price}</p>
          <p>Shipping charge: {shipping}</p>
        </div>
      </div>
      <button onClick={() => handleRemoveCart(id)} className="delete">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Review;