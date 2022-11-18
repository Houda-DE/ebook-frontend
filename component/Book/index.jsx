import styles from './styles.module.css'

const book = ({title , author , price , image}) => {
    return(
        <div className={styles.container}>
            <img className={styles.image} src={image}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.author}>{author}</div>
        </div>
    )
}
export default book