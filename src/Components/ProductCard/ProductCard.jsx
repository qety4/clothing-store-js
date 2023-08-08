import React ,{ useContext } from 'react'
import { CartContext } from '../../Contexts/Cart.context'
import './productCard.styles.scss'

const ProductCard = ({index , item}) => {
    const { addToCart,cartItems } = useContext(CartContext)

    const {url,title,about,price} = item

    const addItemToCart = ()=>{
        addToCart(item)
        console.log(cartItems)
    }

    return (
        <div className={`featured-product-container item-${index}`}>
            <img className='product-image' src={url} alt="" />
            <p className="product-title">
                {title.toUpperCase()}
            </p>
            <p className="product-about">
                {about}
            </p>
            <p className="product-price">
                {price}€
            </p>
            <button className='add-to-cart-btn' onClick={()=> addItemToCart()}>ADD TO CART</button>
        </div>

    )
}

export default ProductCard