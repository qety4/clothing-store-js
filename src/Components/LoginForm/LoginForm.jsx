import { useContext, useState } from 'react'
import { ReactComponent as Show } from './../../assets/svgs/show.svg'
import { ReactComponent as Hide } from './../../assets/svgs/hide.svg'
import { signIn } from '../../util/firebase'
import './loginForm.styles.scss'


const defaultFormFields = {
    email: "",
    password: "",
    remember:""
}


const LogInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)

    const [visible, setVisible] = useState(false)

    const { email, password,remember } = formFields


    const visibilityToggle = () => {
        setVisible(!visible)
    }

    const resetForm = (defaultForm) => {
        setFormFields(defaultForm)
    }

    const signInDemo = (e) => {
        submit(e)
    }

    const submit = async (e) => {
        e.preventDefault()
        let logMail = ''
        let logPassword = ''
        if (e.type === 'click') {
            logMail = 'demo@mail.com'
            logPassword = 'aaaaaa'
            console.log('target', e.target[2])
        } else {
            logMail = email
            logPassword = password
        }

        try {
            if (remember === 'on') {
                await signIn(logMail, logPassword, true)
            } else {
                await signIn(logMail, logPassword, false)
            }
        }
        catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found':
                case 'auth/invalid-email':
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
        console.log(event)
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
        console.log(formFields)
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

                    <label htmlFor="log-rem" className='log-remember'>Remember me <input onChange={handleChange} name='remember' type="checkbox" id='log-rem' /></label>
                    <button type="submit" className="form-btn">LOG IN</button>
                    <p className='sign-in-demo' onClick={signInDemo} >sign in demo</p>
                </form>
                <a href='/'>Forgot password?</a>
            </div>
        </div>
    )
}

export default LogInForm