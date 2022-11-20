import { useRef, useState } from "react"
import React from "react"
import Form from '../Form'
import styles from './styles.module.css'

const authentication = () => {

    const usernameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const cpassRef = useRef()
    const [authState , setAuthState] = useState('signup')

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

    const SignupSubmit = (e) => {
        e.preventDefault()
        console.log({
            username : usernameRef.current.value,
            email : emailRef.current.value,
            password : passRef.current.value,
            passConfirm : cpassRef.current.value
        })
    }

    return(
        <div className = {styles.container}>
            <div>
                <button>Sign up</button>
                <button>Sign in</button>
            </div>
            {
                authState === 'signup' ? 
                   <Form title={'Sign up'} inputs={signupElements} submitButton={'Sign up'} options={[]} onSubmitFunc={SignupSubmit}/>
                :   
                    <div></div> 
            }
        </div>
    )
}
export default authentication