import { useState } from 'react'
import './loginModal.styles.scss'

import LogInForm from '../LoginForm/LoginForm.jsx'
import Register from '../Register/Register'

const LogIn = () => {
    const [modal, setModal] = useState(false);
    const [log, setLog] = useState(0)

    const toggle = () => {
        setModal(!modal)
    }
    const toggleLogin = (e) => {
        setLog(e)
    }
    return (
        <>
            <button
                className='login-btn'
                onClick={toggle}
            >
                LOGIN
            </button>
            {
                modal && (
                    <div className="login-modal">
                        <div className='login-modal-overlay' onClick={toggle}></div>
                        <div className='login-modal-content'>
                            <h3>Welcome</h3>
                            <div className='login-register'>
                                <p
                                    className={log === 0 ? 'login' : ''}
                                    onClick={() => { toggleLogin(0) }}>LOGIN</p>
                                <p
                                    className={log === 0 ? '' : 'login'}
                                    onClick={() => toggleLogin(1)}>SIGN UP</p>
                            </div>
                            <div className='modal-form'>
                                {
                                    log === 0 ?
                                        <>
                                            <LogInForm />
                                            <p className='reg-link'>don't have an account? <b onClick={() => toggleLogin(1)}>register</b></p>

                                        </>
                                        :
                                        <>
                                            <Register />

                                        </>
                                }
                            </div>
                            <p className='modal-or'>OR</p>
                            <button className='mail-signin'>sign in with google</button>

                            {/* <button className='close-modal-btn' onClick={toggle}>&#10005;</button> */}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default LogIn