import { useRef, useState } from "react"

const authentication = () => {

    const inputRef = useRef()
    const [authState , setAuthState] = useState('signup')

    return(
        <div>
            {
                authState === 'signup' ? 
                    ''
                :   {

                    }
            }
        </div>
    )
}
export default authentication