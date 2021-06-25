import React,{useState} from 'react';

import {ModalWrapper, Background,ModalContent,ImageHolder,UpdateDiv,Input, InputBox,ImageContainer,DotWrapper,Dot,CloseModalButton} from './style'

const UpdateModal = ({visible, setVisibility,book}) => {

    const [title,setTitle] = useState(book.name || '');
    const [description, setDescription] = useState(book.description || '')
    const [author, setAuthor] = useState(book.author || '')
    const [price, setPrice] = useState(book.price || 0)
    const [quantity, setQuantity] = useState(book.availableQuantity || 0)

    const [loading,setLoading] = useState(false)

    const submit = () => {
        alert("To implement API call")
        setLoading(true) 
    }

    return (
        <>
            {visible ? 
                <Background>
                    {loading ? 
                        <ModalWrapper>
                            <DotWrapper>
                                <Dot delay="0s" />
                                <Dot delay=".1s" />
                                <Dot delay=".2s" />
                            </DotWrapper>
                        </ModalWrapper>
                        :
                        <ModalWrapper>
                            <h2>Update Data of {book.name}</h2>
                            <ModalContent>
                                <UpdateDiv>
                                    <div>
                                        <span>Title</span>
                                        <Input type="text" name="title" placeholder={title} onChange={(e)=>setTitle(e.target.value)} />
                                    </div>  
                                    <div>
                                        <span>Description</span>
                                        <InputBox type="text" rows="4" cols="42" name="description" placeholder={description} onChange={(e)=>setDescription(e.target.value)} />
                                    </div>  
                                    <div>
                                        <span>Author</span>
                                        <Input type="text" name="author" placeholder={author} onChange={(e)=>setAuthor(e.target.value)} />
                                    </div>
                                    <div>
                                        <span>Price</span>
                                        <Input type="number" step="0.01" name="price" placeholder={price} onChange={(e)=>setPrice(e.target.value)} />
                                    </div>
                                    <div>
                                        <span>Available Quantity</span>
                                        <Input type="number" step="1" name="quantity" placeholder={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                                    </div>                          
                                </UpdateDiv>
                                <ImageContainer>
                                    <ImageHolder src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105" />
                                    <button onClick={submit}>Update</button>
                                </ImageContainer>
                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setVisibility(!visible)}
                            />
                        </ModalWrapper>
                    }
                </Background>
            :null} 
        </>
    );
}

export default UpdateModal;
