import { useEffect, useRef, useState } from "react"
import React from "react"
import Form from '../Form'
import styles from './styles.module.css'

const authentication = ({open  = true, setOpen}) => {

    const usernameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const cpassRef = useRef()
    const clickRef = useRef(0)
    const [authState , setAuthState] = useState(0)
   
    
    const signupElements = [
        {
            id : 'name',
            placeholder : 'User name',
            ref : usernameRef
        },
        {
            id : 'email',
            placeholder : 'Email',
            ref : emailRef
        },
        {
            id : 'pass',
            placeholder : 'Password',
            ref : passRef
        },
        {
            id : 'cpass',
            placeholder : 'Confirm Password',
            ref : cpassRef
        }
    ]

    const signinElements = [
        {
            id : 'name',
            placeholder : 'User name',
            ref : usernameRef
        },
        {
            id : 'pass',
            placeholder : 'Password',
            ref : passRef
        },
    ]

    const SignupSubmit = (e) => {
        e.preventDefault()
        console.log({
            username : usernameRef.current.value,
            email : emailRef.current.value,
            password : passRef.current.value,
            passConfirm : cpassRef.current.value
        })
    }

    const SigninSubmit = (e) => {
        e.preventDefault()
        console.log({
            username : usernameRef.current.value,
            password : passRef.current.value
        })
    }    
    
    const onClick = () => {
        authState === 0 ? setAuthState(1) : setAuthState(0)
    }

    return(
        <div className = {styles.container}>
            <button className={styles.closeButton} onClick={(e) => {setOpen(!open)}}>x</button>
            {
                authState == 0 ? 
                <Form title={'Sign up'} inputs={signupElements} submitButton={'Sign up'} option={'Do you have an account'} onClickFunc={onClick} onSubmitFunc={SignupSubmit}/>
                : 
                <Form title={'Sign in'} inputs={signinElements} submitButton={'Sign in'} option={'Create an account'}  onSubmitFunc={SigninSubmit} onClickFunc={onClick}/>
            }
        </div>
    )
}
export default authentication