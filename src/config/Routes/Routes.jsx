import React,  { useState }from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Login, Register, Main, CreateBlog, Home, DetailBlog } from "../../pages"

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Main exact path="/" component={Home} />
                <Main path="/create-blog" component={CreateBlog} />
                <Main path="/detail-blog/:id" component={DetailBlog} />
                {/* <Route path="/login">
                    <Login  />
                </Route> */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register}/>
            </Switch>
        </Router>
    )
}

export default Routes

