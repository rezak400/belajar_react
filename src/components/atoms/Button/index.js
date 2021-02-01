import React from 'react'
import "./button.scss"

const Button = ({ title, ...rest}) => {
    return (
        <div>
            <button  {...rest} >{title}</button>
        </div>
    )
}

export default Button
