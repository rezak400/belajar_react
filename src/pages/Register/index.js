import React from 'react'
import "./register.scss"
import { RegisterBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'
import { useHistory } from "react-router-dom"
 
const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
           <div className="left">
                <img src={RegisterBg} alt="gambar_bg" className="bg-image"/>
           </div>
           <div className="right">
               <p className="title">Register</p>
               <Gap height={12}/>
               <Input label="Full Name" placeholder="Full Name" />
               <Gap height={20}/>
               <Input label="Email" placeholder="Email" />
               <Gap height={20}/>
               <Input label="Password" placeholder="Password" />
               <Gap height={20}/>
               <Button title="Register" />
               <Gap height={100}/>
               <Link title="Kembali ke Login" onClick={() => history.push("/login")}/>

           </div>
        </div>
    )
}

export default Register
