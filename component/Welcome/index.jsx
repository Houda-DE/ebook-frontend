import styles from './styles.module.css'
import Book from '../Book'
import Card from '../Card'

const Welcome = () => {

    const books = [
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
                {
                    name : 'author2'
                },
            ],
            image : 'bookp.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookq.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
                {
                    name : 'author2'
                },
            ],
            image : 'bookp.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookq.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
                {
                    name : 'author2'
                },
            ],
            image : 'bookp.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookq.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livre',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
    ]

    return(
        <div className={styles.container}>
            <div className={styles.booksContainer}>
                <div className={styles.popularBooksContainer}>
                    <div className={styles.textContainer}>
                        <div>Popular Books</div>
                        <button className={styles.button}>See more</button>
                    </div>
                    <div className={styles.popularBooks}>
                        {
                            books.map((element , index) => {
                                return(
                                    index < 10 ?
                                        <div>
                                            <Book key={index} title={element.title} author={element.author.map((el , i) => {
                                                return(
                                                    element.author.length === 1 ? el.name : i === 0 ? `${el.name}...` : ''
                                                )
                                            })} image={element.image} />
                                        </div>
                                    : ""
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.bookCardContainer}>
                    <Card color='#A4FAF5' title='My reading list'></Card>
                    <Card color='#CAFAA4' title='My books'></Card>
                </div>
            </div>
            <div>
                <Card color='#FAE2A4' title='Authors'></Card>
                <Card color='#FAA4EC' title='Categories'></Card>
            </div>
        </div>
    )
}
export default Welcome