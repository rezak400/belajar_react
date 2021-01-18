import React from 'react'
import { Route } from "react-router-dom"
import { NavBar, Footer } from '../../components'
import "./main.scss"

const Main = ({exact, path, location,component: Component}) => {
    return (
        <Route exact={exact} path={path} render={(props) => (
            <div className="main">      
              <NavBar />
              <Component {...props}/>
              <Footer />
            </div>
          )}/>
    )
}

export default Main
