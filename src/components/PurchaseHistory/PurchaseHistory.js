import React,{useState,useContext} from 'react'
import classes from './PurchaseHistory.module.css'
import AllBooks from '../AllBooks/AllBooks'
import { AuthContext } from '../context/Auth-Context'

import Record from '../Record/Record'


const PurchaseHistory=()=>{

    
    const {isLogedin}=useContext(AuthContext);
    

    const modal=
            <div className={classes.content}>
               <div className={classes.records}>
                    <Record header={true}/>
                    <Record />
                    <Record />
                    <Record />
                    <Record />

                    <Record />
                    <Record />
                    <Record />
                    <Record />
                    <Record />
                   
                    
                </div>
            </div>
 

                

            

    return {isLogedin}?(modal):null;
}


export default PurchaseHistory