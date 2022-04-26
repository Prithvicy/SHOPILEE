import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const[{basket}, dispatch]=useStateValue();
    const navigate = useNavigate();


  return (
      <div className="subtotal">
          <CurrencyFormat
          renderText={(value) =>(
              <>
              <p>
                  Subtotal( {basket?.length} items):
                  <strong>
                      {value}
                    
                  </strong>
              </p>
              <small className="subtotal__gift">
                  <input type="checkbox" />
                  This oder contains a gift
              </small>
              </>
          )}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          
          />
          <button onClick={e => navigate('/payment')}>Poceed to checkout</button>
          {/* also has styling of button while redirecting */}

      </div>
  )
}

export default Subtotal