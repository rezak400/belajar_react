import React, { useEffect, useState } from 'react'
import {LoginBg} from "../../assets"
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'

const DetailBlog = (props) => {
    let urlLocal = "http://192.168.0.17:4000"
    let urlServer = "https://mern-blog-reza.herokuapp.com"
    const urlAPI = `https://mern-blog-reza.herokuapp.com`

    const [ data, setData ] = useState({})
    const { title, content, author, image, createdAt } = data
    useEffect(()=>{
        const {id} = props.match.params
        axios.get(`${urlServer}/v1/blog/${id}`)
        .then( res => {
            console.log(`data API`, res )
            setData(res.data.data)
        })
        .catch(err => console.log(err))
    },[])
    if(data.author){
        return (
            <div class="body-font bg-white text-black">
                <div class=" pb-10 sm:px-0 lg:py-10 mx-auto flex flex-col ">
                    <div class="lg:w-5/6 mx-auto">
                        <div class="h-64 overflow-hidden">
                        <img alt="content" class="object-cover object-center h-full w-full" src={`${urlServer}/${image}`} />
                    </div>
    
                    <div class="flex flex-col sm:flex-row mt-10 px-10 sm:px-8 md:px-0">
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
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left">
                        <h1 className="text-2xl mb-5 font-bold">{title}</h1>
                        <p class="leading-relaxed text-lg mb-4">
                            {content}
                        </p>
                        <a class="text-indigo-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
        )
    }return(
        <div className="min-h-screen flex justify-center pt-44">
             <CircularProgress size={80} /> 
        </div>
    )
}

export default withRouter(DetailBlog)
