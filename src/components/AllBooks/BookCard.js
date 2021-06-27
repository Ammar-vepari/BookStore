import React from 'react';
import './BookCard.css'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { IsSellerContext } from '../../App';
import { useContext } from 'react';

const BookCard = ( {bookImage,bookname,author,genres,desc,rating,price}) => {

    const IsSeller=useContext(IsSellerContext);

    const isSellerFn=()=>{
        if(IsSeller){
            return( <div style={{"float":"right"}}>
                <EditIcon style={{"cursor":"pointer"}}/>
                <DeleteIcon style={{"cursor":"pointer"}}/>
            </div>)
        }
    }
        console.log("is seller:",IsSeller)


    return (
        <div className='card'>
            <div className='bookCard'>
                <img className='bookCard__thumbnail' src={bookImage} alt=''/>
                <div className='bookCard__text'>
                    
                    {isSellerFn()}
                    
                    <h3>{bookname}</h3>
                    
                    <h4>By {author}</h4>
                    
                    <p style={{display:"flex" ,alignItems:'center'}} >
                          <h4 style={{color:"darkred"}}>Genres :</h4>
                          <h4 style={{color:"#e7717d"}}>{genres.map(value => value+" ")}</h4>
                    </p>
                    <p>{desc}</p>
                    
                    {/* {rating[4] && 'hi'} */}
                    {/* {`fa fa-star ${rating[0] && "checked"  }`} */}
                    <div className='bookCard__rating'>
                        <h4>Rating</h4>
                        <span className={`fa fa-star ${rating[0] && 'checked'}`}></span>
                        <span className={`fa fa-star ${rating[1] && 'checked'}`}></span>
                        <span className={`fa fa-star ${rating[2] && 'checked'}`}></span>
                        <span className={`fa fa-star ${rating[3] && 'checked'}`}></span>
                        <span className={`fa fa-star ${ rating[4] && 'checked'}`}></span>
                    </div>
                </div>
                
            
            </div>
            <button> Price Rs {price} Buy Now</button>

        </div>
        
    )
}

export default BookCard;
