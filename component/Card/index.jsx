import styles from './styles.module.css'

const card = ({title , color , children}) => {
    return(
        <div style={{backgroundColor : color}} className={styles.container}>
<<<<<<< HEAD
            <div className='
            '>
                <div>{title}</div>
                <button>See more</button>
=======
            <div className={styles.titleButtonContainer}>
                <div className={styles.title}>{title}</div>
                <button className={styles.button}>See more</button>
>>>>>>> 6fd702d018d5d3e4ddf995834cfa94d5954f84a7
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
export default card