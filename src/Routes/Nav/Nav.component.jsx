import { Outlet, Link } from 'react-router-dom'
import { useContext } from 'react'
import LoginModal from '../../Components/LogInModal/LogInModal.jsx'
import CartDropdown from '../../Components/CardDropdown/CartDropdown'
import SearchNav from '../../Components/SearchNav/SearchNav.jsx'
import { UserContext } from '../../Contexts/User.context.jsx'
import { SearchContext } from '../../Contexts/Search.context.jsx'
import './nav.styles.scss'

const Nav = () => {
    const { currentUser } = useContext(UserContext)
    const { searchReset } = useContext(SearchContext)
    
    return (
        <>
           

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
                        <Link className='nav-logo' to='/'>
                            logo
                        </Link>
                    </div>
                    <div className='nav-right'>
                        <>
                            {
                                currentUser ?
                                    <Link className='login-btn' to='/profile'>
                                        profile
                                    </Link>
                                    :
                                    <LoginModal />
                            }
                        </>
                        <div className='nav-cart-container'>
                            <CartDropdown />
                        </div>
                    </div>

                </div>
            <Outlet />
        </>
    )
}

export default Nav