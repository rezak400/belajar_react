import React from 'react'
import { LoginBg } from '../../../assets'


const Upload = ({...rest}) => {
    return (
        <div>
            <img className="h-24"src={LoginBg} alt="masukkan gambar"/>
            <input className="mt-2" type="file" {...rest}/>
        </div>
    )
}

export default Upload
