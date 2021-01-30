import React from 'react'
import { LoginBg } from '../../../assets'


const Upload = ({img, ...rest}) => {
    return (
        <div>
            {img && <img className="h-44"src={img} alt="masukkan gambar"/>}
            <input className="mt-2" type="file" {...rest}/>
        </div>
    )
}

export default Upload
