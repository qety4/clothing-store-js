import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart.context'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import './checkout.styles.scss'


const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    return (
        <div className='checkout-page'>

            <p className='checkout-title'>CHECK OUT</p>
            <div className='checkout-area'>
                <div className='item-desc'>
                    <p>
                        Product
                    </p>
                    <span>
                        <p>
                            Price
                        </p>
                        <p>
                            Quantity
                        </p>
                        <p>
                            Total
                        </p>
                    </span>
                </div>
                <div className='checkout-items'>
                    {
                        cartItems.map((item, index) =>
                            <div key={index} className='checkout-item'>
                                <CheckoutItem item={item} />
                            </div>
                        )
                    }
                </div>
            </div>
            <p className='checkout-total'>{cartTotal}€ Total</p>
        </div>
    )
}

export default Checkout