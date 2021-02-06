import React, { useEffect, useState } from 'react'
import { LoginBg } from "../../assets"
import { withRouter, useHistory } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link, Upload, TextArea, Input, Button, Gap } from '../../components'
import { Modal } from '@material-ui/core';


const DetailBlog = (props) => {
    const history = useHistory()
    const { id } = props.match.params


    //! ambil url api dari store
    const { URL_API } = useSelector(state => state.GlobalReducer)
    console.log(`LIAT API`, URL_API)

    //! buka tutup modal
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");
    console.log(`liat password`, password)

    const [data, setData] = useState({})
    const { title, content, author, image, createdAt } = data
    useEffect(() => {
        console.log(`liat id param`, id)
        axios.get(`${URL_API}/v1/blog/${id}`)
            .then(res => {
                console.log(`data API`, res)
                setData(res.data.data)
            })
            .catch(err => {
                alert(err)
                console.log(err)
            })
    }, [])

    //! buka tutup modal
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        if (password == "rezagantengbanget") {
            history.push(`/edit-blog/rahasiakitabersama/${id}`)
        } else {
            alert(`password salah`)
        }
    }



    //! Isi Modal
    const modal_content = (
        <div className="absolute bg-indigo-700 w-64 md:w-96 top-20 left-0 right-0 m-auto p-10 text-white text-sm md:text-lg font-secondary">
            <p className="text-center">Masukkan Password Admin</p>
            <Input onChange={e => setPassword(e.target.value)} placeholder="Password" className="font-medium input  p-3 w-full rounded text-black text-sm mt-3" type="password" />
            <div className="flex justify-evenly mt-4 text-xs md:text-base">
                <button onClick={handleSubmit} className="py-2 px-6 bg-green-400 rounded text-white">SUBMIT</button>
                <button onClick={handleClose} className="py-2 px-6 bg-red-400 rounded text-white">NO</button>
            </div>
        </div>
    );

    if (data.author) {
        return (
            <div class="body-font bg-white text-black">
                <div class=" pb-10 px-0 lg:py-10 mx-auto flex flex-col ">
                    <div class="w-full lg:w-5/6 mx-auto">
                        {/* //! Image */}
                        <div class="h-64  bg-gray-300">
                            <img alt="gambar" class="object-cover object-center h-full w-full" src={`${URL_API}/${image}`} />
                        </div>

                        {/* //! Content */}
                        <div class="flex flex-col sm:flex-row mt-10 px-6 sm:px-8 md:px-0">

                            {/* //! Left  */}
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 ">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4  text-base">{author.name}</h2>
                                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p class="text-sm">{createdAt}</p>
                                </div>
                            </div>

                            {/* //! right */}
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
                                <h1 className="text-2xl mb-5 font-bold">{title}</h1>
                                <p class="leading-relaxed text-lg mb-4 whitespace-pre-line">
                                    {content}
                                </p>
                                <Button title="Edit" className="button mt-10" onClick={() => handleOpen()} />
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

                    </div>
                </div>
            </div>
        )
    } return (
        <div className="min-h-screen flex justify-center pt-44">
            <CircularProgress size={80} />
        </div>
    )
}

//! pake withRouter biar bisa ngambil id dari url param, react-router-dom
export default withRouter(DetailBlog)
