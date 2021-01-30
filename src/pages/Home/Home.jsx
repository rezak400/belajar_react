import React, { useEffect, useState } from 'react'
import { CardMUI, Gap } from '../../components'
import { useHistory } from "react-router-dom"
import axios from "axios"
import { CircularProgress } from '@material-ui/core'

const Home = (props) => {

    let urlLocal = "http://192.168.0.17:4000"
    let urlServer = "https://mern-blog-reza.herokuapp.com"
    const urlAPI = `https://mern-blog-reza.herokuapp.com`
    

    //! LETS FUCKING DOO FETCHHH, FINALYY
    const [isLoading, setLoading ] = useState(false)
    let [dataBlog,setDataBlog] = useState([])
    useEffect(() => {  //? pelajari useEffect
        setLoading(true)
        axios.get(`${urlServer}/v1/blog`)
        .then(res => {
            const resApi = res.data
            //! ambil lagi didalemnya yaitu data
            setDataBlog(resApi.data)
            setLoading(false)
        })
        .catch( err => console.log({err}))
    }, []) //? dikosongin bisar gk ngefetch trs

    const history = useHistory();

    //! Untuk data dummy
    let array_card = []
    for (var i = 0; i < 6; i++) {
        array_card.push(<CardMUI key={i} onClick={() => history.push("/detail-blog")}/>);
    }

    //! Click card
    let handleClick = () => {
        history.push("/detail-blog")
    }

    let display;
    if(isLoading == true){
        display = (
            <div className="flex items-center justify-center pt-44">
                <CircularProgress size={80} /> 
            </div>
        )
    }else{ 
        display = (
            <div className="">
                {dataBlog.map(blog => {
                return <CardMUI 
                        title={blog.title}  
                        onClick={handleClick} 
                        image={`${urlServer}/${blog.image}`} 
                        content={blog.content}
                        _id={blog._id}
                        />
                 })} 
            </div>
        )
    }
    
    return (
        <div className=" bg-indigo-600 ">
            <div className="container align-center min-h-screen py-2">
                {display}
            </div>
        </div>
    )
}

export default Home
