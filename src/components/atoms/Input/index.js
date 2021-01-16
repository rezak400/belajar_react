import React from 'react'

const Input = ({label,...rest}) => {
    return (
        <div>
            <p className="label">{label}</p>
            <input className="input" type="text" placeholder="form input" {...rest}/>
        </div>
    )
}

export default Input
