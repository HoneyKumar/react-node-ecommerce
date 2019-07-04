import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js';
import App from './components/App.js';
import Register from './components/Register.js'
ReactDom.render(
    <Router>
        <div>
            <ul>
                <Link to="/home" >Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </ul>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={App} />
        </div>
    </Router>
       ,
    document.querySelector('#root')
);