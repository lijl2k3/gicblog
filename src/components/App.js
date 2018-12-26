import React from 'react';

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import User from './User';
import 'bootstrap/dist/css/bootstrap.css/';
export default (

    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header"><div className="navbar-brand">GIC News Blog</div></div>
                    <ul className='nav navbar-nav'>
                        <li> <Link to='/home'>Home</Link></li>
                        <li> <Link to='/blog'>Blog List</Link></li>
                        <li> <Link to='/user'>My Account</Link></li>
                    </ul>
                </div>
            </nav>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12">
                        <Route path='/home' component={Home}/>
                        <Route path='/blog' component={Blog}/>
                        <Route path='/user' component={User}/>
                    </div>
                </div>
            </div>

        </div>
    </Router>
)