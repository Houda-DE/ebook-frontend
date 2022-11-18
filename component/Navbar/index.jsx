import { IconContext } from "react-icons"

const navbar = () => {
    return(
        <div>
            <IconContext.Provider>
                <div></div>
                <div>
                    <input
                        placeholder="Search..."
                    />
                </div>
                <div></div>
            </IconContext.Provider>
        </div>
    )
}
export default navbar