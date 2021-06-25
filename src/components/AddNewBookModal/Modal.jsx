import React,{useState} from 'react';

import { Background, ModalWrapper, CloseModalButton, DotWrapper, Dot,ModalContent,UpdateDiv,Input,InputBox,ImageContainer} from '../UpdateModal/style';

const AddNewBookModal = ({visible,setVisibility}) => {
    const [loading,setLoading] = useState(false);

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [author,setAuthor] = useState('');
    const [price,setPrice] = useState(0.0);
    const [type,setType] = useState([]);
    const [quantity,setQuantity] = useState(0);
    const [rating,setRating] = useState(0);
    const [image,setImage] = useState('');
    
    const isValid = () => {
        if(title ===''){
            alert('Enter title');
            return false;
        }
        if(description ===''){
            alert("Enter some description");
            return false;
        }
        if(author ===''){
            alert('Enter author');
            return false;
        }
        if(type.length === 0){
            alert("Enter tags of books");
            return false; 
        }
        if(image === ''){
            alert('Enter image');
            return false;
        }
        return true;
    }

    const submit = () => {
        if(isValid()){
            alert("to be implemented")
            setLoading(true);
        }
    }

    const getBase64 =(file)=> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
    }
    
    const handleType = (e) => {
        const data = e.target.value.split(',').map(item=> item.trim());
        setType(data);
    }

    const imageHandler = (e) => {
        getBase64(e.target.files[0]).then(
            data => setImage(data)
        );
    }

    return (
        <>
            {visible?
                <Background>
                    {loading?
                        <ModalWrapper>
                            <DotWrapper>
                                <Dot delay="0s" />
                                <Dot delay=".1s" />
                                <Dot delay=".2s" />
                            </DotWrapper>
                        </ModalWrapper>
                        :<ModalWrapper>
                            <h2>Add New book in store</h2>
                            <ModalContent>
                                <UpdateDiv>
                                    <div>
                                        <span>Title</span>
                                        <Input type="text" name="title" placeholder="Add Title of the book" onChange={(e)=>setTitle(e.target.value)} />
                                    </div>  
                                    <div>
                                        <span>Description</span>
                                        <InputBox type="text" rows="4" cols="42" name="description" placeholder="Description of what the book is about" onChange={(e)=>setDescription(e.target.value)} />
                                    </div>  
                                    <div>
                                        <span>Author</span>
                                        <Input type="text" name="author" placeholder="Authors name" onChange={(e)=>setAuthor(e.target.value)} />
                                    </div>
                                    <div>
                                        <span>Price</span>
                                        <Input type="number" step="0.01" name="price" placeholder="Amount of book" onChange={(e)=>setPrice(e.target.value)} />
                                    </div>
                                    <div>
                                        <span>Type</span>
                                        <Input type="text" name="type" placeholder="comma separated tags" onChange={(e)=>handleType(e)} />
                                    </div> 
                                    <div>
                                        <span>Quantity</span>
                                        <Input style={{width: '200px'}} type="number" step="1" name="quantity" placeholder="Available quantity" onChange={(e)=>setQuantity(e.target.value)} />
                                        <span>Rating</span>
                                        <input type="range" name="ratings" min="0" max="5" onChange={(e)=>setRating(e.target.value)} />
                                    </div>                     
                                </UpdateDiv>
                                <ImageContainer>
                                    <input type="file" onChange={imageHandler} />
                                    <button onClick={submit}>Submit</button>
                                </ImageContainer>
                            </ModalContent>
                            
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setVisibility(!visible)}
                            />
                        </ModalWrapper>}
                </Background>:
            null}
        </>
    );
}

export default AddNewBookModal;
