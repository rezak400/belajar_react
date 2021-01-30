import React, { useState } from 'react'
import { Link, Upload, TextArea, Input, Button, Gap } from '../../components'
import { useHistory, Redirect } from "react-router-dom"
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import axios from 'axios';



const CreateBlog = (props) => {
    const history = useHistory() 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);


    // console.log({title,content,image})

    let urlLocal = "http://192.168.0.17:4000"
    let urlServer = "https://mern-blog-reza.herokuapp.com"
    const urlAPI = `https://mern-blog-reza.herokuapp.com`

    const onSubmit = () => {
        console.log({title,content,image})

        const data = new FormData()
        data.append("title",title)
        data.append("content",content)
        data.append("image", image)

        console.log(`data Form data`, data)
        
        axios.post(`${urlServer}/v1/blog/post`,data,{
            headers : {
                "content-type" : "multipart/form-data"
            }
        }).then( res => {
            console.log(res)
            history.push(`/detail-blog/${res.data.data._id}`)
        }).catch(err => err)
    }

    const onImageUpload = (e) => {
        //! mengambil file dari event, bukan rutenya
        const file = e.target.files[0]
        setImage(file)

        //! membuat static url sebagai preview dan dikirim ke props
        setImagePreview(URL.createObjectURL(file))
    }

        return (
            <div className="bg-indigo-600 min-h-screen py-10 px-16">
               <div className="container">
                <h1 className="font-bold text-2xl mb-2  text-white  p-2 w-60 ">Create new Blog</h1>
                <Input onChange={(e) => setTitle(e.target.value)} placeholder="Blog Title..."/>
                <Gap height={20} />
                {/* //! menangani event file agak berbeda */ }
                <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} /> 
                <Gap height={20} />
                <TextArea onChange={(e) => setContent(e.target.value)} placeholder="Saya seorang pelaut..."/>
                <Gap height={20} />
                <Button title="Save" onClick={onSubmit}/>
               </div>       
            </div>
        )
    
}

export default CreateBlog
