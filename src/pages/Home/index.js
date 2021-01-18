import React from 'react'
import { CardMUI, Gap } from '../../components'

const Home = () => {
    let array_card = []
    for (var i = 0; i < 6; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        array_card.push(<CardMUI key={i} />);
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
