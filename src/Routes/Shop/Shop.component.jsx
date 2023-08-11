import React from 'react'
import './shop.styles.scss'
import { SearchContext } from './../../Contexts/Search.context'
import { useContext } from 'react'
import ProductCard from './../../Components/ProductCard/ProductCard.jsx'
import { products } from './../../assets/all-products/allProducts.js'

const Shop = () => {
    const { searchValue, handleChange} = useContext(SearchContext)

    let searchedProducts = false
    if (searchValue !== '') {
        searchedProducts = products.find((item) => 
            item.title.toLowerCase().includes(searchValue.toLowerCase().slice(0, searchValue.length - 1)) || item.about.toLowerCase().includes(searchValue.toLowerCase()) || item.price.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    return (
        <div className="shop">
            <div className='shop-filter'>
                <select onChange={handleChange} className='shop-filter-select'>
                    <option value="" disabled >
                        FILTER
                    </option>
                    <option value="t-shirt">
                        t-shirts
                    </option>
                    <option value="jacket">
                        jackets
                    </option>
                    <option value="pants">
                        pants
                    </option>
                    <option value="sneakers">
                        sneakers
                    </option>
                    <option value="hats">
                        hats
                    </option>
                    <option value="">
                        SHOP ALL
                    </option>
                </select>
            </div>

            {
                searchedProducts ?
                    <div className='searched-items'>
                        <p className='search-title'>search results for {searchValue}</p>

                        <div className='shop-products-container'>
                            {
                                products.map((item, index) => {
                                    if (item.title.toLowerCase().includes(searchValue.toLowerCase().slice(0, searchValue.length - 1)) || item.about.toLowerCase().includes(searchValue.toLowerCase()) || item.price.toLowerCase().includes(searchValue.toLowerCase())) {
                                        return <ProductCard item={item} key={index} />
                                    }else{
                                        return undefined
                                    }
                                })
                            }
                        </div>

                    </div>
                    : ''
            }
            <>
                <p className="shop-title">
                    SHOP ALL
                </p>

                <div className='shop-products-container'>
                    {
                        products.map((item, index) => {
                            return <ProductCard item={item} key={index + item.title} />
                        })
                    }
                </div>
            </>
        </div>
    )
}
export default Shop