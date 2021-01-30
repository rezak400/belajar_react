import React from 'react'
import { Link, Upload, TextArea, Input, Button, Gap } from '../../components'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';



const CreateBlog = (props) => {
    
    return (
        <div className="bg-indigo-600 min-h-screen py-10 px-16">
           <div className="container">
            <h1 className="font-bold text-2xl mb-2  text-white  p-2 w-60 ">Create new Blog</h1>
            <Input placeholder="Blog Title..."/>
            <Gap height={20} />
            <Upload /> 
            <Gap height={20} />
            <TextArea placeholder="Saya seorang pelaut..."/>
            <Gap height={20} />
            <Button title="Save"/>
           </div>       
        </div>
    )
}

export default CreateBlog
