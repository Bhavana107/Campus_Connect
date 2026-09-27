import React from 'react'

import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const OrderConfirmation = ({deliveryDetails}) => {
  return (
    <>
    <div className="page-shell confirmation-shell">
      <div className='confirmation-card'>
       <CheckCircle className='confirmation-icon' />
       <h2 className='confirmation-title'>Order Confirmed!</h2>
       <p className='confirmation-text'>
        Your transaction is complete. A confirmation email has been sent to your account.
       </p>

       <div className='confirmation-details'>
       <p className='confirmation-name'>
        {deliveryDetails?.name}
       </p>
       <p>{deliveryDetails?.address}</p>
       <p>{deliveryDetails?.city},{deliveryDetails?.zip}</p>
       </div>

        <Link to={"/"} className="primary-button confirmation-button">
          Continue Shopping
        </Link>
      </div>
    </div>
    </>
  )
}

export default OrderConfirmation