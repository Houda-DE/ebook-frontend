import styles from './styles.module.css'

const card = ({title , color , children}) => {
    return(
        <div style={{backgroundColor : color}} className={styles.container}>
            <div className={styles.titleButtonContainer}>
                <div className={styles.title}>{title}</div>
                <button className={styles.button}>See more</button>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
export default card