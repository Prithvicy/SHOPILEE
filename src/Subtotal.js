import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {
    const[{basket}, dispatch]=useStateValue();

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
          <button>Poceed to checkout</button>

      </div>
  )
}

export default Subtotal