import React, { useEffect, useState } from 'react'
import { CardMUI, Gap } from '../../components'
import { useHistory } from "react-router-dom"
import axios from "axios"
import { CircularProgress } from '@material-ui/core'

const Home = (props) => {
    //! LETS FUCKING DOO FETCHHH, FINALYY
    const [isLoading, setLoading ] = useState(false)
    let [dataBlog,setDataBlog] = useState([])
    useEffect(() => {  //? pelajari useEffect
        setLoading(true)
        axios.get("https://mern-blog-reza.herokuapp.com/v1/blog")
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
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-10 px-16">
                {dataBlog.map(blog => {
                return <CardMUI title={blog.title}  onClick={handleClick} image={`https://mern-blog-reza.herokuapp.com/${blog.image}`} content={blog.content}/>
                 })}
            </div>
        )
    }
    
    return (
        <div className=" bg-indigo-600 ">
            <div className="container align-center min-h-screen">
                {display}
            </div>
        </div>
    )
}

export default Home
