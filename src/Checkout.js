import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <div>
                <h2 className="checkout__title">
                    <h2>your shopping basket</h2>
                </h2>
            </div>

        </div>
        <div className="checkout__right">
<Subtotal/>
        </div>

    </div>
  )
}

export default Checkout