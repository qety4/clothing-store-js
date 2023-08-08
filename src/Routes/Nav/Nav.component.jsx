import { Outlet, Link } from 'react-router-dom'

import SearchNav from '../../Components/SearchNav/SearchNav.jsx'

import LoginModal from '../../Components/LogInModal/LogInModal.jsx'
import './nav.styles.scss'
import CartDropdown from '../../Components/CardDropdown/CartDropdown'

const Nav = () => {

    return (
        <main>
            <div className='nav'>
                <div className='nav-left'>
                 <>
                    <SearchNav/>
                 </>
                    <p className='nav-shop'>
                        <Link to='/shop'>
                            SHOP
                        </Link>
                    </p>
                </div>
                <div className='nav-logo-container'>
                    <Link to='/'>
                        <p className='nav-logo'>logo</p>
                    </Link>
                </div>
                <div className='nav-right'>
                    <LoginModal />
                    <div className='nav-cart-container'>
                        <CartDropdown />
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