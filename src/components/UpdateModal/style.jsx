import styled,{keyframes} from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 200px;
  right: 200px;
  z-index: 5;
  border-radius: 10px;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2{
     margin-bottom: 30px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ImageHolder = styled.img`
  border-radius: 10px;
  width: 200x;
  height: 300px;
  object-fit: fill;
  box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.4)  
`;

export const UpdateDiv = styled.div`
  flex: 3;
  padding: 0px 50px;
  div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      span{
          font-size: 18px;
          font-weight: bold;
      }
  }
`;

export const Input = styled.input`
    width: 350px;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid rgba(0,128,0, 0.7);

    :focus{
        outline: none;
    }
`;

export const InputBox = styled.textarea`
    padding: 5px;
    border-radius: 5px;
    border: 2px solid rgba(0,128,0, 0.7);
    resize: none;

    :focus{
        outline: none;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px 0px;

    button{
        margin-top: 15px;
        font-weight: bold;
        background-color: #008000;
        color: white;
        font-size: 16px;
        padding: 16px 30px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
    }
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;
