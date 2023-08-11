import { Outlet, Link } from 'react-router-dom'

import SearchNav from '../../Components/SearchNav/SearchNav.jsx'

import LoginModal from '../../Components/LogInModal/LogInModal.jsx'
import './nav.styles.scss'
import CartDropdown from '../../Components/CardDropdown/CartDropdown'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/Search.context.jsx'
import { UserContext } from '../../Contexts/User.context.jsx'

const Nav = () => {

    const { searchReset } = useContext(SearchContext)
    const { currentUser } = useContext(UserContext)

    return (
        <main>
            <div className='nav'>
                <div className='nav-left'>
                    <>
                        <SearchNav />
                    </>
                    <p className='nav-shop'>
                        <Link to='/shop' onClick={searchReset}>
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
                    {
                        currentUser ?
                            <Link className='login-btn' to='/profile'>
                                profile
                            </Link>
                            :
                            <LoginModal />
                    }
                    <div className='nav-cart-container'>
                        <CartDropdown />
                    </div>
                </div>

            </div>
            <Outlet />
        </main>
    )
}

export default Nav