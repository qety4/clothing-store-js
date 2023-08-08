import React from 'react'
import './shop.styles.scss'
import { SearchContext } from './../../Contexts/Search.context'
import { useContext,useEffect } from 'react'
import ProductCard from './../../Components/ProductCard/ProductCard.jsx'
import { products } from './../../assets/featured-product/featuredProduct.js'

const Shop = () => {
    const { searchValue, handleChange, shopMount } = useContext(SearchContext)

    let searchedProducts = 0
    if (searchValue !== '') {
        searchedProducts = products.map((item, index) => {
            if (item.title.toLowerCase().includes(searchValue.toLowerCase().slice(1, searchValue.length - 1)) || item.about.toLowerCase().includes(searchValue.toLowerCase()) || item.price.toLowerCase().includes(searchValue.toLowerCase())) {
                return 1
            }else{
                return undefined
            }
        })
    }
    useEffect(()=>{
        shopMount()
    },[])

    return (
        <div className="shop">
            <div className='shop-filter'>
                <select onChange={handleChange} className='shop-filter-select'>
                    <option value="" disabled selected>
                        FILTER
                    </option>
                    <option value="t-shirts">
                        t-shirts
                    </option>
                    <option value="jackets">
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
                searchedProducts[0] ?
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