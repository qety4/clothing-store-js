import { Outlet, Link } from 'react-router-dom'
import cart from '../../assets/bag.svg'
import user from '../../assets/user.svg'
import search from '../../assets/search.svg'

import './nav.styles.scss'

const Nav = () => {

    return (
        <main>
            <div className='nav'>
                <div className='nav-search'>
                    <input className='search-input' type="text" />
                    <img src={search} alt="" />
                    <p>SHOP</p>
                </div>
                <div className='nav-logo-container'>
                    <p className='nav-logo'>logo</p>
                </div>
                <div className='nav-right'>
                    <p className='user'>LOGIN</p>
                    <div className='cart-container'>
                        <p className='cart-count'>0</p>
                        <img className='cart' src={cart} alt="" />
                    </div>

                </div>

            </div>

            <div className='nav-under'>

            </div>
            <Outlet />
        </main>
    )
}

export default Nav