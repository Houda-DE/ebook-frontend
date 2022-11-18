import Link from "next/link"
import {IconContext} from 'react-icons'
import {BsPencilSquare , BsFillBookmarkCheckFill , BsBook , BsFillBookmarkHeartFill , BsListUl} from 'react-icons/bs'
import {TfiViewList} from 'react-icons/tfi'
import {AiFillHome} from 'react-icons/ai'
import styles from './style.module.css'

const sidebar = () => {


    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src='logo.webp'/>
                <label>MyEbook</label>
            </div>
            <div className={styles.pages}>
                <IconContext.Provider value={{style : {fontSize : '25px' , color : '#040924'}}}>
                    <div className={styles.iconContainer}>
                        <AiFillHome/>
                        <label>Home</label>
                    </div>
                    <div className={styles.iconContainer}>
                        <BsFillBookmarkCheckFill/>
                        <label>My Books</label>
                    </div>
                    <div className={styles.iconContainer}>
                        <BsListUl/>
                        <label>Reading list</label>
                    </div>
                    <div className={styles.iconContainer}>
                        <BsFillBookmarkHeartFill/>
                        <label>I like</label>
                    </div>
                    <div className={styles.iconContainer}>
                        <BsBook/>
                        <label>Books</label>
                    </div>
                    <div className={styles.iconContainer}>
                        <TfiViewList/>
                        <label>Categories</label>
                    </div>
                    <div className={styles.iconContainer}>
                        <BsPencilSquare/>
                        <label>Authors</label>
                    </div>
                </IconContext.Provider>
           </div>
        </div>
    )
}
export default sidebar