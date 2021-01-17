import React from 'react'
import { Link } from '../../components'
import { useHistory } from "react-router-dom"


const CreateBlog = (props) => {
    console.log(props)
    const history = useHistory();
    return (
        <div>
            <h1>helo dari CreateBlog</h1>
            <Link title="ke detail" onClick={() => history.push("/detail-blog")}/>
        </div>
    )
}

export default CreateBlog
