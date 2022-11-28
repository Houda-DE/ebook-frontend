import styles from './styles.module.css'

const form = ({title , inputs , option , submitButton ,onClickFunc , onSubmitFunc}) => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <form onSubmit={onSubmitFunc} className={styles.form}>
                <div className={styles.inputsContainer}>
                    {
                        inputs.map((element , index) => {
                            return(
                                <div className={styles.element}>
                                    <div>{element.placeholder}:</div>
                                    <input 
                                        className={styles.input}
                                        id = {element.id}
                                        placeholder={`${element.placeholder}...`}
                                        ref = {element.ref}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                
                <button onClick = {onClickFunc}>{option}</button>
                <button className={styles.submitButton} type="submit">{submitButton}</button>
            </form>
        </div>
    )
}
export default form