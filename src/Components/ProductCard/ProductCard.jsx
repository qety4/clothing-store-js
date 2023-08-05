import React from 'react'

import './productCard.styles.scss'

const ProductCard = ({index , item}) => {
    const {url,title,about,price} = item
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
                {price}
            </p>
        </div>

    )
}

export default ProductCard