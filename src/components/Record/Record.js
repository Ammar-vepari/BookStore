import React from 'react'
import classes from './Record.module.css'

const Record=({header})=>{
    const element=
        <div className={classes.record}>
            <div className={classes.title}>Harry Potter and the Philosopher's Stone</div>
            <div className="genre">Adventure Fantasy</div>
            <div className="date">12 jan 2020</div>
            <div className="price">500$</div>
        </div>

    const head=
    <div className={classes.header}>
        <p className={classes.title}>Title</p>
        <p className="genre">Genre</p>
        <p className="date">Date</p>
        <p className="price">Price</p>
    </div>

    return header?head:element
        


}

export default Record;