import './shop.styles.scss'

const Shop = () => {
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
        </div>
    )
}
export default Shop