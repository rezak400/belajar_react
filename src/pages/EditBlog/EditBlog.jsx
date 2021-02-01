import React, { useState } from 'react'
import { Link, Upload, TextArea, Input, Button, Gap } from '../../components'
import { useHistory, Redirect } from "react-router-dom"
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Modal } from '@material-ui/core';



const CreateBlog = (props) => {
    const history = useHistory() 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [open, setOpen] = useState(false);


    //! ambil url api dari store
    const {URL_API} = useSelector(state => state.GlobalReducer)
    console.log(`LIAT API`, URL_API)
    
    const onSubmit = () => {
        console.log({title,content,image})
        const data = new FormData()
        data.append("title",title)
        data.append("content",content)
        data.append("image", image)

        console.log(`data yg dikirim`, data)     
        axios.post(`${URL_API}/v1/blog/post`,data,{
            headers : {
                "content-type" : "multipart/form-data"
            }
        }).then( res => {
            console.log(`kalo sukses muncul ini`, res)
            history.push(`/detail-blog/${res.data.data._id}`)
        }).catch(err => {
            alert(err)
            console.log(`kalo error muncul ini`, err)
        })
    }

    const onImageUpload = (e) => {
        //! mengambil file dari event, bukan rutenya
        const file = e.target.files[0]
        setImage(file)

        //! membuat static url sebagai preview dan dikirim ke props
        setImagePreview(URL.createObjectURL(file))
    }

    //! buka tutup modal
    const handleOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
    };

    //! Isi Modal
    const modal_content = (
        <div className="absolute bg-indigo-600 w-64 md:w-96 top-20 left-0 right-0 m-auto p-10 text-white text-sm md:text-lg font-primary">
           <p className="text-center">Anda sudah yakin? <span className="block">Kali aja ada yang salah..</span></p>
           <div className="flex justify-evenly mt-4 text-xs md:text-base">
               <button onClick={onSubmit} className="py-2 px-6 bg-green-400 rounded text-white">YES</button>
               <button onClick={handleClose} className="py-2 px-6 bg-red-400 rounded text-white">NO</button>
           </div>

        </div>
    );

        return (
            <div className="bg-indigo-600 min-h-screen py-10 md:px-16 px-5 font-secondary font-bold">
               <div className="container">
                <h1 className="font-medium text-2xl mb-2  text-white  py-3 w-60 font-primary">Edit Blog</h1>
                <Input onChange={(e) => setTitle(e.target.value)} placeholder="Blog Title..." className="font-medium input text-xl p-3 w-full rounded"/>
                <Gap height={20} />
                {/* //! menangani event file agak berbeda */ }
                <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} /> 
                <Gap height={20} />
                <TextArea onChange={(e) => setContent(e.target.value)} placeholder="Pada suatu hari..." className="w-full p-3 rounded font-medium whitespace-pre-line" />
                <Gap height={20} />

                {/* <Button className="font-bold button" title="SAVE" onClick={handleOpen}/> */}
                <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {modal_content}
                </Modal>
               </div>
            </div>
        )
    
}

export default CreateBlog
