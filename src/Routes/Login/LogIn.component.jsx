
import './login.styles.scss'

const LogIn =()=>{

return(
    <div>
        <div className="login-form-container" >
            <h1>Login</h1>
            <form action="login-form">
                <div className="input-box">
                    <input type="text" required placeholder="Username" />
                </div>
                <div className="input-box">
                    <input type="password" required placeholder="Password" />
                </div>
                <div className="remember-forgot">
                    <label htmlFor=""><input type="checkbox" />Remember me</label>
                    <a href="">Forgot password?</a>
                </div>
                <button type="submit" className="btn">Log In</button>
                <div className="register-link">
                    <p>Don't have an account ? <a href="">Register</a></p>
                </div>
            </form>
        </div>
    </div>
)
}

export default LogIn