import React from 'react'
 import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image , title, price , rating}) => {
  const[{basket}, dispatch]=useStateValue();

  const removeFromBasket = ()=>{
    //remove item
    dispatch({
      type : 'REMOVE_FROM_BASKET',
      id: id,

    })


  }
  return (
      <div className="CheckoutProduct">
          <img className='checkoutProduct__image' src={image} alt="" />
          <div>
          <p className="checkoutProduct__info">
           {title}</p>
           <div>
        
           <p className="checkoutProduct__price">
               <small>₹</small>
               <strong>{price}</strong>
           </p>
           <div className="checkoutProduct__rating">
           {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
                       </div>

                       <button onClick={removeFromBasket} className='buttonn'>Remove from Basket</button>

           </div>
           </div>

      </div>

  )
}

export default CheckoutProduct