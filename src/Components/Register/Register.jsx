import { useState } from 'react'
import './register.styles.scss'
import {ReactComponent as Show} from './../../assets/svgs/show.svg'
import {ReactComponent as Hide} from './../../assets/svgs/hide.svg'

const Register = () => {

    const [visible,setVisible] = useState(false)
    const visibilityToggle= ()=>{
        setVisible(!visible)
    }
    return (
        <div className="reg-form">
            <div className="login-form-container" >
                <form action="" className="login-form" >
                    <div className="input-box">
                        <label htmlFor="reg-email">Email</label>
                        <input className='input-text' required idr='reg-email' type="email" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="reg-name">Name</label>
                        <input className='input-text' required id='reg-name' type="text" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password</label>
                        <input className='input-text' type={visible ? "text" : "password"} required id='password'/>
                        <span className='visibility' onClick={visibilityToggle} >{visible ? <Hide/> : <Show/>}</span>
                    </div>
                    <div className="input-box">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input className='input-text' type={visible ? "text" : "password"} required id='confirm-password' />
                    </div>
                    <button className='form-btn'>CREATE ACCOUNT</button>
                </form>
            </div>
        </div>
    )
}

export default Register