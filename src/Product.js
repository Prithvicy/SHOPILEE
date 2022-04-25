import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id ,title, image, price, rating }) => {
  const [{basket} , dispatch] = useStateValue();
const addToBasket = () =>{
  //we create an onclick function where every time we click it sends the data to the data layer(items dispatch to usestatevalue)
  dispatch({
    type : 'ADD_TO_BASKET',
    item:{
      id: id,
      title: title,
      image: image,
      price: price,
      rating : rating,
    }
  })
  //dispatch some sort of action
}
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
};

export default Product;
