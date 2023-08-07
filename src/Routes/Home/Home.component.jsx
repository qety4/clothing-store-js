import './home.styles.scss'
import Slider from '../../Components/VarietySlider/VarietySlider.jsx'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import OtherLooks from '../../Components/OtherLooks/OtherLooks'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate= useNavigate()

    const shopAll = ()=>{
        navigate('/shop')
    }

    return (

        <div className='home'>
            <div className='variety-title'>
                VARIETY
            </div>
            <div className='slider-home'>
                <Slider />
            </div>
            <div className='featured-products-title'>
                FEATURED PRODUCTS
            </div>
            <div className='featured-products-home-container'>
                <FeaturedProducts />
            </div>
            <div className='other-title'>
                OTHER LOOKS
            </div>
            <div className='other-looks-container'>
                <OtherLooks />
            </div>
            <div className='shop-all-btn-container'>
                <button onClick={shopAll} className='shop-all-btn'>
                    SHOP ALL
                </button>
            </div>

            <div className='about'>
                <ul className='customer-service-ul'>
                    <li><b>Customer Service</b></li>
                    <li>Contact</li>
                    <li>Orders & Delivery</li>
                    <li>Payment & Pricing</li>
                    <li>Returns & Refunds</li>
                    <li>FAQ</li>
                    <li>github</li>
                </ul>
                <div className='terms'>

                </div>
            </div>
        </div>
    )
}

export default Home