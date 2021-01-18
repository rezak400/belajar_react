import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { NavBar, Footer } from '../../components'
import "./main.scss"

const Main = ({exact, path, location, onLogin, isLogin, component: Component}) => {
    console.log(isLogin)
    console.log(onLogin)
    let udah_login =  <Route exact={exact} path={path} render={(props) => (
    <div className="main">      
    <NavBar />
    <Component {...props}/>
    <Footer />
  </div>

   )}>
 </Route>

    let main =  isLogin ? udah_login : <Redirect to="/login"/> ;
   
    return (
     <div>
       {main}
     </div>
        
    )
}

export default Main
