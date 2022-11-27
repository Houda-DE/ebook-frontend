import { useState } from "react"
import Authentication from "../component/Authentication"

const test = () => {

    const [open , setOpen] = useState(true)

    return(
        <div>
            <Authentication open={open} setOpen={setOpen}/>
        </div>
    )
}
export default test