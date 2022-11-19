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
            title : 'livre22222222',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livrehjdjdiiid',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livre 6555zz',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
    ]

    const readingList = [
        {
            title : 'livrehjruurue',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livreuefuufu',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livrejuefujeJBll',
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

    const myBooks = [
        {
            title : 'livrede ch pas',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livre coucou',
            author : [
                {
                    name : 'author1'
                },
            ],
            image : 'bookr.webp',
            price : 50
        },
        {
            title : 'livre 123',
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

    const authors = [
        {
            img : "men.jpg",
            name : "Kateb Yassine"
        },
        {
            img : "men.jpg",
            name : "Ahlem moustaghanmi"
        },
        {
            img : "women.jpg",
            name : "Moloud Feraoun"
        },
        {
            img : "men.jpg",
            name : "Victor Hugo"
        },
        {
            img : "men.jpg",
            name : "Bouteflika"
        },
    ]

    const categories = [
        {
            name : 'Category1'
        },
        {
            name : 'Category2'
        },
        {
            name : 'Category3'
        },
        {
            name : 'Category4'
        },
        {
            name : 'Category5'
        },
        {
            name : 'Category4'
        },
        {
            name : 'Category5'
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
                <div className={styles.booksCardContainer}>
                    <Card color='#86c232' title='My reading list'>
                        <div>
                            {
                                readingList.length === 0 ? <div>You don't have a reading list yet</div> :  readingList.map((element , index) => {
                                    return(
                                        index < 3 ? 
                                        <div className={styles.bookCardContainer}>
                                            <img className={styles.cardImg} src={element.image}/>
                                            <div>{element.title}</div>
                                            <div>
                                                {
                                                    element.author.map((el , i) => {
                                                        return(
                                                           element.author.length === 1 ? el.name : i === 0 ?  `${el.name}...`:""
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        : ""
                                    )
                                })
                            }
                        </div>
                    </Card>
                    <Card color='#86c232' title='My books'>
                        <div>
                            {
                                myBooks.length === 0 ? <div>You don't have a reading list yet</div> :  myBooks.map((element , index) => {
                                    return(
                                        index < 3 ? 
                                        <div className={styles.bookCardContainer}>
                                            <img className={styles.cardImg} src={element.image}/>
                                            <div>{element.title}</div>
                                            <div>
                                                {
                                                    element.author.map((el , i) => {
                                                        return(
                                                           element.author.length === 1 ? el.name : i === 0 ?  `${el.name}...`:""
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        : ""
                                    )
                                })
                            }
                        </div>
                    </Card>
                </div>
            </div>
            <div className={styles.categorieauthorCardsContainer}>
                <Card color='#86c232' title='Authors'>
                    <div>
                        {
                            authors.map((element , index) => {
                                return(
                                    <ul>
                                        <li>
                                            {element.name}
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </Card>
                <Card color='#86c232' title='Categories'>
                    <div>
                        {
                            categories.map((element , index) => {
                                return(
                                    index < 5 ? 
                                        <ul>
                                            <li>{element.name}</li>
                                        </ul>
                                    :"" 
                                )
                            })
                        }
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default Welcome