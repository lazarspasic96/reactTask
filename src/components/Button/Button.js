import React from 'react'


const Button = (props) => {

    return <button onClick = {props.clicked}>
        {props.children}
    </button>
}

export default Button