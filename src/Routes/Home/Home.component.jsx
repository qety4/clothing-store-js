import './home.styles.scss'
import Slider from '../../Components/Slider/Slider.jsx'
import FeaturedProducts from '../../Components/FeaturedProduct/FeaturedProducts'
const Home = () => {

    return (

        <div className='home'>
            <div className='variety-title'>
                VARIETY
            </div>
            <div className='slider-home'>
                <Slider/>
            </div>
            <div className='featured-products-title'>
                FEATURED PRODUCTS
            </div>
            <div className='featured-products-container'>
                <FeaturedProducts/>
            </div>
            <div className='other-title'>
                OTHER LOOKS
            </div>
            <div className='other-looks'>
                
            </div>
        </div>
    )
}

export default Home