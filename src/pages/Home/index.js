import React from 'react'
import { CardMUI, Gap } from '../../components'
import { useHistory } from "react-router-dom"

const Home = (props) => {
  const history = useHistory();

    console.log(localStorage.getItem("isLogin"))
    let array_card = []
    for (var i = 0; i < 6; i++) {
        array_card.push(<CardMUI key={i} onClick={() => history.push("/detail-blog")}/>);
    }
    return (
        <div className=" bg-indigo-600">
            <div className="container align-center">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-10 px-16">
                {array_card}
                </div>
            </div>
        </div>
    )
}

export default Home
