import styles from './styles.module.css'
import Book from '../Book'
import Card from '../Card'
import Authentication from '../Authentication'
import { useState } from 'react'

const Welcome = () => {

    const [open , setOpen] = useState(true)

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

<<<<<<< HEAD
    const readingList = [
        {
            title : 'title',
            author : [
                {name : 'bnadem'},
                {name : 'le3war'},
            ],
            image : 'bookp.webp'
        },
        {
            title : 'title',
            author : [
                {name : 'bnadem'},
                {name : 'le3war'},
            ],
            image : 'bookq.webp'
        },
        {
            title : 'title',
            author : [
                {name : 'bnadem'},
            ],
            image : 'bookr.webp'
        },
        {
            title : 'title',
            author : [
                {name : 'bnadem'},
                {name : 'le3war'},
            ],
            image : 'bookq.webp'
        },
        {
            title : 'title',
            author : [
                {name : 'bnadem'},
            ],
            image : 'bookr.webp'
        }
    ]

=======

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
    

>>>>>>> 6fd702d018d5d3e4ddf995834cfa94d5954f84a7
    return(
        <div className={styles.container}>
            <div className={styles.popularBooksContainer}>
                <div className={styles.textContainer}>
                    <div>Popular Books</div>
                    <button className={styles.button}>See more</button>
                </div>
                <div className={styles.popularBooks}>
                    {
                        books.map((element , index) => {
                            return(
                                index < 15 ?
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
<<<<<<< HEAD
                </div>
                <div className={styles.bookCardContainer}>
                    <Card color='#A4FAF5' title='My reading list'>
                        {
                            readingList.map((element , index) =>{
                                return(
                                    <div className={styles.readingContainer}>
                                        <img src={element.image} className={styles.img} />
                                        <div>{element.title}</div>
                                        <div>{element.author.map((el ,i)=>{
                                            return(
                                                <div>{el.name}</div>
                                            )
                                        })}</div>
                                    </div>
                                )
                            })
                        }
                    </Card>
                    <Card color='#CAFAA4' title='My books'></Card>0.
                </div>
            </div>
            <div>
                <Card color='#FAE2A4' title='Authors'></Card>
                <Card color='#FAA4EC' title='Categories'></Card>
=======
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
>>>>>>> 6fd702d018d5d3e4ddf995834cfa94d5954f84a7
            </div>
            {
                open === true ? <Authentication open={open} setOpen={setOpen}/> : ""
            }
        </div>
    )
}
export default Welcome