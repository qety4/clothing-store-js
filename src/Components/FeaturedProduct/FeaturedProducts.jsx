import './featuredProducts.styles.scss'

import { products } from '../../assets/featured-product/featuredProduct'
const FeaturedProducts = () => {


    return (
        <>

            <div className="products-scroll snaps-inline">
                {
                    products.map((item,index) => {
                        return (
                            <div key={index} className="featured-product-container">
                                <img className='product-image' src={item.url} alt="" />
                                <p className="product-title">
                                    {item.title}
                                </p>
                                <p className="product-about">
                                    {item.about}
                                </p>
                                <p className="item-price">
                                    {item.price}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default FeaturedProducts