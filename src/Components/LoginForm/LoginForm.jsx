import { useContext, useState } from 'react'
import { ReactComponent as Show } from './../../assets/svgs/show.svg'
import { ReactComponent as Hide } from './../../assets/svgs/hide.svg'
import { signInWithEmail } from '../../util/firebase'
import './loginForm.styles.scss'
import { UserContext } from '../../Contexts/User.context'

const defaultFormFields = {
    email: "",
    password: "",
}


const LogInForm = () => {
    const { setRememberUser } = useContext(UserContext)
    const [formFields, setFormFields] = useState(defaultFormFields)

    const [visible, setVisible] = useState(false)

    const { email, password } = formFields


    const visibilityToggle = () => {
        setVisible(!visible)
    }

    const resetForm = (defaultForm) => {
        setFormFields(defaultForm)
    }

    const submit = async (e) => {
        e.preventDefault()
        try {
            if (e.target[2].checked == true) {
                setRememberUser(true)
            }else{
                localStorage.removeItem('rem')
            }
            await signInWithEmail(email, password)
        }
        catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found'|| 'auth/invalid-email':
                    alert('user not found')
                    break
                default:
                    console.log(e.code)
                    break
            }
            console.log('error', e)
        }
        finally {
            resetForm(defaultFormFields)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }


    return (
        <div>
            <div className="login-form-container" >

                <form className="login-form" onSubmit={submit}>
                    <div className="input-box">
                        <label htmlFor="log-email">Email</label>
                        <input className='input-text'
                            name='email'
                            id='log-email'
                            type="email"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="log-password">Password</label>
                        <input className='input-text'
                            name='password'
                            id='log-password'
                            type={visible ? "text" : "password"}
                            required
                            onChange={handleChange}
                        />
                        <span className='visibility' onClick={visibilityToggle} >{visible ? <Hide /> : <Show />}</span>
                    </div>

                    <label htmlFor="log-rem" className='log-remember'>Remember me <input type="checkbox" id='log-rem' /></label>
                    <button type="submit" className="form-btn">LOG IN</button>
                    <a href='/'>Forgot password?</a>
                </form>
            </div>
        </div>
    )
}

export default LogInForm