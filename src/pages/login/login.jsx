import './login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Animation from "../../components/animation"
import { Link } from 'react-router-dom';
function Login() {
    const navigation = useNavigate()
    const [values , setValues] = useState({username: "", password: ""})
    const [submitted , setSubmitted] = useState(false)
    const [touched , setTouched] = useState({})
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    const handleOnchange = (e)=> {
        const {name , value} = e.target;
        setValues((prev)=> ({...prev , [name]: value}))
    }

    const validate = (values)=> {
        const errors = {}

        if(!values.username) {
            errors.username = "username is required"
        }else if(storedUsername !== values.username) {
            errors.username = "username does not match"
        }
        if(storedPassword !== values.password) {
            errors.password = "password does not match"
        }else if (!values.password) {
            errors.password = "password is required"
        }
        return errors;
    }
    const errors = validate(values)
    const isValid = Object.keys(errors).length === 0;

    const login = (e)=> {
        e.preventDefault()
        setTouched({
            username: true,
            password: true
        })
        if (isValid) {
            setSubmitted(true)
            setValues({
                username: "",
                password: ""
            })
            setTouched({
                username: false,
                email: false,
                password: false,
                confirm: false
            })
            setTimeout(() => {
                navigation("/")
            }, 200);
        }
    }

    const handleBlur = (e)=> {
        const {name} = e.target;
        setTouched((prev)=> ({...prev , [name]: true}))
    }

    return (
        <Animation>
            <section className='login'>
                <div className='container'>
                    <div className="register-form">
                        <h2>Log In</h2>
                        <form onSubmit={login}>
                            <input type="text"
                            value={values.username}
                            onChange={handleOnchange}
                            onBlur={handleBlur}
                            name="username" placeholder="enter your username" />
                            {touched.username && errors.username && (<p style={{color:"red", backgroundColor:"white", padding:"5px" , borderRadius:"5px"}}>{errors.username}</p>)}
                            <input type="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleOnchange}
                            name="password" placeholder="enter your password" />
                            {touched.password && errors.password && (<p style={{color:"red", backgroundColor:"white", padding:"5px" , borderRadius:"5px"}}>{errors.password}</p>)}
                            <button type='submit' disabled={submitted}>Log In</button>
                        </form>
                        <Link to="/register">I don't have an email</Link>
                    </div>
                </div>
            </section>
        </Animation>
    )
}

export default Login;