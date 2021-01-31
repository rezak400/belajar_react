import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { NavBar, Footer } from '../../components'
import "./main.scss"

const Main = ({exact, path, location, onLogin, isLogin, component: Component}) => {
    console.log(isLogin)
    console.log(onLogin)
    let main =  (
    <Route exact={exact} path={path} render={(props) => (
          <div className="main">      
            <NavBar onLogin={onLogin} />
              <Component {...props}/>
            <Footer />
          </div>
    )}>
    </Route>
 )
    return (
     <div>
       {main}
     </div>
    )
}

export default Main
