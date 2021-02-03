import React, { useState, useEffect } from 'react'
import { Link, Upload, TextArea, Input, Button, Gap } from '../../components'
import { useHistory, Redirect } from "react-router-dom"
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Modal } from '@material-ui/core';



const EditBlog = (props) => {
    const { id } = props.match.params
    console.log(`liat id params`, id)

    const history = useHistory() 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);    
    const [isLoading, setLoading] = useState(false)

    //! ambil query dari id blog
    const [ data, setData ] = useState({})

    //! ambil url api dari store
    const {URL_API} = useSelector(state => state.GlobalReducer)
    console.log(`LIAT API`, URL_API)
    
    //! isi value input
    useEffect(()=>{
        setLoading(true)
        console.log(`liat id param`, id)
        axios.get(`${URL_API}/v1/blog/${id}`)
        .then( res => {
            setLoading(false)
            console.log(`data API`, res.data.data)
            setData(res.data.data)
            setTitle(res.data.data.title)
            setContent(res.data.data.content)
        })
        .catch(err => {
            setLoading(false)
            alert(err)
            console.log(err)
        })
    },[])

    const onSubmit = () => {
        //! tutup modal ketika pencet YES
        setOpen(false)
        setLoading(true)
        //! logic post API
        console.log({title,content,image})
        const data = new FormData()
        data.append("title",title)
        data.append("content",content)
        data.append("image", image)

        console.log(`data yg dikirim`, data)
        //! inget PUT     
        axios.put(`${URL_API}/v1/blog/put/${id}`,data,{
            headers : {
                "content-type" : "multipart/form-data"
            }
        }).then( res => {
            console.log(`kalo sukses muncul ini`, res)
            setLoading(false)
            history.push(`/detail-blog/${res.data.data._id}`)
        }).catch(err => {
            setLoading(false)
            alert(
            `
            Jangan lupa isi semua inputnya ya
            Judul, isi, gambar harus diisi dengan serius

            ${err}`)
            console.log(`kalo error muncul ini`, err.message)
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
    const handleOpenDelete = () => {
        setOpenDelete(true);
      };
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    //! delete method
    const handleDelete = () => {
        setLoading(true)
        axios.delete(`${URL_API}/v1/blog/delete/${id}`)
        .then(res =>{
            setLoading(false)
            alert(`delete berhasil`, res)
            history.push(`/`)
        })
        .catch(err => {
            setLoading(false)
            alert(err)
        })
    }

    //! Isi Modal
    const modal_content = (
        <div className="absolute bg-indigo-700 w-64 md:w-96 top-20 left-0 right-0 m-auto p-10 text-white text-sm md:text-lg font-secondary">
           <p className="text-center">Anda sudah yakin? <span className="block">Kali aja ada yang salah..</span></p>
           <div className="flex justify-evenly mt-4 text-xs md:text-base">
               <button  onClick={onSubmit} className="py-2 px-6 bg-green-400 rounded text-white">YES</button>
               <button onClick={handleClose} className="py-2 px-6 bg-red-400 rounded text-white">NO</button>
           </div>
        </div>
    );

    //! Isi Modal Delete
    const modal_delete = (
        <div className="absolute bg-indigo-700 w-64 md:w-96 top-20 left-0 right-0 m-auto p-10 text-white text-sm md:text-lg font-secondary">
           <p className="text-center">Yakin dihapus? <span className="block">Kali aja salah..</span></p>
           <div className="flex justify-evenly mt-4 text-xs md:text-base">
               <button onClick={handleDelete} className="py-2 px-6 bg-green-400 rounded text-white">YES</button>
               <button onClick={handleCloseDelete} className="py-2 px-6 bg-red-400 rounded text-white">NO</button>
           </div>
        </div>
    );

    //! Isi Loading 
    const loading_content = (
        <div className="absolute bg-indigo-700 w-64 md:w-96 top-20 left-0 right-0 m-auto p-10 text-white text-sm md:text-lg font-secondary">
            <p className="text-center">Lagi Loading <span className="block">Sabar.......</span></p>
        </div>
    );

        if(true){
            return (
                <div className="bg-indigo-600 min-h-screen py-10 md:px-16 px-5 font-secondary font-bold">
                   <div className="container">
                    <h1 className="font-medium text-2xl mb-2  text-white py-3 w-60 font-primary">Edit Blog</h1>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Blog Title..." className="font-medium input text-xl p-3 w-full rounded"/>
                    <Gap height={20} />
                    {/* //! menangani event file agak berbeda */ }
                    <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} /> 
                    <Gap height={20} />
                    <TextArea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Pada suatu hari..." className="w-full p-3 rounded font-medium whitespace-pre-line" />
                    <Gap height={20} />
    
                    <Button className="font-bold button" title="SAVE" onClick={handleOpen}/>
                    <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {modal_content}
                    </Modal>

                    <Gap height={20} />

                    <Button className="font-bold button" title="DELETE" style={{ backgroundColor : "red" }} onClick={handleOpenDelete} />
                    <Modal
                            open={openDelete}
                            onClose={handleCloseDelete}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {modal_delete}
                    </Modal>

                    {/* //! Modal loading  */}
                    <Modal
                            open={isLoading}
                            onClose={isLoading}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {loading_content}
                    </Modal>
                   </div>
                </div>
            )
        }
    
}

export default EditBlog
