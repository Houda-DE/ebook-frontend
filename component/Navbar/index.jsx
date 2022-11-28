import { IconContext } from "react-icons"
import {FiSearch} from "react-icons/fi"
import {AiOutlineUser} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import styles from './style.module.css'

const navbar = () => {
    return(
        <div className={styles.container}>
            <IconContext.Provider value={{style : {fontSize : '25px' , color : '#86c232'}}}>
                <div className={styles.text}>
                    MyEbook
                </div>
                <div className={styles.notification}>
                <button className={styles.button}>
                        <FiSearch/>
                    </button>
                    <button>
                        <BiBell/>
                    </button>
                    <button>
                        <AiOutlineUser/>
                    </button>
                </div>
            </IconContext.Provider>
        </div>
    )
}
export default navbar