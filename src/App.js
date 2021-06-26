import {BrowserRouter,Route,Switch} from 'react-router-dom'

import HomePage from './components/mainPage/mainPage'
import Header from './components/Header/header'
import {AuthContext} from './components/context/Auth-Context'

import './App.css'
import { useState } from 'react'
import AllBooks from './components/AllBooks/AllBooks'
import Search from './components/Search/Search'
import PurchaseHistory from './components/PurchaseHistory/PurchaseHistory'

import {books} from './books_input'
import { ContactSupportOutlined } from '@material-ui/icons'

const NotFoundPage=()=>{
  return(
    <div>404</div>
  )
}


const MyBooks=()=>{
  return(
    <div>My Books</div>
  )
}

function App() {

  
  const [Input, setInput] = useState("");
  const [Books_obj, setBooks_obj] = useState(books);


  const onInputChange=(e)=>{

    setInput(e.target.value);  //Note even if we set the value now but it is not instantly updated. After the function execution it is updated 
    const temp_input= e.target.value //so we save it in the temp_input
    // console.log(Input);
    setBooks_obj(
      books.filter(
        obj=>{

          const bookName_bool=(obj.bookname.toLowerCase().includes(temp_input.toLowerCase()));
          const authorName_bool=(obj.author.toLowerCase().includes(temp_input.toLowerCase()));
          
          console.log(obj.bookname.toLowerCase(),"hello",temp_input.toLowerCase(),  ((obj.bookname.toLowerCase().includes(temp_input.toLowerCase()))));
          return (bookName_bool || authorName_bool);
        }
      )

    );



  }


  const[isLogedin,setLogin]=useState(true)

  const Login=()=>{
    setLogin(true)
  }

  const Logout=()=>{
    setLogin(false)
  }


  let route

  if(isLogedin){
    route=(
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route 
        path="/AllBooks" 
        render={(props)=>(
          <AllBooks {...props} Books_obj={Books_obj}/>   //passed the props
        )}
        />
        <Route path ="/MyBooks" component={MyBooks}/>
        <Route path ="/transactions" component={PurchaseHistory}/>
        <Route component={NotFoundPage}/>
    </Switch>
    )
  }
  else{
    route=(
      <Switch>
      <Route path="/" component={HomePage} exact={true}/>
      <Route 
        path="/AllBooks" 
        render={(props)=>(
          <AllBooks {...props} Books_obj={Books_obj}/>   //passed the props
        )}
        />
      <Route component={NotFoundPage}/>
    </Switch>
    )
  }


  return (
    <AuthContext.Provider
      value={{isLogedin:isLogedin , Login:Login , Logout:Logout}}
    >
    <BrowserRouter>
    <div className="wrap-header">
      <Header/>
    </div>
      <Search onInputChange={onInputChange}/>
      {route}
    </BrowserRouter>
    </AuthContext.Provider>
   
  );
}

export default App;
