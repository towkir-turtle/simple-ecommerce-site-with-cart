import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleRemoveProduct } = props;
  const { name, img, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="item-details">
        <div className="item-info">
          <p className="item-name">{name}</p>
          <p>
            price: <span>${price}</span>
          </p>
          <p>
            shipping charge: <span>${shipping}</span>
          </p>
        </div>
        <div className="button-container">
          <button onClick={() => handleRemoveProduct(product)}>
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
