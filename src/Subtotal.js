import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
  return (
      <div className="subtotal">
          <CurrencyFormat
          renderText={(value) =>(
              <>
              <p>
                  Subtotal( 0 items):
                  <strong>0</strong>
              </p>
              <small className="subtotal__gift">
                  <input type="checkbox" />
                  This oder contains a gift
              </small>
              </>
          )}
          value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
          
          />
          <button>Poceed to checkout</button>

      </div>
  )
}

export default Subtotal