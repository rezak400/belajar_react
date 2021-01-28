import React, { useEffect, useState } from 'react'
import { CardMUI, Gap } from '../../components'
import { useHistory } from "react-router-dom"
import axios from "axios"

const Home = (props) => {
    //! LETS FUCKING DOO FETCHHH, FINALYY
    let [dataBlog,setDataBlog] = useState([])
    useEffect(() => {  //? pelajari useEffect
        axios.get("https://mern-blog-reza.herokuapp.com/v1/blog")
        .then(res => {
            const resApi = res.data
            //! ambil lagi didalemnya yaitu data
            setDataBlog(resApi.data)
        })
        .catch( err => console.log({err}))
    }, [])

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
    
    return (
        <div className=" bg-indigo-600">
            <div className="container align-center">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-10 px-16">
                {console.log(`liat data blog di html`,dataBlog)}
                {/* <CardMUI title="Judul" id="1" onClick={handleClick} title="Judul" /> */}
                {dataBlog.map(blog => {
                    return <CardMUI title={blog.title}  onClick={handleClick} image={`https://mern-blog-reza.herokuapp.com/${blog.image}`} />
                })}
                </div>
            </div>
        </div>
    )
}

export default Home
