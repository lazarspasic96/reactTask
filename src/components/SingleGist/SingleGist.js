
import React from 'react'
import classes from './SingleGist.module.css'

const SingleGist = (props) => {

    const {image, name} = props.data

    

    return <div className = {classes.row}>
        <div className = {classes.profileImg}>
            <img src={image} />
        </div>

        <div className = {classes.name}>
            <p >{name}</p>
        </div>

    </div>
}

export default SingleGist