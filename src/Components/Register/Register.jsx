import './register.styles.scss'

const Register = () => {

    return (
        <div className="reg-form">
            <div className="login-form-container" >
                <form action="" className="login-form" >
                    <div className="input-box">
                        <label htmlFor="reg-email">Email</label>
                        <input className='input-text' required idr='reg-email' type="text" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="reg-name">Name</label>
                        <input className='input-text' required id='reg-name' type="text" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password</label>
                        <input className='input-text' required id='password' type="password" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input className='input-text' required id='confirm-password' type="password" />
                    </div>
                    <button className='form-btn'>CREATE ACCOUNT</button>
                </form>
            </div>
        </div>
    )
}

export default Register