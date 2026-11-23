import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import Animation from "../../components/animation"
function Register({haveEmail}) {
    const navigation = useNavigate()
    const [values , setValues] = useState({username:"", email:"", password:"", confirm:""})
    const [touched , setTouched] = useState({});
    const [submitted , setSubmitted] = useState(false)

    const handleOnchange = (e)=> {
        const {name , value} = e.target;
        setValues((prev)=> ({...prev , [name]: value}))
    }
    const validate = (values)=> {
        const errors = {};

        if (!values.username?.trim()) {
            errors.username = "Name is required";
        }
        if (!values.email.trim()) {
            errors.email = "Email is required"
        }else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Enter a valid email"
        }
        if (values.password.length < 8) {
            errors.password = "At least 8 characters";
        }
        if (values.confirm !== values.password) {
            errors.confirm = "password do not match"
        }
        return errors;
    }

    const errors = validate(values);
    const isValid = Object.keys(errors).length === 0;
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        setTouched({
            username: true,
            email: true,
            password: true,
            confirm: true
        })
        if (isValid) {
            console.log("Send to API:", values);
            setSubmitted(true)
            localStorage.setItem("username" , values.username)
            localStorage.setItem("email" , values.email)
            localStorage.setItem("password" , values.password)
            haveEmail?.(values.email)
            setValues({
                username:"",
                email:"",
                password:"",
                confirm:""
            })
            setTouched({
                username: false,
                email: false,
                password: false,
                confirm: false
            })
            setTimeout(() => {
                navigation("/login")
            }, 200);
        }
    }
    const handleBlur = (e)=> {
        const {name} = e.target;
        setTouched((prev)=> ({...prev , [name]: true}))
    }

    return (
        <Animation>
            <section className="register">
                <div className="container">
                    <div className="register-form">
                        <h2>Register User</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" 
                            value={values.username} 
                            onChange={handleOnchange}
                            onBlur={handleBlur}  
                            name="username" placeholder="enter your username" />
                            {touched.username && errors.username && (<p style={{color:"red", backgroundColor:"white", padding:"5px"}}>{errors.username}</p>)}
                            <input type="email"
                            value={values.email}
                            onChange={handleOnchange}
                            onBlur={handleBlur}
                            name="email" placeholder="enter your email" />
                            {touched.email && errors.email && (<p style={{color:"red", backgroundColor:"white", padding:"5px"}}>{errors.email}</p>)}
                            <input type="password"
                            value={values.password}
                            onChange={handleOnchange}
                            name="password" placeholder="enter your password" />
                            {touched.password && errors.password && (<p style={{color:"red", backgroundColor:"white", padding:"5px" , borderRadius:"5px"}}>{errors.password}</p>)}
                            <input type="password"
                            value={values.confirm}
                            onChange={handleOnchange}
                            onBlur={handleBlur}
                            name="confirm" placeholder="confirm your password" />
                            {touched.confirm && errors.confirm && (<p style={{color:"red", backgroundColor:"white", padding:"5px" , borderRadius:"5px"}}>{errors.confirm}</p>)}
                            <button type="submit" disabled={submitted}>Sign Up</button>
                        </form>
                        <Link to="/login">I already have an email</Link>
                    </div>
                </div>
            </section>
        </Animation>
    )
}

export default Register;