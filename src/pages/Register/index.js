import React from 'react'
import "./register.scss"
import { RegisterBg } from '../../assets'
import { Input } from '../../components'
 
const Register = () => {
    return (
        <div className="main-page">
           <div className="left">
                <img src={RegisterBg} alt="gambar_bg" className="bg-image"/>
           </div>
           <div className="right">
               <p className="title">Register</p>
               <Input label="Full Name" placeholder="Full Name" />
               <Input label="Email" placeholder="Email" />
               <Input label="Password" placeholder="Password" />

           </div>
        </div>
    )
}

export default Register
