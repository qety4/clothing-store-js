import './shop.styles.scss'
import { SearchContext } from '../../contexts/Search.contex'
import { useContext } from 'react'
import ProductCard from './../../Components/ProductCard/ProductCard.jsx'
import {products} from './../../assets/featured-product/featuredProduct.js'

const Shop = () => {
    const { searchValue } = useContext(SearchContext)
    return (
        <div className="shop">
            <p className="shop-title">
                SHOP ALL
            </p>
            <div className='shop-filter'>
                <select className='shop-filter-select'>
                    <option value="t-shirt">
                        t-shirts
                    </option>
                    <option value="jacket">
                        jackets
                    </option>
                    <option value="pants">
                        pants
                    </option>
                    <option value="sneaker">
                        sneakers
                    </option>
                    <option value="hat">
                        hats
                    </option>
                </select>
            </div>
            <p className='search-title'>{searchValue}</p>

            <div className='shop-products-container'>
                {
                    searchValue ?
                        products.map((item, index) => {
                            if (item.title.toLowerCase().includes(searchValue.toLowerCase().slice(1,searchValue.length-1)) || item.about.toLowerCase().includes(searchValue.toLowerCase()) || item.price.toLowerCase().includes(searchValue.toLowerCase())) {
                               return <ProductCard item={item} key={index} />
                            }
                        })
                        :
                        products.map((item, index) => 
                            <ProductCard item={item} key={index} />
                        )
                }
            </div>
            
            <div className='shop-products-container'>
                {
                searchValue ?
                products.map((item,index)=>{
                    return <ProductCard item={item} key={item.title} />

                }) : ''
            }
            </div>

           

        </div>
    )
}
export default Shop