import React, {useState} from 'react';

import BookCard from './BookCard';
import book_image from './hp_book.jpg';
import UpdateModal from '../UpdateModal/updateModal';
import AddBook from '../AddNewBookModal/Modal';

import './AllBooks.css';

const AllBooks = ({Books_obj}) => {
    const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
    const [isAddModalVisible, setAddModalVisible] = useState(false);

    const booksArray = Books_obj.map((obj)=>{
        return(
            <BookCard
                bookImage={book_image}
                bookname={obj.bookname}
                author={obj.author}
                genres={obj.genres}
                desc={obj.desc}
                rating={obj.rating}
                price={obj.price}
                />

        )
    })
    // console.log(Books_obj)

    return (     
            <div className='allBooks'>
                <UpdateModal visible={isUpdateModalVisible} setVisibility={setUpdateModalVisible} book={{name:"The king of drugs",description:"sample description to check", type:["first","second"],author:"mandar",price:2000,availableQuantity:20}} />
                <AddBook visible={isAddModalVisible} setVisibility={setAddModalVisible} />


                {booksArray}
                

                {/* <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[true,true,true,true,false]}
                price={500}
                />

                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                />
                
                <BookCard
                bookImage={book_image}
                bookname="Harry Potter and the Philosopher's Stone "
                author='J.K. Rowling'
                genres={['Adventure','Fantasy']}
                desc='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                rating={[1,1,1,1,0]}
                price={500}
                /> */}
            
            </div>

        


        
        
    )
}

export default AllBooks
