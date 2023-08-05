import { Outlet, Link } from 'react-router-dom'
import cart from '../../assets/bag.svg'
import user from '../../assets/user.svg'
import search from '../../assets/search.svg'
import LoginModal from '../../Components/LogInModal/LogInModal.jsx'
import './nav.styles.scss'

const Nav = () => {

    return (
        <main>
            <div className='nav'>
                <div className='nav-left'>
                    <div className='nav-search'>
                        <input className='search-input' type="text" />
                        <img src={search} alt="" />
                    </div>
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