import React,  { useState }from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Login, Register, Main, CreateBlog, Home, DetailBlog } from "../../pages"




const Routes = (props) => {
    const [login, setlogin] = useState(false);

    //! untuk cek login
    localStorage.setItem('isLogin', "false");

    let handleLogin = () => {
        return setlogin(!false)
    }

    return (
        <Router>
            <Switch>
                <Main exact path="/" component={Home} onLogin={handleLogin} isLogin={login}/>
                <Main path="/create-blog" component={CreateBlog} onLogin={handleLogin}/>
                <Main path="/detail-blog" component={DetailBlog} />
                <Route path="/login">
                    <Login onLogin={handleLogin} isLogin={login}/>
                </Route>
                <Route path="/register" component={Register}/>
            </Switch>
        </Router>
    )
}

export default Routes

